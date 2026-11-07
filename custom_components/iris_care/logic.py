"""Lógica pura de agendamento (sem dependências do Home Assistant)."""
from __future__ import annotations

import calendar
from datetime import date, datetime, time, timedelta
from typing import Any

from .messages import days, tr

UNITS = ("days", "weeks", "months", "years")
CLOCK_EVENTS = ("spring", "autumn")


def add_months(d: date, n: int) -> date:
    m = d.month - 1 + n
    y = d.year + m // 12
    m = m % 12 + 1
    return date(y, m, min(d.day, calendar.monthrange(y, m)[1]))


def add_interval(d: date, every: int, unit: str) -> date:
    if unit == "days":
        return d + timedelta(days=every)
    if unit == "weeks":
        return d + timedelta(weeks=every)
    if unit == "months":
        return add_months(d, every)
    if unit == "years":
        return add_months(d, 12 * every)
    raise ValueError(f"unidade inválida: {unit}")


def last_sunday(year: int, month: int) -> date:
    d = date(year, month, calendar.monthrange(year, month)[1])
    return d - timedelta(days=(d.weekday() + 1) % 7)


def eu_clock_change(year: int, event: str) -> date:
    """Mudança de hora na Europa: último domingo de março (spring) e de outubro (autumn)."""
    return last_sunday(year, 3 if event == "spring" else 10)


def validate_schedule(raw: dict[str, Any]) -> dict[str, Any]:
    """Valida e normaliza um agendamento. Levanta ValueError se for inválido."""
    if not isinstance(raw, dict):
        raise ValueError("a agenda tem de ser um objeto")
    t = raw.get("type")
    if t == "interval":
        every = int(raw.get("every", 0))
        unit = raw.get("unit")
        if every < 1 or unit not in UNITS:
            raise ValueError("intervalo inválido (every>=1, unit: days/weeks/months/years)")
        return {"type": "interval", "every": every, "unit": unit}
    if t == "months":
        months = sorted({int(m) for m in raw.get("months", [])})
        if not months or any(m < 1 or m > 12 for m in months):
            raise ValueError("meses inválidos (lista de 1 a 12)")
        return {"type": "months", "months": months}
    if t == "date":
        d = date.fromisoformat(str(raw.get("date")))
        repeat = raw.get("repeat", "yearly")
        if repeat not in ("yearly", "once"):
            raise ValueError("repeat tem de ser yearly ou once")
        return {"type": "date", "date": d.isoformat(), "repeat": repeat}
    if t == "clock_change":
        which = [w for w in raw.get("which", []) if w in CLOCK_EVENTS]
        if not which:
            raise ValueError("which tem de conter spring e/ou autumn")
        return {"type": "clock_change", "which": sorted(set(which))}
    raise ValueError("tipo de agenda inválido (interval/months/date/clock_change)")


def _occurrences(schedule: dict[str, Any], year: int) -> list[date]:
    t = schedule["type"]
    if t == "months":
        return [date(year, m, 1) for m in schedule["months"]]
    if t == "clock_change":
        return sorted(eu_clock_change(year, e) for e in schedule["which"])
    if t == "date":
        base = date.fromisoformat(schedule["date"])
        day = min(base.day, calendar.monthrange(year, base.month)[1])
        return [date(year, base.month, day)]
    return []


def next_due(schedule: dict[str, Any], last_done: date | None, today: date) -> date | None:
    """Calcula a próxima data de vencimento (None = sem próxima)."""
    t = schedule["type"]
    if t == "interval":
        if last_done is None:
            return today  # nunca feita: devida já
        return add_interval(last_done, schedule["every"], schedule["unit"])
    if t == "date" and schedule.get("repeat") == "once":
        if last_done is not None:
            return None
        return date.fromisoformat(schedule["date"])
    if t in ("months", "clock_change", "date"):
        if last_done is not None:
            lo = last_done + timedelta(days=1)
        elif t == "months":
            lo = today.replace(day=1)  # num mês escolhido e nunca feita: vence desde o dia 1
        else:
            lo = today
        for y in range(lo.year, lo.year + 3):
            for occ in _occurrences(schedule, y):
                if occ >= lo:
                    return occ
    return None


def evaluate(
    schedule: dict[str, Any],
    last_done: date | None,
    today: date,
    warn_days: int,
    snoozed_until: date | None = None,
    paused: bool = False,
) -> dict[str, Any]:
    """Devolve estado, data de vencimento e dias restantes."""
    due = next_due(schedule, last_done, today)
    days = (due - today).days if due else None
    once_done = schedule.get("type") == "date" and schedule.get("repeat") == "once" and last_done is not None
    if paused:
        status = "paused"
    elif once_done:
        status = "done"
    elif snoozed_until is not None and today <= snoozed_until:
        status = "snoozed"
    elif due is None:
        status = "no_schedule"
    elif days < 0:
        status = "overdue"
    elif days <= warn_days:
        status = "due_soon"
    else:
        status = "on_track"
    return {"status": status, "due": due, "days": days}


def warranty_until(purchased: date | None, months: int | None) -> date | None:
    """Data em que a garantia termina (compra + meses de garantia)."""
    if purchased is None or not months:
        return None
    return add_months(purchased, int(months))


def warranty_status(until: date | None, today: date, warn_days: int) -> tuple[str, int | None]:
    """none / active / expiring / expired, mais os dias que faltam (negativo = já expirou)."""
    if until is None:
        return "none", None
    days = (until - today).days
    if days < 0:
        return "expired", days
    if days <= warn_days:
        return "expiring", days
    return "active", days


def compose_digest(
    overdue: list[dict],
    soon: list[dict],
    warranties: list[dict],
    parts: list[dict],
    lang: str = "pt",
) -> str | None:
    """Texto do aviso diário (None se não houver nada a avisar)."""
    lines: list[str] = []
    if overdue:
        items = ", ".join(f"{r['name']} ({tr(lang, 'ago', d=days(lang, r['days'], True))})" for r in overdue)
        lines.append(tr(lang, "overdue", c=len(overdue), items=items))
    if soon:
        items = ", ".join(
            f"{r['name']} ({tr(lang, 'today') if r['days'] == 0 else tr(lang, 'in', d=days(lang, r['days'], True))})"
            for r in soon
        )
        lines.append(tr(lang, "soon", c=len(soon), items=items))
    if warranties:
        items = ", ".join(f"{w['name']} ({tr(lang, 'left', d=days(lang, w['warranty_days']))})" for w in warranties)
        lines.append(tr(lang, "warr", c=len(warranties), items=items))
    if parts:
        items = ", ".join(f"{p['name']} ({tr(lang, 'stock', n=p['stock'])})" for p in parts)
        lines.append(tr(lang, "parts", c=len(parts), items=items))
    return "\n".join(lines) if lines else None


def _hhmm(value: Any) -> str:
    """Normaliza 'H:MM', 'HH:MM' ou 'HH:MM:SS' para 'HH:MM'."""
    t = time.fromisoformat(str(value).strip() if len(str(value).strip()) > 4 else "0" + str(value).strip())
    return f"{t.hour:02d}:{t.minute:02d}"


def normalize_remind(raw: Any) -> dict[str, Any] | None:
    """Valida o aviso de uma rotina: hora, repetição (minutos) e hora limite."""
    if not raw or not isinstance(raw, dict) or not raw.get("time"):
        return None
    repeat = int(raw.get("repeat_min") or 0)
    if repeat < 0 or repeat > 1440:
        raise ValueError("repetição inválida (0 a 1440 minutos)")
    until = raw.get("until")
    return {"time": _hhmm(raw["time"]), "repeat_min": repeat, "until": _hhmm(until) if until else None}


def should_remind(remind: dict[str, Any], now: datetime, last_sent: datetime | None) -> bool:
    """Já é altura de (re)enviar o aviso desta rotina?"""
    if now.time() < time.fromisoformat(remind["time"]):
        return False
    if remind.get("until") and now.time() > time.fromisoformat(remind["until"]):
        return False
    if last_sent is None or last_sent.date() != now.date():
        return True
    repeat = int(remind.get("repeat_min") or 0)
    if repeat <= 0:
        return False
    return now - last_sent >= timedelta(minutes=repeat, seconds=-30)
