# Struttura SEO — stato e destinazioni

Data: 30/10/2026. Le route esistenti vengono mantenute. 18 pagine di contenuto, 9 coppie linguistiche; la radice è un redirect di anteprima, non una decima pagina editoriale.

| IT | EN equivalente | Tipo e intento | Collegamenti utili |
| --- | --- | --- | --- |
| `/it/` | `/en/` | Home e orientamento | Hub e cinque guide, metodo |
| `/it/dogs/` | `/en/dogs/` | Hub cani robot | Go2, acquisto e usato quando pertinenti |
| `/it/humanoids/` | `/en/humanoids/` | Hub umanoidi | Confronto modelli e acquisto |
| `/it/go2/` | `/en/go2/` | Confronto documentale Air/Pro/X/EDU | Da aggiungere nel corpo: prossimo passo verso acquisto; usato se pertinente |
| `/it/models/` | `/en/models/` | Confronto R1/G1/K1 | Acquisto e chiarimenti versione/impiego |
| `/it/buy/` | `/en/buy/` | Acquisto Italia/UE | Confronti e verifiche al venditore; condizioni territoriali esplicite |
| `/it/used/` | `/en/used/` | Rischi e scelta dell'usato | Acquisto e Go2, dopo correzione delle formulazioni rilevate |
| `/it/edu/` | `/en/edu/` | Progetto didattico/ricerca, secondario | Configurazioni e acquisto; niente requisiti universali dedotti da esempi |
| `/it/method/` | `/en/method/` | Metodo e limiti delle prove | Identità/contatto effettivi da definire; non inventare una redazione |

## Decisioni tecniche da implementare al lancio

- Il dominio non è ancora scelto/approvato: nessun URL pubblico assoluto viene inventato nei sorgenti.
- Definire canonical coerenti per le versioni linguistiche e annotazioni hreflang assolute, reciproche e comprensive della pagina stessa. Il cambio lingua nel body non è l'implementazione SEO completa. [Google localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions), [canonicalization](https://developers.google.com/search/docs/crawling-indexing/canonicalization).
- La sitemap deve elencare le destinazioni canoniche indicizzabili, escludendo la radice di redirect. Il generatore attuale raccoglie ogni index.html: riproduzione in [sitemap-fixture.json](seo-local-audit/evidence/sitemap-fixture.json). [Google sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
- Coordinare il passaggio preview/produzione con i controlli automatici: `SITE` da solo non rimuove il noindex fisso dal layout. Il noindex resta nella preview fino al lancio approvato.
- Mappare i tipi di schema alle pagine reali, senza aggiungere dati fittizi per soddisfare un template. Nessun obbligo di nuove pagine `/blog`, `/news`, profili autore o pagine singole per ogni variante.

La gerarchia concettuale hub → confronto → acquisto può essere espressa nei link senza rinominare URL funzionanti. Nessuna migrazione è stata eseguita.
