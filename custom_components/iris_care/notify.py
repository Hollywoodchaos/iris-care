"""Aviso diário da Iris Care."""
from __future__ import annotations

import logging

from homeassistant.core import HomeAssistant
from homeassistant.util import dt as dt_util, slugify

from .logic import compose_digest, should_remind
from .manager import Manager
from .messages import days, lang_of, tr

_LOGGER = logging.getLogger(__name__)
TITLE = "Iris Care"


def _allowed(routine: dict | None, target: str) -> bool:
    """A rotina avisa este telemóvel? (lista vazia = todos os escolhidos em Configurar)"""
    chosen = (routine or {}).get("notify_to") or []
    return not chosen or target in chosen


def phone_targets(hass: HomeAssistant, manager: Manager) -> list[dict]:
    """Telemóveis disponíveis para escolher: só os que foram escolhidos em Configurar (os tablets ficam de fora)."""
    options = dict(manager.entry.options) if getattr(manager, "entry", None) else {}
    names: dict[str, str] = {}
    for entry in hass.config_entries.async_entries("mobile_app"):
        device = entry.data.get("device_name") or entry.title
        names[f"notify.mobile_app_{slugify(device)}"] = device
    given = options.get("notify_names") or {}
    return [
        {"service": s, "name": given.get(s) or names.get(s, s.split(".", 1)[-1].replace("mobile_app_", "").replace("_", " "))}
        for s in (options.get("notify_services") or [])
    ]


def build_message(manager: Manager, options: dict, lang: str = "pt", target: str | None = None) -> str | None:
    overdue: list = []
    soon: list = []
    if options.get("notify_routines", True):
        states = [
            s for s in manager.all_states()
            if target is None or _allowed(manager._get("routines", s["id"]), target)
        ]
        overdue = sorted((s for s in states if s["status"] == "overdue"), key=lambda s: s["days"])
        soon = sorted((s for s in states if s["status"] == "due_soon"), key=lambda s: s["days"])
    warranties = manager.warranties("expiring") if options.get("notify_warranties", True) else []
    parts = manager.parts_to_reorder() if options.get("notify_parts", True) else []
    return compose_digest(overdue, soon, warranties, parts, lang)


async def async_send_digest(hass: HomeAssistant, manager: Manager, force: bool = False) -> bool:
    """Envia o resumo para os serviços notify escolhidos. force=True envia mesmo sem novidades."""
    options = dict(manager.entry.options) if getattr(manager, "entry", None) else {}
    targets = options.get("notify_services") or []
    if not targets:
        _LOGGER.debug("Sem serviços de notificação configurados")
        return False
    lang = lang_of(hass.config.language)
    data: dict = {"tag": "iris_care"}
    url = (options.get("notify_url") or "").strip()
    if url:
        data.update({"url": url, "clickAction": url})
    sent = False
    for target in targets:
        message = build_message(manager, options, lang, target)
        if message is None:
            if not force:
                continue
            message = tr(lang, "all_ok")
        domain, _, name = target.partition(".")
        if domain != "notify" or not hass.services.has_service(domain, name):
            _LOGGER.warning("Serviço de notificação indisponível: %s", target)
            continue
        try:
            await hass.services.async_call(
                domain, name, {"title": TITLE, "message": message, "data": data}, blocking=True
            )
            sent = True
        except Exception as err:  # noqa: BLE001
            _LOGGER.warning("Falha ao enviar aviso para %s: %s", target, err)
    return sent


def _targets(manager: Manager) -> list[str]:
    options = dict(manager.entry.options) if getattr(manager, "entry", None) else {}
    return list(options.get("notify_services") or [])


async def _call(hass: HomeAssistant, target: str, payload: dict) -> None:
    domain, _, name = target.partition(".")
    if domain != "notify" or not hass.services.has_service(domain, name):
        return
    try:
        await hass.services.async_call(domain, name, payload, blocking=True)
    except Exception as err:  # noqa: BLE001
        _LOGGER.warning("Falha ao enviar aviso para %s: %s", target, err)


async def async_clear(hass: HomeAssistant, manager: Manager, routine_id: str) -> None:
    """Retira da barra de notificações o aviso desta rotina."""
    for target in _targets(manager):  # limpa em todos: inofensivo onde nunca foi enviado
        await _call(hass, target, {"message": "clear_notification", "data": {"tag": f"iris_{routine_id}"}})


async def async_tick_reminders(hass: HomeAssistant, manager: Manager) -> None:
    """Corre todos os minutos: avisa (e repete) as rotinas com aviso próprio até serem feitas."""
    targets = _targets(manager)
    if not targets:
        return
    now = dt_util.now()
    options = dict(manager.entry.options)
    eligible: dict = {}
    for routine in manager.data["routines"]:
        remind = routine.get("remind")
        if not remind:
            continue
        state = manager.routine_state(routine)
        if state["status"] in ("overdue", "due_soon") and state["days"] is not None and state["days"] <= 0:
            eligible[routine["id"]] = (routine, state, remind)

    for rid in list(manager.reminders):
        if rid not in eligible:  # foi feita, adiada, pausada ou apagada
            manager.reminders.pop(rid, None)
            await async_clear(hass, manager, rid)

    for rid, (routine, state, remind) in eligible.items():
        if not should_remind(remind, now, manager.reminders.get(rid)):
            continue
        manager.reminders[rid] = now
        lang = lang_of(hass.config.language)
        when = tr(lang, "today") if state["days"] == 0 else tr(lang, "late", d=days(lang, state["days"], True))
        message = f"{routine['name']}" + (f" · {state['equipment']}" if state["equipment"] else "") + f" ({when})"
        data: dict = {"tag": f"iris_{rid}", "actions": [{"action": f"IRIS_DONE_{rid}", "title": tr(lang, "done")}]}
        url = (options.get("notify_url") or "").strip()
        if url:
            data.update({"url": url, "clickAction": url})
        for target in targets:
            if _allowed(routine, target):
                await _call(hass, target, {"title": TITLE, "message": message, "data": data})
