---
target: pagina articolo guida /it/go2/
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
target_identity: "file:/home/x/repos/business-projects/sito-robot/src/pages/[...path].astro"
target_fingerprint: "sha256:49e532060e9b86e29e4e16b22dc949cd68755be30caf7d501f70f4e6c0f36090"
target_path: /home/x/repos/business-projects/sito-robot/src/pages/[...path].astro
timestamp: 2026-11-13T11-26-23Z
slug: src-pages-path-astro
---
Method: dual-agent (A: sa-0-d2d410da · B: sa-1-3c3ceb62)
Target: pagina articolo guida /it/go2/ (src/pages/[...path].astro, ramo article) — mode Read

## Design Health Score — 21/32 (Acceptable)

| # | Euristica | Punteggio | Problema chiave |
|---|---|---|---|
| 1 | Visibilità dello stato | 3 | TOC sticky full-width in scroll, sembra un header duplicato |
| 2 | Sistema / mondo reale | 2 | Voci TOC parafrasate, non ripetono gli H2 |
| 3 | Controllo e libertà | 3 | Nessun collapse per il TOC sticky lungo |
| 4 | Consistenza e standard | 1 | Voce "Fonti" superscript per bug CSS |
| 5 | Prevenzione errori | 3 | Rischio semantico (sezione sbagliata percepita), non link rotti |
| 6 | Riconoscimento vs ricordo | 2 | Nessuna evidenziazione della sezione corrente in scroll |
| 7 | Flessibilità ed efficienza | n/a | Sito statico senza JS, niente acceleratori da valutare |
| 8 | Estetica e minimalismo | 3 | Titolo TOC affiancato alla lista, spreco verticale |
| 9 | Recupero dagli errori | 2 | Tabella mobile troncata senza hint di scroll |
| 10 | Aiuto e documentazione | n/a | La pagina è la documentazione |
| Totale | | 21/32 | Acceptable (66%) |

## Verdetto design-specificity

LLM: composizione editoriale pulita, brand "guide oneste" reso bene (kicker, lede, meta, callout "In breve"). Difetti concentrati nel TOC: 3 reali + 1 sospetto utente confermato (label ≠ H2). Non serve restyling: fix mirato TOC + tabella.
Scan deterministico: 1 solo warning `side-tab` (border-left blu del callout "In breve", scelta editoriale intenzionale — quasi-falso-positivo).

## Impressione generale

Guida seria all'arrivo, inciampo sul TOC (nomi che non tornano + ultima voce rotta), fiducia che cresce nel corpo, uscita debole. Il sospetto dell'utente sull'indice era fondato.

## Cosa funziona

- Gerarchia H1 > lede > meta > H2, callout "In breve" con bordo blu: scansione rapida riuscita.
- Separazione dichiarazioni/prove coerente col brand (matrice datata, thread citati come aneddoti).
- Tabella desktop chiara; struttura HTML sana (B: h1 unico, alt ok, 9/9 anchor risolti, 0 404).

## Priority issues

- [P0] Superscript CSS colpisce il TOC: `.article a[href="#fonti"]` rimpicciolisce la voce 8 anche nel menu. Fix: scope escluso (`.article :not(.toc) a…`) o classe `.cite`. Suggerito: /impeccable polish.
- [P1] Etichette TOC ≠ H2 (6 su 8, es. "Cosa cambia" vs "Non cambia soltanto la velocità"). Fix: voci = titoli reali. Suggerito: /impeccable clarify.
- [P1] Tabella mobile senza affordance: 5 col × 140px su 390px, sembra contenuto mancante. Fix: fade/shadow + hint "scorri" o cards sotto 700px. Suggerito: /impeccable adapt.
- [P2] TOC sticky ingombrante + titolo affiancato alla lista. Fix: non-sticky o details collassabile, titolo sopra. Suggerito: /impeccable layout.
- [P3] Breadcrumb mobile nasconde la pagina corrente; scroll-padding 1rem < header ~80px (ancore sotto header). Suggerito: /impeccable polish.

## Persona red flags

- Jordan (first-timer): mismatch TOC/H2 = smarrimento al click; tabella tagliata senza hint.
- Sam (tastiera/SR): TOC sticky senza sezione corrente annunciata; tabella scrollabile senza regione nominata.
- Casey (mobile): a 390px decide su 2 colonne su 5 senza sapere che le altre esistono.

## Osservazioni minori

- Citazioni `[1](#fonti)[3](#fonti)` attaccate; EN con stesse parafrasi; detector pulito a parte il callout.

## Domande da considerare

- Se l'utente arriva da anchor link diretto, il TOC parafrasato aiuta o confonde?
- "Checklist e fonti" è una voce sola per due H2 distinti: perché?
