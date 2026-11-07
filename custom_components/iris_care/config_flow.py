"""Configuração da Iris Care (um clique + opções de avisos)."""
from __future__ import annotations

from typing import Any

import voluptuous as vol

from homeassistant import config_entries
from homeassistant.core import callback
from homeassistant.helpers import selector

from homeassistant.util import slugify

from .const import DOMAIN

IGNORAR = {"send_message", "persistent_notification", "notify"}


class IrisCareConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Só permite uma instalação."""

    VERSION = 1

    async def async_step_user(self, user_input: dict[str, Any] | None = None):
        if self._async_current_entries():
            return self.async_abort(reason="single_instance_allowed")
        if user_input is not None:
            return self.async_create_entry(title="Iris Care", data={})
        return self.async_show_form(step_id="user")

    @staticmethod
    @callback
    def async_get_options_flow(config_entry: config_entries.ConfigEntry):
        return IrisCareOptionsFlow()


class IrisCareOptionsFlow(config_entries.OptionsFlow):
    """Avisos no telemóvel (passo 1) e nomes dos telemóveis (passo 2)."""

    def __init__(self) -> None:
        self._data: dict[str, Any] = {}

    def _device_names(self) -> dict[str, str]:
        """notify.mobile_app_xxx -> nome do dispositivo registado na app."""
        out: dict[str, str] = {}
        for entry in self.hass.config_entries.async_entries("mobile_app"):
            nome = entry.data.get("device_name") or entry.title
            out[f"notify.mobile_app_{slugify(nome)}"] = nome
        return out

    async def async_step_init(self, user_input: dict[str, Any] | None = None):
        if user_input is not None:
            self._data = dict(user_input)
            if self._data.get("notify_services"):
                return await self.async_step_names()
            self._data["notify_names"] = {}
            return self.async_create_entry(data=self._data)
        opts = self.config_entry.options
        atuais = list(opts.get("notify_services", []))
        nomes_app = self._device_names()
        nomes = opts.get("notify_names", {})
        disponiveis = sorted(
            f"notify.{name}" for name in self.hass.services.async_services().get("notify", {}) if name not in IGNORAR
        )
        for a in atuais:
            if a not in disponiveis:
                disponiveis.append(a)

        def rotulo(servico: str) -> str:
            apelido = nomes.get(servico)
            base = nomes_app.get(servico) or servico.removeprefix("notify.")
            return f"{apelido} ({base})" if apelido else base

        schema = vol.Schema(
            {
                vol.Optional("notify_services", default=atuais): selector.SelectSelector(
                    selector.SelectSelectorConfig(
                        options=[selector.SelectOptionDict(value=d, label=rotulo(d)) for d in disponiveis],
                        multiple=True,
                        mode=selector.SelectSelectorMode.DROPDOWN,
                    )
                ),
                vol.Optional("notify_time", default=opts.get("notify_time", "09:00:00")): selector.TimeSelector(),
                vol.Optional("notify_routines", default=opts.get("notify_routines", True)): selector.BooleanSelector(),
                vol.Optional("notify_warranties", default=opts.get("notify_warranties", True)): selector.BooleanSelector(),
                vol.Optional("notify_parts", default=opts.get("notify_parts", True)): selector.BooleanSelector(),
                vol.Optional("notify_url", default=opts.get("notify_url", "")): selector.TextSelector(),
            }
        )
        return self.async_show_form(step_id="init", data_schema=schema)

    async def async_step_names(self, user_input: dict[str, Any] | None = None):
        """Um campo por telemóvel escolhido; o título do campo é o nome técnico do telemóvel."""
        servicos = list(self._data.get("notify_services", []))
        nomes_app = self._device_names()
        guardados = self.config_entry.options.get("notify_names", {})
        chaves: dict[str, str] = {}  # texto do campo -> serviço
        for servico in servicos:
            base = nomes_app.get(servico) or servico.removeprefix("notify.")
            chave = base
            n = 2
            while chave in chaves:
                chave = f"{base} ({n})"
                n += 1
            chaves[chave] = servico
        if user_input is not None:
            self._data["notify_names"] = {
                chaves[k]: str(v).strip() for k, v in user_input.items() if k in chaves and str(v).strip()
            }
            return self.async_create_entry(data=self._data)
        schema = vol.Schema(
            {
                vol.Optional(chave, default=guardados.get(servico, "")): selector.TextSelector()
                for chave, servico in chaves.items()
            }
        )
        return self.async_show_form(step_id="names", data_schema=schema)
