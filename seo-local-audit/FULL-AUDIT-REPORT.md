# Audit SEO locale — Robot Unpacked

Data: 30/10/2026. Sorgenti di partenza: commit `3624323`. Tipo: guida editoriale pre-lancio, IT/EN. Perimetro: 18 pagine di contenuto più redirect radice, build e browser locale; ricerca competitiva esplorativa.

**Esito:** base statica verificata; requisiti tecnici ed editoriali di lancio ancora aperti. **SEO Health Score: ND**, non 0/100. Non attribuiamo un voto globale combinando controlli locali, metriche pubbliche assenti e giudizi editoriali non calibrati. Questo file segue il nome previsto dal pacchetto, ma non certifica un audit del sito pubblico.

## Verificato oggi

- `pnpm build` e `pnpm test` con Node 24.20.0: PASS; 19 route generate = 18 pagine più redirect. Sitemap saltata intenzionalmente senza SITE.
- Chromium locale, 18 pagine × 320/390/1440 px: 54 risposte HTTP 200, un H1 per pagina, 18 title e description distinti, nessun overflow del documento, immagini caricate con alt, nessun pageerror JavaScript rilevato.
- Primo focus da tastiera nella home IT: link «Vai al contenuto» verso `#main`. Non è un audit completo di accessibilità.
- Screenshot ispezionati: [home IT 390 px](screenshots/home-it-390.png), [Go2 IT 1440 px](screenshots/go2-it-1440.png).
- Fixture isolata del generatore sitemap: include la radice di redirect/noindex. Non è stata cambiata la preview o assegnato un dominio al progetto.
- Fonti concorrenti e documentazione Google aperte oggi, elencate in [research-sources.md](evidence/research-sources.md). Nessun dato di volume, difficoltà o ranking controllato.

Evidenze ripetibili: [browser-inventory.json](evidence/browser-inventory.json), [sitemap-fixture.json](evidence/sitemap-fixture.json), [audit-data.json](audit-data.json).

## Risultati per categoria

| Categoria | Esito locale e priorità | Approfondimento |
| --- | --- | --- |
| Technical SEO | Preview protetta correttamente; High al lancio: modalità produzione e test coordinati, canonical/hreflang | [technical.md](findings/technical.md) |
| Contenuto e on-page | Risposte e fonti presenti; High editoriale: responsabilità/contatto, usato; Medium: assoluti in edu e percorso Go2 | [content.md](findings/content.md) |
| Schema | JSON-LD assente; Medium, arricchimento coerente dopo identità/URL reali; non prova penalizzazione | [schema.md](findings/schema.md) |
| Sitemap | Preview senza sitemap intenzionale; Medium al lancio: escludere redirect/nonindex e uniformare SITE | [sitemap.md](findings/sitemap.md) |
| Performance | HTML statico e niente JS client verificati; CWV field e Lighthouse ND | [performance.md](findings/performance.md) |
| Visual e immagini | Nessun overflow nelle 54 navigazioni; due screenshot ispezionati, immagini con alt; grafica finale da approvare | [visual.md](findings/visual.md) |
| GEO | Testo e fonti disponibili; indicizzazione/citazioni pubbliche ND; llms.txt non richiesto automaticamente | [geo.md](findings/geo.md) |
| Agentic | Semantica/link nativi favorevoli; nessun Lighthouse Agentic Browsing X/N o accessibility tree completo | [agentic.md](findings/agentic.md) |
| SXO | Percorsi già presenti; prima guida candidata Go2, miglioramento da verificare con brief | [sxo.md](findings/sxo.md) |

Non ci sono difetti classificati Critical di un sito pubblico osservato, perché il sito pubblico non è stato esaminato. Non trasformare noindex intenzionale o metriche assenti in penalizzazioni. Le priorità High sono condizioni di lancio e affidabilità editoriale, non previsioni di ranking.

## Sintesi del metodo

**Osservare:** leggere sorgenti, HTML generato e pagine concorrenti; separare fatti del progetto, dichiarazioni commerciali e ipotesi. **Analizzare:** il vincolo è preparare un sito credibile e pubblicabile, non aumentare subito il numero di articoli. **Validare:** mantenere hobby e PMI come pubblici, niente reclutamento e nessun valore esclusivo presunto; nessun consiglio di prova dannosa. **Agire:** correggere le formulazioni e preparare il brief Go2; poi rendere il percorso di lancio verificabile dopo scelta dominio/hosting. Sequenza e criteri in [ACTION-PLAN.md](ACTION-PLAN.md).

## Limiti e verifiche future

L'helper `render_page.py` del pacchetto ha rifiutato `127.0.0.1` per la propria policy URL; il [risultato di errore](evidence/home-mobile-render.json) è conservato. Nessuna modifica alla policy: browser locale eseguito separatamente con Playwright, non rendering pubblico certificato dall'helper.

Google auth check rileva configurazioni sulla macchina, ma non una proprietà pubblica attribuita a Robot Unpacked. Nessuna interrogazione Search Console/GA4, invio Indexing API, accesso a proprietà di altri progetti, acquisto DataForSEO o analisi backlink del dominio. Nessun dominio inventato per il sito. Le query esplorative non misurano il mercato e le fonti commerciali non verificano i venditori.

Nessun Lighthouse/CWV field, audit completo di accessibilità o sicurezza hosting, test hardware, verifica legale delle guide, confronto statisticamente valido con lettori o gate blog 90/100. Le fonti delle guide non sono state tutte riaperte: data `verified` invariata. La verifica ufficiale Go2 fatta nella ricognizione non equivale a riverifica completa dell'articolo.

Il prossimo audit deve verificare: correzioni editoriali effettive, metadati/indicizzazione di produzione, sitemap dei soli URL corretti e comportamento sull'hosting approvato. Solo dopo pubblicazione e dati sufficienti aggiungere misure reali di ricerca, performance e azioni commerciali.
