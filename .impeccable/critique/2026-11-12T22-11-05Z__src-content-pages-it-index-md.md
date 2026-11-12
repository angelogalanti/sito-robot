---
target: homepage vs reference sites
total_score: 17
max_score: 28
na_heuristics: 7,10
p0_count: 1
target_identity: "file:/tmp/src-content-pages-it-index-md"
timestamp: 2026-11-12T22-11-05Z
slug: src-content-pages-it-index-md
---
# Critique home — 2026-11-12 (vs RoboZaps / RoboPulse)

Method: dual-agent (A: design review · B: detector exit 0, zero findings)

## Punteggio: 17/28 (euristiche 7 e 10 non applicabili alle landing)

| # | Euristica | Voto | Problema |
|---|---|---|---|
| 1 | Stato visibile | 1 | La home non mostra freschezza: le date di verifica esistono negli articoli ma qui sono nascoste |
| 2 | Linguaggio reale | 3 | Lingua da compratori; "percorsi" è gergo interno |
| 3 | Controllo utente | 3 | Link salta-contenuto, FAQ apribili, niente trappole |
| 4 | Coerenza | 3 | Convenzioni editoriali rispettate; didascalie troncate |
| 5 | Prevenire errori | 3 | Il copy previene ("demo ≠ ciò che ricevi") |
| 6 | Riconoscere, non ricordare | 1 | Le righe guida danno titoli ma non il succo della differenza |
| 7 | Efficienza | n/a | Landing senza scorciatoie da giudicare |
| 8 | Estetica minimale | 3 | Pulita; giunti bruschi tra sezioni |
| 9 | Errori | n/a | Sostituita da qualità aiuto: FAQ che instradano bene |
| 10 | Aiuto | n/a | La pagina Metodo è l'aiuto, linkata bene |

## Verdetto
Onesta ma generica: scambi foto e nomi e potrebbe vendere materassi. H1 e metodo sono la voce vera, ma la pagina segnala onestà senza mostrare profondità né attualità.

## Punti forti
1. Posizione editoriale ("niente voti, confrontiamo documenti") coerente ovunque.
2. Tipografia e contrasti curati, target 44px, focus visibile.
3. FAQ che instradano 1:1 alle guide — la parte migliore, poco valorizzata.

## Problemi prioritari
- **P0 — La home nasconde che il sito è vivo.** Fix: date "verificato il…" sotto ogni guida e data più recente sotto il titolo, riusando i dati esistenti. Solo Astro+CSS.
- **P1 — Nessun primo passo consigliato.** Fix: dare enfasi a "Inizia da qui" con il copy esistente. Solo CSS.
- **P1 — I numeri dicono l'inventario, non il valore.** Fix: striscia numeri in 3 celle con le stesse stringhe. Solo CSS.
- **P2 — Il metodo arriva tardi e grigio.** Fix: banda metodo sopra le guide (solo ordine CSS), footer che parte dal brand + link metodo.
- **P3 — Mobile 390px.** Fix: nav su due righe, didascalie che vanno a capo invece di troncarsi. Solo CSS.

## Persona
- Jordan (compra per la prima volta, paura del prezzo): esce senza cliccare — niente ancora di prezzo, niente scorciatoia.
- Riley (insegnante, vuole fonti/date): rassicurato dal metodo ma non vede date in home.
- Casey (teme classifiche truccate): "niente voti" conquista, footer scarno fa dubitare.

## Osservazioni minori
- Didascalie troncate: l'attribuzione non deve sembrare nascosta.
- H1 e card disallineate sul desktop; h3 dei gruppi più deboli dei titoli guida.
