"""Iris Care – gestor de manutenção doméstica para o Home Assistant."""
from __future__ import annotations

import inspect
import logging
from datetime import datetime
from typing import Any

import voluptuous as vol

from pathlib import Path

from homeassistant.components import websocket_api
from homeassistant.components.frontend import add_extra_js_url
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, ServiceCall, SupportsResponse, callback
from homeassistant.exceptions import HomeAssistantError, ServiceValidationError
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.event import async_track_time_change
from homeassistant.util import dt as dt_util

from .const import COLLECTIONS, DOMAIN, PLATFORMS
from .manager import Manager
from .notify import async_clear, async_send_digest, async_tick_reminders, phone_targets

_LOGGER = logging.getLogger(__name__)

CARD_URL = "/iris_care/iris-care-card.js"
CARD_VERSION = "1.0.0"

SERVICES = (
    "add_equipment",
    "add_part",
    "add_routine",
    "complete",
    "undo",
    "snooze",
    "set_paused",
    "adjust_stock",
    "notify_now",
)


def _manager(hass: HomeAssistant) -> Manager:
    managers = hass.data.get(DOMAIN, {})
    if not managers:
        raise ServiceValidationError("Iris Care não está configurada")
    return next(iter(managers.values()))


# ---------------------------------------------------------------- serviços
@callback
def _register_services(hass: HomeAssistant) -> None:
    optional_text = vol.Any(None, cv.string)

    async def add_equipment(call: ServiceCall) -> dict[str, Any]:
        item = _manager(hass).upsert("equipment", dict(call.data))
        return {"id": item["id"]}

    async def add_part(call: ServiceCall) -> dict[str, Any]:
        mgr = _manager(hass)
        data = dict(call.data)
        if data.get("equipment"):
            data["equipment_id"] = mgr.find("equipment", data.pop("equipment"))["id"]
        data.pop("equipment", None)
        return {"id": mgr.upsert("parts", data)["id"]}

    async def add_routine(call: ServiceCall) -> dict[str, Any]:
        mgr = _manager(hass)
        data = dict(call.data)
        if data.get("equipment"):
            data["equipment_id"] = mgr.find("equipment", data.pop("equipment"))["id"]
        data.pop("equipment", None)
        data["parts"] = [
            {"part_id": mgr.find("parts", p["part"])["id"], "qty": p.get("qty", 1)} for p in data.get("parts", [])
        ]
        return {"id": mgr.upsert("routines", data)["id"]}

    async def complete(call: ServiceCall) -> dict[str, Any]:
        mgr = _manager(hass)
        parts = None
        if "parts" in call.data:
            parts = [{"part_id": mgr.find("parts", p["part"])["id"], "qty": p.get("qty", 1)} for p in call.data["parts"]]
        entry = mgr.complete(
            mgr.find("routines", call.data["routine"])["id"],
            call.data.get("date"),
            call.data.get("cost"),
            call.data.get("notes", ""),
            parts,
        )
        return {"history_id": entry["id"]}

    async def undo(call: ServiceCall) -> None:
        mgr = _manager(hass)
        if "history_id" in call.data:
            mgr.undo(call.data["history_id"])
            return
        routine = mgr.find("routines", call.data["routine"])
        entries = [h for h in mgr.data["history"] if h["routine_id"] == routine["id"]]
        if not entries:
            raise ServiceValidationError("esta rotina não tem registos para anular")
        mgr.undo(max(entries, key=lambda h: h["date"])["id"])

    async def snooze(call: ServiceCall) -> None:
        mgr = _manager(hass)
        mgr.snooze(mgr.find("routines", call.data["routine"])["id"], call.data["days"])

    async def set_paused(call: ServiceCall) -> None:
        mgr = _manager(hass)
        mgr.set_paused(mgr.find("routines", call.data["routine"])["id"], call.data["paused"])

    async def adjust_stock(call: ServiceCall) -> None:
        mgr = _manager(hass)
        mgr.adjust_stock(
            mgr.find("parts", call.data["part"])["id"], call.data.get("delta"), call.data.get("set_to")
        )

    async def notify_now(call: ServiceCall) -> None:
        sent = await async_send_digest(hass, _manager(hass), force=True)
        if not sent:
            raise ServiceValidationError("Não foi enviado nenhum aviso. Escolhe o telemóvel em Configurar.")

    part_ref = vol.Schema({vol.Required("part"): cv.string, vol.Optional("qty", default=1): vol.Coerce(int)})
    schemas: dict[str, tuple[Any, vol.Schema, bool]] = {
        "add_equipment": (
            add_equipment,
            vol.Schema(
                {
                    vol.Required("name"): cv.string,
                    vol.Optional("location"): optional_text,
                    vol.Optional("category"): optional_text,
                    vol.Optional("brand"): optional_text,
                    vol.Optional("model"): optional_text,
                    vol.Optional("serial"): optional_text,
                    vol.Optional("notes"): optional_text,
                    vol.Optional("purchased"): vol.Any(None, cv.date),
                    vol.Optional("installed"): vol.Any(None, cv.date),
                    vol.Optional("warranty_months"): vol.Any(None, vol.Coerce(int)),
                    vol.Optional("store"): optional_text,
                    vol.Optional("order_number"): optional_text,
                    vol.Optional("phone"): optional_text,
                    vol.Optional("email"): optional_text,
                }
            ),
            True,
        ),
        "add_part": (
            add_part,
            vol.Schema(
                {
                    vol.Required("name"): cv.string,
                    vol.Optional("stock", default=0): vol.Coerce(int),
                    vol.Optional("reorder_at"): vol.Any(None, vol.Coerce(int)),
                    vol.Optional("part_number"): optional_text,
                    vol.Optional("equipment"): cv.string,
                }
            ),
            True,
        ),
        "add_routine": (
            add_routine,
            vol.Schema(
                {
                    vol.Required("name"): cv.string,
                    vol.Required("schedule"): dict,
                    vol.Optional("equipment"): cv.string,
                    vol.Optional("last_done"): cv.date,
                    vol.Optional("parts", default=[]): [part_ref],
                    vol.Optional("notes"): optional_text,
                    vol.Optional("remind"): vol.Any(None, dict),
                    vol.Optional("notify_to"): vol.Any(None, [cv.string]),
                }
            ),
            True,
        ),
        "complete": (
            complete,
            vol.Schema(
                {
                    vol.Required("routine"): cv.string,
                    vol.Optional("date"): cv.date,
                    vol.Optional("cost"): vol.Any(None, vol.Coerce(float)),
                    vol.Optional("notes"): cv.string,
                    vol.Optional("parts"): [part_ref],
                }
            ),
            True,
        ),
        "undo": (
            undo,
            vol.Schema(
                {vol.Exclusive("routine", "target"): cv.string, vol.Exclusive("history_id", "target"): cv.string}
            ),
            False,
        ),
        "snooze": (
            snooze,
            vol.Schema({vol.Required("routine"): cv.string, vol.Required("days"): vol.All(vol.Coerce(int), vol.Range(0, 365))}),
            False,
        ),
        "set_paused": (
            set_paused,
            vol.Schema({vol.Required("routine"): cv.string, vol.Required("paused"): cv.boolean}),
            False,
        ),
        "notify_now": (notify_now, vol.Schema({}), False),
        "adjust_stock": (
            adjust_stock,
            vol.Schema(
                {
                    vol.Required("part"): cv.string,
                    vol.Exclusive("delta", "amount"): vol.Coerce(int),
                    vol.Exclusive("set_to", "amount"): vol.Coerce(int),
                }
            ),
            False,
        ),
    }

    def _wrap(handler):
        async def _inner(call: ServiceCall):
            try:
                return await handler(call)
            except ValueError as err:
                raise ServiceValidationError(str(err)) from err

        return _inner

    for name, (handler, schema, has_response) in schemas.items():
        hass.services.async_register(
            DOMAIN,
            name,
            _wrap(handler),
            schema=schema,
            supports_response=SupportsResponse.OPTIONAL if has_response else SupportsResponse.NONE,
        )


# -------------------------------------------------------------- websocket
def _ws(handler):
    """Envolve um comando websocket com tratamento de erros."""

    async def _inner(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
        try:
            result = handler(_manager(hass), msg)
            if inspect.isawaitable(result):
                result = await result
        except (ValueError, KeyError, HomeAssistantError) as err:
            connection.send_error(msg["id"], "invalid", str(err))
            return
        connection.send_result(msg["id"], result)

    return _inner


@callback
def _register_websocket(hass: HomeAssistant) -> None:
    def cmd(name: str, schema: dict, handler, admin: bool = True) -> None:
        func = websocket_api.async_response(_ws(handler))
        if admin:
            func = websocket_api.require_admin(func)
        func = websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/{name}", **schema})(func)
        websocket_api.async_register_command(hass, func)

    cmd("get_all", {}, lambda m, msg: {**m.snapshot(), "targets": phone_targets(hass, m)}, admin=False)
    cmd(
        "upsert",
        {vol.Required("collection"): vol.In(COLLECTIONS), vol.Required("item"): dict},
        lambda m, msg: m.upsert(msg["collection"], msg["item"]),
        admin=False,  # qualquer utilizador pode criar e editar; apagar continua só para administradores
    )
    cmd(
        "delete",
        {vol.Required("collection"): vol.In(COLLECTIONS), vol.Required("item_id"): str},
        lambda m, msg: m.delete(msg["collection"], msg["item_id"]),
    )
    cmd(
        "complete",
        {
            vol.Required("routine_id"): str,
            vol.Optional("date"): vol.Any(None, str),
            vol.Optional("cost"): vol.Any(None, int, float, str),
            vol.Optional("notes"): vol.Any(None, str),
            vol.Optional("parts"): vol.Any(None, list),
            vol.Optional("invoice"): vol.Any(None, dict),
        },
        lambda m, msg: m.complete(
            msg["routine_id"], msg.get("date"), msg.get("cost"), msg.get("notes") or "", msg.get("parts"), msg.get("invoice")
        ),
        admin=False,
    )
    cmd(
        "packs",
        {vol.Optional("lang"): str},
        lambda m, msg: m.packs(msg.get("lang") or hass.config.language),
        admin=False,
    )
    cmd(
        "apply_pack",
        {vol.Required("pack_id"): str, vol.Optional("lang"): str, vol.Optional("only"): [int]},
        lambda m, msg: m.apply_pack(msg["pack_id"], msg.get("lang") or hass.config.language, msg.get("only")),
    )
    cmd("undo", {vol.Required("history_id"): str}, lambda m, msg: m.undo(msg["history_id"]), admin=False)
    cmd(
        "snooze",
        {vol.Required("routine_id"): str, vol.Required("days"): vol.All(int, vol.Range(0, 365))},
        lambda m, msg: m.snooze(msg["routine_id"], msg["days"]),
        admin=False,
    )
    cmd(
        "pause",
        {vol.Required("routine_id"): str, vol.Required("paused"): bool},
        lambda m, msg: m.set_paused(msg["routine_id"], msg["paused"]),
        admin=False,
    )
    cmd(
        "adjust_stock",
        {vol.Required("part_id"): str, vol.Required("delta"): int},
        lambda m, msg: m.adjust_stock(msg["part_id"], delta=msg["delta"]),
        admin=False,
    )
    cmd("notify_now", {}, lambda m, msg: async_send_digest(m.hass, m, True))
    cmd(
        "set_warn_days",
        {
            vol.Optional("days"): vol.All(int, vol.Range(0, 365)),
            vol.Optional("warranty_days"): vol.All(int, vol.Range(0, 730)),
        },
        lambda m, msg: m.set_warn_days(msg.get("days"), msg.get("warranty_days")),
    )


# --------------------------------------------------------------- arranque
async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    manager = Manager(hass)
    manager.entry = entry
    await manager.async_load()
    hass.data.setdefault(DOMAIN, {})[entry.entry_id] = manager

    if not hass.services.has_service(DOMAIN, "complete"):
        _register_services(hass)
    if not hass.data.get(f"{DOMAIN}_ws"):
        _register_websocket(hass)
        hass.data[f"{DOMAIN}_ws"] = True

    if not hass.data.get(f"{DOMAIN}_card"):
        card_file = Path(__file__).parent / "frontend" / "iris-care-card.js"
        await hass.http.async_register_static_paths(
            [StaticPathConfig(CARD_URL, str(card_file), True)]
        )
        add_extra_js_url(hass, f"{CARD_URL}?v={CARD_VERSION}")
        hass.data[f"{DOMAIN}_card"] = True

    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)

    @callback
    def _new_day(_: datetime) -> None:
        manager.refresh()

    entry.async_on_unload(async_track_time_change(hass, _new_day, hour=0, minute=5, second=0))

    if entry.options.get("notify_services"):
        hora = dt_util.parse_time(entry.options.get("notify_time", "09:00:00")) or dt_util.parse_time("09:00:00")

        async def _digest(_: datetime) -> None:
            await async_send_digest(hass, manager)

        entry.async_on_unload(async_track_time_change(hass, _digest, hour=hora.hour, minute=hora.minute, second=0))

    async def _tick(_: datetime) -> None:
        await async_tick_reminders(hass, manager)

    entry.async_on_unload(async_track_time_change(hass, _tick, second=0))

    async def _on_action(event) -> None:
        action = str(event.data.get("action", ""))
        if not action.startswith("IRIS_DONE_"):
            return
        rid = action[len("IRIS_DONE_"):]
        try:
            manager.complete(rid)
        except ValueError:
            return
        manager.reminders.pop(rid, None)
        await async_clear(hass, manager, rid)

    entry.async_on_unload(hass.bus.async_listen("mobile_app_notification_action", _on_action))
    entry.async_on_unload(entry.add_update_listener(_options_updated))
    return True


async def _options_updated(hass: HomeAssistant, entry: ConfigEntry) -> None:
    await hass.config_entries.async_reload(entry.entry_id)


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    unloaded = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
    if unloaded:
        hass.data[DOMAIN].pop(entry.entry_id, None)
        if not hass.data[DOMAIN]:
            for name in SERVICES:
                hass.services.async_remove(DOMAIN, name)
    return unloaded
