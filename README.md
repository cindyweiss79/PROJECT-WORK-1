# PROJECT-WORK-1
# 📦 Project Work #1 – Gestione dati da API e JSON locali con jQuery e Bootstrap

## 🎯 Obiettivo

Realizzare un'applicazione web che:

- Recupera e visualizza dati da una **API pubblica**.
- Carica un **file JSON locale**.
- Utilizza componenti di **Bootstrap** per la presentazione.
- Integra **funzionalità interattive** come animazioni, modali e notifiche.

---

## ⚙️ Tecnologie utilizzate

- `HTML5` + `CSS3` / `Bootstrap`
- `JavaScript` + `jQuery`
- `SweetAlert` (per le notifiche)
- `Bootstrap Table` (per la visualizzazione dati)

---

## ✅ Requisiti minimi

### 1. Recupero dati da API pubblica

- **API utilizzata:** [DummyJSON Products](https://dummyjson.com/products)
- I prodotti vengono visualizzati tramite **cards Bootstrap** dinamiche.
- Dati ottenuti e gestiti tramite `jQuery AJAX`.

### 2. Interfaccia responsiva

- Layout costruito con griglia Bootstrap.
- Stili responsive e compatibili con dispositivi mobili.

---

## 🚀 Estensioni opzionali implementate

### 3. Animazioni di scomparsa

- Al click su una card, viene attivata un'animazione `fadeOut()` con jQuery per rimuoverla visivamente.

### 4. Gestione dati da file JSON locale

- File `utenti.json` contenente **almeno 10 utenti** con **5 campi** ciascuno (incluso l’`id`).
- Visualizzazione in una **Bootstrap Table** dinamica.
- Caricamento dati via attributi:
  ```html
  data-toggle="table" data-url="./utenti.json"
