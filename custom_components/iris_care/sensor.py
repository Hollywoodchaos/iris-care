"""Sensores da Iris Care."""
from __future__ import annotations

from typing import Any

from homeassistant.components.sensor import SensorEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.const import EntityCategory
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.device_registry import DeviceEntryType, DeviceInfo
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import PRO, DOMAIN, SIGNAL_UPDATED
from .manager import Manager

SUMMARY = ("overdue", "due_soon", "on_track", "parts_to_reorder", "next_due", "warranty_expiring")


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry, async_add_entities: AddEntitiesCallback) -> None:
    manager: Manager = hass.data[DOMAIN][entry.entry_id]
    async_add_entities([SummarySensor(manager, entry, key) for key in SUMMARY if PRO or key != "warranty_expiring"])
    async_add_entities([RevisionSensor(manager, entry)])

    known: set[str] = set()

    @callback
    def _sync() -> None:
        current = {r["id"] for r in manager.data["routines"]}
        new = current - known
        gone = known - current
        if new:
            async_add_entities([RoutineSensor(manager, entry, rid) for rid in new])
            known.update(new)
        if gone:
            registry = er.async_get(hass)
            for rid in gone:
                entity_id = registry.async_get_entity_id("sensor", DOMAIN, f"{entry.entry_id}_routine_{rid}")
                if entity_id:
                    registry.async_remove(entity_id)
            known.difference_update(gone)

    entry.async_on_unload(async_dispatcher_connect(hass, SIGNAL_UPDATED, _sync))
    _sync()


class _Base(SensorEntity):
    _attr_has_entity_name = True
    _attr_should_poll = False

    def __init__(self, manager: Manager, entry: ConfigEntry) -> None:
        self._manager = manager
        self._entry = entry

    async def async_added_to_hass(self) -> None:
        self.async_on_remove(async_dispatcher_connect(self.hass, SIGNAL_UPDATED, self._handle_update))

    @callback
    def _handle_update(self) -> None:
        if self.hass is not None and self.entity_id:
            self.async_write_ha_state()


class SummarySensor(_Base):
    """Contadores gerais (em atraso, a vencer, em dia, peças, próxima tarefa)."""

    def __init__(self, manager: Manager, entry: ConfigEntry, key: str) -> None:
        super().__init__(manager, entry)
        self._key = key
        self._attr_translation_key = key
        self._attr_unique_id = f"{entry.entry_id}_{key}"
        self._attr_device_info = DeviceInfo(
            identifiers={(DOMAIN, "resumo")},
            name="Iris Care",
            manufacturer="Eletro Solar Basto",
            entry_type=DeviceEntryType.SERVICE,
        )
        if key == "next_due":
            self._attr_native_unit_of_measurement = "d"

    def _by_status(self, status: str) -> list[dict[str, Any]]:
        return [s for s in self._manager.all_states() if s["status"] == status]

    @property
    def native_value(self) -> int | None:
        if self._key in ("overdue", "due_soon", "on_track"):
            return len(self._by_status(self._key))
        if self._key == "parts_to_reorder":
            return len(self._manager.parts_to_reorder())
        if self._key == "warranty_expiring":
            return len(self._manager.warranties("expiring"))
        upcoming = [s for s in self._manager.all_states() if s["status"] in ("due_soon", "on_track")]
        return min((s["days"] for s in upcoming), default=None)

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        if self._key in ("overdue", "due_soon", "on_track"):
            return {
                "routines": [
                    {"name": s["name"], "equipment": s["equipment"], "due": s["due"], "days": s["days"]}
                    for s in sorted(self._by_status(self._key), key=lambda s: s["days"])
                ]
            }
        if self._key == "parts_to_reorder":
            return {
                "parts": [
                    {"name": p["name"], "stock": p["stock"], "reorder_at": p["reorder_at"]}
                    for p in self._manager.parts_to_reorder()
                ]
            }
        if self._key == "warranty_expiring":
            return {
                "equipment": [
                    {"name": w["name"], "until": w["warranty_until"], "days": w["warranty_days"]}
                    for w in sorted(self._manager.warranties("expiring"), key=lambda w: w["warranty_days"])
                ]
            }
        upcoming = sorted(
            (s for s in self._manager.all_states() if s["status"] in ("due_soon", "on_track")),
            key=lambda s: s["days"],
        )
        return {"routine": upcoming[0]["name"], "due": upcoming[0]["due"]} if upcoming else {}


class RevisionSensor(_Base):
    """Contador de alterações: permite ao cartão atualizar-se sozinho em contas sem administrador."""

    _attr_name = "Revision"
    _attr_icon = "mdi:counter"
    _attr_entity_category = EntityCategory.DIAGNOSTIC

    def __init__(self, manager: Manager, entry: ConfigEntry) -> None:
        super().__init__(manager, entry)
        self._attr_unique_id = f"{entry.entry_id}_revision"
        self._attr_device_info = DeviceInfo(
            identifiers={(DOMAIN, "resumo")},
            name="Iris Care",
            manufacturer="Eletro Solar Basto",
            entry_type=DeviceEntryType.SERVICE,
        )

    @property
    def native_value(self) -> int:
        return self._manager.revision

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        return {"iris_care_revision": True}


class RoutineSensor(_Base):
    """Um sensor por rotina: dias até à data (negativo = em atraso)."""

    _attr_native_unit_of_measurement = "d"
    _attr_icon = "mdi:wrench-clock"

    def __init__(self, manager: Manager, entry: ConfigEntry, routine_id: str) -> None:
        super().__init__(manager, entry)
        self._rid = routine_id
        self._attr_unique_id = f"{entry.entry_id}_routine_{routine_id}"

    def _routine(self) -> dict[str, Any] | None:
        return next((r for r in self._manager.data["routines"] if r["id"] == self._rid), None)

    @property
    def name(self) -> str | None:
        routine = self._routine()
        return routine["name"] if routine else None

    @property
    def device_info(self) -> DeviceInfo:
        routine = self._routine() or {}
        equipment = next(
            (e for e in self._manager.data["equipment"] if e["id"] == routine.get("equipment_id")), None
        )
        if equipment:
            return DeviceInfo(
                identifiers={(DOMAIN, f"eq_{equipment['id']}")},
                name=equipment["name"],
                manufacturer=equipment.get("brand") or None,
                model=equipment.get("model") or None,
            )
        return DeviceInfo(identifiers={(DOMAIN, "resumo")})

    @property
    def native_value(self) -> int | None:
        routine = self._routine()
        if not routine:
            return None
        state = self._manager.routine_state(routine)
        return None if state["status"] in ("paused", "snoozed", "done") else state["days"]

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        routine = self._routine()
        if not routine:
            return {}
        state = self._manager.routine_state(routine)
        return {
            "status": state["status"],
            "due": state["due"],
            "last_done": routine.get("last_done"),
            "equipment": state["equipment"],
            "schedule": routine["schedule"],
            "routine_id": routine["id"],
        }
