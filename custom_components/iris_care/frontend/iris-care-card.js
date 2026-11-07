/* Iris Care – cartão para dashboard (v0.7.0) – Eletro Solar Basto */
// Idiomas: pt (base), en, es, fr, de, it. Escolhido pelo idioma do utilizador no HA; recurso: inglês.
const I18N = {
  pt: {
    scan_dup: "Esta fatura ({0}) já foi registada em: {1}.\n\nRegistar outra vez mesmo assim?", scan_searching: "A procurar QR code…",
    dsp_title: "Registar na Despesas", dsp_loading: "A consultar a Despesas…", dsp_known: "Loja já conhecida na Despesas", dsp_new: "Loja nova: indica o nome e a categoria", dsp_supplier: "Fornecedor", dsp_category: "Categoria", dsp_payment: "Forma de pagamento", dsp_amount: "Valor", dsp_register: "Registar na Despesas", dsp_skip: "Agora não", dsp_ok: "Registado na Despesas: {0} · {1}", dsp_dup: "Esta fatura já está na Despesas (#{0}, {1}). Não foi registada outra vez.", dsp_err: "Não consegui registar na Despesas.", dsp_need: "Indica o fornecedor e a categoria.", dsp_pick: "Escolhe a loja",
    packs_btn: "Pacotes de rotinas", packs_title: "Pacotes de rotinas", packs_intro: "Escolhe um pacote e a Iris cria o equipamento e as rotinas habituais.", packs_n: "{0} rotinas", packs_have: "{0} já criadas", packs_add: "Adicionar pacote", packs_back: "Pacotes", packs_done: "Criadas {0} rotinas em «{1}». Já existiam {2}.", packs_hint: "As rotinas começam a contar hoje. Depois, em cada uma, acerta a data da última vez para a Iris calcular a próxima certa.", packs_all: "Este pacote já está completo.", packs_add_n: "Adicionar {0} rotinas", packs_pick: "Escolhe as rotinas que queres. As outras não são criadas.", grp_equip: "Por equipamento", grp_status: "Por estado", grp_none: "Sem equipamento",
    scan_qr: 'Ler QR da fatura', scan_point: 'Aponta a câmara ao QR da fatura', scan_ok: 'Fatura lida: {0}', scan_fail: 'Não consegui ler o QR. Tenta com mais luz e o código bem enquadrado.', scan_paste: 'Cola aqui o texto do QR da fatura', f_price: 'Valor da compra', k_price: 'Valor',
    f_notify_to: "Quem recebe os avisos", h_notify_to: "Só aparecem telemóveis (os tablets ficam de fora). Marca um, vários ou todos. Sem nada marcado, avisa todos.",
    tab_routines: "Rotinas", tab_equipment: "Equipamentos", tab_parts: "Peças", tab_history: "Histórico", tab_settings: "Definições",
    st_overdue: "Em atraso", st_due_soon: "A vencer", st_snoozed: "Adiadas", st_no_schedule: "Sem agenda", st_on_track: "Em dia", st_paused: "Pausadas", st_done: "Concluídas",
    f_all: "Todas", f_overdue: "Atraso", f_nodate: "Sem data",
    unit_days: "dia|dias", unit_weeks: "semana|semanas", unit_months: "mês|meses", unit_years: "ano|anos",
    sd_1_days: "todos os dias", sd_1_weeks: "todas as semanas", sd_1_months: "todos os meses", sd_1_years: "todos os anos",
    sd_n: "de {0} em {0} {1}", sd_months: "em {0}", sd_once: "a {0}", sd_yearly: "todos os anos a {0}", sd_clock: "nas mudanças de hora ({0})", spring: "primavera", autumn: "outono", and: " e ",
    w_paused: "pausada", w_done: "concluída", w_snoozed: "adiada", w_nosched: "sem próxima data", w_today: "hoje", w_tomorrow: "amanhã",
    w_ago1: "há 1 dia", w_agod: "há {0} dias", w_agom: "há {0} meses", w_ind: "em {0} dias", w_inm: "em {0} meses",
    e_load: "Não foi possível ler os dados. A integração Iris Care está instalada?", e_generic: "Erro", loading: "A carregar…",
    sending: "A enviar…", sent: "Aviso enviado.", not_sent: "Nada foi enviado. Escolhe primeiro o telemóvel em Configurar.", err: "Erro: {0}",
    confirm_undo: "Anular este registo? O stock das peças volta e a data da rotina é reposta.",
    name_req: "O nome é obrigatório.", pick_date: "Escolhe a data.",
    del_eq: "Eliminar este equipamento e todas as suas rotinas? O histórico mantém-se.", del_part: "Eliminar esta peça?", del_routine: "Eliminar esta rotina? O histórico mantém-se.",
    default_title: "Care", add_routine: "Rotina", add_equipment: "Equipamento", add_part: "Peça",
    search: "Pesquisar rotinas", no_routines: "Ainda não tens rotinas.<br>Cria a primeira em Ferramentas de programador → Ações → <b>iris_care.add_routine</b>.", not_found: "Nada encontrado.",
    mark_done: "Marcar como feito", no_loc: "Sem localização", cnt_routines: "{0} rotina|{0} rotinas",
    b_expired: "Sem garantia", b_expiring: "Garantia a expirar",
    no_eq: "Ainda não tens equipamentos.<br>Cria com <b>iris_care.add_equipment</b>.", no_parts: "Ainda não tens peças.<br>Cria com <b>iris_care.add_part</b>.",
    reorder_from: "repor a partir de {0}", less: "Menos", more: "Mais",
    s_alerts: "Avisos", s_routine_days: "Rotinas: avisar com (dias)", s_routine_hint: "Uma rotina passa a \"A vencer\" quando faltam estes dias ou menos.",
    s_warr_days: "Garantias: avisar com (dias)", s_warr_hint: "A garantia passa a \"A expirar\" quando faltam estes dias ou menos.",
    s_notif: "Notificações no telemóvel", s_notif_hint: "O telemóvel e a hora do aviso diário escolhem-se em Definições → Dispositivos e serviços → Iris Care → Configurar.", s_send: "Enviar aviso agora",
    no_history: "Ainda não há registos.<br>Marca uma rotina como feita para aparecer aqui.", undo_aria: "Anular registo",
    new_eq: "Novo equipamento", edit_eq: "Editar equipamento", new_part: "Nova peça", edit_part: "Editar peça", new_routine: "Nova rotina", edit_routine: "Editar rotina",
    none: "— nenhum —",
    f_name: "Nome", ph_eq_name: "ex.: Frigorífico", f_location: "Local", ph_location: "ex.: Cozinha", f_category: "Categoria", f_brand: "Marca", f_model: "Modelo", f_serial: "Nº de série",
    sec_purchase: "Compra e garantia", f_purchased: "Data da compra", f_installed: "Data de instalação", f_warranty_m: "Garantia (meses)", ph_36: "ex.: 36",
    h_warranty: "A garantia conta a partir da data da compra. A Iris avisa quando estiver a acabar.", f_store: "Loja", f_order: "Nº encomenda / fatura", f_phone: "Telefone", f_email: "Email", f_notes: "Notas",
    ph_part_name: "ex.: Filtro de água", f_equipment_opt: "Equipamento (opcional)", f_stock: "Em stock", f_reorder: "Repor a partir de", optional: "opcional", f_partno: "Nº da peça / referência",
    f_every: "A cada", f_unit: "Unidade", f_months: "Meses", h_months: "Vence no dia 1 de cada mês escolhido. Escolhe vários para o que se faz duas vezes por ano.",
    f_date: "Data", f_repeat: "Repete", r_yearly: "Todos os anos", r_once: "Só uma vez", h_once: "Depois de feita, fica em Concluídas e podes eliminá-la.", h_yearly: "Todos os anos usa o dia e o mês e ignora o ano.",
    f_when: "Quando", spring_m: "Primavera (março)", autumn_m: "Outono (outubro)", h_clock: "Mudança de hora da Europa (último domingo de março e de outubro). Marca as duas para o que se faz duas vezes por ano, como as pilhas dos detetores de fumo.",
    f_parts_used: "Peças que usa", h_parts_deduct: "Ao marcar a rotina como feita, a Iris tira estas peças do stock.", ph_routine: "ex.: Substituir filtro de água", f_equipment: "Equipamento",
    f_schedule: "Agenda", s_interval: "Repete de X em X tempo", s_months: "Em certos meses", s_date: "Numa data", s_clock: "Nas mudanças de hora",
    f_last: "Última vez que foi feita", h_last: "Deixa vazio se nunca foi feita. Numa rotina de X em X tempo, vence logo.",
    f_remind: "Avisar no telemóvel até estar feita", f_remind_at: "Avisar às", f_repeat_every: "Repetir", rp_0: "Não repetir", rp_15: "De 15 em 15 min", rp_30: "De 30 em 30 min", rp_60: "De hora em hora", rp_120: "De 2 em 2 horas", rp_240: "De 4 em 4 horas",
    f_remind_until: "Parar de avisar às (opcional)", h_remind: "Só avisa quando a rotina estiver para hoje ou em atraso, e pára assim que a marcares como feita. Na notificação aparece o botão Feito. Usa o telemóvel escolhido em Configurar.",
    close: "Fechar", edit: "Editar", delete: "Eliminar", cancel: "Cancelar", save: "Guardar",
    k_location: "Local", k_category: "Categoria", k_brand: "Marca", k_model: "Modelo", k_serial: "Nº série", k_bought: "Comprado", k_installed: "Instalado", k_warranty: "Garantia", k_store: "Loja", k_order: "Nº encomenda", k_phone: "Telefone", k_email: "Email", k_notes: "Notas",
    war_expired: "expirou há {0} dias", war_today: "expira hoje", war_left: "faltam {0} dias", sec_routines: "Rotinas", no_routines_eq: "Sem rotinas.",
    done_once: "Rotina de uma só vez, já concluída. Podes eliminá-la em Editar (✎).",
    k_equipment: "Equipamento", k_schedule: "Agenda", k_last: "Última vez", never: "nunca", k_next: "Próxima", k_remind: "Aviso",
    rm_at: "às {0}", rm_rep_h: ", repete de {0} em {0} h", rm_rep_m: ", repete de {0} em {0} min", rm_until: " até às {0}",
    sec_register: "Registar", f_done_on: "Feito em", f_cost: "Custo ({0})", f_parts_used2: "Peças usadas", in_stock: "{0} em stock", h_parts_used: "A Iris tira estas peças do stock. Nunca tira mais do que tens.",
    mark_done_btn: "Marcar feito", sec_snooze: "Adiar", sn_3: "3 dias", sn_7: "1 sem.", sn_14: "2 sem.", sn_30: "1 mês", cancel_snooze: "Cancelar adiamento", resume: "Retomar esta rotina", pause: "Pausar esta rotina (deixa de contar como atraso)",
    card_desc: "Rotinas, equipamentos, peças e histórico de manutenção.",
  },
  en: {
    scan_dup: "This invoice ({0}) was already registered in: {1}.\n\nRegister it again anyway?", scan_searching: "Looking for QR code…",
    dsp_title: "Record in Expenses", dsp_loading: "Checking Expenses…", dsp_known: "Shop already known in Expenses", dsp_new: "New shop: enter its name and category", dsp_supplier: "Supplier", dsp_category: "Category", dsp_payment: "Payment method", dsp_amount: "Amount", dsp_register: "Record in Expenses", dsp_skip: "Not now", dsp_ok: "Recorded in Expenses: {0} · {1}", dsp_dup: "This invoice is already in Expenses (#{0}, {1}). It was not recorded again.", dsp_err: "Could not record it in Expenses.", dsp_need: "Enter the supplier and the category.", dsp_pick: "Choose the shop",
    packs_btn: "Routine packs", packs_title: "Routine packs", packs_intro: "Pick a pack and Iris creates the equipment and the usual routines.", packs_n: "{0} routines", packs_have: "{0} already created", packs_add: "Add pack", packs_back: "Packs", packs_done: "Created {0} routines in “{1}”. {2} already existed.", packs_hint: "Routines start counting today. Then, in each one, set the date it was last done so Iris works out the right next date.", packs_all: "This pack is already complete.", packs_add_n: "Add {0} routines", packs_pick: "Pick the routines you want. The others are not created.", grp_equip: "By equipment", grp_status: "By status", grp_none: "No equipment",
    scan_qr: 'Scan invoice QR', scan_point: 'Point the camera at the invoice QR code', scan_ok: 'Invoice read: {0}', scan_fail: 'Could not read the QR. Try with more light and the code well framed.', scan_paste: 'Paste the invoice QR text here', f_price: 'Purchase price', k_price: 'Price',
    f_notify_to: "Who gets the alerts", h_notify_to: "Only phones are listed (tablets are left out). Tick one, several or all. With none ticked, everyone is notified.",
    tab_routines: "Routines", tab_equipment: "Equipment", tab_parts: "Parts", tab_history: "History", tab_settings: "Settings",
    st_overdue: "Overdue", st_due_soon: "Due soon", st_snoozed: "Snoozed", st_no_schedule: "No schedule", st_on_track: "On track", st_paused: "Paused", st_done: "Completed",
    f_all: "All", f_overdue: "Overdue", f_nodate: "No date",
    unit_days: "day|days", unit_weeks: "week|weeks", unit_months: "month|months", unit_years: "year|years",
    sd_1_days: "every day", sd_1_weeks: "every week", sd_1_months: "every month", sd_1_years: "every year",
    sd_n: "every {0} {1}", sd_months: "in {0}", sd_once: "on {0}", sd_yearly: "every year on {0}", sd_clock: "at clock changes ({0})", spring: "spring", autumn: "autumn", and: " and ",
    w_paused: "paused", w_done: "completed", w_snoozed: "snoozed", w_nosched: "no next date", w_today: "today", w_tomorrow: "tomorrow",
    w_ago1: "1 day ago", w_agod: "{0} days ago", w_agom: "{0} months ago", w_ind: "in {0} days", w_inm: "in {0} months",
    e_load: "Could not read the data. Is the Iris Maintenance integration installed?", e_generic: "Error", loading: "Loading…",
    sending: "Sending…", sent: "Notification sent.", not_sent: "Nothing was sent. Choose your phone first under Configure.", err: "Error: {0}",
    confirm_undo: "Undo this entry? Part stock is restored and the routine date is reset.",
    name_req: "Name is required.", pick_date: "Pick a date.",
    del_eq: "Delete this equipment and all its routines? History is kept.", del_part: "Delete this part?", del_routine: "Delete this routine? History is kept.",
    default_title: "Care", add_routine: "Routine", add_equipment: "Equipment", add_part: "Part",
    search: "Search routines", no_routines: "You have no routines yet.<br>Create the first one in Developer tools → Actions → <b>iris_care.add_routine</b>.", not_found: "Nothing found.",
    mark_done: "Mark as done", no_loc: "No location", cnt_routines: "{0} routine|{0} routines",
    b_expired: "Out of warranty", b_expiring: "Warranty expiring",
    no_eq: "You have no equipment yet.<br>Create it with <b>iris_care.add_equipment</b>.", no_parts: "You have no parts yet.<br>Create them with <b>iris_care.add_part</b>.",
    reorder_from: "reorder at {0}", less: "Less", more: "More",
    s_alerts: "Alerts", s_routine_days: "Routines: warn within (days)", s_routine_hint: "A routine becomes \"Due soon\" when this many days or fewer remain.",
    s_warr_days: "Warranties: warn within (days)", s_warr_hint: "A warranty becomes \"Expiring\" when this many days or fewer remain.",
    s_notif: "Phone notifications", s_notif_hint: "Choose the phone and the daily notification time under Settings → Devices & services → Iris Maintenance → Configure.", s_send: "Send notification now",
    no_history: "No records yet.<br>Mark a routine as done and it will show up here.", undo_aria: "Undo entry",
    new_eq: "New equipment", edit_eq: "Edit equipment", new_part: "New part", edit_part: "Edit part", new_routine: "New routine", edit_routine: "Edit routine",
    none: "— none —",
    f_name: "Name", ph_eq_name: "e.g. Fridge", f_location: "Location", ph_location: "e.g. Kitchen", f_category: "Category", f_brand: "Brand", f_model: "Model", f_serial: "Serial no.",
    sec_purchase: "Purchase and warranty", f_purchased: "Purchase date", f_installed: "Installation date", f_warranty_m: "Warranty (months)", ph_36: "e.g. 36",
    h_warranty: "The warranty counts from the purchase date. Iris warns you when it is about to end.", f_store: "Store", f_order: "Order / invoice no.", f_phone: "Phone", f_email: "Email", f_notes: "Notes",
    ph_part_name: "e.g. Water filter", f_equipment_opt: "Equipment (optional)", f_stock: "In stock", f_reorder: "Reorder at", optional: "optional", f_partno: "Part number / reference",
    f_every: "Every", f_unit: "Unit", f_months: "Months", h_months: "Due on the 1st of each chosen month. Pick several for things done twice a year.",
    f_date: "Date", f_repeat: "Repeats", r_yearly: "Every year", r_once: "Only once", h_once: "Once done it moves to Completed and you can delete it.", h_yearly: "Every year uses the day and month and ignores the year.",
    f_when: "When", spring_m: "Spring (March)", autumn_m: "Autumn (October)", h_clock: "European clock change (last Sunday of March and October). Tick both for things done twice a year, like smoke detector batteries.",
    f_parts_used: "Parts it uses", h_parts_deduct: "When you mark the routine as done, Iris takes these parts out of stock.", ph_routine: "e.g. Replace water filter", f_equipment: "Equipment",
    f_schedule: "Schedule", s_interval: "Repeats every X time", s_months: "In certain months", s_date: "On a date", s_clock: "At clock changes",
    f_last: "Last time it was done", h_last: "Leave empty if never done. For an every-X routine it is due right away.",
    f_remind: "Notify my phone until it is done", f_remind_at: "Notify at", f_repeat_every: "Repeat", rp_0: "Don't repeat", rp_15: "Every 15 min", rp_30: "Every 30 min", rp_60: "Every hour", rp_120: "Every 2 hours", rp_240: "Every 4 hours",
    f_remind_until: "Stop notifying at (optional)", h_remind: "Only notifies when the routine is due today or overdue, and stops once you mark it as done. The notification has a Done button. Uses the phone chosen under Configure.",
    close: "Close", edit: "Edit", delete: "Delete", cancel: "Cancel", save: "Save",
    k_location: "Location", k_category: "Category", k_brand: "Brand", k_model: "Model", k_serial: "Serial no.", k_bought: "Bought", k_installed: "Installed", k_warranty: "Warranty", k_store: "Store", k_order: "Order no.", k_phone: "Phone", k_email: "Email", k_notes: "Notes",
    war_expired: "expired {0} days ago", war_today: "expires today", war_left: "{0} days left", sec_routines: "Routines", no_routines_eq: "No routines.",
    done_once: "One-time routine, already completed. You can delete it under Edit (✎).",
    k_equipment: "Equipment", k_schedule: "Schedule", k_last: "Last time", never: "never", k_next: "Next", k_remind: "Alert",
    rm_at: "at {0}", rm_rep_h: ", repeats every {0} h", rm_rep_m: ", repeats every {0} min", rm_until: " until {0}",
    sec_register: "Log it", f_done_on: "Done on", f_cost: "Cost ({0})", f_parts_used2: "Parts used", in_stock: "{0} in stock", h_parts_used: "Iris takes these parts out of stock. It never takes more than you have.",
    mark_done_btn: "Mark as done", sec_snooze: "Snooze", sn_3: "3 days", sn_7: "1 wk", sn_14: "2 wk", sn_30: "1 mo", cancel_snooze: "Cancel snooze", resume: "Resume this routine", pause: "Pause this routine (stops counting as overdue)",
    card_desc: "Maintenance routines, equipment, parts and history.",
  },
  es: {
    scan_dup: "Esta factura ({0}) ya está registrada en: {1}.\n\n¿Registrarla otra vez de todos modos?", scan_searching: "Buscando código QR…",
    dsp_title: "Registrar en Gastos", dsp_loading: "Consultando Gastos…", dsp_known: "Tienda ya conocida en Gastos", dsp_new: "Tienda nueva: indica el nombre y la categoría", dsp_supplier: "Proveedor", dsp_category: "Categoría", dsp_payment: "Forma de pago", dsp_amount: "Importe", dsp_register: "Registrar en Gastos", dsp_skip: "Ahora no", dsp_ok: "Registrado en Gastos: {0} · {1}", dsp_dup: "Esta factura ya está en Gastos (#{0}, {1}). No se registró otra vez.", dsp_err: "No pude registrar en Gastos.", dsp_need: "Indica el proveedor y la categoría.", dsp_pick: "Elige la tienda",
    packs_btn: "Paquetes de rutinas", packs_title: "Paquetes de rutinas", packs_intro: "Elige un paquete e Iris crea el equipo y las rutinas habituales.", packs_n: "{0} rutinas", packs_have: "{0} ya creadas", packs_add: "Añadir paquete", packs_back: "Paquetes", packs_done: "Creadas {0} rutinas en «{1}». Ya existían {2}.", packs_hint: "Las rutinas empiezan a contar hoy. Después, en cada una, ajusta la fecha de la última vez para que Iris calcule la próxima correcta.", packs_all: "Este paquete ya está completo.", packs_add_n: "Añadir {0} rutinas", packs_pick: "Elige las rutinas que quieras. Las demás no se crean.", grp_equip: "Por equipo", grp_status: "Por estado", grp_none: "Sin equipo",
    scan_qr: 'Leer QR de la factura', scan_point: 'Apunta la cámara al QR de la factura', scan_ok: 'Factura leída: {0}', scan_fail: 'No pude leer el QR. Prueba con más luz y el código bien encuadrado.', scan_paste: 'Pega aquí el texto del QR de la factura', f_price: 'Precio de compra', k_price: 'Precio',
    f_notify_to: "Quién recibe los avisos", h_notify_to: "Solo aparecen móviles (los tablets quedan fuera). Marca uno, varios o todos. Sin nada marcado, avisa a todos.",
    tab_routines: "Rutinas", tab_equipment: "Equipos", tab_parts: "Piezas", tab_history: "Historial", tab_settings: "Ajustes",
    st_overdue: "Atrasadas", st_due_soon: "Próximas", st_snoozed: "Aplazadas", st_no_schedule: "Sin agenda", st_on_track: "Al día", st_paused: "En pausa", st_done: "Completadas",
    f_all: "Todas", f_overdue: "Atraso", f_nodate: "Sin fecha",
    unit_days: "día|días", unit_weeks: "semana|semanas", unit_months: "mes|meses", unit_years: "año|años",
    sd_1_days: "todos los días", sd_1_weeks: "todas las semanas", sd_1_months: "todos los meses", sd_1_years: "todos los años",
    sd_n: "cada {0} {1}", sd_months: "en {0}", sd_once: "el {0}", sd_yearly: "todos los años el {0}", sd_clock: "en los cambios de hora ({0})", spring: "primavera", autumn: "otoño", and: " y ",
    w_paused: "en pausa", w_done: "completada", w_snoozed: "aplazada", w_nosched: "sin próxima fecha", w_today: "hoy", w_tomorrow: "mañana",
    w_ago1: "hace 1 día", w_agod: "hace {0} días", w_agom: "hace {0} meses", w_ind: "en {0} días", w_inm: "en {0} meses",
    e_load: "No se pudieron leer los datos. ¿Está instalada la integración Iris Mantenimiento?", e_generic: "Error", loading: "Cargando…",
    sending: "Enviando…", sent: "Aviso enviado.", not_sent: "No se envió nada. Elige primero el móvil en Configurar.", err: "Error: {0}",
    confirm_undo: "¿Anular este registro? El stock de piezas vuelve y se restablece la fecha de la rutina.",
    name_req: "El nombre es obligatorio.", pick_date: "Elige la fecha.",
    del_eq: "¿Eliminar este equipo y todas sus rutinas? El historial se conserva.", del_part: "¿Eliminar esta pieza?", del_routine: "¿Eliminar esta rutina? El historial se conserva.",
    default_title: "Care", add_routine: "Rutina", add_equipment: "Equipo", add_part: "Pieza",
    search: "Buscar rutinas", no_routines: "Aún no tienes rutinas.<br>Crea la primera en Herramientas para desarrolladores → Acciones → <b>iris_care.add_routine</b>.", not_found: "No se encontró nada.",
    mark_done: "Marcar como hecho", no_loc: "Sin ubicación", cnt_routines: "{0} rutina|{0} rutinas",
    b_expired: "Sin garantía", b_expiring: "Garantía por vencer",
    no_eq: "Aún no tienes equipos.<br>Créalos con <b>iris_care.add_equipment</b>.", no_parts: "Aún no tienes piezas.<br>Créalas con <b>iris_care.add_part</b>.",
    reorder_from: "reponer desde {0}", less: "Menos", more: "Más",
    s_alerts: "Avisos", s_routine_days: "Rutinas: avisar con (días)", s_routine_hint: "Una rutina pasa a \"Próxima\" cuando faltan estos días o menos.",
    s_warr_days: "Garantías: avisar con (días)", s_warr_hint: "La garantía pasa a \"Por vencer\" cuando faltan estos días o menos.",
    s_notif: "Notificaciones en el móvil", s_notif_hint: "El móvil y la hora del aviso diario se eligen en Ajustes → Dispositivos y servicios → Iris Mantenimiento → Configurar.", s_send: "Enviar aviso ahora",
    no_history: "Aún no hay registros.<br>Marca una rutina como hecha y aparecerá aquí.", undo_aria: "Anular registro",
    new_eq: "Nuevo equipo", edit_eq: "Editar equipo", new_part: "Nueva pieza", edit_part: "Editar pieza", new_routine: "Nueva rutina", edit_routine: "Editar rutina",
    none: "— ninguno —",
    f_name: "Nombre", ph_eq_name: "p. ej.: Frigorífico", f_location: "Lugar", ph_location: "p. ej.: Cocina", f_category: "Categoría", f_brand: "Marca", f_model: "Modelo", f_serial: "Nº de serie",
    sec_purchase: "Compra y garantía", f_purchased: "Fecha de compra", f_installed: "Fecha de instalación", f_warranty_m: "Garantía (meses)", ph_36: "p. ej.: 36",
    h_warranty: "La garantía cuenta desde la fecha de compra. Iris avisa cuando esté a punto de acabar.", f_store: "Tienda", f_order: "Nº pedido / factura", f_phone: "Teléfono", f_email: "Correo", f_notes: "Notas",
    ph_part_name: "p. ej.: Filtro de agua", f_equipment_opt: "Equipo (opcional)", f_stock: "En stock", f_reorder: "Reponer desde", optional: "opcional", f_partno: "Nº de pieza / referencia",
    f_every: "Cada", f_unit: "Unidad", f_months: "Meses", h_months: "Vence el día 1 de cada mes elegido. Elige varios para lo que se hace dos veces al año.",
    f_date: "Fecha", f_repeat: "Se repite", r_yearly: "Todos los años", r_once: "Solo una vez", h_once: "Una vez hecha, pasa a Completadas y puedes eliminarla.", h_yearly: "Cada año usa el día y el mes e ignora el año.",
    f_when: "Cuándo", spring_m: "Primavera (marzo)", autumn_m: "Otoño (octubre)", h_clock: "Cambio de hora de Europa (último domingo de marzo y de octubre). Marca las dos para lo que se hace dos veces al año, como las pilas de los detectores de humo.",
    f_parts_used: "Piezas que usa", h_parts_deduct: "Al marcar la rutina como hecha, Iris descuenta estas piezas del stock.", ph_routine: "p. ej.: Cambiar filtro de agua", f_equipment: "Equipo",
    f_schedule: "Agenda", s_interval: "Se repite cada X tiempo", s_months: "En ciertos meses", s_date: "En una fecha", s_clock: "En los cambios de hora",
    f_last: "Última vez que se hizo", h_last: "Déjalo vacío si nunca se hizo. En una rutina cada X tiempo, vence enseguida.",
    f_remind: "Avisar en el móvil hasta que esté hecha", f_remind_at: "Avisar a las", f_repeat_every: "Repetir", rp_0: "No repetir", rp_15: "Cada 15 min", rp_30: "Cada 30 min", rp_60: "Cada hora", rp_120: "Cada 2 horas", rp_240: "Cada 4 horas",
    f_remind_until: "Dejar de avisar a las (opcional)", h_remind: "Solo avisa cuando la rutina es para hoy o está atrasada, y para en cuanto la marcas como hecha. La notificación tiene el botón Hecho. Usa el móvil elegido en Configurar.",
    close: "Cerrar", edit: "Editar", delete: "Eliminar", cancel: "Cancelar", save: "Guardar",
    k_location: "Lugar", k_category: "Categoría", k_brand: "Marca", k_model: "Modelo", k_serial: "Nº serie", k_bought: "Comprado", k_installed: "Instalado", k_warranty: "Garantía", k_store: "Tienda", k_order: "Nº pedido", k_phone: "Teléfono", k_email: "Correo", k_notes: "Notas",
    war_expired: "expiró hace {0} días", war_today: "expira hoy", war_left: "faltan {0} días", sec_routines: "Rutinas", no_routines_eq: "Sin rutinas.",
    done_once: "Rutina de una sola vez, ya completada. Puedes eliminarla en Editar (✎).",
    k_equipment: "Equipo", k_schedule: "Agenda", k_last: "Última vez", never: "nunca", k_next: "Próxima", k_remind: "Aviso",
    rm_at: "a las {0}", rm_rep_h: ", repite cada {0} h", rm_rep_m: ", repite cada {0} min", rm_until: " hasta las {0}",
    sec_register: "Registrar", f_done_on: "Hecho el", f_cost: "Coste ({0})", f_parts_used2: "Piezas usadas", in_stock: "{0} en stock", h_parts_used: "Iris descuenta estas piezas del stock. Nunca descuenta más de las que hay.",
    mark_done_btn: "Marcar hecho", sec_snooze: "Aplazar", sn_3: "3 días", sn_7: "1 sem.", sn_14: "2 sem.", sn_30: "1 mes", cancel_snooze: "Cancelar aplazamiento", resume: "Reanudar esta rutina", pause: "Pausar esta rutina (deja de contar como atraso)",
    card_desc: "Rutinas, equipos, piezas e historial de mantenimiento.",
  },
  fr: {
    scan_dup: "Cette facture ({0}) est déjà enregistrée dans : {1}.\n\nL'enregistrer à nouveau quand même ?", scan_searching: "Recherche du code QR…",
    dsp_title: "Enregistrer dans Dépenses", dsp_loading: "Consultation de Dépenses…", dsp_known: "Magasin déjà connu dans Dépenses", dsp_new: "Nouveau magasin : indiquez le nom et la catégorie", dsp_supplier: "Fournisseur", dsp_category: "Catégorie", dsp_payment: "Mode de paiement", dsp_amount: "Montant", dsp_register: "Enregistrer dans Dépenses", dsp_skip: "Pas maintenant", dsp_ok: "Enregistré dans Dépenses : {0} · {1}", dsp_dup: "Cette facture est déjà dans Dépenses (#{0}, {1}). Elle n'a pas été enregistrée à nouveau.", dsp_err: "Impossible d'enregistrer dans Dépenses.", dsp_need: "Indiquez le fournisseur et la catégorie.", dsp_pick: "Choisissez le magasin",
    packs_btn: "Packs de routines", packs_title: "Packs de routines", packs_intro: "Choisissez un pack et Iris crée l'équipement et les routines habituelles.", packs_n: "{0} routines", packs_have: "{0} déjà créées", packs_add: "Ajouter le pack", packs_back: "Packs", packs_done: "{0} routines créées dans « {1} ». {2} existaient déjà.", packs_hint: "Les routines commencent à compter aujourd'hui. Ensuite, dans chacune, réglez la date de la dernière fois pour qu'Iris calcule la bonne prochaine date.", packs_all: "Ce pack est déjà complet.", packs_add_n: "Ajouter {0} routines", packs_pick: "Choisissez les routines voulues. Les autres ne sont pas créées.", grp_equip: "Par équipement", grp_status: "Par état", grp_none: "Sans équipement",
    scan_qr: 'Lire le QR de la facture', scan_point: 'Pointe la caméra vers le QR de la facture', scan_ok: 'Facture lue : {0}', scan_fail: 'Impossible de lire le QR. Essaie avec plus de lumière et le code bien cadré.', scan_paste: 'Colle ici le texte du QR de la facture', f_price: "Prix d'achat", k_price: 'Prix',
    f_notify_to: "Qui reçoit les alertes", h_notify_to: "Seuls les téléphones sont listés (pas les tablettes). Coche-en un, plusieurs ou tous. Sans rien de coché, tout le monde est prévenu.",
    tab_routines: "Routines", tab_equipment: "Équipements", tab_parts: "Pièces", tab_history: "Historique", tab_settings: "Réglages",
    st_overdue: "En retard", st_due_soon: "Bientôt", st_snoozed: "Reportées", st_no_schedule: "Sans planning", st_on_track: "À jour", st_paused: "En pause", st_done: "Terminées",
    f_all: "Toutes", f_overdue: "Retard", f_nodate: "Sans date",
    unit_days: "jour|jours", unit_weeks: "semaine|semaines", unit_months: "mois|mois", unit_years: "an|ans",
    sd_1_days: "tous les jours", sd_1_weeks: "toutes les semaines", sd_1_months: "tous les mois", sd_1_years: "tous les ans",
    sd_n: "tous les {0} {1}", sd_months: "en {0}", sd_once: "le {0}", sd_yearly: "chaque année le {0}", sd_clock: "aux changements d'heure ({0})", spring: "printemps", autumn: "automne", and: " et ",
    w_paused: "en pause", w_done: "terminée", w_snoozed: "reportée", w_nosched: "pas de prochaine date", w_today: "aujourd'hui", w_tomorrow: "demain",
    w_ago1: "il y a 1 jour", w_agod: "il y a {0} jours", w_agom: "il y a {0} mois", w_ind: "dans {0} jours", w_inm: "dans {0} mois",
    e_load: "Impossible de lire les données. L'intégration Iris Maintenance est-elle installée ?", e_generic: "Erreur", loading: "Chargement…",
    sending: "Envoi…", sent: "Notification envoyée.", not_sent: "Rien n'a été envoyé. Choisis d'abord le téléphone dans Configurer.", err: "Erreur : {0}",
    confirm_undo: "Annuler cet enregistrement ? Le stock des pièces est rétabli et la date de la routine est réinitialisée.",
    name_req: "Le nom est obligatoire.", pick_date: "Choisis la date.",
    del_eq: "Supprimer cet équipement et toutes ses routines ? L'historique est conservé.", del_part: "Supprimer cette pièce ?", del_routine: "Supprimer cette routine ? L'historique est conservé.",
    default_title: "Care", add_routine: "Routine", add_equipment: "Équipement", add_part: "Pièce",
    search: "Rechercher des routines", no_routines: "Tu n'as pas encore de routines.<br>Crée la première dans Outils de développement → Actions → <b>iris_care.add_routine</b>.", not_found: "Aucun résultat.",
    mark_done: "Marquer comme fait", no_loc: "Sans emplacement", cnt_routines: "{0} routine|{0} routines",
    b_expired: "Hors garantie", b_expiring: "Garantie bientôt expirée",
    no_eq: "Tu n'as pas encore d'équipements.<br>Crée-les avec <b>iris_care.add_equipment</b>.", no_parts: "Tu n'as pas encore de pièces.<br>Crée-les avec <b>iris_care.add_part</b>.",
    reorder_from: "recommander à partir de {0}", less: "Moins", more: "Plus",
    s_alerts: "Alertes", s_routine_days: "Routines : prévenir à (jours)", s_routine_hint: "Une routine passe à « Bientôt » quand il reste ce nombre de jours ou moins.",
    s_warr_days: "Garanties : prévenir à (jours)", s_warr_hint: "La garantie passe à « Bientôt expirée » quand il reste ce nombre de jours ou moins.",
    s_notif: "Notifications sur le téléphone", s_notif_hint: "Le téléphone et l'heure de l'alerte quotidienne se choisissent dans Paramètres → Appareils et services → Iris Maintenance → Configurer.", s_send: "Envoyer une alerte maintenant",
    no_history: "Aucun enregistrement.<br>Marque une routine comme faite pour la voir ici.", undo_aria: "Annuler l'enregistrement",
    new_eq: "Nouvel équipement", edit_eq: "Modifier l'équipement", new_part: "Nouvelle pièce", edit_part: "Modifier la pièce", new_routine: "Nouvelle routine", edit_routine: "Modifier la routine",
    none: "— aucun —",
    f_name: "Nom", ph_eq_name: "ex. : Réfrigérateur", f_location: "Lieu", ph_location: "ex. : Cuisine", f_category: "Catégorie", f_brand: "Marque", f_model: "Modèle", f_serial: "N° de série",
    sec_purchase: "Achat et garantie", f_purchased: "Date d'achat", f_installed: "Date d'installation", f_warranty_m: "Garantie (mois)", ph_36: "ex. : 36",
    h_warranty: "La garantie court à partir de la date d'achat. Iris te prévient quand elle touche à sa fin.", f_store: "Magasin", f_order: "N° de commande / facture", f_phone: "Téléphone", f_email: "E-mail", f_notes: "Notes",
    ph_part_name: "ex. : Filtre à eau", f_equipment_opt: "Équipement (facultatif)", f_stock: "En stock", f_reorder: "Recommander à partir de", optional: "facultatif", f_partno: "N° de pièce / référence",
    f_every: "Tous les", f_unit: "Unité", f_months: "Mois", h_months: "Échéance le 1er de chaque mois choisi. Choisis-en plusieurs pour ce qui se fait deux fois par an.",
    f_date: "Date", f_repeat: "Se répète", r_yearly: "Chaque année", r_once: "Une seule fois", h_once: "Une fois faite, elle passe dans Terminées et tu peux la supprimer.", h_yearly: "Chaque année utilise le jour et le mois et ignore l'année.",
    f_when: "Quand", spring_m: "Printemps (mars)", autumn_m: "Automne (octobre)", h_clock: "Changement d'heure en Europe (dernier dimanche de mars et d'octobre). Coche les deux pour ce qui se fait deux fois par an, comme les piles des détecteurs de fumée.",
    f_parts_used: "Pièces utilisées", h_parts_deduct: "Quand tu marques la routine comme faite, Iris retire ces pièces du stock.", ph_routine: "ex. : Remplacer le filtre à eau", f_equipment: "Équipement",
    f_schedule: "Planning", s_interval: "Se répète tous les X", s_months: "Certains mois", s_date: "À une date", s_clock: "Aux changements d'heure",
    f_last: "Dernière fois effectuée", h_last: "Laisse vide si jamais faite. Pour une routine « tous les X », elle est due tout de suite.",
    f_remind: "Prévenir sur le téléphone jusqu'à ce que ce soit fait", f_remind_at: "Prévenir à", f_repeat_every: "Répéter", rp_0: "Ne pas répéter", rp_15: "Toutes les 15 min", rp_30: "Toutes les 30 min", rp_60: "Toutes les heures", rp_120: "Toutes les 2 heures", rp_240: "Toutes les 4 heures",
    f_remind_until: "Arrêter de prévenir à (facultatif)", h_remind: "Ne prévient que si la routine est due aujourd'hui ou en retard, et s'arrête dès que tu la marques comme faite. La notification a un bouton Fait. Utilise le téléphone choisi dans Configurer.",
    close: "Fermer", edit: "Modifier", delete: "Supprimer", cancel: "Annuler", save: "Enregistrer",
    k_location: "Lieu", k_category: "Catégorie", k_brand: "Marque", k_model: "Modèle", k_serial: "N° série", k_bought: "Acheté", k_installed: "Installé", k_warranty: "Garantie", k_store: "Magasin", k_order: "N° commande", k_phone: "Téléphone", k_email: "E-mail", k_notes: "Notes",
    war_expired: "expirée depuis {0} jours", war_today: "expire aujourd'hui", war_left: "encore {0} jours", sec_routines: "Routines", no_routines_eq: "Aucune routine.",
    done_once: "Routine unique, déjà terminée. Tu peux la supprimer dans Modifier (✎).",
    k_equipment: "Équipement", k_schedule: "Planning", k_last: "Dernière fois", never: "jamais", k_next: "Prochaine", k_remind: "Alerte",
    rm_at: "à {0}", rm_rep_h: ", répète toutes les {0} h", rm_rep_m: ", répète toutes les {0} min", rm_until: " jusqu'à {0}",
    sec_register: "Enregistrer", f_done_on: "Fait le", f_cost: "Coût ({0})", f_parts_used2: "Pièces utilisées", in_stock: "{0} en stock", h_parts_used: "Iris retire ces pièces du stock. Il n'en retire jamais plus que tu n'en as.",
    mark_done_btn: "Marquer fait", sec_snooze: "Reporter", sn_3: "3 jours", sn_7: "1 sem.", sn_14: "2 sem.", sn_30: "1 mois", cancel_snooze: "Annuler le report", resume: "Reprendre cette routine", pause: "Mettre cette routine en pause (ne compte plus comme retard)",
    card_desc: "Routines, équipements, pièces et historique de maintenance.",
  },
  de: {
    scan_dup: "Diese Rechnung ({0}) wurde bereits erfasst in: {1}.\n\nTrotzdem noch einmal erfassen?", scan_searching: "Suche QR-Code…",
    dsp_title: "In Ausgaben erfassen", dsp_loading: "Ausgaben werden abgefragt…", dsp_known: "Geschäft in Ausgaben bereits bekannt", dsp_new: "Neues Geschäft: Name und Kategorie angeben", dsp_supplier: "Lieferant", dsp_category: "Kategorie", dsp_payment: "Zahlungsart", dsp_amount: "Betrag", dsp_register: "In Ausgaben erfassen", dsp_skip: "Jetzt nicht", dsp_ok: "In Ausgaben erfasst: {0} · {1}", dsp_dup: "Diese Rechnung ist schon in Ausgaben (#{0}, {1}). Sie wurde nicht noch einmal erfasst.", dsp_err: "Konnte nicht in Ausgaben erfassen.", dsp_need: "Lieferant und Kategorie angeben.", dsp_pick: "Geschäft wählen",
    packs_btn: "Routinen-Pakete", packs_title: "Routinen-Pakete", packs_intro: "Wähle ein Paket, und Iris legt das Gerät und die üblichen Routinen an.", packs_n: "{0} Routinen", packs_have: "{0} schon angelegt", packs_add: "Paket hinzufügen", packs_back: "Pakete", packs_done: "{0} Routinen in „{1}“ angelegt. {2} gab es schon.", packs_hint: "Die Routinen beginnen heute zu zählen. Stelle danach bei jeder das Datum des letzten Mals ein, damit Iris den richtigen nächsten Termin berechnet.", packs_all: "Dieses Paket ist schon vollständig.", packs_add_n: "{0} Routinen hinzufügen", packs_pick: "Wähle die gewünschten Routinen. Die anderen werden nicht angelegt.", grp_equip: "Nach Gerät", grp_status: "Nach Status", grp_none: "Ohne Gerät",
    scan_qr: 'Rechnungs-QR lesen', scan_point: 'Richte die Kamera auf den QR-Code der Rechnung', scan_ok: 'Rechnung gelesen: {0}', scan_fail: 'QR konnte nicht gelesen werden. Versuche es mit mehr Licht und gut eingerahmtem Code.', scan_paste: 'Füge hier den Text des Rechnungs-QR ein', f_price: 'Kaufpreis', k_price: 'Preis',
    f_notify_to: "Wer die Hinweise bekommt", h_notify_to: "Es werden nur Handys angezeigt (Tablets nicht). Wähle eines, mehrere oder alle. Ohne Auswahl werden alle benachrichtigt.",
    tab_routines: "Routinen", tab_equipment: "Geräte", tab_parts: "Teile", tab_history: "Verlauf", tab_settings: "Einstellungen",
    st_overdue: "Überfällig", st_due_soon: "Bald fällig", st_snoozed: "Verschoben", st_no_schedule: "Ohne Termin", st_on_track: "Im Plan", st_paused: "Pausiert", st_done: "Erledigt",
    f_all: "Alle", f_overdue: "Überfällig", f_nodate: "Ohne Datum",
    unit_days: "Tag|Tage", unit_weeks: "Woche|Wochen", unit_months: "Monat|Monate", unit_years: "Jahr|Jahre",
    sd_1_days: "jeden Tag", sd_1_weeks: "jede Woche", sd_1_months: "jeden Monat", sd_1_years: "jedes Jahr",
    sd_n: "alle {0} {1}", sd_months: "in {0}", sd_once: "am {0}", sd_yearly: "jedes Jahr am {0}", sd_clock: "bei Zeitumstellungen ({0})", spring: "Frühjahr", autumn: "Herbst", and: " und ",
    w_paused: "pausiert", w_done: "erledigt", w_snoozed: "verschoben", w_nosched: "kein nächster Termin", w_today: "heute", w_tomorrow: "morgen",
    w_ago1: "vor 1 Tag", w_agod: "vor {0} Tagen", w_agom: "vor {0} Monaten", w_ind: "in {0} Tagen", w_inm: "in {0} Monaten",
    e_load: "Die Daten konnten nicht gelesen werden. Ist die Integration Iris Wartung installiert?", e_generic: "Fehler", loading: "Wird geladen…",
    sending: "Wird gesendet…", sent: "Benachrichtigung gesendet.", not_sent: "Nichts gesendet. Wähle zuerst das Handy unter Konfigurieren.", err: "Fehler: {0}",
    confirm_undo: "Eintrag rückgängig machen? Der Teilebestand wird wiederhergestellt und das Datum der Routine zurückgesetzt.",
    name_req: "Der Name ist erforderlich.", pick_date: "Wähle das Datum.",
    del_eq: "Dieses Gerät und alle seine Routinen löschen? Der Verlauf bleibt erhalten.", del_part: "Dieses Teil löschen?", del_routine: "Diese Routine löschen? Der Verlauf bleibt erhalten.",
    default_title: "Care", add_routine: "Routine", add_equipment: "Gerät", add_part: "Teil",
    search: "Routinen suchen", no_routines: "Du hast noch keine Routinen.<br>Lege die erste unter Entwicklerwerkzeuge → Aktionen → <b>iris_care.add_routine</b> an.", not_found: "Nichts gefunden.",
    mark_done: "Als erledigt markieren", no_loc: "Ohne Ort", cnt_routines: "{0} Routine|{0} Routinen",
    b_expired: "Keine Garantie", b_expiring: "Garantie läuft ab",
    no_eq: "Du hast noch keine Geräte.<br>Lege sie mit <b>iris_care.add_equipment</b> an.", no_parts: "Du hast noch keine Teile.<br>Lege sie mit <b>iris_care.add_part</b> an.",
    reorder_from: "nachbestellen ab {0}", less: "Weniger", more: "Mehr",
    s_alerts: "Hinweise", s_routine_days: "Routinen: warnen ab (Tage)", s_routine_hint: "Eine Routine wird „Bald fällig“, wenn nur noch so viele Tage oder weniger bleiben.",
    s_warr_days: "Garantien: warnen ab (Tage)", s_warr_hint: "Eine Garantie wird „Läuft ab“, wenn nur noch so viele Tage oder weniger bleiben.",
    s_notif: "Handy-Benachrichtigungen", s_notif_hint: "Handy und Uhrzeit der täglichen Meldung wählst du unter Einstellungen → Geräte & Dienste → Iris Wartung → Konfigurieren.", s_send: "Meldung jetzt senden",
    no_history: "Noch keine Einträge.<br>Markiere eine Routine als erledigt, dann erscheint sie hier.", undo_aria: "Eintrag rückgängig",
    new_eq: "Neues Gerät", edit_eq: "Gerät bearbeiten", new_part: "Neues Teil", edit_part: "Teil bearbeiten", new_routine: "Neue Routine", edit_routine: "Routine bearbeiten",
    none: "— keins —",
    f_name: "Name", ph_eq_name: "z. B. Kühlschrank", f_location: "Ort", ph_location: "z. B. Küche", f_category: "Kategorie", f_brand: "Marke", f_model: "Modell", f_serial: "Seriennr.",
    sec_purchase: "Kauf und Garantie", f_purchased: "Kaufdatum", f_installed: "Installationsdatum", f_warranty_m: "Garantie (Monate)", ph_36: "z. B. 36",
    h_warranty: "Die Garantie läuft ab dem Kaufdatum. Iris warnt dich, wenn sie bald endet.", f_store: "Geschäft", f_order: "Bestell-/Rechnungsnr.", f_phone: "Telefon", f_email: "E-Mail", f_notes: "Notizen",
    ph_part_name: "z. B. Wasserfilter", f_equipment_opt: "Gerät (optional)", f_stock: "Auf Lager", f_reorder: "Nachbestellen ab", optional: "optional", f_partno: "Teilenr. / Referenz",
    f_every: "Alle", f_unit: "Einheit", f_months: "Monate", h_months: "Fällig am 1. jedes gewählten Monats. Wähle mehrere für Dinge, die zweimal im Jahr anfallen.",
    f_date: "Datum", f_repeat: "Wiederholt sich", r_yearly: "Jedes Jahr", r_once: "Nur einmal", h_once: "Nach Erledigung landet sie unter Erledigt und du kannst sie löschen.", h_yearly: "Jedes Jahr verwendet Tag und Monat und ignoriert das Jahr.",
    f_when: "Wann", spring_m: "Frühjahr (März)", autumn_m: "Herbst (Oktober)", h_clock: "Europäische Zeitumstellung (letzter Sonntag im März und Oktober). Wähle beide für Dinge, die zweimal im Jahr anfallen, z. B. Batterien der Rauchmelder.",
    f_parts_used: "Verwendete Teile", h_parts_deduct: "Beim Erledigen der Routine zieht Iris diese Teile vom Lagerbestand ab.", ph_routine: "z. B. Wasserfilter wechseln", f_equipment: "Gerät",
    f_schedule: "Zeitplan", s_interval: "Wiederholt sich alle X", s_months: "In bestimmten Monaten", s_date: "An einem Datum", s_clock: "Bei Zeitumstellungen",
    f_last: "Zuletzt erledigt", h_last: "Leer lassen, wenn nie erledigt. Bei einer „alle X“-Routine ist sie sofort fällig.",
    f_remind: "Aufs Handy erinnern, bis erledigt", f_remind_at: "Erinnern um", f_repeat_every: "Wiederholen", rp_0: "Nicht wiederholen", rp_15: "Alle 15 Min.", rp_30: "Alle 30 Min.", rp_60: "Jede Stunde", rp_120: "Alle 2 Stunden", rp_240: "Alle 4 Stunden",
    f_remind_until: "Nicht mehr erinnern ab (optional)", h_remind: "Erinnert nur, wenn die Routine heute fällig oder überfällig ist, und hört auf, sobald du sie erledigst. Die Benachrichtigung hat einen Erledigt-Knopf. Nutzt das unter Konfigurieren gewählte Handy.",
    close: "Schließen", edit: "Bearbeiten", delete: "Löschen", cancel: "Abbrechen", save: "Speichern",
    k_location: "Ort", k_category: "Kategorie", k_brand: "Marke", k_model: "Modell", k_serial: "Seriennr.", k_bought: "Gekauft", k_installed: "Installiert", k_warranty: "Garantie", k_store: "Geschäft", k_order: "Bestellnr.", k_phone: "Telefon", k_email: "E-Mail", k_notes: "Notizen",
    war_expired: "seit {0} Tagen abgelaufen", war_today: "läuft heute ab", war_left: "noch {0} Tage", sec_routines: "Routinen", no_routines_eq: "Keine Routinen.",
    done_once: "Einmalige Routine, bereits erledigt. Du kannst sie unter Bearbeiten (✎) löschen.",
    k_equipment: "Gerät", k_schedule: "Zeitplan", k_last: "Zuletzt", never: "nie", k_next: "Nächste", k_remind: "Hinweis",
    rm_at: "um {0}", rm_rep_h: ", wiederholt alle {0} Std.", rm_rep_m: ", wiederholt alle {0} Min.", rm_until: " bis {0}",
    sec_register: "Eintragen", f_done_on: "Erledigt am", f_cost: "Kosten ({0})", f_parts_used2: "Verwendete Teile", in_stock: "{0} auf Lager", h_parts_used: "Iris zieht diese Teile vom Lager ab, nie mehr als vorhanden.",
    mark_done_btn: "Als erledigt markieren", sec_snooze: "Verschieben", sn_3: "3 Tage", sn_7: "1 Wo.", sn_14: "2 Wo.", sn_30: "1 Mon.", cancel_snooze: "Verschiebung aufheben", resume: "Diese Routine fortsetzen", pause: "Diese Routine pausieren (zählt nicht mehr als überfällig)",
    card_desc: "Wartungsroutinen, Geräte, Teile und Verlauf.",
  },
  it: {
    scan_dup: "Questa fattura ({0}) è già registrata in: {1}.\n\nRegistrarla di nuovo comunque?", scan_searching: "Cerco il codice QR…",
    dsp_title: "Registra in Spese", dsp_loading: "Consulto Spese…", dsp_known: "Negozio già noto in Spese", dsp_new: "Nuovo negozio: indica nome e categoria", dsp_supplier: "Fornitore", dsp_category: "Categoria", dsp_payment: "Metodo di pagamento", dsp_amount: "Importo", dsp_register: "Registra in Spese", dsp_skip: "Non ora", dsp_ok: "Registrato in Spese: {0} · {1}", dsp_dup: "Questa fattura è già in Spese (#{0}, {1}). Non è stata registrata di nuovo.", dsp_err: "Impossibile registrare in Spese.", dsp_need: "Indica fornitore e categoria.", dsp_pick: "Scegli il negozio",
    packs_btn: "Pacchetti di routine", packs_title: "Pacchetti di routine", packs_intro: "Scegli un pacchetto e Iris crea l'apparecchio e le routine abituali.", packs_n: "{0} routine", packs_have: "{0} già create", packs_add: "Aggiungi pacchetto", packs_back: "Pacchetti", packs_done: "Create {0} routine in «{1}». {2} esistevano già.", packs_hint: "Le routine iniziano a contare da oggi. Poi, in ciascuna, imposta la data dell'ultima volta perché Iris calcoli la prossima giusta.", packs_all: "Questo pacchetto è già completo.", packs_add_n: "Aggiungi {0} routine", packs_pick: "Scegli le routine che vuoi. Le altre non vengono create.", grp_equip: "Per apparecchio", grp_status: "Per stato", grp_none: "Senza apparecchio",
    scan_qr: 'Leggi QR della fattura', scan_point: 'Punta la fotocamera sul QR della fattura', scan_ok: 'Fattura letta: {0}', scan_fail: 'Impossibile leggere il QR. Riprova con più luce e il codice ben inquadrato.', scan_paste: 'Incolla qui il testo del QR della fattura', f_price: 'Prezzo di acquisto', k_price: 'Prezzo',
    f_notify_to: "Chi riceve gli avvisi", h_notify_to: "Compaiono solo i telefoni (i tablet sono esclusi). Selezionane uno, più o tutti. Senza selezione, avvisa tutti.",
    tab_routines: "Routine", tab_equipment: "Apparecchi", tab_parts: "Ricambi", tab_history: "Cronologia", tab_settings: "Impostazioni",
    st_overdue: "In ritardo", st_due_soon: "In scadenza", st_snoozed: "Rimandate", st_no_schedule: "Senza piano", st_on_track: "In regola", st_paused: "In pausa", st_done: "Completate",
    f_all: "Tutte", f_overdue: "Ritardo", f_nodate: "Senza data",
    unit_days: "giorno|giorni", unit_weeks: "settimana|settimane", unit_months: "mese|mesi", unit_years: "anno|anni",
    sd_1_days: "ogni giorno", sd_1_weeks: "ogni settimana", sd_1_months: "ogni mese", sd_1_years: "ogni anno",
    sd_n: "ogni {0} {1}", sd_months: "a {0}", sd_once: "il {0}", sd_yearly: "ogni anno il {0}", sd_clock: "al cambio dell'ora ({0})", spring: "primavera", autumn: "autunno", and: " e ",
    w_paused: "in pausa", w_done: "completata", w_snoozed: "rimandata", w_nosched: "nessuna prossima data", w_today: "oggi", w_tomorrow: "domani",
    w_ago1: "1 giorno fa", w_agod: "{0} giorni fa", w_agom: "{0} mesi fa", w_ind: "tra {0} giorni", w_inm: "tra {0} mesi",
    e_load: "Impossibile leggere i dati. L'integrazione Iris Manutenzione è installata?", e_generic: "Errore", loading: "Caricamento…",
    sending: "Invio…", sent: "Avviso inviato.", not_sent: "Non è stato inviato nulla. Scegli prima il telefono in Configura.", err: "Errore: {0}",
    confirm_undo: "Annullare questa registrazione? Le scorte dei ricambi tornano e la data della routine viene ripristinata.",
    name_req: "Il nome è obbligatorio.", pick_date: "Scegli la data.",
    del_eq: "Eliminare questo apparecchio e tutte le sue routine? La cronologia resta.", del_part: "Eliminare questo ricambio?", del_routine: "Eliminare questa routine? La cronologia resta.",
    default_title: "Care", add_routine: "Routine", add_equipment: "Apparecchio", add_part: "Ricambio",
    search: "Cerca routine", no_routines: "Non hai ancora routine.<br>Crea la prima in Strumenti per sviluppatori → Azioni → <b>iris_care.add_routine</b>.", not_found: "Nessun risultato.",
    mark_done: "Segna come fatto", no_loc: "Senza posizione", cnt_routines: "{0} routine|{0} routine",
    b_expired: "Senza garanzia", b_expiring: "Garanzia in scadenza",
    no_eq: "Non hai ancora apparecchi.<br>Creali con <b>iris_care.add_equipment</b>.", no_parts: "Non hai ancora ricambi.<br>Creali con <b>iris_care.add_part</b>.",
    reorder_from: "riordina da {0}", less: "Meno", more: "Più",
    s_alerts: "Avvisi", s_routine_days: "Routine: avvisa con (giorni)", s_routine_hint: "Una routine diventa «In scadenza» quando mancano questi giorni o meno.",
    s_warr_days: "Garanzie: avvisa con (giorni)", s_warr_hint: "La garanzia diventa «In scadenza» quando mancano questi giorni o meno.",
    s_notif: "Notifiche sul telefono", s_notif_hint: "Il telefono e l'ora dell'avviso giornaliero si scelgono in Impostazioni → Dispositivi e servizi → Iris Manutenzione → Configura.", s_send: "Invia avviso ora",
    no_history: "Ancora nessuna registrazione.<br>Segna una routine come fatta e comparirà qui.", undo_aria: "Annulla registrazione",
    new_eq: "Nuovo apparecchio", edit_eq: "Modifica apparecchio", new_part: "Nuovo ricambio", edit_part: "Modifica ricambio", new_routine: "Nuova routine", edit_routine: "Modifica routine",
    none: "— nessuno —",
    f_name: "Nome", ph_eq_name: "es.: Frigorifero", f_location: "Luogo", ph_location: "es.: Cucina", f_category: "Categoria", f_brand: "Marca", f_model: "Modello", f_serial: "N° di serie",
    sec_purchase: "Acquisto e garanzia", f_purchased: "Data di acquisto", f_installed: "Data di installazione", f_warranty_m: "Garanzia (mesi)", ph_36: "es.: 36",
    h_warranty: "La garanzia conta dalla data di acquisto. Iris ti avvisa quando sta per finire.", f_store: "Negozio", f_order: "N° ordine / fattura", f_phone: "Telefono", f_email: "Email", f_notes: "Note",
    ph_part_name: "es.: Filtro dell'acqua", f_equipment_opt: "Apparecchio (facoltativo)", f_stock: "In magazzino", f_reorder: "Riordina da", optional: "facoltativo", f_partno: "N° ricambio / riferimento",
    f_every: "Ogni", f_unit: "Unità", f_months: "Mesi", h_months: "Scade il giorno 1 di ogni mese scelto. Scegline più d'uno per ciò che si fa due volte all'anno.",
    f_date: "Data", f_repeat: "Si ripete", r_yearly: "Ogni anno", r_once: "Una sola volta", h_once: "Una volta fatta passa in Completate e puoi eliminarla.", h_yearly: "Ogni anno usa giorno e mese e ignora l'anno.",
    f_when: "Quando", spring_m: "Primavera (marzo)", autumn_m: "Autunno (ottobre)", h_clock: "Cambio dell'ora europeo (ultima domenica di marzo e di ottobre). Seleziona entrambi per ciò che si fa due volte all'anno, come le batterie dei rilevatori di fumo.",
    f_parts_used: "Ricambi che usa", h_parts_deduct: "Quando segni la routine come fatta, Iris toglie questi ricambi dal magazzino.", ph_routine: "es.: Sostituire il filtro dell'acqua", f_equipment: "Apparecchio",
    f_schedule: "Piano", s_interval: "Si ripete ogni X tempo", s_months: "In certi mesi", s_date: "In una data", s_clock: "Al cambio dell'ora",
    f_last: "Ultima volta eseguita", h_last: "Lascia vuoto se non è mai stata fatta. In una routine «ogni X», scade subito.",
    f_remind: "Avvisa sul telefono finché non è fatta", f_remind_at: "Avvisa alle", f_repeat_every: "Ripeti", rp_0: "Non ripetere", rp_15: "Ogni 15 min", rp_30: "Ogni 30 min", rp_60: "Ogni ora", rp_120: "Ogni 2 ore", rp_240: "Ogni 4 ore",
    f_remind_until: "Smetti di avvisare alle (facoltativo)", h_remind: "Avvisa solo quando la routine è per oggi o in ritardo, e smette appena la segni come fatta. La notifica ha il pulsante Fatto. Usa il telefono scelto in Configura.",
    close: "Chiudi", edit: "Modifica", delete: "Elimina", cancel: "Annulla", save: "Salva",
    k_location: "Luogo", k_category: "Categoria", k_brand: "Marca", k_model: "Modello", k_serial: "N° serie", k_bought: "Acquistato", k_installed: "Installato", k_warranty: "Garanzia", k_store: "Negozio", k_order: "N° ordine", k_phone: "Telefono", k_email: "Email", k_notes: "Note",
    war_expired: "scaduta {0} giorni fa", war_today: "scade oggi", war_left: "mancano {0} giorni", sec_routines: "Routine", no_routines_eq: "Nessuna routine.",
    done_once: "Routine singola, già completata. Puoi eliminarla in Modifica (✎).",
    k_equipment: "Apparecchio", k_schedule: "Piano", k_last: "Ultima volta", never: "mai", k_next: "Prossima", k_remind: "Avviso",
    rm_at: "alle {0}", rm_rep_h: ", ripete ogni {0} h", rm_rep_m: ", ripete ogni {0} min", rm_until: " fino alle {0}",
    sec_register: "Registra", f_done_on: "Fatto il", f_cost: "Costo ({0})", f_parts_used2: "Ricambi usati", in_stock: "{0} in magazzino", h_parts_used: "Iris toglie questi ricambi dal magazzino. Mai più di quelli che hai.",
    mark_done_btn: "Segna fatto", sec_snooze: "Rimanda", sn_3: "3 giorni", sn_7: "1 sett.", sn_14: "2 sett.", sn_30: "1 mese", cancel_snooze: "Annulla rinvio", resume: "Riprendi questa routine", pause: "Metti in pausa questa routine (non conta più come ritardo)",
    card_desc: "Routine, apparecchi, ricambi e cronologia di manutenzione.",
  },
  ru: {
    scan_dup: "Этот счёт ({0}) уже зарегистрирован: {1}.\n\nВсё равно зарегистрировать ещё раз?", scan_searching: "Поиск QR-кода…",
    dsp_title: "Записать в Расходы", dsp_loading: "Проверяю Расходы…", dsp_known: "Магазин уже известен в Расходах", dsp_new: "Новый магазин: укажите название и категорию", dsp_supplier: "Поставщик", dsp_category: "Категория", dsp_payment: "Способ оплаты", dsp_amount: "Сумма", dsp_register: "Записать в Расходы", dsp_skip: "Не сейчас", dsp_ok: "Записано в Расходы: {0} · {1}", dsp_dup: "Этот счёт уже есть в Расходах (#{0}, {1}). Повторно не записан.", dsp_err: "Не удалось записать в Расходы.", dsp_need: "Укажите поставщика и категорию.", dsp_pick: "Выберите магазин",
    packs_btn: "Наборы задач", packs_title: "Наборы задач", packs_intro: "Выберите набор, и Iris создаст оборудование и обычные задачи.", packs_n: "Задач: {0}", packs_have: "Уже создано: {0}", packs_add: "Добавить набор", packs_back: "Наборы", packs_done: "Создано задач: {0} в «{1}». Уже было: {2}.", packs_hint: "Отсчёт задач начинается сегодня. Затем в каждой укажите дату последнего выполнения, чтобы Iris рассчитала правильную следующую дату.", packs_all: "Этот набор уже полностью добавлен.", packs_add_n: "Добавить задач: {0}", packs_pick: "Выберите нужные задачи. Остальные не создаются.", grp_equip: "По оборудованию", grp_status: "По статусу", grp_none: "Без оборудования",
    scan_qr: 'Считать QR счёта', scan_point: 'Наведите камеру на QR-код счёта', scan_ok: 'Счёт считан: {0}', scan_fail: 'Не удалось считать QR. Попробуйте при лучшем освещении и держите код в кадре.', scan_paste: 'Вставьте сюда текст QR-кода счёта', f_price: 'Цена покупки', k_price: 'Цена',
    f_notify_to: "Кто получает уведомления", h_notify_to: "Показаны только телефоны (планшеты исключены). Отметьте один, несколько или все. Если ничего не отмечено, уведомляются все.",
    tab_routines: "Задачи", tab_equipment: "Техника", tab_parts: "Запчасти", tab_history: "История", tab_settings: "Настройки",
    st_overdue: "Просрочено", st_due_soon: "Скоро срок", st_snoozed: "Отложено", st_no_schedule: "Без расписания", st_on_track: "В срок", st_paused: "На паузе", st_done: "Выполнено",
    f_all: "Все", f_overdue: "Просрочка", f_nodate: "Без даты",
    unit_days: "день|дней", unit_weeks: "неделя|недель", unit_months: "месяц|месяцев", unit_years: "год|лет",
    sd_1_days: "каждый день", sd_1_weeks: "каждую неделю", sd_1_months: "каждый месяц", sd_1_years: "каждый год",
    sd_n: "каждые {0} {1}", sd_months: "в {0}", sd_once: "{0}", sd_yearly: "каждый год {0}", sd_clock: "при смене времени ({0})", spring: "весна", autumn: "осень", and: " и ",
    w_paused: "на паузе", w_done: "выполнена", w_snoozed: "отложена", w_nosched: "нет следующей даты", w_today: "сегодня", w_tomorrow: "завтра",
    w_ago1: "1 день назад", w_agod: "{0} дн. назад", w_agom: "{0} мес. назад", w_ind: "через {0} дн.", w_inm: "через {0} мес.",
    e_load: "Не удалось прочитать данные. Установлена ли интеграция Iris Обслуживание?", e_generic: "Ошибка", loading: "Загрузка…",
    sending: "Отправка…", sent: "Уведомление отправлено.", not_sent: "Ничего не отправлено. Сначала выберите телефон в разделе «Настроить».", err: "Ошибка: {0}",
    confirm_undo: "Отменить эту запись? Запасы запчастей вернутся, а дата задачи будет восстановлена.",
    name_req: "Название обязательно.", pick_date: "Выберите дату.",
    del_eq: "Удалить эту технику и все её задачи? История сохранится.", del_part: "Удалить эту запчасть?", del_routine: "Удалить эту задачу? История сохранится.",
    default_title: "Care", add_routine: "Задача", add_equipment: "Техника", add_part: "Запчасть",
    search: "Поиск задач", no_routines: "У вас пока нет задач.<br>Создайте первую: Инструменты разработчика → Действия → <b>iris_care.add_routine</b>.", not_found: "Ничего не найдено.",
    mark_done: "Отметить выполненной", no_loc: "Без места", cnt_routines: "{0} задача|{0} задач",
    b_expired: "Гарантия истекла", b_expiring: "Гарантия заканчивается",
    no_eq: "У вас пока нет техники.<br>Создайте через <b>iris_care.add_equipment</b>.", no_parts: "У вас пока нет запчастей.<br>Создайте через <b>iris_care.add_part</b>.",
    reorder_from: "заказать при {0}", less: "Меньше", more: "Больше",
    s_alerts: "Уведомления", s_routine_days: "Задачи: предупреждать за (дней)", s_routine_hint: "Задача получает статус «Скоро срок», когда остаётся столько дней или меньше.",
    s_warr_days: "Гарантии: предупреждать за (дней)", s_warr_hint: "Гарантия получает статус «Заканчивается», когда остаётся столько дней или меньше.",
    s_notif: "Уведомления на телефон", s_notif_hint: "Телефон и время ежедневного уведомления выбираются в Настройки → Устройства и службы → Iris Обслуживание → Настроить.", s_send: "Отправить уведомление сейчас",
    no_history: "Записей пока нет.<br>Отметьте задачу выполненной, и она появится здесь.", undo_aria: "Отменить запись",
    new_eq: "Новая техника", edit_eq: "Изменить технику", new_part: "Новая запчасть", edit_part: "Изменить запчасть", new_routine: "Новая задача", edit_routine: "Изменить задачу",
    none: "— нет —",
    f_name: "Название", ph_eq_name: "напр.: Холодильник", f_location: "Место", ph_location: "напр.: Кухня", f_category: "Категория", f_brand: "Марка", f_model: "Модель", f_serial: "Серийный №",
    sec_purchase: "Покупка и гарантия", f_purchased: "Дата покупки", f_installed: "Дата установки", f_warranty_m: "Гарантия (мес.)", ph_36: "напр.: 36",
    h_warranty: "Гарантия отсчитывается от даты покупки. Iris предупредит, когда она подходит к концу.", f_store: "Магазин", f_order: "№ заказа / чека", f_phone: "Телефон", f_email: "Email", f_notes: "Заметки",
    ph_part_name: "напр.: Фильтр для воды", f_equipment_opt: "Техника (необязательно)", f_stock: "На складе", f_reorder: "Заказать при", optional: "необязательно", f_partno: "№ детали / артикул",
    f_every: "Каждые", f_unit: "Единица", f_months: "Месяцы", h_months: "Срок — 1-е число каждого выбранного месяца. Выберите несколько для задач, которые делаются дважды в год.",
    f_date: "Дата", f_repeat: "Повтор", r_yearly: "Каждый год", r_once: "Только раз", h_once: "После выполнения попадёт в «Выполнено», и её можно удалить.", h_yearly: "Каждый год используются день и месяц, год игнорируется.",
    f_when: "Когда", spring_m: "Весна (март)", autumn_m: "Осень (октябрь)", h_clock: "Смена времени в Европе (последнее воскресенье марта и октября). Отметьте оба для задач дважды в год, например батарейки в дымовых датчиках.",
    f_parts_used: "Используемые запчасти", h_parts_deduct: "При отметке задачи выполненной Iris спишет эти запчасти со склада.", ph_routine: "напр.: Заменить фильтр для воды", f_equipment: "Техника",
    f_schedule: "Расписание", s_interval: "Повтор каждые X", s_months: "В определённые месяцы", s_date: "В определённую дату", s_clock: "При смене времени",
    f_last: "Когда выполнялась в последний раз", h_last: "Оставьте пустым, если ещё не выполнялась. Для задачи «каждые X» срок наступит сразу.",
    f_remind: "Напоминать на телефон, пока не выполнено", f_remind_at: "Напомнить в", f_repeat_every: "Повторять", rp_0: "Не повторять", rp_15: "Каждые 15 мин", rp_30: "Каждые 30 мин", rp_60: "Каждый час", rp_120: "Каждые 2 часа", rp_240: "Каждые 4 часа",
    f_remind_until: "Перестать напоминать в (необязательно)", h_remind: "Напоминает, только если срок задачи сегодня или просрочен, и прекращает, как только вы отметите её выполненной. В уведомлении есть кнопка «Готово». Используется телефон, выбранный в «Настроить».",
    close: "Закрыть", edit: "Изменить", delete: "Удалить", cancel: "Отмена", save: "Сохранить",
    k_location: "Место", k_category: "Категория", k_brand: "Марка", k_model: "Модель", k_serial: "Серийный №", k_bought: "Куплено", k_installed: "Установлено", k_warranty: "Гарантия", k_store: "Магазин", k_order: "№ заказа", k_phone: "Телефон", k_email: "Email", k_notes: "Заметки",
    war_expired: "истекла {0} дн. назад", war_today: "истекает сегодня", war_left: "осталось {0} дн.", sec_routines: "Задачи", no_routines_eq: "Нет задач.",
    done_once: "Разовая задача, уже выполнена. Её можно удалить через «Изменить» (✎).",
    k_equipment: "Техника", k_schedule: "Расписание", k_last: "Последний раз", never: "никогда", k_next: "Следующий", k_remind: "Уведомление",
    rm_at: "в {0}", rm_rep_h: ", повтор каждые {0} ч", rm_rep_m: ", повтор каждые {0} мин", rm_until: " до {0}",
    sec_register: "Записать", f_done_on: "Выполнено", f_cost: "Стоимость ({0})", f_parts_used2: "Использованные запчасти", in_stock: "{0} на складе", h_parts_used: "Iris спишет эти запчасти со склада, но не больше, чем есть.",
    mark_done_btn: "Отметить выполненной", sec_snooze: "Отложить", sn_3: "3 дня", sn_7: "1 нед.", sn_14: "2 нед.", sn_30: "1 мес.", cancel_snooze: "Отменить откладывание", resume: "Возобновить эту задачу", pause: "Поставить задачу на паузу (не считается просрочкой)",
    card_desc: "Задачи обслуживания, техника, запчасти и история.",
  },
  zh: {
    scan_dup: "此发票（{0}）已登记于：{1}。\n\n仍要再次登记吗？", scan_searching: "正在查找二维码…",
    dsp_title: "记入支出", dsp_loading: "正在查询支出…", dsp_known: "支出中已有此商店", dsp_new: "新商店：请填写名称和类别", dsp_supplier: "供应商", dsp_category: "类别", dsp_payment: "付款方式", dsp_amount: "金额", dsp_register: "记入支出", dsp_skip: "暂不", dsp_ok: "已记入支出：{0} · {1}", dsp_dup: "此发票已在支出中（#{0}，{1}），未重复登记。", dsp_err: "无法记入支出。", dsp_need: "请填写供应商和类别。", dsp_pick: "选择商店",
    packs_btn: "任务包", packs_title: "任务包", packs_intro: "选择一个任务包，Iris 会创建设备和常用任务。", packs_n: "{0} 个任务", packs_have: "已创建 {0} 个", packs_add: "添加任务包", packs_back: "任务包", packs_done: "已在“{1}”中创建 {0} 个任务，{2} 个已存在。", packs_hint: "任务从今天开始计时。之后请在每个任务中设置上次完成的日期，以便 Iris 算出正确的下次日期。", packs_all: "此任务包已全部添加。", packs_add_n: "添加 {0} 个任务", packs_pick: "选择你需要的任务，其余不会创建。", grp_equip: "按设备", grp_status: "按状态", grp_none: "无设备",
    scan_qr: '扫描发票二维码', scan_point: '请将相机对准发票二维码', scan_ok: '已读取发票：{0}', scan_fail: '无法读取二维码。请增加光线并将二维码对准取景框。', scan_paste: '在此粘贴发票二维码文本', f_price: '购买价格', k_price: '价格',
    f_notify_to: "谁接收提醒", h_notify_to: "仅列出手机（不含平板）。可勾选一个、多个或全部。未勾选时通知所有人。",
    tab_routines: "任务", tab_equipment: "设备", tab_parts: "配件", tab_history: "记录", tab_settings: "设置",
    st_overdue: "已逾期", st_due_soon: "即将到期", st_snoozed: "已推迟", st_no_schedule: "无计划", st_on_track: "正常", st_paused: "已暂停", st_done: "已完成",
    f_all: "全部", f_overdue: "逾期", f_nodate: "无日期",
    unit_days: "天|天", unit_weeks: "周|周", unit_months: "个月|个月", unit_years: "年|年",
    sd_1_days: "每天", sd_1_weeks: "每周", sd_1_months: "每月", sd_1_years: "每年",
    sd_n: "每 {0} {1}", sd_months: "在 {0}", sd_once: "{0}", sd_yearly: "每年 {0}", sd_clock: "换时制时（{0}）", spring: "春季", autumn: "秋季", and: "和",
    w_paused: "已暂停", w_done: "已完成", w_snoozed: "已推迟", w_nosched: "无下次日期", w_today: "今天", w_tomorrow: "明天",
    w_ago1: "1 天前", w_agod: "{0} 天前", w_agom: "{0} 个月前", w_ind: "{0} 天后", w_inm: "{0} 个月后",
    e_load: "无法读取数据。是否已安装 Iris 维护集成？", e_generic: "错误", loading: "加载中…",
    sending: "发送中…", sent: "提醒已发送。", not_sent: "未发送任何内容。请先在“配置”中选择手机。", err: "错误：{0}",
    confirm_undo: "撤销此记录？配件库存将恢复，任务日期也会重置。",
    name_req: "名称为必填项。", pick_date: "请选择日期。",
    del_eq: "删除此设备及其所有任务？记录会保留。", del_part: "删除此配件？", del_routine: "删除此任务？记录会保留。",
    default_title: "Care", add_routine: "任务", add_equipment: "设备", add_part: "配件",
    search: "搜索任务", no_routines: "还没有任务。<br>请在 开发者工具 → 操作 → <b>iris_care.add_routine</b> 创建第一个。", not_found: "未找到结果。",
    mark_done: "标记为已完成", no_loc: "无位置", cnt_routines: "{0} 个任务|{0} 个任务",
    b_expired: "已过保", b_expiring: "保修即将到期",
    no_eq: "还没有设备。<br>请用 <b>iris_care.add_equipment</b> 创建。", no_parts: "还没有配件。<br>请用 <b>iris_care.add_part</b> 创建。",
    reorder_from: "低于 {0} 时补货", less: "减少", more: "增加",
    s_alerts: "提醒", s_routine_days: "任务：提前提醒（天）", s_routine_hint: "剩余天数小于或等于此值时，任务变为“即将到期”。",
    s_warr_days: "保修：提前提醒（天）", s_warr_hint: "剩余天数小于或等于此值时，保修变为“即将到期”。",
    s_notif: "手机通知", s_notif_hint: "手机和每日提醒时间请在 设置 → 设备与服务 → Iris 维护 → 配置 中选择。", s_send: "立即发送提醒",
    no_history: "还没有记录。<br>将任务标记为已完成后会显示在这里。", undo_aria: "撤销记录",
    new_eq: "新设备", edit_eq: "编辑设备", new_part: "新配件", edit_part: "编辑配件", new_routine: "新任务", edit_routine: "编辑任务",
    none: "— 无 —",
    f_name: "名称", ph_eq_name: "例如：冰箱", f_location: "位置", ph_location: "例如：厨房", f_category: "类别", f_brand: "品牌", f_model: "型号", f_serial: "序列号",
    sec_purchase: "购买与保修", f_purchased: "购买日期", f_installed: "安装日期", f_warranty_m: "保修（月）", ph_36: "例如：36",
    h_warranty: "保修从购买日期起算。临近到期时 Iris 会提醒你。", f_store: "商店", f_order: "订单/发票号", f_phone: "电话", f_email: "邮箱", f_notes: "备注",
    ph_part_name: "例如：滤水器", f_equipment_opt: "设备（可选）", f_stock: "库存", f_reorder: "低于此数补货", optional: "可选", f_partno: "配件编号/参考号",
    f_every: "每", f_unit: "单位", f_months: "月份", h_months: "在每个所选月份的 1 日到期。每年做两次的事情可选多个。",
    f_date: "日期", f_repeat: "重复", r_yearly: "每年", r_once: "仅一次", h_once: "完成后会移到“已完成”，你可以删除它。", h_yearly: "每年按日和月计算，忽略年份。",
    f_when: "时间", spring_m: "春季（三月）", autumn_m: "秋季（十月）", h_clock: "欧洲换时制（三月和十月的最后一个星期日）。每年做两次的事情请两项都勾选，比如烟雾报警器的电池。",
    f_parts_used: "使用的配件", h_parts_deduct: "将任务标记为完成时，Iris 会从库存中扣除这些配件。", ph_routine: "例如：更换滤水器", f_equipment: "设备",
    f_schedule: "计划", s_interval: "每隔 X 时间重复", s_months: "在某些月份", s_date: "在某个日期", s_clock: "换时制时",
    f_last: "上次完成时间", h_last: "从未完成请留空。对于“每隔 X”的任务，会立即到期。",
    f_remind: "在手机上提醒直到完成", f_remind_at: "提醒时间", f_repeat_every: "重复", rp_0: "不重复", rp_15: "每 15 分钟", rp_30: "每 30 分钟", rp_60: "每小时", rp_120: "每 2 小时", rp_240: "每 4 小时",
    f_remind_until: "停止提醒时间（可选）", h_remind: "仅在任务当天到期或已逾期时提醒，标记为完成后即停止。通知中有“完成”按钮。使用在“配置”中选择的手机。",
    close: "关闭", edit: "编辑", delete: "删除", cancel: "取消", save: "保存",
    k_location: "位置", k_category: "类别", k_brand: "品牌", k_model: "型号", k_serial: "序列号", k_bought: "购买", k_installed: "安装", k_warranty: "保修", k_store: "商店", k_order: "订单号", k_phone: "电话", k_email: "邮箱", k_notes: "备注",
    war_expired: "已过期 {0} 天", war_today: "今天到期", war_left: "还剩 {0} 天", sec_routines: "任务", no_routines_eq: "没有任务。",
    done_once: "一次性任务，已完成。你可以在“编辑”(✎) 中删除它。",
    k_equipment: "设备", k_schedule: "计划", k_last: "上次", never: "从未", k_next: "下次", k_remind: "提醒",
    rm_at: "{0}", rm_rep_h: "，每 {0} 小时重复", rm_rep_m: "，每 {0} 分钟重复", rm_until: "，直到 {0}",
    sec_register: "记录", f_done_on: "完成日期", f_cost: "费用（{0}）", f_parts_used2: "使用的配件", in_stock: "库存 {0}", h_parts_used: "Iris 会从库存扣除这些配件，不会超过现有数量。",
    mark_done_btn: "标记为完成", sec_snooze: "推迟", sn_3: "3 天", sn_7: "1 周", sn_14: "2 周", sn_30: "1 个月", cancel_snooze: "取消推迟", resume: "恢复此任务", pause: "暂停此任务（不再算作逾期）",
    card_desc: "维护任务、设备、配件和记录。",
  },
};

const LOGO_OLHO = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cdefs%3E%3CradialGradient id='b'%3E%3Cstop offset='0' stop-color='%232f8bff' stop-opacity='.3'/%3E%3Cstop offset='.55' stop-color='%23060a1c'/%3E%3Cstop offset='1' stop-color='%23020408'/%3E%3C/radialGradient%3E%3CradialGradient id='c'%3E%3Cstop offset='0' stop-color='%23fff'/%3E%3Cstop offset='.25' stop-color='%23fff' stop-opacity='.95'/%3E%3Cstop offset='.5' stop-color='%239fdcff' stop-opacity='.65'/%3E%3Cstop offset='1' stop-color='%232f8bff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='20' cy='20' r='19' fill='url(%23b)' stroke='%239fdcff' stroke-opacity='.55' stroke-width='1.2'/%3E%3Cpath d='M20 20Q27.8 23.3 35.4 21.9M20 20Q26.1 26.9 34.1 29.0M20 20Q22.6 29.5 29.4 35.3M20 20Q18.5 28.4 21.6 35.4M20 20Q14.6 27.4 14.3 35.7M20 20Q11.3 24.7 7.2 32.5M20 20Q11.5 20.4 5.3 25.0M20 20Q11.5 16.4 3.4 18.0M20 20Q13.5 12.6 4.9 10.3M20 20Q17.7 11.8 11.9 6.8M20 20Q21.6 11.0 18.3 3.4M20 20Q25.8 12.0 26.1 3.2M20 20Q27.5 15.9 31.1 9.1M20 20Q29.2 19.6 35.8 14.6' fill='none' stroke='%232f8bff' stroke-opacity='.35' stroke-width='2.6' stroke-linecap='round'/%3E%3Cpath d='M20 20Q27.8 23.3 35.4 21.9M20 20Q26.1 26.9 34.1 29.0M20 20Q22.6 29.5 29.4 35.3M20 20Q18.5 28.4 21.6 35.4M20 20Q14.6 27.4 14.3 35.7M20 20Q11.3 24.7 7.2 32.5M20 20Q11.5 20.4 5.3 25.0M20 20Q11.5 16.4 3.4 18.0M20 20Q13.5 12.6 4.9 10.3M20 20Q17.7 11.8 11.9 6.8M20 20Q21.6 11.0 18.3 3.4M20 20Q25.8 12.0 26.1 3.2M20 20Q27.5 15.9 31.1 9.1M20 20Q29.2 19.6 35.8 14.6' fill='none' stroke='%239fdcff' stroke-width='.9' stroke-linecap='round'/%3E%3Ccircle cx='20' cy='20' r='8.5' fill='url(%23c)'/%3E%3Cellipse cx='14' cy='11.5' rx='5' ry='3' fill='%23fff' opacity='.22'/%3E%3C/svg%3E\")";

const PROT = {
  pt: ["Só na versão Pro", "Este pacote faz parte da versão Pro (Ko-fi)."],
  en: ["Pro version only", "This pack is part of the Pro version (Ko-fi)."],
  es: ["Solo en la versión Pro", "Este paquete forma parte de la versión Pro (Ko-fi)."],
  fr: ["Version Pro uniquement", "Ce pack fait partie de la version Pro (Ko-fi)."],
  de: ["Nur in der Pro-Version", "Dieses Paket gehört zur Pro-Version (Ko-fi)."],
  it: ["Solo nella versione Pro", "Questo pacchetto fa parte della versione Pro (Ko-fi)."],
  ru: ["Только в версии Pro", "Этот набор входит в версию Pro (Ko-fi)."],
  zh: ["仅限 Pro 版", "此套装属于 Pro 版（Ko-fi）。"],
};
for (const k of Object.keys(PROT)) if (I18N[k]) { I18N[k].pro_only = PROT[k][0]; I18N[k].pack_locked = PROT[k][1]; }
const LANGS = [["pt", "Português"], ["en", "English"], ["es", "Español"], ["fr", "Français"], ["de", "Deutsch"], ["it", "Italiano"], ["ru", "Русский"], ["zh", "中文"]];
let LANG = "pt";
function setLang(code) {
  const base = String(code || "pt").toLowerCase().split(/[-_]/)[0];
  LANG = I18N[base] ? base : "en";
}
// t("chave", a, b) -> substitui {0}, {1}. pl("chave", n) escolhe singular|plural.
function t(key, ...args) {
  let s = (I18N[LANG] && I18N[LANG][key]) ?? I18N.en[key] ?? I18N.pt[key] ?? key;
  args.forEach((a, i) => { s = s.split(`{${i}}`).join(a); });
  return s;
}
function pl(key, n, ...args) {
  const parts = t(key).split("|");
  let s = n === 1 ? parts[0] : parts[1] ?? parts[0];
  [n, ...args].forEach((a, i) => { s = s.split(`{${i}}`).join(a); });
  return s;
}
const U = (key, ...args) => t(key, ...args).toUpperCase();

const ORDEM = ["overdue", "due_soon", "snoozed", "no_schedule", "on_track", "paused", "done"];
const TABS = [
  ["routines", "tab_routines", "M8 2v4M16 2v4M3 8h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM9 15l2 2 4-4"],
  ["equipment", "tab_equipment", "M4 4h16v16H4zM4 10h16M10 10v10"],
  ["parts", "tab_parts", "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5"],
  ["history", "tab_history", "M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5M12 7v5l3 2"],
  ["settings", "tab_settings", "M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M14 4v4M8 10v4M16 16v4"],
];

const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const mesCurto = (m) => new Intl.DateTimeFormat(LANG, { month: "short" }).format(new Date(2021, m - 1, 1)).replace(".", "");
const mesLongo = (m) => new Intl.DateTimeFormat(LANG, { month: "long" }).format(new Date(2021, m - 1, 1));
const fmtData = (iso) => (iso ? new Date(iso + "T12:00:00").toLocaleDateString(LANG, { day: "2-digit", month: "2-digit", year: "numeric" }) : "");
const fmtDiaMes = (iso) => (iso ? new Date(iso + "T12:00:00").toLocaleDateString(LANG, { day: "2-digit", month: "2-digit" }) : "");
let MOEDA = "EUR";
const fmtEuro = (n) => (n == null ? "" : new Intl.NumberFormat(LANG, { style: "currency", currency: MOEDA }).format(Number(n)));
const simboloMoeda = () => (new Intl.NumberFormat(LANG, { style: "currency", currency: MOEDA }).formatToParts(0).find((p) => p.type === "currency") || {}).value || MOEDA;

// QR das faturas portuguesas: A:NIF*...*F:AAAAMMDD*G:documento*H:ATCUD*...*O:total
function lerQR(txt) {
  const m = {};
  String(txt || "").split("*").forEach((p) => { const i = p.indexOf(":"); if (i > 0) m[p.slice(0, i).trim()] = p.slice(i + 1).trim(); });
  if (!m.A || !/^\d{9}$/.test(m.A) || !m.F) return null;
  const d = m.F;
  const total = parseFloat(String(m.O || "").replace(",", "."));
  return { nif: m.A, date: /^\d{8}$/.test(d) ? `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}` : "", doc: m.G || "", atcud: m.H || "", total: Number.isNaN(total) ? null : total };
}

function descreverAgenda(s) {
  if (!s) return "";
  if (s.type === "interval") {
    if (s.every === 1) return t(`sd_1_${s.unit}`);
    return t("sd_n", s.every, pl(`unit_${s.unit}`, s.every));
  }
  if (s.type === "months") return t("sd_months", s.months.map((m) => mesCurto(m)).join(", "));
  if (s.type === "date") return s.repeat === "once" ? t("sd_once", fmtData(s.date)) : t("sd_yearly", fmtDiaMes(s.date));
  if (s.type === "clock_change") return t("sd_clock", s.which.map((w) => t(w === "spring" ? "spring" : "autumn")).join(t("and")));
  return "";
}

function textoQuando(r) {
  if (r.status === "paused") return t("w_paused");
  if (r.status === "done") return t("w_done");
  if (r.status === "snoozed") return t("w_snoozed");
  if (r.status === "no_schedule") return t("w_nosched");
  const d = r.days;
  if (d === 0) return t("w_today");
  if (d < 0) return d === -1 ? t("w_ago1") : Math.abs(d) >= 60 ? t("w_agom", Math.round(Math.abs(d) / 30)) : t("w_agod", Math.abs(d));
  if (d === 1) return t("w_tomorrow");
  return d >= 60 ? t("w_inm", Math.round(d / 30)) : t("w_ind", d);
}


const CSS = `
:host{display:block}
*{box-sizing:border-box}
ha-card{overflow:hidden}
.root{--ok:#2E9E7E;--gold:#B8860B;--red:#D4543A;--acc:#E5B53C;--accfg:#1A1408;font-family:var(--primary-font-family,Inter,system-ui,sans-serif);color:var(--primary-text-color);padding:0 0 4px 0;position:relative}
.root.dark{--ok:#4FC3A1;--gold:#E5B53C;--red:#F2836B}
button{font-family:inherit;cursor:pointer;color:inherit}
.top{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;padding:12px 16px;background:linear-gradient(120deg,rgba(138,100,20,.95),rgba(227,178,60,.95) 62%,rgba(240,199,90,.95))}
.top .rt{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.eye{width:42px;height:42px;flex:none;background:${LOGO_OLHO} center/contain no-repeat;border-radius:50%;box-shadow:0 0 8px rgba(47,139,255,.5),0 2px 6px rgba(0,0,0,.4);animation:irisPulse 2.2s ease-in-out infinite}
@keyframes irisPulse{0%,100%{transform:scale(1);box-shadow:0 0 8px 0 rgba(47,139,255,.45),0 2px 6px rgba(0,0,0,.4)}50%{transform:scale(1.1);box-shadow:0 0 26px 5px rgba(130,200,255,.95),0 2px 6px rgba(0,0,0,.4)}}
.ttl{font-size:15px;font-weight:800;letter-spacing:3px;color:#1b1405;white-space:nowrap}
.lng{display:inline-flex;align-items:center;gap:4px;background:rgba(15,22,35,.88);border:1px solid #3a2a06;border-radius:999px;padding:2px 10px;color:#e3b23c}
.lng select{background:transparent;color:#f3f4f7;border:0;font-size:13px;font-weight:700;font-family:inherit;padding:6px 2px;cursor:pointer;outline:none}
.lng select option{background:#0b111c;color:#f3f4f7}
.top .addb{background:#1b1405;color:#f0c75a}
@media(max-width:520px){.eye{width:34px;height:34px}.ttl{font-size:13px;letter-spacing:2px}.top{padding:10px 12px}}
.brand{display:flex;align-items:center;gap:12px}
.logo{width:34px;height:34px;border-radius:10px;background:var(--acc);display:flex;align-items:center;justify-content:center}
.brand small{display:block;font-size:11px;font-weight:700;letter-spacing:2px;color:var(--secondary-text-color);line-height:1}
.brand b{font-size:18px;font-weight:800;line-height:1.2}
.tabs{display:flex;border-bottom:1px solid var(--divider-color);overflow-x:auto;padding:0 8px}
.tab{flex:1;min-width:max-content;background:none;border:0;border-bottom:3px solid transparent;padding:10px 8px;display:flex;flex-direction:column;align-items:center;gap:3px;font-size:12px;font-weight:600;color:var(--secondary-text-color);min-height:48px}
.tab.on{color:var(--gold);border-bottom-color:var(--acc)}
.tab svg,.ico{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.body{padding:12px 16px 12px}
.search{width:100%;height:44px;border:1px solid var(--divider-color);border-radius:14px;background:var(--secondary-background-color);color:var(--primary-text-color);padding:0 14px;font-size:15px;font-family:inherit}
.chips{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px;margin:10px 0 4px}
.chip{border-radius:12px;padding:8px 2px;text-align:center;border:1px solid var(--divider-color);background:var(--secondary-background-color)}
.chip.sel{outline:2px solid var(--primary-text-color)}
.chip b{display:block;font-size:20px;font-weight:800}
.chip span{font-size:10px;font-weight:600;letter-spacing:.5px;color:var(--secondary-text-color)}
.chip.overdue b{color:var(--red)}.chip.due_soon b{color:var(--gold)}.chip.on_track b{color:var(--ok)}
.seg{display:flex;gap:6px;margin:10px 0 0}
.seg button{flex:1;min-height:40px;border:1px solid var(--divider-color);border-radius:12px;background:var(--card-background-color);color:var(--secondary-text-color);font-size:13px;font-weight:600;font-family:inherit}
.seg button.on{background:var(--acc);color:var(--accfg);border-color:var(--acc)}
.gh{display:flex;align-items:center;gap:10px;padding:10px 14px;margin-top:10px;border:1px solid var(--divider-color);border-radius:16px;background:var(--card-background-color);cursor:pointer;min-height:54px}
.gh .arw{width:14px;color:var(--secondary-text-color);transition:transform .15s}
.gh.open .arw{transform:rotate(90deg)}
.gh b{flex:1;font-size:15px}
.gh .cnt{min-width:26px;text-align:center;font-size:13px;font-weight:700;color:var(--secondary-text-color)}
.gh .bd{font-size:11px;font-weight:700;padding:3px 8px;border-radius:10px;white-space:nowrap}
.gh .bd.overdue{background:rgba(212,84,58,.15);color:var(--red)}
.gh .bd.due_soon{background:rgba(232,180,40,.15);color:var(--gold)}
.gt{display:flex;align-items:center;gap:8px;padding:12px 0 6px;font-size:11px;font-weight:700;letter-spacing:1.5px;color:var(--secondary-text-color)}
.gt i{flex:1;height:1px;background:var(--divider-color)}
.box{border:1px solid var(--divider-color);border-radius:16px;overflow:hidden;background:var(--card-background-color)}
.row{display:flex;align-items:center;gap:12px;padding:10px 12px;border-top:1px solid var(--divider-color);min-height:64px;cursor:pointer}
.row:first-child{border-top:0}
.row .t{flex:1;min-width:0}
.row .n{font-size:15px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.bar{height:5px;border-radius:5px;background:var(--divider-color);margin-top:8px;overflow:hidden}.bar i{display:block;height:100%;border-radius:5px}.seal{min-width:44px;text-align:center;font-size:12.5px;font-weight:800;color:#141414;border-radius:9px;padding:5px 6px;flex:none}
.row .s{font-size:12px;color:var(--secondary-text-color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.s b{font-weight:600}
.overdue{color:var(--red)}.due_soon{color:var(--gold)}.on_track{color:var(--ok)}.snoozed,.paused,.no_schedule,.done{color:var(--secondary-text-color)}
.expiring{color:var(--gold)}.expired{color:var(--red)}.active{color:var(--ok)}
.ck{width:44px;height:44px;border-radius:50%;border:1px solid var(--divider-color);background:transparent;display:flex;align-items:center;justify-content:center;flex:none}
.empty{padding:28px 8px;text-align:center;color:var(--secondary-text-color);font-size:14px}
.qty{display:flex;align-items:center;gap:6px}
.qty button,.btn{min-height:44px;min-width:44px;border-radius:14px;border:1px solid var(--divider-color);background:transparent;font-size:15px;font-weight:600;padding:0 14px}
.qty .num{min-width:28px;text-align:center;font-weight:700;font-size:16px}
.stock{width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-weight:800;background:var(--secondary-background-color)}
.stock.low{background:rgba(212,84,58,.15);color:var(--red)}
.hm{display:flex;justify-content:space-between;align-items:baseline;padding:14px 0 6px;font-size:11px;font-weight:700;letter-spacing:1.5px;color:var(--secondary-text-color)}
.hm em{font-style:normal;font-size:13px;letter-spacing:0;color:var(--primary-text-color)}
.day{width:34px;text-align:center;font-weight:800;font-size:18px;color:var(--secondary-text-color);flex:none}
.cost{font-weight:700;font-size:14px}
.cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}
.eq{border:1px solid var(--divider-color);border-radius:16px;padding:12px;cursor:pointer;min-height:96px;display:flex;flex-direction:column;gap:4px;background:var(--card-background-color)}
.eq b{font-size:15px}.eq small{color:var(--secondary-text-color);font-size:12px}
.badge{align-self:flex-start;font-size:10px;font-weight:700;letter-spacing:.5px;padding:3px 8px;border-radius:8px;background:var(--secondary-background-color)}
.ov{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9;display:flex;align-items:flex-end;justify-content:center}
.sheet{width:min(520px,100%);max-height:90vh;overflow:auto;background:var(--card-background-color);border-radius:24px 24px 0 0;padding:0 0 calc(76px + env(safe-area-inset-bottom,0px));box-shadow:0 -20px 60px rgba(0,0,0,.4)}
@media(min-width:700px){.ov{align-items:center}.sheet{border-radius:24px;padding-bottom:18px}}
.sh{display:flex;align-items:center;justify-content:space-between;padding:14px 8px 10px 20px;border-bottom:1px solid var(--divider-color);position:sticky;top:0;background:var(--card-background-color)}
.sh b{font-size:18px}
.x{width:44px;height:44px;border:0;background:none;border-radius:50%}
.kv{display:grid;grid-template-columns:110px 1fr;gap:8px 10px;padding:14px 20px 6px;font-size:14px}
.kv>span:nth-child(odd){font-size:11px;font-weight:700;letter-spacing:1px;color:var(--secondary-text-color);padding-top:2px}
.f{padding:0 20px;display:flex;flex-direction:column;gap:12px}
.f label{display:flex;flex-direction:column;gap:5px;font-size:11px;font-weight:700;letter-spacing:1px;color:var(--secondary-text-color)}
.f input{height:48px;border:1px solid var(--divider-color);border-radius:14px;background:var(--secondary-background-color);color:var(--primary-text-color);padding:0 14px;font-size:16px;font-family:inherit;width:100%}
.two{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.hint{font-size:12px;color:var(--secondary-text-color);line-height:1.4}
.sec{display:flex;align-items:center;gap:8px;padding:16px 20px 8px;font-size:11px;font-weight:700;letter-spacing:1.5px;color:var(--secondary-text-color)}
.sec i{flex:1;height:1px;background:var(--divider-color)}
.acts{display:flex;gap:8px;padding:16px 20px 0}
.primary{flex:1.4;height:52px;border-radius:16px;border:0;background:var(--acc);color:var(--accfg);font-weight:800;font-size:16px}
.acts .btn{flex:1;height:52px}
.snz{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:0 20px}
.link{background:none;border:0;padding:12px 20px;color:var(--secondary-text-color);font-size:13px;text-align:left}
.addb{min-height:44px;border:0;border-radius:22px;background:var(--acc);color:var(--accfg);font-weight:700;font-size:14px;padding:0 16px;display:flex;align-items:center;gap:6px}
.hb{display:flex}
.f select,.f textarea{border:1px solid var(--divider-color);border-radius:14px;background:var(--secondary-background-color);color:var(--primary-text-color);padding:0 14px;font-size:16px;font-family:inherit;width:100%}
.f select{height:48px}.f textarea{padding:12px 14px;min-height:72px;resize:vertical}
.mgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.mchip{position:relative;display:block}
.mchip input{position:absolute;opacity:0;inset:0;width:100%;height:100%;margin:0;cursor:pointer}
.mchip span{display:flex;align-items:center;justify-content:center;min-height:44px;border:1px solid var(--divider-color);border-radius:14px;font-size:14px;font-weight:600;letter-spacing:0;color:var(--primary-text-color)}
.mchip input:checked+span{background:var(--acc);color:var(--accfg);border-color:var(--acc)}
.mchip input:focus-visible+span{outline:2px solid var(--primary-text-color)}
.f label.prow{flex-direction:row;gap:10px}
.prow{display:flex;align-items:center;gap:10px;border:1px solid var(--divider-color);border-radius:14px;padding:6px 12px;min-height:52px;font-size:14px;letter-spacing:0;font-weight:500;color:var(--primary-text-color)}
.prow input[type=checkbox]{width:22px;height:22px;flex:none}
.prow .pn{flex:1}
.prow input[type=number]{width:64px;height:40px;text-align:center}
.del{background:none;border:1px solid var(--red);color:var(--red);border-radius:16px;height:52px;padding:0 16px;font-weight:700}
.wl a{color:var(--primary-color)}
.err{margin:12px 20px 0;padding:10px 12px;border-radius:12px;background:rgba(212,84,58,.15);color:var(--red);font-size:13px}
`;

class IrisCareCard extends HTMLElement {
  setConfig(config) {
    this._config = config || {};
    this._tab = this._tab || "routines";
    this._filter = this._filter || "all";
    this._q = this._q || "";
    this._modal = null;
    if (this._grp === undefined) {
      try { this._grp = localStorage.getItem("irisCareGrp") === "status" ? "status" : "equip"; } catch (e) { this._grp = "equip"; }
      try { this._gopen = JSON.parse(localStorage.getItem("irisCareOpen") || "{}") || {}; } catch (e) { this._gopen = {}; }
    }
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.addEventListener("click", (e) => this._onClick(e));
      this.shadowRoot.addEventListener("input", (e) => this._onInput(e));
      this.shadowRoot.addEventListener("change", (e) => this._onChange(e));
    }
    this._render();
  }

  set hass(hass) {
    const first = !this._hass;
    this._hass = hass;
    if (first) { let sv = null; try { sv = localStorage.getItem("irisCareLang"); } catch (e) { /* sem armazenamento */ } this._userLang = LANGS.some((x) => x[0] === sv) ? sv : null; }
    setLang(this._userLang || hass.language || (hass.locale && hass.locale.language));
    MOEDA = (hass.config && hass.config.currency) || "EUR";
    if (first) this._start();
    this._watchRevision(hass);
    const dark = !!(hass.themes && hass.themes.darkMode);
    const root = this.shadowRoot && this.shadowRoot.querySelector(".root");
    if (root) root.classList.toggle("dark", dark);
  }

  getCardSize() {
    return 8;
  }

  static getStubConfig() {
    return {};
  }

  disconnectedCallback() {
    if (this._unsub) {
      this._unsub.then?.((u) => u(), () => {});
      this._unsub = null;
    }
  }

  connectedCallback() {
    if (this._hass && !this._unsub) this._subscribe();
  }

  async _start() {
    await this._load();
    this._subscribe();
  }

  _subscribe() {
    try {
      const p = this._hass.connection.subscribeEvents(() => this._load(), "iris_care_updated");
      this._unsub = p;
      // Contas sem administrador não podem escutar eventos: o pedido é recusado (promessa rejeitada).
      // Nesse caso o cartão atualiza-se pelo sensor de revisão (_watchRevision).
      if (p && p.catch) p.catch(() => { if (this._unsub === p) this._unsub = null; });
    } catch (e) {
      /* sem subscrição: atualiza pelo sensor de revisão */
    }
  }

  // Atualização automática para qualquer conta: o sensor "Revision" muda a cada alteração.
  _watchRevision(hass) {
    if (!hass || !hass.states) return;
    if (!this._revId) {
      if (hass.states["sensor.iris_care_revision"]) {
        this._revId = "sensor.iris_care_revision";
      } else {
        const now = Date.now();
        if (this._revScan && now - this._revScan < 30000) return;
        this._revScan = now;
        for (const id in hass.states) {
          const s = hass.states[id];
          if (id.startsWith("sensor.") && s.attributes && s.attributes.iris_care_revision) {
            this._revId = id;
            break;
          }
        }
      }
      if (!this._revId) return;
    }
    const st = hass.states[this._revId];
    const v = st ? st.state : null;
    if (this._rev !== undefined && v !== this._rev) {
      clearTimeout(this._revTimer);
      this._revTimer = setTimeout(() => this._load(), 300);
    }
    this._rev = v;
  }

  async _load() {
    try {
      this._data = await this._hass.callWS({ type: "iris_care/get_all" });
      this._error = null;
    } catch (e) {
      this._error = t("e_load");
    }
    this._render();
  }

  async _ws(payload) {
    try {
      await this._hass.callWS(payload);
      await this._load();
      return true;
    } catch (e) {
      this._modalError = e.message || t("e_generic");
      this._render();
      return false;
    }
  }

  _part(id) {
    return (this._data.parts || []).find((p) => p.id === id);
  }

  // ------------------------------------------------------------ eventos
  _onInput(e) {
    const t = e.target;
    if (t.dataset.role === "search") {
      this._q = t.value;
      const pos = t.selectionStart;
      this._render();
      const el = this.shadowRoot.querySelector('[data-role="search"]');
      if (el) {
        el.focus();
        el.setSelectionRange(pos, pos);
      }
    }
  }

  async _onClick(e) {
    const el = e.target.closest("[data-act]");
    if (!el) {
      if (e.target.classList && e.target.classList.contains("ov")) this._closeModal();
      return;
    }
    const act = el.dataset.act;
    const id = el.dataset.id;
    if (act === "tab") { this._tab = el.dataset.tab; this._render(); }
    else if (act === "filter") { this._filter = this._filter === el.dataset.f ? "all" : el.dataset.f; this._render(); }
    else if (act === "open-routine") { this._modal = { type: "routine", id }; this._modalError = null; this._scanMsg = ""; this._invoice = null; this._render(); }
    else if (act === "open-equipment") { this._modal = { type: "equipment", id }; this._render(); }
    else if (act === "add") this._openForm({ kind: this._tab === "equipment" ? "equipment" : this._tab === "parts" ? "part" : "routine" });
    else if (act === "edit") this._openForm({ kind: el.dataset.kind, id });
    else if (act === "scan") await this._scan(el.dataset.target);
    else if (act === "form-save") await this._saveForm();
    else if (act === "form-delete") await this._deleteForm();
    else if (act === "dsp-register") await this._registarDespesa();
    else if (act === "grp") {
      this._grp = el.dataset.g;
      try { localStorage.setItem("irisCareGrp", this._grp); } catch (err) { /* sem armazenamento */ }
      this._render();
    }
    else if (act === "grp-toggle") {
      const k = el.dataset.k;
      this._gopen = { ...(this._gopen || {}), [k]: el.getAttribute("aria-expanded") !== "true" };
      try { localStorage.setItem("irisCareOpen", JSON.stringify(this._gopen)); } catch (err) { /* sem armazenamento */ }
      this._render();
    }
    else if (act === "packs") await this._abrirPacotes();
    else if (act === "pack-open") { this._modal.sel = id; this._modal.off = []; this._modal.msg = ""; this._modal.err = ""; this._render(); }
    else if (act === "pack-back") { this._modal.sel = null; this._modal.err = ""; this._render(); }
    else if (act === "pack-add") await this._aplicarPacote();
    else if (act === "dsp-eq") {
      const eq = this._data.equipment.find((x) => x.id === id);
      if (eq && eq.invoice && eq.invoice.qr) await this._abrirDespesa(eq.invoice.qr, eq.price != null ? String(eq.price) : "");
    }
    else if (act === "notify-now") {
      this._settingsMsg = t("sending"); this._render();
      try {
        const ok = await this._hass.callWS({ type: "iris_care/notify_now" });
        this._settingsMsg = ok ? t("sent") : t("not_sent");
      } catch (err) { this._settingsMsg = t("err", err.message || err); }
      this._render();
    }
    else if (act === "close") this._closeModal();
    else if (act === "done") await this._done(id);
    else if (act === "snooze") { if (await this._ws({ type: "iris_care/snooze", routine_id: id, days: Number(el.dataset.days) })) this._closeModal(); }
    else if (act === "pause") { if (await this._ws({ type: "iris_care/pause", routine_id: id, paused: el.dataset.paused === "1" })) this._closeModal(); }
    else if (act === "stock") await this._ws({ type: "iris_care/adjust_stock", part_id: id, delta: Number(el.dataset.d) });
    else if (act === "undo") { if (confirm(t("confirm_undo"))) await this._ws({ type: "iris_care/undo", history_id: id }); }
  }

  _onChange(e) {
    const t = e.target;
    if (t.dataset && t.dataset.pk !== undefined && this._modal && this._modal.type === "packs") {
      const i = Number(t.dataset.pk);
      const off = new Set(this._modal.off || []);
      if (t.checked) off.delete(i); else off.add(i);
      this._modal.off = [...off];
      this._render();
      return;
    }
    if (t.dataset && t.dataset.lang !== undefined) {
      this._userLang = t.value; setLang(t.value);
      try { localStorage.setItem("irisCareLang", t.value); } catch (err) { /* sem armazenamento */ }
      this._render();
      return;
    }
    if (t.dataset && t.dataset.setting) {
      const n = parseInt(t.value, 10);
      if (!Number.isNaN(n)) this._ws({ type: "iris_care/set_warn_days", [t.dataset.setting]: Math.max(0, n) });
      return;
    }
    if (this._modal && this._modal.type === "form" && ["sched_type", "repeat"].includes(t.dataset.ff) || (t.dataset.fc === "remind_on")) {
      this._collect();
      this._render();
    }
  }

  _openForm({ kind, id }) {
    const d = this._data;
    let v = {};
    if (kind === "equipment") v = { ...(d.equipment.find((x) => x.id === id) || {}) };
    else if (kind === "part") v = { ...(d.parts.find((x) => x.id === id) || {}) };
    else {
      const r = d.routines.find((x) => x.id === id);
      if (r) {
        const sc = r.schedule || {};
        v = { name: r.name, equipment_id: r.equipment_id || "", last_done: r.last_done || "", parts: (r.parts || []).map((p) => ({ ...p })), sched_type: sc.type, every: sc.every, unit: sc.unit, months: sc.months || [], date: sc.date || "", repeat: sc.repeat || "yearly", which: sc.which || [], remind_on: !!r.remind, remind_time: (r.remind && r.remind.time) || "08:00", remind_repeat: String((r.remind && r.remind.repeat_min) ?? 60), remind_until: r.remind ? (r.remind.until || "") : "22:00", notify_to: [...(r.notify_to || [])] };
      } else v = { remind_on: false, remind_time: "08:00", remind_repeat: "60", remind_until: "22:00", sched_type: "interval", every: 6, unit: "months", months: [], which: ["spring", "autumn"], repeat: "yearly", parts: [], notify_to: [] };
    }
    this._scanMsg = "";
    this._invoice = null;
    this._modal = { type: "form", kind, id: id || null, values: v };
    this._modalError = null;
    this._render();
  }

  _collect() {
    const sr = this.shadowRoot;
    const v = { ...this._modal.values };
    sr.querySelectorAll("[data-ff]").forEach((i) => { v[i.dataset.ff] = i.value; });
    sr.querySelectorAll("[data-fc]").forEach((i) => { v[i.dataset.fc] = i.checked; });
    const ms = sr.querySelectorAll("[data-month]");
    if (ms.length) v.months = [...ms].filter((i) => i.checked).map((i) => Number(i.dataset.month));
    const ws = sr.querySelectorAll("[data-which]");
    if (ws.length) v.which = [...ws].filter((i) => i.checked).map((i) => i.dataset.which);
    const ps = sr.querySelectorAll("[data-fp]");
    const nts = sr.querySelectorAll("[data-nt]");
    if (nts.length) v.notify_to = [...nts].filter((i) => i.checked).map((i) => i.dataset.nt);
    if (ps.length) v.parts = [...ps].filter((i) => i.checked).map((i) => ({ part_id: i.dataset.fp, qty: Math.max(1, parseInt((sr.querySelector(`[data-fq="${i.dataset.fp}"]`) || {}).value || "1", 10)) }));
    this._modal.values = v;
    return v;
  }

  async _saveForm() {
    const m = this._modal;
    const v = this._collect();
    const t = (x) => String(x ?? "").trim();
    if (!t(v.name)) { this._modalError = t("name_req"); this._render(); return; }
    let item, collection;
    if (m.kind === "equipment") {
      collection = "equipment";
      item = { name: t(v.name), location: t(v.location), category: t(v.category), brand: t(v.brand), model: t(v.model), serial: t(v.serial), notes: t(v.notes), purchased: t(v.purchased) || null, installed: t(v.installed) || null, warranty_months: t(v.warranty_months) === "" ? null : Number(v.warranty_months), store: t(v.store), order_number: t(v.order_number), price: t(v.price) === "" ? null : Number(String(v.price).replace(",", ".")), phone: t(v.phone), email: t(v.email) };
    } else if (m.kind === "part") {
      collection = "parts";
      item = { name: t(v.name), equipment_id: t(v.equipment_id) || null, stock: Number(v.stock || 0), reorder_at: t(v.reorder_at) === "" ? null : Number(v.reorder_at), part_number: t(v.part_number) };
    } else {
      collection = "routines";
      let schedule;
      if (v.sched_type === "interval") schedule = { type: "interval", every: Number(v.every || 0), unit: v.unit };
      else if (v.sched_type === "months") schedule = { type: "months", months: v.months };
      else if (v.sched_type === "date") { if (!t(v.date)) { this._modalError = t("pick_date"); this._render(); return; } schedule = { type: "date", date: v.date, repeat: v.repeat || "yearly" }; }
      else schedule = { type: "clock_change", which: v.which };
      const remind = v.remind_on ? { time: v.remind_time || "08:00", repeat_min: Number(v.remind_repeat || 0), until: t(v.remind_until) || null } : null;
      item = { name: t(v.name), equipment_id: t(v.equipment_id) || null, schedule, last_done: t(v.last_done) || null, parts: v.parts || [], remind, notify_to: v.notify_to || [] };
    }
    if (this._invoice && m.kind === "equipment") item.invoice = this._invoice;
    if (m.id) item.id = m.id;
    const inv = this._invoice;
    if (await this._ws({ type: "iris_care/upsert", collection, item })) {
      if (m.kind === "equipment" && inv && inv.qr && this._temDespesas()) this._abrirDespesa(inv.qr, item.price != null ? String(item.price) : "");
      else this._closeModal();
    }
  }

  async _deleteForm() {
    const m = this._modal;
    const msg = m.kind === "equipment" ? t("del_eq") : m.kind === "part" ? t("del_part") : t("del_routine");
    if (!confirm(msg)) return;
    const collection = { equipment: "equipment", part: "parts", routine: "routines" }[m.kind];
    if (await this._ws({ type: "iris_care/delete", collection, item_id: m.id })) this._closeModal();
  }

  // ------------------------------------------------------------ leitor de QR
  async _scan(target) {
    this._scanTarget = target;
    this._invoice = null;
    let raw = null;
    try {
      if ("BarcodeDetector" in window) {
        const det = new window.BarcodeDetector({ formats: ["qr_code"] });
        if (window.isSecureContext && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) raw = await this._scanLive(det);
        else raw = await this._scanFoto(det);
      } else raw = window.prompt(t("scan_paste")) || null;
    } catch (e) { raw = null; }
    if (raw === undefined || raw === null) return;
    this._aplicarQR(raw);
  }

  _scanLive(det) {
    return new Promise((resolve) => {
      const box = document.createElement("div");
      box.style.cssText = "position:fixed;inset:0;z-index:99;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:16px";
      const vid = document.createElement("video");
      vid.setAttribute("playsinline", ""); vid.muted = true;
      vid.style.cssText = "display:block;max-width:100%;max-height:70vh;border-radius:16px";
      const moldura = document.createElement("div");
      moldura.style.cssText = "position:relative;display:inline-block;max-width:100%";
      const canto = (c) => { const e = document.createElement("div"); e.style.cssText = `position:absolute;width:15%;height:15%;border:6px solid #4CAF50;filter:drop-shadow(0 0 2px rgba(0,0,0,.8));${c}`; return e; };
      const mira = document.createElement("div");
      mira.style.cssText = "position:absolute;left:22%;right:22%;top:30%;bottom:30%;pointer-events:none";
      [["top:0;left:0;border-right:0;border-bottom:0"], ["top:0;right:0;border-left:0;border-bottom:0"], ["bottom:0;left:0;border-right:0;border-top:0"], ["bottom:0;right:0;border-left:0;border-top:0"]].forEach(([c]) => mira.appendChild(canto(c)));
      moldura.append(vid, mira);
      const msg = document.createElement("div");
      msg.style.cssText = "color:#fff;font:600 15px system-ui,sans-serif;text-align:center";
      msg.textContent = "🔍 " + t("scan_searching");
      const cancel = document.createElement("button");
      cancel.textContent = t("cancel");
      cancel.style.cssText = "min-height:48px;padding:0 28px;border-radius:24px;border:0;background:#E5B53C;color:#1A1408;font:800 16px system-ui,sans-serif";
      box.append(moldura, msg, cancel);
      this.shadowRoot.appendChild(box);
      this._scanning = true;
      let stream = null, done = false;
      const fim = (val) => {
        if (done) return; done = true;
        if (stream) stream.getTracks().forEach((tr) => tr.stop());
        box.remove(); this._scanning = false; this._render(); resolve(val);
      };
      cancel.addEventListener("click", () => fim(null));
      navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } }, audio: false }).then(async (st) => {
        if (done) { st.getTracks().forEach((tr) => tr.stop()); return; }
        stream = st; vid.srcObject = st; await vid.play();
        const volta = async () => {
          if (done) return;
          try { const r = await det.detect(vid); if (r && r[0] && lerQR(r[0].rawValue)) { fim(r[0].rawValue); return; } } catch (e) { /* tenta outra vez */ }
          setTimeout(volta, 250);
        };
        volta();
      }).catch(() => { fim(undefined); this._scanFoto(det).then((v) => { if (v) this._aplicarQR(v); }); });
    });
  }

  _scanFoto(det) {
    return new Promise((resolve) => {
      const inp = document.createElement("input");
      inp.type = "file"; inp.accept = "image/*"; inp.setAttribute("capture", "environment"); inp.style.display = "none";
      this.shadowRoot.appendChild(inp);
      inp.addEventListener("change", async () => {
        const f = inp.files && inp.files[0];
        inp.remove();
        if (!f) { resolve(null); return; }
        try { const bmp = await createImageBitmap(f); const r = await det.detect(bmp); resolve(r && r[0] ? r[0].rawValue : ""); } catch (e) { resolve(""); }
      });
      inp.addEventListener("cancel", () => { inp.remove(); resolve(null); });
      inp.click();
    });
  }

  // A mesma fatura (NIF + nº do documento) já foi usada num equipamento ou numa rotina?
  _faturaJaRegistada(q) {
    if (!q.doc || !this._data) return [];
    const igual = (i) => i && i.doc === q.doc && i.nif === q.nif;
    const onde = [];
    (this._data.equipment || []).forEach((e) => { if (igual(e.invoice) && !(this._modal && this._modal.id === e.id && this._scanTarget === "equipment")) onde.push(e.name); });
    (this._data.history || []).forEach((h) => { if (igual(h.invoice)) onde.push(`${h.routine_name} (${fmtData(h.date)})`); });
    return onde;
  }

  _aplicarQR(raw) {
    const q = lerQR(raw);
    const aviso = (txt) => {
      this._scanMsg = txt;
      const el = this.shadowRoot.querySelector('[data-role="scanmsg"]');
      if (el) el.textContent = txt;
    };
    if (!q) { aviso(t("scan_fail")); return; }
    const onde = this._faturaJaRegistada(q);
    if (onde.length && !window.confirm(t("scan_dup", q.doc || "NIF " + q.nif, onde.join(", ")))) return;
    this._invoice = { nif: q.nif, doc: q.doc, qr: String(raw).slice(0, 600) };
    const resumo = [q.total != null ? fmtEuro(q.total) : "", q.date ? fmtData(q.date) : "", "NIF " + q.nif].filter(Boolean).join(" · ");
    if (this._scanTarget === "equipment" && this._modal && this._modal.type === "form") {
      const v = this._collect();
      if (q.date) v.purchased = q.date;
      if (q.total != null) v.price = String(q.total);
      if (q.doc) v.order_number = q.doc;
      if (!String(v.store || "").trim()) v.store = "NIF " + q.nif;
      this._scanMsg = t("scan_ok", resumo);
      this._noCollect = true;
      this._render();
    } else {
      const sr = this.shadowRoot;
      const set = (n, val) => { const e = sr.querySelector(`[data-f="${n}"]`); if (e && val) e.value = val; };
      set("date", q.date);
      set("cost", q.total != null ? String(q.total).replace(".", ",") : "");
      const nt = sr.querySelector('[data-f="notes"]');
      if (nt && !nt.value) nt.value = [q.doc, "NIF " + q.nif].filter(Boolean).join(" · ");
      aviso(t("scan_ok", resumo));
    }
  }

  _closeModal() { this._modal = null; this._modalError = null; this._render(); }

  async _done(routineId) {
    const sr = this.shadowRoot;
    const val = (n) => (sr.querySelector(`[data-f="${n}"]`) || {}).value;
    const parts = [...sr.querySelectorAll("[data-pq]")].map((i) => ({ part_id: i.dataset.pq, qty: Math.max(0, parseInt(i.value || "0", 10)) })).filter((p) => p.qty > 0);
    const cost = (val("cost") || "").replace(",", ".");
    const ok = await this._ws({
      type: "iris_care/complete",
      routine_id: routineId,
      date: val("date") || null,
      cost: cost === "" ? null : Number(cost),
      notes: val("notes") || "",
      parts,
      invoice: this._invoice || undefined,
    });
    if (ok) {
      const inv = this._invoice;
      this._invoice = null;
      if (inv && inv.qr && this._temDespesas()) this._abrirDespesa(inv.qr, cost);
      else this._closeModal();
    }
  }

  // ------------------------------------------------ pacotes de rotinas
  async _abrirPacotes() {
    const m = { type: "packs", list: null, sel: null, msg: "", busy: false, err: "" };
    this._modal = m;
    this._modalError = null;
    this._render();
    try {
      m.list = await this._hass.callWS({ type: "iris_care/packs", lang: LANG });
    } catch (e) { m.err = e.message || t("e_generic"); }
    if (this._modal === m) this._render();
  }

  async _aplicarPacote() {
    const m = this._modal;
    if (!m || m.type !== "packs" || !m.sel || m.busy) return;
    m.busy = true; m.err = ""; this._render();
    try {
      const pk = (m.list || []).find((x) => x.id === m.sel);
      const off = new Set(m.off || []);
      const only = pk ? pk.routines.map((_, i) => i).filter((i) => !off.has(i)) : [];
      const r = await this._hass.callWS({ type: "iris_care/apply_pack", pack_id: m.sel, lang: LANG, only });
      m.msg = t("packs_done", r.created, r.equipment, r.skipped);
      m.list = await this._hass.callWS({ type: "iris_care/packs", lang: LANG });
      m.sel = null;
      await this._load();
    } catch (e) { m.err = e.message || t("e_generic"); }
    m.busy = false;
    if (this._modal === m) this._render();
  }

  _viewPacks() {
    const m = this._modal;
    const p = m.sel && m.list ? m.list.find((x) => x.id === m.sel) : null;
    const cab = `<div class="ov"><div class="sheet"><div class="sh"><b>📦 ${esc(p ? p.title : t("packs_title"))}</b><div class="hb"><button class="x" data-act="close" aria-label="${esc(t("close"))}">✕</button></div></div>`;
    if (!m.list) return `${cab}${m.err ? `<div class="err">${esc(m.err)}</div>` : `<div class="empty">${esc(t("loading"))}</div>`}</div></div>`;
    const erro = m.err ? `<div class="err">${esc(m.err)}</div>` : "";
    if (p) {
      const completo = p.have >= p.routines.length;
      const off = new Set(m.off || []);
      const n = p.routines.filter((_, i) => !off.has(i)).length;
      return `${cab}<div class="hint" style="padding:14px 20px 4px">${esc(p.icon + " " + p.equipment)}${p.locked ? "" : " · " + esc(t("packs_n", p.routines.length))}${p.have ? " · " + esc(t("packs_have", p.have)) : ""}</div>
        <div class="hint" style="padding:0 20px 8px">${esc(t("packs_pick"))}</div>
        <div class="f">${p.routines.map((r, i) => `<label class="prow"><input type="checkbox" data-pk="${i}" ${off.has(i) ? "" : "checked"}><span class="pn"><b style="font-weight:600">${esc(r.name)}</b><br><small style="color:var(--secondary-text-color)">${esc(descreverAgenda(r.schedule))}</small></span></label>`).join("")}</div>
        <div class="hint" style="padding:12px 20px 0">${esc(p.locked ? t("pack_locked") : t("packs_hint"))}</div>${erro}
        <div class="acts"><button class="btn" data-act="pack-back">‹ ${esc(t("packs_back"))}</button>${completo ? `<div class="hint" style="flex:1.4;align-self:center">${esc(t("packs_all"))}</div>` : `<button class="primary" data-act="pack-add" ${m.busy || !n || p.locked ? "disabled" : ""} style="${!n || p.locked ? "opacity:.5" : ""}">${esc(t("packs_add_n", n))}</button>`}</div></div></div>`;
    }
    return `${cab}<div class="hint" style="padding:14px 20px 8px">${esc(t("packs_intro"))}</div>
      ${m.msg ? `<div class="hint" style="padding:0 20px 8px;font-size:14px;color:var(--primary-text-color)">✅ ${esc(m.msg)}</div>` : ""}${erro}
      <div style="padding:0 20px"><div class="box">${m.list.map((x) => `<div class="row" data-act="pack-open" data-id="${x.id}" role="button" tabindex="0"><div style="font-size:26px;width:40px;text-align:center;flex:none">${x.icon}</div><div class="t"><div class="n">${esc(x.title)}${x.tier === "pro" ? ' <span class="badge">PRO</span>' : ""}${x.locked ? " 🔒" : ""}</div><div class="s">${esc(x.desc)}${x.locked ? "" : " · " + esc(t("packs_n", x.routines.length))}${x.have ? " · " + esc(t("packs_have", x.have)) : ""}</div></div></div>`).join("")}</div></div></div></div>`;
  }

  // ------------------------------------------- ligação opcional à Despesas
  // Só aparece se existir o script script.iris_care_despesa (ponte criada no HA de quem usa a Despesas).
  _temDespesas() {
    const s = this._hass && this._hass.services && this._hass.services.script;
    return !!(s && s.iris_care_despesa);
  }

  async _dspCall(modo, extra) {
    const r = await this._hass.callWS({
      type: "call_service", domain: "script", service: "iris_care_despesa",
      service_data: { modo, qr: this._modal.qr, ...(extra || {}) }, return_response: true,
    });
    return r && r.response;
  }

  async _abrirDespesa(qr, cost) {
    const m = { type: "despesa", qr, valor: cost ? String(cost) : "", phase: "loading", d: null, msg: "", vals: {} };
    this._modal = m;
    this._modalError = null;
    this._render();
    try {
      const d = await this._dspCall("lookup");
      if (this._modal !== m) return;
      m.d = d;
      m.phase = d && d.ok ? "form" : "error";
      if (m.phase === "error") m.msg = t("scan_fail");
    } catch (e) {
      if (this._modal !== m) return;
      m.phase = "error";
      m.msg = e.message || t("dsp_err");
    }
    this._render();
  }

  _stashDsp() {
    const m = this._modal;
    if (!m || m.type !== "despesa") return;
    this.shadowRoot.querySelectorAll("[data-dsp]").forEach((i) => { m.vals[i.dataset.dsp] = i.value; });
  }

  async _registarDespesa() {
    const m = this._modal;
    this._stashDsp();
    const v = m.vals, d = m.d;
    const amb = d.encontrado && d.ambiguo;
    const conhecido = d.encontrado && !d.ambiguo;
    let forn = "", cat = "";
    if (amb) { const c = (d.correspondencias || [])[Number(v.amb || 0)] || {}; forn = c.fornecedor || ""; cat = c.categoria || ""; }
    else if (!conhecido) { forn = String(v.forn || "").trim(); cat = String(v.cat || ""); }
    if (!conhecido && (!forn || !cat)) { m.msg = t("dsp_need"); this._render(); return; }
    m.phase = "busy"; m.msg = "";
    this._render();
    try {
      const r = await this._dspCall("registar", {
        fornecedor: forn, categoria: cat, forma_pagamento: v.pag || "Multibanco",
        valor: String(v.valor ?? m.valor ?? "").replace(",", "."),
      });
      if (this._modal !== m) return;
      m.phase = "done";
      if (r && r.ok) { m.ok = true; m.msg = t("dsp_ok", r.fornecedor, r.categoria); }
      else if (r && r.erro === "duplicado") m.msg = t("dsp_dup", r.existente_id, r.existente_data);
      else m.msg = t("dsp_err") + (r && r.erro ? " (" + r.erro + ")" : "");
    } catch (e) {
      if (this._modal !== m) return;
      m.phase = "done";
      m.msg = t("dsp_err") + (e && e.message ? " " + e.message : "");
    }
    this._render();
  }

  _viewDespesa() {
    const m = this._modal, d = m.d, v = m.vals;
    const cab = `<div class="ov"><div class="sheet"><div class="sh"><b>🧾 ${esc(t("dsp_title"))}</b><div class="hb"><button class="x" data-act="close" aria-label="${esc(t("close"))}">✕</button></div></div>`;
    if (m.phase === "loading" || m.phase === "busy") return `${cab}<div class="empty">${esc(t("dsp_loading"))}</div></div></div>`;
    if (m.phase === "error") return `${cab}<div class="err">${esc(m.msg)}</div><div class="acts"><button class="btn" data-act="close">${esc(t("close"))}</button></div></div></div>`;
    if (m.phase === "done") return `${cab}<div class="${m.ok ? "hint" : "err"}" style="${m.ok ? "padding:18px 20px;font-size:15px;color:var(--primary-text-color)" : ""}">${m.ok ? "✅ " : ""}${esc(m.msg)}</div><div class="acts"><button class="primary" data-act="close">${esc(t("close"))}</button></div></div></div>`;
    const conhecido = d.encontrado && !d.ambiguo, amb = d.encontrado && d.ambiguo;
    const cats = d.categorias || [], pags = d.formas_pagamento || [];
    const catSel = v.cat != null ? v.cat : "";
    const pagSel = v.pag != null ? v.pag : pags.includes("Multibanco") ? "Multibanco" : pags[0] || "";
    const valor = v.valor != null ? v.valor : m.valor || d.valor || "";
    const resumo = [d.valor != null ? fmtEuro(Number(d.valor)) : "", d.data ? fmtData(d.data) : "", "NIF " + d.nif].filter(Boolean).join(" · ");
    let campos = "";
    if (conhecido) campos = `<div class="kv"><span>${U("dsp_supplier")}</span><span><b>${esc(d.fornecedor)}</b></span><span>${U("dsp_category")}</span><span>${esc(d.categoria)}</span></div><div class="hint" style="padding:0 20px">${esc(t("dsp_known"))}</div>`;
    else if (amb) campos = `<div class="f"><label>${U("dsp_pick")}<select data-dsp="amb">${(d.correspondencias || []).map((c, i) => `<option value="${i}" ${String(v.amb || 0) === String(i) ? "selected" : ""}>${esc(c.fornecedor)} · ${esc(c.categoria)}</option>`).join("")}</select></label></div>`;
    else campos = `<div class="hint" style="padding:0 20px 8px">${esc(t("dsp_new"))}</div><div class="f"><label>${U("dsp_supplier")}<input data-dsp="forn" value="${esc(v.forn || "")}"></label><label>${U("dsp_category")}<select data-dsp="cat"><option value=""></option>${cats.map((c) => `<option value="${esc(c)}" ${c === catSel ? "selected" : ""}>${esc(c)}</option>`).join("")}</select></label></div>`;
    return `${cab}<div class="hint" style="padding:14px 20px 8px;font-size:14px;color:var(--primary-text-color)">${esc(resumo)}</div>${campos}
      <div class="f" style="margin-top:12px"><div class="two"><label>${U("dsp_amount")}<input data-dsp="valor" inputmode="decimal" value="${esc(valor)}"></label><label>${U("dsp_payment")}<select data-dsp="pag">${pags.map((p) => `<option value="${esc(p)}" ${p === pagSel ? "selected" : ""}>${esc(p)}</option>`).join("")}</select></label></div></div>
      ${m.msg ? `<div class="err">${esc(m.msg)}</div>` : ""}
      <div class="acts"><button class="primary" data-act="dsp-register">${esc(t("dsp_register"))}</button><button class="btn" data-act="close">${esc(t("dsp_skip"))}</button></div></div></div>`;
  }

  // ------------------------------------------------------------- vistas
  _render() {
    if (!this.shadowRoot || this._scanning) return;
    this._stashDsp();
    if (this._noCollect) this._noCollect = false;
    else if (this._modal && this._modal.type === "form" && this.shadowRoot.querySelector("[data-ff]")) this._collect();
    const dark = !!(this._hass && this._hass.themes && this._hass.themes.darkMode);
    let inner;
    if (this._error) inner = `<div class="empty">${esc(this._error)}</div>`;
    else if (!this._data) inner = `<div class="empty">${t("loading")}</div>`;
    else inner = this._viewTab() + this._viewModal();
    const tabs = TABS.filter(([k]) => k !== "settings" || this._isAdmin()).map(([k, l, d]) => `<button class="tab ${this._tab === k ? "on" : ""}" data-act="tab" data-tab="${k}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>${t(l)}</button>`).join("");
    const title = ("IRIS " + (this._config.title || t("default_title"))).toUpperCase();
    const antes = this.shadowRoot.querySelector(".sheet");
    const rolagem = antes ? antes.scrollTop : 0;
    this.shadowRoot.innerHTML = `<style>${CSS}</style><ha-card><div class="root ${dark ? "dark" : ""}">
      <div class="top"><div class="brand"><span class="eye"></span><span class="ttl">${esc(title)}</span></div><div class="rt"><label class="lng"><span>🌐</span><select data-lang aria-label="Language">${LANGS.map(([c, n]) => `<option value="${c}"${c === LANG ? " selected" : ""}>${n}</option>`).join("")}</select></label>${this._addButton()}</div></div>
      <div class="tabs">${tabs}</div>${inner}</div></ha-card>`;
    if (rolagem) {
      const depois = this.shadowRoot.querySelector(".sheet");
      if (depois) depois.scrollTop = rolagem;
    }
  }

  // Qualquer utilizador pode criar e editar rotinas, equipamentos e peças.
  _canEdit() {
    return !!(this._hass && this._hass.user);
  }

  // Só o administrador pode apagar, usar Definições, Pacotes de rotinas e registar despesas.
  _isAdmin() {
    return !!(this._hass && this._hass.user && this._hass.user.is_admin);
  }

  _addButton() {
    if (!this._data || !this._canEdit() || this._tab === "history" || this._tab === "settings") return "";
    const l = t({ routines: "add_routine", equipment: "add_equipment", parts: "add_part" }[this._tab]);
    return `<button class="addb" data-act="add"><svg class="ico" style="stroke-width:3" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>${l}</button>`;
  }

  _viewTab() {
    if (this._tab === "equipment") return this._viewEquipment();
    if (this._tab === "parts") return this._viewParts();
    if (this._tab === "history") return this._viewHistory();
    if (this._tab === "settings" && this._isAdmin()) return this._viewSettings();
    return this._viewRoutines();
  }

  _cor(r) {
    return { overdue: "var(--red)", due_soon: "var(--gold)", on_track: "var(--ok)" }[r.status] || "var(--secondary-text-color)";
  }

  // Indicador A: barra fina que enche à medida que o prazo passa + selo com os dias.
  _bar(r) {
    if (r.days == null || r.status === "paused" || r.status === "snoozed" || r.status === "no_schedule") return "";
    let frac;
    if (r.status === "overdue") frac = 1;
    else {
      const ld = r.last_done ? Math.round((Date.now() - new Date(r.last_done + "T12:00:00").getTime()) / 86400000) : null;
      if (ld != null && ld >= 0) frac = ld / Math.max(1, ld + r.days);
      else frac = r.status === "due_soon" ? 1 - r.days / Math.max(1, this._data.settings.warn_days) : 0.1;
    }
    frac = Math.min(1, Math.max(0.04, frac));
    return `<div class="bar" aria-hidden="true"><i style="width:${(frac * 100).toFixed(0)}%;background:${this._cor(r)}"></i></div>`;
  }

  _seal(r) {
    if (r.days == null || r.status === "paused" || r.status === "snoozed" || r.status === "no_schedule") return "";
    const d = r.days;
    const txt = Math.abs(d) >= 100 ? (d < 0 ? "-" : "") + Math.round(Math.abs(d) / 30) + "m" : (d < 0 ? "-" : "") + Math.abs(d) + " d";
    return `<span class="seal" style="background:${this._cor(r)}">${esc(txt)}</span>`;
  }

  _viewRoutines() {
    const all = this._data.routines;
    const cnt = (s) => all.filter((r) => r.status === s).length;
    const chips = [["all", U("f_all"), all.length], ["overdue", U("f_overdue"), cnt("overdue")], ["due_soon", U("st_due_soon"), cnt("due_soon")], ["no_schedule", U("f_nodate"), cnt("no_schedule")], ["on_track", U("st_on_track"), cnt("on_track")]]
      .map(([k, l, n]) => `<div class="chip ${k} ${this._filter === k ? "sel" : ""}" data-act="filter" data-f="${k}" role="button" tabindex="0"><b>${n}</b><span>${l}</span></div>`).join("");
    const q = this._q.trim().toLowerCase();
    let list = all.filter((r) => (this._filter === "all" || r.status === this._filter) && (!q || `${r.name} ${r.equipment} ${r.location}`.toLowerCase().includes(q)));
    let html = `<div class="body">${this._isAdmin() ? `<button class="btn" type="button" data-act="packs" style="width:100%;margin-bottom:8px">📦 ${esc(t("packs_btn"))}</button>` : ""}<input class="search" data-role="search" placeholder="${esc(t("search"))}" value="${esc(this._q)}" aria-label="${esc(t("search"))}"><div class="chips">${chips}</div>`;
    const modo = this._grp === "status" ? "status" : "equip";
    if (all.length) html += `<div class="seg"><button type="button" data-act="grp" data-g="equip" class="${modo === "equip" ? "on" : ""}">▦ ${esc(t("grp_equip"))}</button><button type="button" data-act="grp" data-g="status" class="${modo === "status" ? "on" : ""}">≡ ${esc(t("grp_status"))}</button></div>`;
    if (!all.length) html += `<div class="empty">${t("no_routines")}</div>`;
    else if (!list.length) html += `<div class="empty">${t("not_found")}</div>`;
    const linha = (r, comEquip) => `
        <div class="row" data-act="open-routine" data-id="${r.id}" role="button" tabindex="0">
          <div class="t"><div class="n">${esc(r.name)}</div><div class="s"><b class="${r.status}">${textoQuando(r)}</b>${comEquip && r.equipment ? " · " + esc(r.equipment) : ""}${r.location ? " · " + esc(r.location) : ""}</div>${this._bar(r)}</div>
          ${this._seal(r)}<button class="ck" aria-label="${esc(t("mark_done"))}"><svg class="ico" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></button></div>`;
    const porDias = (a, b) => ORDEM.indexOf(a.status) - ORDEM.indexOf(b.status) || (a.days ?? 9999) - (b.days ?? 9999);
    if (modo === "equip") {
      const grupos = new Map();
      for (const r of list) {
        const k = r.equipment_id || "_none";
        if (!grupos.has(k)) grupos.set(k, { k, nome: r.equipment || t("grp_none"), rs: [] });
        grupos.get(k).rs.push(r);
      }
      const peso = (g) => (g.rs.some((r) => r.status === "overdue") ? 0 : g.rs.some((r) => r.status === "due_soon") ? 1 : 2);
      const ordenados = [...grupos.values()].sort((a, b) => peso(a) - peso(b) || a.nome.localeCompare(b.nome));
      for (const g of ordenados) {
        const atraso = g.rs.filter((r) => r.status === "overdue").length;
        const breve = g.rs.filter((r) => r.status === "due_soon").length;
        const guardado = (this._gopen || {})[g.k];
        const aberto = q ? true : guardado !== undefined ? guardado : atraso + breve > 0;
        html += `<div class="gh ${aberto ? "open" : ""}" data-act="grp-toggle" data-k="${esc(g.k)}" role="button" tabindex="0" aria-expanded="${aberto}"><span class="arw">▸</span><b>${esc(g.nome)}</b>${atraso ? `<span class="bd overdue">${atraso} ${esc(t("st_overdue"))}</span>` : ""}${breve ? `<span class="bd due_soon">${breve} ${esc(t("st_due_soon"))}</span>` : ""}<span class="cnt">${g.rs.length}</span></div>`;
        if (aberto) html += `<div class="box" style="margin-top:4px">${g.rs.sort(porDias).map((r) => linha(r, false)).join("")}</div>`;
      }
    } else {
      for (const st of ORDEM) {
        const rows = list.filter((r) => r.status === st).sort((a, b) => (a.days ?? 9999) - (b.days ?? 9999));
        if (!rows.length) continue;
        html += `<div class="gt">${U("st_" + st)}<i></i><span>${rows.length}</span></div><div class="box">${rows.map((r) => linha(r, true)).join("")}</div>`;
      }
    }
    return html + "</div>";
  }

  _viewEquipment() {
    const eq = this._data.equipment;
    if (!eq.length) return `<div class="body"><div class="empty">${t("no_eq")}</div></div>`;
    const pior = (rs) => ["overdue", "due_soon", "on_track"].find((s) => rs.some((r) => r.status === s));
    const lbl = { overdue: U("st_overdue"), due_soon: U("st_due_soon"), on_track: U("st_on_track") };
    const por = {};
    eq.forEach((e) => (por[e.location || t("no_loc")] ||= []).push(e));
    return `<div class="body">${Object.keys(por).sort().map((loc) => `<div class="gt">${esc(loc.toUpperCase())}<i></i></div><div class="cards">${por[loc].map((e) => {
      const rs = this._data.routines.filter((r) => r.equipment_id === e.id);
      const p = pior(rs);
      return `<div class="eq" data-act="open-equipment" data-id="${e.id}" role="button" tabindex="0">${p ? `<span class="badge ${p}">${lbl[p]}</span>` : ""}${e.warranty_status === "expiring" || e.warranty_status === "expired" ? `<span class="badge ${e.warranty_status}">${U(e.warranty_status === "expired" ? "b_expired" : "b_expiring")}</span>` : ""}<b>${esc(e.name)}</b><small>${pl("cnt_routines", rs.length)}</small>${e.model || e.brand ? `<small>${esc([e.brand, e.model].filter(Boolean).join(" "))}</small>` : ""}</div>`;
    }).join("")}</div>`).join("")}</div>`;
  }

  _viewParts() {
    const parts = this._data.parts;
    if (!parts.length) return `<div class="body"><div class="empty">${t("no_parts")}</div></div>`;
    return `<div class="body"><div class="box">${parts.map((p) => {
      const low = p.reorder_at != null && p.stock <= p.reorder_at;
      const n = this._data.routines.filter((r) => (r.parts || []).some((x) => x.part_id === p.id)).length;
      return `<div class="row" ${this._canEdit() ? `data-act="edit" data-kind="part" data-id="${p.id}"` : 'style="cursor:default"'}><div class="stock ${low ? "low" : ""}">${p.stock}</div><div class="t"><div class="n">${esc(p.name)}</div><div class="s">${p.reorder_at != null ? `${t("reorder_from", p.reorder_at)} · ` : ""}${pl("cnt_routines", n)}${p.part_number ? " · " + esc(p.part_number) : ""}</div></div>
        <div class="qty"><button aria-label="${esc(t("less"))}" data-act="stock" data-id="${p.id}" data-d="-1">−</button><button aria-label="${esc(t("more"))}" data-act="stock" data-id="${p.id}" data-d="1">+</button></div></div>`;
    }).join("")}</div></div>`;
  }

  _viewSettings() {
    const st = this._data.settings;
    const campo = (label, setting, valor, ajuda) => `<label>${label}<input type="number" min="0" max="730" inputmode="numeric" data-setting="${setting}" value="${valor}"></label><div class="hint">${ajuda}</div>`;
    return `<div class="body"><div class="gt">${U("s_alerts")}<i></i></div>
      <div class="f" style="padding:0">
        ${campo(U("s_routine_days"), "days", st.warn_days, esc(t("s_routine_hint")))}
        ${this._data.pro ? campo(U("s_warr_days"), "warranty_days", st.warranty_warn_days ?? 60, esc(t("s_warr_hint"))) : ""}
      </div>
      <div class="gt">${U("s_notif")}<i></i></div>
      <div class="hint" style="margin-bottom:12px">${esc(t("s_notif_hint"))}</div>
      <button class="btn" data-act="notify-now" style="width:100%">${t("s_send")}</button>
      ${this._settingsMsg ? `<div class="hint" style="margin-top:10px">${esc(this._settingsMsg)}</div>` : ""}
      </div>`;
  }

  _viewHistory() {
    const h = this._data.history;
    if (!h.length) return `<div class="body"><div class="empty">${t("no_history")}</div></div>`;
    const grupos = {};
    h.forEach((x) => (grupos[x.date.slice(0, 7)] ||= []).push(x));
    return `<div class="body">${Object.keys(grupos).sort().reverse().map((ym) => {
      const [y, m] = ym.split("-");
      const total = grupos[ym].reduce((s, x) => s + (x.cost || 0), 0);
      return `<div class="hm"><span>${mesLongo(Number(m)).toUpperCase()} ${y}</span><em>${total ? fmtEuro(total) : ""}</em></div><div class="box">${grupos[ym].map((x) => `
        <div class="row" style="cursor:default"><div class="day">${x.date.slice(8)}</div><div class="t"><div class="n">${esc(x.routine_name)}</div><div class="s">${esc([x.equipment_name, x.notes, ...(x.parts || []).map((p) => `${p.qty}× ${p.name}`)].filter(Boolean).join(" · "))}</div></div>
        ${x.cost != null ? `<span class="cost">${fmtEuro(x.cost)}</span>` : ""}<button class="ck" data-act="undo" data-id="${x.id}" aria-label="${esc(t("undo_aria"))}"><svg class="ico" viewBox="0 0 24 24"><path d="M9 14L4 9l5-5M4 9h10a6 6 0 0 1 0 12h-3"/></svg></button></div>`).join("")}</div>`;
    }).join("")}</div>`;
  }

  _fi(label, name, v, o = {}) {
    return `<label>${label}<input data-ff="${name}" type="${o.type || "text"}" value="${esc(v ?? "")}" ${o.ph ? `placeholder="${esc(o.ph)}"` : ""} ${o.attrs || ""}></label>`;
  }

  _fs(label, name, v, opts) {
    return `<label>${label}<select data-ff="${name}">${opts.map(([val, l]) => `<option value="${esc(val)}" ${String(v ?? "") === String(val) ? "selected" : ""}>${esc(l)}</option>`).join("")}</select></label>`;
  }

  _viewForm() {
    const m = this._modal, v = m.values, d = this._data, kind = m.kind, nova = !m.id;
    const eqOpts = [["", t("none")], ...d.equipment.map((e) => [e.id, e.name])];
    const titulo = t({ equipment: nova ? "new_eq" : "edit_eq", part: nova ? "new_part" : "edit_part", routine: nova ? "new_routine" : "edit_routine" }[kind]);
    let body = "";
    if (kind === "equipment") {
      const locs = [...new Set(d.equipment.map((e) => e.location).filter(Boolean))];
      body = `${this._fi(U("f_name"), "name", v.name, { ph: t("ph_eq_name") })}
        <div class="two"><label>${U("f_location")}<input data-ff="location" list="locs" value="${esc(v.location)}" placeholder="${esc(t("ph_location"))}"><datalist id="locs">${locs.map((l) => `<option value="${esc(l)}">`).join("")}</datalist></label>${this._fi(U("f_category"), "category", v.category, { ph: t("ph_location") })}</div>
        <div class="two">${this._fi(U("f_brand"), "brand", v.brand)}${this._fi(U("f_model"), "model", v.model)}</div>
        ${this._fi(U("f_serial"), "serial", v.serial)}
        ${d.pro ? `        <div class="sec" style="padding:8px 0 0">${U("sec_purchase")}<i></i></div>
        <button class="btn" type="button" data-act="scan" data-target="equipment" style="width:100%">📷 ${esc(t("scan_qr"))}</button>
        <div class="hint" data-role="scanmsg">${esc(this._scanMsg || "")}</div>
        <div class="two">${this._fi(U("f_purchased"), "purchased", v.purchased, { type: "date" })}${this._fi(U("f_installed"), "installed", v.installed, { type: "date" })}</div>
        ${this._fi(U("f_price"), "price", v.price, { type: "number", attrs: 'min="0" step="0.01" inputmode="decimal"' })}
        ${this._fi(U("f_warranty_m"), "warranty_months", v.warranty_months, { type: "number", ph: t("ph_36"), attrs: 'min="0" max="240" inputmode="numeric"' })}
        <div class="hint">${esc(t("h_warranty"))}</div>
        <div class="two">${this._fi(U("f_store"), "store", v.store)}${this._fi(U("f_order"), "order_number", v.order_number)}</div>
        <div class="two">${this._fi(U("f_phone"), "phone", v.phone, { type: "tel" })}${this._fi(U("f_email"), "email", v.email, { type: "email" })}</div>` : `<div class="hint">🔒 ${esc(t("pro_only"))}: ${esc(U("sec_purchase"))}</div>`}
        <label>${U("f_notes")}<textarea data-ff="notes">${esc(v.notes)}</textarea></label>`;
    } else if (kind === "part") {
      body = `${this._fi(U("f_name"), "name", v.name, { ph: t("ph_part_name") })}
        ${this._fs(U("f_equipment_opt"), "equipment_id", v.equipment_id || "", eqOpts)}
        <div class="two">${this._fi(U("f_stock"), "stock", v.stock ?? 0, { type: "number", attrs: 'min="0" inputmode="numeric"' })}${this._fi(U("f_reorder"), "reorder_at", v.reorder_at, { type: "number", attrs: 'min="0" inputmode="numeric"', ph: t("optional") })}</div>
        ${this._fi(U("f_partno"), "part_number", v.part_number)}`;
    } else {
      const st = v.sched_type || "interval";
      let sched = "";
      if (st === "interval") sched = `<div class="two">${this._fi(U("f_every"), "every", v.every, { type: "number", attrs: 'min="1" inputmode="numeric"' })}${this._fs(U("f_unit"), "unit", v.unit || "months", ["days", "weeks", "months", "years"].map((u) => [u, pl(`unit_${u}`, 2)]))}</div>`;
      else if (st === "months") sched = `<label>${U("f_months")}</label><div class="mgrid">${Array.from({ length: 12 }, (_, i) => mesCurto(i + 1)).map((l, i) => `<label class="mchip"><input type="checkbox" data-month="${i + 1}" ${(v.months || []).includes(i + 1) ? "checked" : ""}><span>${l}</span></label>`).join("")}</div><div class="hint">${esc(t("h_months"))}</div>`;
      else if (st === "date") sched = `<div class="two">${this._fi(U("f_date"), "date", v.date, { type: "date" })}${this._fs(U("f_repeat"), "repeat", v.repeat || "yearly", [["yearly", t("r_yearly")], ["once", t("r_once")]])}</div><div class="hint">${esc(v.repeat === "once" ? t("h_once") : t("h_yearly"))}</div>`;
      else sched = `<label>${U("f_when")}</label><div class="mgrid" style="grid-template-columns:1fr 1fr">${[["spring", t("spring_m")], ["autumn", t("autumn_m")]].map(([k, l]) => `<label class="mchip"><input type="checkbox" data-which="${k}" ${(v.which || []).includes(k) ? "checked" : ""}><span>${l}</span></label>`).join("")}</div><div class="hint">${esc(t("h_clock"))}</div>`;
      const partes = d.parts.length ? `<label>${U("f_parts_used")}</label>${d.parts.map((p) => { const u = (v.parts || []).find((x) => x.part_id === p.id); return `<label class="prow"><input type="checkbox" data-fp="${p.id}" ${u ? "checked" : ""}><span class="pn">${esc(p.name)}</span><input type="number" min="1" data-fq="${p.id}" value="${u ? u.qty : 1}"></label>`; }).join("")}<div class="hint">${esc(t("h_parts_deduct"))}</div>` : "";
      const alvos = d.targets || [];
      const quem = alvos.length ? `<label>${U("f_notify_to")}</label>${alvos.map((a) => `<label class="prow"><input type="checkbox" data-nt="${esc(a.service)}" ${(v.notify_to || []).includes(a.service) ? "checked" : ""}><span class="pn">${esc(a.name)}</span></label>`).join("")}<div class="hint">${esc(t("h_notify_to"))}</div>` : "";
      body = `${this._fi(U("f_name"), "name", v.name, { ph: t("ph_routine") })}
        ${this._fs(U("f_equipment"), "equipment_id", v.equipment_id || "", eqOpts)}
        ${this._fs(U("f_schedule"), "sched_type", st, [["interval", t("s_interval")], ["months", t("s_months")], ["date", t("s_date")], ["clock_change", t("s_clock")]])}
        ${sched}
        ${this._fi(U("f_last"), "last_done", v.last_done, { type: "date" })}
        <div class="hint">${esc(t("h_last"))}</div>
        ${d.pro ? `        <label class="prow" style="cursor:pointer"><input type="checkbox" data-fc="remind_on" ${v.remind_on ? "checked" : ""}><span class="pn">${esc(t("f_remind"))}</span></label>
        ${v.remind_on ? `<div class="two">${this._fi(U("f_remind_at"), "remind_time", v.remind_time, { type: "time" })}${this._fs(U("f_repeat_every"), "remind_repeat", v.remind_repeat, ["0", "15", "30", "60", "120", "240"].map((k) => [k, t("rp_" + k)]))}</div>
        ${this._fi(U("f_remind_until"), "remind_until", v.remind_until, { type: "time" })}
        <div class="hint">${esc(t("h_remind"))}</div>` : ""}` : ""}
        ${quem}
        ${partes}`;
    }
    return `<div class="ov"><div class="sheet"><div class="sh"><b>${titulo}</b><button class="x" data-act="close" aria-label="${esc(t("close"))}">✕</button></div>
      <div class="f" style="padding-top:14px">${body}</div>
      ${this._modalError ? `<div class="err">${esc(this._modalError)}</div>` : ""}
      <div class="acts">${nova || !this._isAdmin() ? "" : `<button class="del" data-act="form-delete">${t("delete")}</button>`}<button class="btn" data-act="close">${t("cancel")}</button><button class="primary" data-act="form-save">${t("save")}</button></div></div></div>`;
  }

  _viewModal() {
    const m = this._modal;
    if (!m) return "";
    if (m.type === "form") return this._viewForm();
    if (m.type === "despesa") return this._viewDespesa();
    if (m.type === "packs") return this._viewPacks();
    if (m.type === "equipment") {
      const e = this._data.equipment.find((x) => x.id === m.id);
      if (!e) return "";
      const rs = this._data.routines.filter((r) => r.equipment_id === e.id);
      const gar = e.warranty_until ? `<span class="${e.warranty_status}" style="font-weight:600">${fmtData(e.warranty_until)} · ${e.warranty_status === "expired" ? t("war_expired", Math.abs(e.warranty_days)) : e.warranty_days === 0 ? t("war_today") : t("war_left", e.warranty_days)}</span>` : "";
      const kv = [[U("k_location"), esc(e.location)], [U("k_category"), esc(e.category)], [U("k_brand"), esc(e.brand)], [U("k_model"), esc(e.model)], [U("k_serial"), esc(e.serial)], [U("k_bought"), fmtData(e.purchased)], [U("k_installed"), fmtData(e.installed)], [U("k_price"), e.price != null ? fmtEuro(e.price) : ""], [U("k_warranty"), gar], [U("k_store"), esc(e.store)], [U("k_order"), esc(e.order_number)], [U("k_phone"), e.phone ? `<a href="tel:${esc(e.phone)}">${esc(e.phone)}</a>` : ""], [U("k_email"), e.email ? `<a href="mailto:${esc(e.email)}">${esc(e.email)}</a>` : ""], [U("k_notes"), esc(e.notes)]].filter(([, val]) => val);
      return `<div class="ov"><div class="sheet"><div class="sh"><b>${esc(e.name)}</b><div class="hb">${this._canEdit() ? `<button class="x" data-act="edit" data-kind="equipment" data-id="${e.id}" aria-label="${esc(t("edit"))}">✎</button>` : ""}<button class="x" data-act="close" aria-label="${esc(t("close"))}">✕</button></div></div>
        ${kv.length ? `<div class="kv wl">${kv.map(([k, val]) => `<span>${k}</span><span>${val}</span>`).join("")}</div>` : ""}
        ${this._isAdmin() && e.invoice && e.invoice.qr && this._temDespesas() ? `<div class="acts" style="padding-top:8px"><button class="btn" data-act="dsp-eq" data-id="${e.id}" style="flex:1;height:48px">🧾 ${esc(t("dsp_register"))}</button></div>` : ""}
        <div class="sec">${U("sec_routines")}<i></i></div><div style="padding:0 20px"><div class="box">${rs.length ? rs.map((r) => `<div class="row" data-act="open-routine" data-id="${r.id}"><div class="t"><div class="n">${esc(r.name)}</div><div class="s"><b class="${r.status}">${textoQuando(r)}</b> · ${esc(descreverAgenda(r.schedule))}</div>${this._bar(r)}</div>${this._seal(r)}</div>`).join("") : `<div class="empty">${t("no_routines_eq")}</div>`}</div></div></div></div>`;
    }
    const r = this._data.routines.find((x) => x.id === m.id);
    if (!r) return "";
    const partes = (r.parts || []).map((p) => ({ ...p, info: this._part(p.part_id) })).filter((p) => p.info);
    const proxima = r.due ? `${fmtData(r.due)}${r.days != null ? " · " + textoQuando(r) : ""}` : "—";
    return `<div class="ov"><div class="sheet"><div class="sh"><b>${esc(r.name)}</b><div class="hb">${this._canEdit() ? `<button class="x" data-act="edit" data-kind="routine" data-id="${r.id}" aria-label="${esc(t("edit"))}">✎</button>` : ""}<button class="x" data-act="close" aria-label="${esc(t("close"))}">✕</button></div></div>
      ${r.status === "done" ? `<div class="hint" style="padding:12px 20px 0">${esc(t("done_once"))}</div>` : ""}
      <div class="kv"><span>${U("k_equipment")}</span><span>${esc(r.equipment || "—")}</span><span>${U("k_schedule")}</span><span>${esc(descreverAgenda(r.schedule))}</span><span>${U("k_last")}</span><span>${r.last_done ? fmtData(r.last_done) : t("never")}</span><span>${U("k_next")}</span><span class="${r.status}" style="font-weight:600">${proxima}</span>${r.remind ? `<span>${U("k_remind")}</span><span>${t("rm_at", esc(r.remind.time))}${r.remind.repeat_min ? (r.remind.repeat_min >= 60 ? t("rm_rep_h", r.remind.repeat_min / 60) : t("rm_rep_m", r.remind.repeat_min)) : ""}${r.remind.until ? t("rm_until", esc(r.remind.until)) : ""}</span>` : ""}</div>
      <div class="sec">${U("sec_register")}<i></i></div>
      <div class="f">${this._data.pro ? `<button class="btn" type="button" data-act="scan" data-target="done" style="width:100%">📷 ${esc(t("scan_qr"))}</button><div class="hint" data-role="scanmsg">${esc(this._scanMsg || "")}</div>` : ""}<label>${U("f_done_on")}<input type="date" data-f="date" value="${this._data.today}"></label>
        <div class="two"><label>${U("f_cost", simboloMoeda())}<input data-f="cost" inputmode="decimal" placeholder="${esc(t("optional"))}"></label><label>${U("f_notes")}<input data-f="notes" placeholder="${esc(t("optional"))}"></label></div>
        ${partes.length ? `<label>${U("f_parts_used2")}</label>${partes.map((p) => `<div class="row" style="border:1px solid var(--divider-color);border-radius:14px;cursor:default"><div class="t"><div class="n">${esc(p.info.name)}</div><div class="s">${t("in_stock", p.info.stock)}</div></div><input data-pq="${p.part_id}" type="number" min="0" value="${Math.min(p.qty, p.info.stock)}" style="width:72px;height:44px;text-align:center"></div>`).join("")}<div class="hint">${esc(t("h_parts_used"))}</div>` : ""}
      </div>
      ${this._modalError ? `<div class="err">${esc(this._modalError)}</div>` : ""}
      <div class="acts"><button class="primary" data-act="done" data-id="${r.id}">${t("mark_done_btn")}</button></div>
      <div class="sec">${U("sec_snooze")}<i></i></div>
      <div class="snz">${[[3, t("sn_3")], [7, t("sn_7")], [14, t("sn_14")], [30, t("sn_30")]].map(([d, l]) => `<button class="btn" data-act="snooze" data-id="${r.id}" data-days="${d}">${l}</button>`).join("")}</div>
      ${r.status === "snoozed" ? `<button class="link" data-act="snooze" data-id="${r.id}" data-days="0">${t("cancel_snooze")}</button>` : ""}
      <button class="link" data-act="pause" data-id="${r.id}" data-paused="${r.paused ? 0 : 1}">${r.paused ? t("resume") : t("pause")}</button>
    </div></div>`;
  }
}

if (!customElements.get("iris-care-card")) customElements.define("iris-care-card", IrisCareCard);
window.customCards = window.customCards || [];
if (!window.customCards.find((c) => c.type === "iris-care-card")) {
  window.customCards.push({ type: "iris-care-card", name: "Iris Care", description: I18N.pt.card_desc });
}
