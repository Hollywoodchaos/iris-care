"""Constantes da Iris Care."""
DOMAIN = "iris_care"
PLATFORMS = ["sensor"]
STORAGE_KEY = "iris_care"
STORAGE_VERSION = 1
SIGNAL_UPDATED = "iris_care_updated"
DEFAULT_WARN_DAYS = 14
COLLECTIONS = ("equipment", "routines", "parts")
DEFAULT_WARRANTY_WARN_DAYS = 60

# Edição: True = Pro (tudo ligado), False = Free (pacotes Pro, garantias, faturas QR e avisos por rotina desligados).
PRO = False
