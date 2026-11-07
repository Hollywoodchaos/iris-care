"""Textos dos avisos (telemóvel) em vários idiomas. Base: português; recurso: inglês."""
from __future__ import annotations

MSG: dict[str, dict[str, str]] = {
    "pt": {
        "d1": "1 dia", "dn": "{n} dias", "overdue": "⚠️ Em atraso ({c}): {items}", "ago": "há {d}",
        "soon": "🔜 A vencer ({c}): {items}", "today": "hoje", "in": "em {d}",
        "warr": "🛡️ Garantias a acabar ({c}): {items}", "left": "faltam {d}",
        "parts": "📦 Peças a repor ({c}): {items}", "stock": "{n} em stock",
        "all_ok": "✅ Tudo em dia.", "done": "Feito ✅", "late": "em atraso há {d}",
    },
    "en": {
        "d1": "1 day", "dn": "{n} days", "overdue": "⚠️ Overdue ({c}): {items}", "ago": "{d} ago",
        "soon": "🔜 Due soon ({c}): {items}", "today": "today", "in": "in {d}",
        "warr": "🛡️ Warranties expiring ({c}): {items}", "left": "{d} left",
        "parts": "📦 Parts to reorder ({c}): {items}", "stock": "{n} in stock",
        "all_ok": "✅ All up to date.", "done": "Done ✅", "late": "overdue by {d}",
    },
    "es": {
        "d1": "1 día", "dn": "{n} días", "overdue": "⚠️ Atrasadas ({c}): {items}", "ago": "hace {d}",
        "soon": "🔜 Próximas ({c}): {items}", "today": "hoy", "in": "en {d}",
        "warr": "🛡️ Garantías por acabar ({c}): {items}", "left": "faltan {d}",
        "parts": "📦 Piezas a reponer ({c}): {items}", "stock": "{n} en stock",
        "all_ok": "✅ Todo al día.", "done": "Hecho ✅", "late": "atrasada {d}",
    },
    "fr": {
        "d1": "1 jour", "dn": "{n} jours", "overdue": "⚠️ En retard ({c}) : {items}", "ago": "il y a {d}",
        "soon": "🔜 Bientôt ({c}) : {items}", "today": "aujourd'hui", "in": "dans {d}",
        "warr": "🛡️ Garanties bientôt expirées ({c}) : {items}", "left": "encore {d}",
        "parts": "📦 Pièces à recommander ({c}) : {items}", "stock": "{n} en stock",
        "all_ok": "✅ Tout est à jour.", "done": "Fait ✅", "late": "en retard de {d}",
    },
    "de": {
        "d1": "1 Tag", "dn": "{n} Tage", "dnd": "{n} Tagen", "overdue": "⚠️ Überfällig ({c}): {items}", "ago": "vor {d}",
        "soon": "🔜 Bald fällig ({c}): {items}", "today": "heute", "in": "in {d}",
        "warr": "🛡️ Garantien laufen ab ({c}): {items}", "left": "noch {d}",
        "parts": "📦 Teile nachbestellen ({c}): {items}", "stock": "{n} auf Lager",
        "all_ok": "✅ Alles aktuell.", "done": "Erledigt ✅", "late": "seit {d} überfällig",
    },
    "it": {
        "d1": "1 giorno", "dn": "{n} giorni", "overdue": "⚠️ In ritardo ({c}): {items}", "ago": "{d} fa",
        "soon": "🔜 In scadenza ({c}): {items}", "today": "oggi", "in": "tra {d}",
        "warr": "🛡️ Garanzie in scadenza ({c}): {items}", "left": "mancano {d}",
        "parts": "📦 Ricambi da riordinare ({c}): {items}", "stock": "{n} in magazzino",
        "all_ok": "✅ Tutto in regola.", "done": "Fatto ✅", "late": "in ritardo di {d}",
    },
    "ru": {
        "d1": "1 день", "dn": "{n} дн.", "overdue": "⚠️ Просрочено ({c}): {items}", "ago": "{d} назад",
        "soon": "🔜 Скоро срок ({c}): {items}", "today": "сегодня", "in": "через {d}",
        "warr": "🛡️ Гарантия заканчивается ({c}): {items}", "left": "осталось {d}",
        "parts": "📦 Нужно заказать запчасти ({c}): {items}", "stock": "{n} на складе",
        "all_ok": "✅ Всё в порядке.", "done": "Готово ✅", "late": "просрочено на {d}",
    },
    "zh": {
        "d1": "1 天", "dn": "{n} 天", "overdue": "⚠️ 已逾期（{c}）：{items}", "ago": "{d}前",
        "soon": "🔜 即将到期（{c}）：{items}", "today": "今天", "in": "{d}后",
        "warr": "🛡️ 保修即将到期（{c}）：{items}", "left": "还剩 {d}",
        "parts": "📦 需补货的配件（{c}）：{items}", "stock": "库存 {n}",
        "all_ok": "✅ 一切正常。", "done": "完成 ✅", "late": "已逾期 {d}",
    },
}


def lang_of(code: str | None) -> str:
    base = (code or "pt").lower().replace("_", "-").split("-")[0]
    return base if base in MSG else "en"


def tr(lang: str, key: str, **kw) -> str:
    table = MSG.get(lang_of(lang), MSG["en"])
    return table.get(key, MSG["en"][key]).format(**kw)


def days(lang: str, n: int, dat: bool = False) -> str:
    """'3 dias'. dat=True usa o dativo (alemão: 'vor 3 Tagen')."""
    n = abs(int(n))
    if n == 1:
        return tr(lang, "d1")
    table = MSG.get(lang_of(lang), MSG["en"])
    return tr(lang, "dnd" if dat and "dnd" in table else "dn", n=n)
