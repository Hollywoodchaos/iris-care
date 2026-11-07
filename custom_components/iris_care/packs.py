"""Pacotes de rotinas prontas (Portugal). Textos em 8 idiomas; recurso: inglês."""
from __future__ import annotations

from typing import Any

from .messages import lang_of

LANGS = ("pt", "en", "es", "fr", "de", "it", "ru", "zh")

# chave, pt, en, es, fr, de, it, ru, zh
_TXT: list[tuple[str, ...]] = [
    # ---- pacotes
    ("pk_seg", "Segurança em casa", "Home safety", "Seguridad en casa", "Sécurité à la maison", "Sicherheit zu Hause", "Sicurezza in casa", "Безопасность дома", "家庭安全"),
    ("pk_seg_d", "Detetores, extintor e primeiros socorros.", "Detectors, extinguisher and first aid.", "Detectores, extintor y primeros auxilios.", "Détecteurs, extincteur et premiers secours.", "Melder, Feuerlöscher und Erste Hilfe.", "Rilevatori, estintore e primo soccorso.", "Датчики, огнетушитель и аптечка.", "探测器、灭火器和急救用品。"),
    ("eq_seg", "Segurança em casa", "Home safety", "Seguridad en casa", "Sécurité à la maison", "Sicherheit zu Hause", "Sicurezza in casa", "Безопасность дома", "家庭安全"),
    ("pk_casa", "Casa ao longo do ano", "Home through the year", "La casa durante el año", "La maison au fil de l'année", "Haus im Jahresverlauf", "Casa durante l'anno", "Дом в течение года", "全年家居维护"),
    ("pk_casa_d", "Caleiras, telhado, quadro elétrico e mudança de hora.", "Gutters, roof, electrical panel and clock change.", "Canalones, tejado, cuadro eléctrico y cambio de hora.", "Gouttières, toit, tableau électrique et changement d'heure.", "Dachrinnen, Dach, Sicherungskasten und Zeitumstellung.", "Grondaie, tetto, quadro elettrico e cambio d'ora.", "Водостоки, крыша, электрощит и смена времени.", "排水沟、屋顶、配电箱和换时。"),
    ("eq_casa", "Casa", "Home", "Casa", "Maison", "Haus", "Casa", "Дом", "房屋"),
    ("pk_car", "Carro", "Car", "Coche", "Voiture", "Auto", "Auto", "Автомобиль", "汽车"),
    ("pk_car_d", "Inspeção, seguro, IUC, óleo, pneus e travões.", "Inspection, insurance, road tax, oil, tyres and brakes.", "ITV, seguro, impuesto, aceite, neumáticos y frenos.", "Contrôle technique, assurance, taxe, huile, pneus et freins.", "TÜV, Versicherung, Steuer, Öl, Reifen und Bremsen.", "Revisione, assicurazione, bollo, olio, gomme e freni.", "Техосмотр, страховка, налог, масло, шины и тормоза.", "年检、保险、车船税、机油、轮胎和刹车。"),
    ("eq_car", "Carro", "Car", "Coche", "Voiture", "Auto", "Auto", "Автомобиль", "汽车"),
    ("pk_heat", "Aquecimento e gás", "Heating and gas", "Calefacción y gas", "Chauffage et gaz", "Heizung und Gas", "Riscaldamento e gas", "Отопление и газ", "取暖与燃气"),
    ("pk_heat_d", "Caldeira, instalação de gás, chaminé e radiadores.", "Boiler, gas installation, chimney and radiators.", "Caldera, instalación de gas, chimenea y radiadores.", "Chaudière, installation de gaz, cheminée et radiateurs.", "Heizkessel, Gasanlage, Kamin und Heizkörper.", "Caldaia, impianto gas, camino e termosifoni.", "Котёл, газовая система, дымоход и радиаторы.", "锅炉、燃气设施、烟囱和暖气片。"),
    ("eq_heat", "Aquecimento e gás", "Heating and gas", "Calefacción y gas", "Chauffage et gaz", "Heizung und Gas", "Riscaldamento e gas", "Отопление и газ", "取暖与燃气"),
    ("pk_ac", "Ar condicionado", "Air conditioning", "Aire acondicionado", "Climatisation", "Klimaanlage", "Aria condizionata", "Кондиционер", "空调"),
    ("pk_ac_d", "Filtros, revisão anual e unidade exterior.", "Filters, yearly service and outdoor unit.", "Filtros, revisión anual y unidad exterior.", "Filtres, entretien annuel et unité extérieure.", "Filter, jährliche Wartung und Außengerät.", "Filtri, revisione annuale e unità esterna.", "Фильтры, ежегодное обслуживание и наружный блок.", "滤网、年度保养和室外机。"),
    ("eq_ac", "Ar condicionado", "Air conditioning", "Aire acondicionado", "Climatisation", "Klimaanlage", "Aria condizionata", "Кондиционер", "空调"),
    ("pk_sol", "Painéis solares e baterias", "Solar panels and batteries", "Paneles solares y baterías", "Panneaux solaires et batteries", "Solarmodule und Batterien", "Pannelli solari e batterie", "Солнечные панели и батареи", "太阳能板和电池"),
    ("pk_sol_d", "Limpeza, inspeção, inversor e teste das baterias.", "Cleaning, inspection, inverter and battery test.", "Limpieza, inspección, inversor y prueba de baterías.", "Nettoyage, inspection, onduleur et test des batteries.", "Reinigung, Inspektion, Wechselrichter und Batterietest.", "Pulizia, ispezione, inverter e test delle batterie.", "Чистка, осмотр, инвертор и проверка батарей.", "清洁、检查、逆变器和电池测试。"),
    ("eq_sol", "Instalação solar", "Solar system", "Instalación solar", "Installation solaire", "Solaranlage", "Impianto solare", "Солнечная система", "太阳能系统"),
    # ---- segurança
    ("r_fumo", "Testar os detetores de fumo", "Test the smoke detectors", "Probar los detectores de humo", "Tester les détecteurs de fumée", "Rauchmelder testen", "Testare i rilevatori di fumo", "Проверить датчики дыма", "测试烟雾探测器"),
    ("r_pilhas", "Trocar as pilhas dos detetores", "Replace detector batteries", "Cambiar las pilas de los detectores", "Changer les piles des détecteurs", "Batterien der Melder wechseln", "Cambiare le batterie dei rilevatori", "Заменить батарейки датчиков", "更换探测器电池"),
    ("r_co", "Testar o detetor de monóxido de carbono", "Test the carbon monoxide detector", "Probar el detector de monóxido de carbono", "Tester le détecteur de monoxyde de carbone", "Kohlenmonoxidmelder testen", "Testare il rilevatore di monossido di carbonio", "Проверить датчик угарного газа", "测试一氧化碳探测器"),
    ("r_ext", "Rever o extintor (pressão e validade)", "Check the extinguisher (pressure and expiry)", "Revisar el extintor (presión y caducidad)", "Vérifier l'extincteur (pression et validité)", "Feuerlöscher prüfen (Druck und Ablaufdatum)", "Controllare l'estintore (pressione e scadenza)", "Проверить огнетушитель (давление и срок)", "检查灭火器（压力和有效期）"),
    ("r_kit", "Rever o kit de primeiros socorros", "Check the first-aid kit", "Revisar el botiquín", "Vérifier la trousse de secours", "Erste-Hilfe-Set prüfen", "Controllare la cassetta di pronto soccorso", "Проверить аптечку", "检查急救包"),
    # ---- casa
    ("r_hora", "Mudança de hora: rever relógios e detetores", "Clock change: check clocks and detectors", "Cambio de hora: revisar relojes y detectores", "Changement d'heure : vérifier horloges et détecteurs", "Zeitumstellung: Uhren und Melder prüfen", "Cambio d'ora: controllare orologi e rilevatori", "Смена времени: проверить часы и датчики", "换时：检查时钟和探测器"),
    ("r_caleiras", "Limpar caleiras e algerozes", "Clean gutters and downpipes", "Limpiar canalones y bajantes", "Nettoyer gouttières et descentes", "Dachrinnen und Fallrohre reinigen", "Pulire grondaie e pluviali", "Почистить водостоки", "清理排水沟和落水管"),
    ("r_telhado", "Verificar o telhado e as telhas", "Check the roof and tiles", "Revisar el tejado y las tejas", "Vérifier le toit et les tuiles", "Dach und Ziegel prüfen", "Controllare il tetto e le tegole", "Проверить крышу и черепицу", "检查屋顶和瓦片"),
    ("r_dif", "Testar o disjuntor diferencial", "Test the residual-current breaker", "Probar el diferencial", "Tester le disjoncteur différentiel", "FI-Schutzschalter testen", "Testare l'interruttore differenziale", "Проверить УЗО", "测试漏电保护器"),
    ("r_agua", "Mudar o filtro de água", "Change the water filter", "Cambiar el filtro de agua", "Changer le filtre à eau", "Wasserfilter wechseln", "Cambiare il filtro dell'acqua", "Заменить фильтр для воды", "更换水过滤器"),
    ("r_sifoes", "Limpar sifões e ralos", "Clean traps and drains", "Limpiar sifones y desagües", "Nettoyer siphons et avaloirs", "Siphons und Abflüsse reinigen", "Pulire sifoni e scarichi", "Почистить сифоны и сливы", "清洁存水弯和地漏"),
    # ---- carro
    # ---- aquecimento
    # ---- ar condicionado
    # ---- solar
]

TEXT: dict[str, dict[str, str]] = {lg: {} for lg in LANGS}
for _row in _TXT:
    assert len(_row) == 9, _row[0]
    for _i, _lg in enumerate(LANGS):
        TEXT[_lg][_row[0]] = _row[_i + 1]


def _iv(every: int, unit: str) -> dict[str, Any]:
    return {"type": "interval", "every": every, "unit": unit}


PACKS: list[dict[str, Any]] = [
    {
        "id": "seguranca", "icon": "🧯", "tier": "free",
        "title": "pk_seg", "desc": "pk_seg_d", "equipment": "eq_seg",
        "routines": [
            ("r_fumo", _iv(6, "months")), ("r_pilhas", _iv(1, "years")), ("r_co", _iv(6, "months")),
            ("r_ext", _iv(1, "years")), ("r_kit", _iv(1, "years")),
        ],
    },
    {
        "id": "casa", "icon": "🏡", "tier": "free",
        "title": "pk_casa", "desc": "pk_casa_d", "equipment": "eq_casa",
        "routines": [
            ("r_hora", {"type": "clock_change", "which": ["autumn", "spring"]}),
            ("r_caleiras", {"type": "months", "months": [3, 10]}),
            ("r_telhado", {"type": "months", "months": [4]}),
            ("r_dif", _iv(6, "months")), ("r_agua", _iv(6, "months")), ("r_sifoes", _iv(3, "months")),
        ],
    },
    {
        "id": "carro", "icon": "🚗", "tier": "pro",
        "title": "pk_car", "desc": "pk_car_d", "equipment": "eq_car",
        "routines": [],
    },
    {
        "id": "aquecimento", "icon": "🔥", "tier": "pro",
        "title": "pk_heat", "desc": "pk_heat_d", "equipment": "eq_heat",
        "routines": [],
    },
    {
        "id": "ar", "icon": "❄️", "tier": "pro",
        "title": "pk_ac", "desc": "pk_ac_d", "equipment": "eq_ac",
        "routines": [],
    },
    {
        "id": "solar", "icon": "☀️", "tier": "pro",
        "title": "pk_sol", "desc": "pk_sol_d", "equipment": "eq_sol",
        "routines": [],
    },
]

from .const import PRO

# Na edição Free os pacotes Pro aparecem bloqueados.
PRO_ENFORCED = not PRO


def text(lang: str, key: str) -> str:
    lg = lang_of(lang)
    return TEXT.get(lg, TEXT["en"]).get(key) or TEXT["en"][key]


def pack_by_id(pack_id: str) -> dict[str, Any]:
    for p in PACKS:
        if p["id"] == pack_id:
            return p
    raise ValueError("pacote inexistente")


def localized(lang: str, unlocked: bool = False) -> list[dict[str, Any]]:
    out = []
    for p in PACKS:
        out.append(
            {
                "id": p["id"], "icon": p["icon"], "tier": p["tier"],
                "locked": bool(PRO_ENFORCED and p["tier"] == "pro" and not unlocked),
                "title": text(lang, p["title"]), "desc": text(lang, p["desc"]),
                "equipment": text(lang, p["equipment"]),
                "routines": [{"name": text(lang, k), "schedule": s} for k, s in p["routines"]],
            }
        )
    return out
