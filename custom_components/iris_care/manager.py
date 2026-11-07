"""Gestor de dados da Iris Care (armazenamento + operações)."""
from __future__ import annotations

import uuid
from datetime import date, timedelta
from typing import Any

from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_send
from homeassistant.helpers.storage import Store
from homeassistant.util import dt as dt_util

from .const import (
    COLLECTIONS,
    DEFAULT_WARN_DAYS,
    DEFAULT_WARRANTY_WARN_DAYS,
    PRO,
    SIGNAL_UPDATED,
    STORAGE_KEY,
    STORAGE_VERSION,
)
from .logic import evaluate, normalize_remind, validate_schedule, warranty_status, warranty_until


def _new_id() -> str:
    return uuid.uuid4().hex[:8]


def _iso(value: Any) -> str | None:
    if value in (None, ""):
        return None
    if isinstance(value, date):
        return value.isoformat()
    return date.fromisoformat(str(value)).isoformat()


def _parse(value: str | None) -> date | None:
    return date.fromisoformat(value) if value else None


class Manager:
    """Guarda equipamentos, rotinas, peças e histórico em .storage/iris_care."""

    def __init__(self, hass: HomeAssistant) -> None:
        self.hass = hass
        self._store: Store = Store(hass, STORAGE_VERSION, STORAGE_KEY)
        self.entry = None
        self.revision = 0  # sobe a cada alteração; o cartão olha para este valor (qualquer conta o vê)
        self.reminders: dict[str, Any] = {}  # rotina -> data/hora do último aviso enviado
        self.data: dict[str, Any] = {
            "equipment": [],
            "routines": [],
            "parts": [],
            "history": [],
            "settings": {"warn_days": DEFAULT_WARN_DAYS, "warranty_warn_days": DEFAULT_WARRANTY_WARN_DAYS},
        }

    # ------------------------------------------------------------------ base
    async def async_load(self) -> None:
        stored = await self._store.async_load()
        if not stored:
            # Migração: quem usava a "Iris Manutenção" (nome antigo) leva os dados consigo.
            legacy = await Store(self.hass, STORAGE_VERSION, "iris_manutencao").async_load()
            if legacy:
                stored = legacy
                self.data.update({k: legacy[k] for k in self.data if k in legacy and k != "settings"})
                self.data["settings"].update(legacy.get("settings", {}))
                self._store.async_delay_save(lambda: self.data, 1)
        if stored:
            for key in self.data:
                if key in stored:
                    if key == "settings":
                        self.data[key].update(stored[key])
                    else:
                        self.data[key] = stored[key]

    @callback
    def _changed(self) -> None:
        self._store.async_delay_save(lambda: self.data, 1)
        self.revision += 1
        async_dispatcher_send(self.hass, SIGNAL_UPDATED)
        self.hass.bus.async_fire("iris_care_updated")

    @callback
    def refresh(self) -> None:
        """Só atualiza as entidades (ex.: virou o dia)."""
        async_dispatcher_send(self.hass, SIGNAL_UPDATED)

    @staticmethod
    def today() -> date:
        return dt_util.now().date()

    @property
    def warn_days(self) -> int:
        return int(self.data["settings"].get("warn_days", DEFAULT_WARN_DAYS))

    # ---------------------------------------------------------------- lookup
    def _get(self, collection: str, item_id: str) -> dict[str, Any] | None:
        return next((i for i in self.data[collection] if i["id"] == item_id), None)

    def find(self, collection: str, ref: str) -> dict[str, Any]:
        """Encontra por id ou por nome (sem distinguir maiúsculas)."""
        ref_l = str(ref).strip().lower()
        for item in self.data[collection]:
            if item["id"] == ref or item.get("name", "").strip().lower() == ref_l:
                return item
        raise ValueError(f"não encontrado: {ref}")

    # ------------------------------------------------------------ CRUD geral
    def upsert(self, collection: str, item: dict[str, Any]) -> dict[str, Any]:
        if collection not in COLLECTIONS:
            raise ValueError("coleção inválida")
        item = dict(item)
        if not str(item.get("name", "")).strip():
            raise ValueError("o nome é obrigatório")
        item["name"] = str(item["name"]).strip()
        if not PRO:  # edição Free: sem garantias, faturas QR nem avisos por rotina
            for k in ("warranty_months", "invoice", "remind", "price", "store", "order_number", "phone", "email"):
                item.pop(k, None)

        if collection == "equipment":
            for key in ("purchased", "installed"):
                if key in item:
                    item[key] = _iso(item[key])
            if "warranty_months" in item:
                wm = item["warranty_months"]
                item["warranty_months"] = None if wm in (None, "") else (max(0, int(wm)) or None)
            if "price" in item:
                pr = item["price"]
                item["price"] = None if pr in (None, "") else round(max(0.0, float(pr)), 2)
            for key in ("location", "category", "brand", "model", "serial", "notes", "store", "order_number", "phone", "email"):
                if key in item:
                    item[key] = str(item[key] or "").strip()
        existing = self._get(collection, item["id"]) if item.get("id") else None
        if collection == "routines":
            if "schedule" in item or not existing:
                item["schedule"] = validate_schedule(item.get("schedule", {}))
            if "last_done" in item or not existing:
                item["last_done"] = _iso(item.get("last_done"))
            if "snoozed_until" in item or not existing:
                item["snoozed_until"] = _iso(item.get("snoozed_until"))
            if "paused" in item or not existing:
                item["paused"] = bool(item.get("paused", False))
            if "remind" in item or not existing:
                item["remind"] = normalize_remind(item.get("remind"))
            if "notify_to" in item or not existing:
                raw = item.get("notify_to") or []
                item["notify_to"] = sorted({str(x).strip() for x in raw if str(x).strip()})
            if "parts" in item or not existing:
                item["parts"] = [
                    {"part_id": p["part_id"], "qty": max(1, int(p.get("qty", 1)))}
                    for p in item.get("parts", [])
                    if self._get("parts", p["part_id"])
                ]
            if item.get("equipment_id") and not self._get("equipment", item["equipment_id"]):
                raise ValueError("equipamento inexistente")
        if collection == "parts":
            if "stock" in item or not existing:
                item["stock"] = max(0, int(item.get("stock") or 0))
            if "reorder_at" in item or not existing:
                reorder = item.get("reorder_at")
                item["reorder_at"] = None if reorder in (None, "") else max(0, int(reorder))

        if existing:
            existing.update(item)
            result = existing
        else:
            item["id"] = _new_id()
            self.data[collection].append(item)
            result = item
        self._changed()
        return result

    def delete(self, collection: str, item_id: str) -> None:
        if collection not in COLLECTIONS:
            raise ValueError("coleção inválida")
        item = self._get(collection, item_id)
        if not item:
            raise ValueError("não encontrado")
        self.data[collection].remove(item)
        if collection == "equipment":
            self.data["routines"] = [r for r in self.data["routines"] if r.get("equipment_id") != item_id]
            for part in self.data["parts"]:
                if part.get("equipment_id") == item_id:
                    part["equipment_id"] = None
        if collection == "parts":
            for routine in self.data["routines"]:
                routine["parts"] = [p for p in routine.get("parts", []) if p["part_id"] != item_id]
        self._changed()

    # --------------------------------------------------------------- rotinas
    def complete(
        self,
        routine_id: str,
        done_on: date | str | None = None,
        cost: float | None = None,
        notes: str = "",
        parts: list[dict[str, Any]] | None = None,
        invoice: dict[str, Any] | None = None,
    ) -> dict[str, Any]:
        routine = self._get("routines", routine_id)
        if not routine:
            raise ValueError("rotina inexistente")
        done_iso = _iso(done_on) or self.today().isoformat()
        used_src = routine.get("parts", []) if parts is None else parts
        used: list[dict[str, Any]] = []
        for p in used_src:
            part = self._get("parts", p["part_id"])
            if not part:
                continue
            qty = min(max(0, int(p.get("qty", 1))), part["stock"])  # nunca tira mais do que existe
            if qty:
                part["stock"] -= qty
                used.append({"part_id": part["id"], "name": part["name"], "qty": qty})
        equipment = self._get("equipment", routine.get("equipment_id", "")) or {}
        entry = {
            "id": _new_id(),
            "routine_id": routine["id"],
            "routine_name": routine["name"],
            "equipment_name": equipment.get("name", ""),
            "date": done_iso,
            "cost": None if cost in (None, "") else round(float(cost), 2),
            "notes": str(notes or ""),
            "parts": used,
            "prev_last_done": routine.get("last_done"),
        }
        qr_text = ""
        if PRO and invoice and str(invoice.get("doc", "")).strip():
            entry["invoice"] = {"nif": str(invoice.get("nif", "")).strip(), "doc": str(invoice["doc"]).strip()}
            qr_text = str(invoice.get("qr", "") or "")[:600]
        self.data["history"].append(entry)
        routine["last_done"] = done_iso
        routine["snoozed_until"] = None
        self._changed()
        # Aviso genérico para quem quiser ligar isto a outro sistema (ex.: despesas).
        # Não depende de nada: se ninguém escutar, não acontece nada.
        self.hass.bus.async_fire(
            "iris_care_completed",
            {
                "history_id": entry["id"],
                "routine_id": routine["id"],
                "routine_name": routine["name"],
                "equipment_name": entry["equipment_name"],
                "date": done_iso,
                "cost": entry["cost"],
                "notes": entry["notes"],
                "nif": (entry.get("invoice") or {}).get("nif", ""),
                "doc": (entry.get("invoice") or {}).get("doc", ""),
                "qr": qr_text,
            },
        )
        return entry

    def undo(self, history_id: str) -> None:
        entry = self._get("history", history_id)
        if not entry:
            raise ValueError("registo inexistente")
        for p in entry.get("parts", []):
            part = self._get("parts", p["part_id"])
            if part:
                part["stock"] += p["qty"]
        routine = self._get("routines", entry["routine_id"])
        self.data["history"].remove(entry)
        if routine:
            later = [h for h in self.data["history"] if h["routine_id"] == routine["id"] and h["date"] > entry["date"]]
            if not later:
                routine["last_done"] = entry.get("prev_last_done")
        self._changed()

    def snooze(self, routine_id: str, days: int) -> None:
        routine = self._get("routines", routine_id)
        if not routine:
            raise ValueError("rotina inexistente")
        routine["snoozed_until"] = (self.today() + timedelta(days=days)).isoformat() if days > 0 else None
        self._changed()

    # --------------------------------------------------------------- pacotes
    def _equipment_by_name(self, name: str) -> dict[str, Any] | None:
        low = name.strip().lower()
        return next((e for e in self.data["equipment"] if str(e.get("name", "")).strip().lower() == low), None)

    def packs(self, lang: str) -> list[dict[str, Any]]:
        """Lista de pacotes no idioma pedido, com quantas rotinas de cada já existem."""
        from .packs import localized

        result = localized(lang)
        for p in result:
            eq = self._equipment_by_name(p["equipment"])
            have = 0
            if eq:
                names = {str(r.get("name", "")).strip().lower() for r in self.data["routines"] if r.get("equipment_id") == eq["id"]}
                have = sum(1 for r in p["routines"] if r["name"].strip().lower() in names)
            p["have"] = have
        return result

    def apply_pack(self, pack_id: str, lang: str, only: list[int] | None = None) -> dict[str, Any]:
        """Cria o equipamento e as rotinas do pacote. Não repete o que já existe."""
        from .packs import PACKS, PRO_ENFORCED, pack_by_id, text  # noqa: F401

        pack = pack_by_id(pack_id)
        if PRO_ENFORCED and pack["tier"] == "pro":
            raise ValueError("pacote Pro")
        chosen = list(range(len(pack["routines"]))) if only is None else sorted({int(i) for i in only if 0 <= int(i) < len(pack["routines"])})
        eq_name = text(lang, pack["equipment"])
        if not chosen:
            return {"equipment": eq_name, "created": 0, "skipped": 0}
        eq = self._equipment_by_name(eq_name)
        if not eq:
            eq = self.upsert(
                "equipment",
                {
                    "name": eq_name, "location": "", "category": "", "brand": "", "model": "", "serial": "", "notes": "",
                    "purchased": None, "installed": None, "warranty_months": None, "store": "", "order_number": "",
                    "price": None, "phone": "", "email": "",
                },
            )
        created = skipped = 0
        for idx, (key, sched) in enumerate(pack["routines"]):
            if idx not in chosen:
                continue
            name = text(lang, key)
            exists = any(
                r.get("equipment_id") == eq["id"] and str(r.get("name", "")).strip().lower() == name.strip().lower()
                for r in self.data["routines"]
            )
            if exists:
                skipped += 1
                continue
            self.upsert(
                "routines",
                {
                    "name": name, "equipment_id": eq["id"], "schedule": dict(sched),
                    "last_done": self.today().isoformat(),  # o ciclo começa hoje; o utilizador acerta depois
                    "parts": [], "remind": None, "notify_to": [],
                },
            )
            created += 1
        return {"equipment": eq_name, "created": created, "skipped": skipped}

    def set_paused(self, routine_id: str, paused: bool) -> None:
        routine = self._get("routines", routine_id)
        if not routine:
            raise ValueError("rotina inexistente")
        routine["paused"] = bool(paused)
        self._changed()

    # ----------------------------------------------------------------- peças
    def adjust_stock(self, part_id: str, delta: int | None = None, set_to: int | None = None) -> dict[str, Any]:
        part = self._get("parts", part_id)
        if not part:
            raise ValueError("peça inexistente")
        if set_to is not None:
            part["stock"] = max(0, int(set_to))
        elif delta is not None:
            part["stock"] = max(0, part["stock"] + int(delta))
        else:
            raise ValueError("indica delta ou set_to")
        self._changed()
        return part

    def set_warn_days(self, days: int | None = None, warranty_days: int | None = None) -> None:
        if days is not None:
            self.data["settings"]["warn_days"] = max(0, min(365, int(days)))
        if warranty_days is not None:
            self.data["settings"]["warranty_warn_days"] = max(0, min(730, int(warranty_days)))
        self._changed()

    # ------------------------------------------------------------- estados
    def routine_state(self, routine: dict[str, Any]) -> dict[str, Any]:
        info = evaluate(
            routine["schedule"],
            _parse(routine.get("last_done")),
            self.today(),
            self.warn_days,
            _parse(routine.get("snoozed_until")),
            routine.get("paused", False),
        )
        equipment = self._get("equipment", routine.get("equipment_id", "")) or {}
        return {
            "id": routine["id"],
            "name": routine["name"],
            "equipment_id": routine.get("equipment_id"),
            "equipment": equipment.get("name", ""),
            "location": equipment.get("location", ""),
            "status": info["status"],
            "due": info["due"].isoformat() if info["due"] else None,
            "days": info["days"],
        }

    def equipment_view(self, equipment: dict[str, Any]) -> dict[str, Any]:
        until = warranty_until(_parse(equipment.get("purchased")), equipment.get("warranty_months"))
        status, days = warranty_status(until, self.today(), int(self.data["settings"].get("warranty_warn_days", DEFAULT_WARRANTY_WARN_DAYS)))
        return {
            **equipment,
            "warranty_until": until.isoformat() if until else None,
            "warranty_status": status,
            "warranty_days": days,
        }

    def warranties(self, status: str | None = None) -> list[dict[str, Any]]:
        views = [self.equipment_view(e) for e in self.data["equipment"]]
        return [v for v in views if v["warranty_status"] == status] if status else views

    def all_states(self) -> list[dict[str, Any]]:
        return [self.routine_state(r) for r in self.data["routines"]]

    def parts_to_reorder(self) -> list[dict[str, Any]]:
        return [
            p for p in self.data["parts"] if p.get("reorder_at") is not None and p["stock"] <= p["reorder_at"]
        ]

    def snapshot(self) -> dict[str, Any]:
        """Tudo o que o painel precisa, já com os estados calculados."""
        return {
            "today": self.today().isoformat(),
            "pro": PRO,
            "settings": self.data["settings"],
            "equipment": [self.equipment_view(e) for e in self.data["equipment"]],
            "routines": [{**r, **self.routine_state(r)} for r in self.data["routines"]],
            "parts": self.data["parts"],
            "history": sorted(self.data["history"], key=lambda h: h["date"], reverse=True),
        }
