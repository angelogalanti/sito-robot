# Go2 — esito della revisione locale

Data: 30/10/2026. Baseline del lavoro: commit `23d4762`. Scope: brief unico e revisione delle pagine Go2 IT/EN, senza modifiche al layout o al percorso di lancio.

## Risultato

- [Brief SEO/editoriale unico](../../briefs/unitree-go2-brief.md) per entrambe le lingue; query candidate, volumi e ranking non misurati.
- Sette fonti riaperte, provenienza e limiti nel [registro fonti](source-check.md). Data `verified` aggiornata per un intervento sostanziale, non per una semplice riformattazione.
- Titoli e descrizioni più espliciti; sintesi orientata all'uso; SDK/API spiegati; limiti di sviluppo X circoscritti; costi separati dalle condizioni di acquisto.
- Recensioni sulla Pro attribuite come esperienze di terzi, thread qualificati come storici/individuali, rimosso il riferimento al volo con batteria non sostenuto dai due thread.
- Sette fonti numerate e tre collegamenti contestuali equivalenti: acquisto, usato, metodo. Richiami in apice e route stabili preservati.

## Verifiche locali superate

Build e test repository con Node 24.20.0: PASS, 18 pagine contenuto più redirect. Il controllo include coppie linguistiche, link e ancore di tutte le pagine, un H1 e protezione preview noindex.

Chromium locale: Go2 IT/EN a 320, 390 e 1440 px, sei risposte 200 senza overflow del documento; tabella presente, sette fonti numerate, tre destinazioni contestuali corrette e data coerente. [Risultati browser](browser-checks.json), screenshot [IT mobile](preview/go2-it-390.png) e [EN desktop](preview/go2-en-1440.png). Le tabelle scorrono internamente; non è una prova real-device o di accessibilità completa.

## Valutazioni prima/dopo — non intercambiabili

| Controllo | IT prima → dopo | EN prima → dopo | Interpretazione |
| --- | --- | --- | --- |
| Analyzer meccanico | 47 → 51 | 54 → 55 | Euristica sul Markdown isolato; IT rilevato erroneamente come EN. Non certifica qualità italiana o idoneità pubblica |
| Reviewer editoriale separato | 66 → 81 | 69 → 80 | Giudizio sul rendering Astro prima/dopo, con limiti di progetto; nessuna regressione rilevata, soglia 90 non raggiunta |

Report analyzer: [prima IT](before-it.json), [dopo IT](after-it.json), [prima EN](before-en.json), [dopo EN](after-en.json). Review restituite e salvate senza modifiche: [IT](after/it/review.md), [EN](after/en/review.md). Le copie HTML prima/dopo sono evidenze del rendering Astro, non pacchetti autonomi pubblicabili.

## Gate di pubblicazione: BLOCCATO

Preflight eseguito in modalità **strict**, senza `--no-strict`. Esiti per lingua: [IT](after/it/preflight-report.json), [EN](after/en/preflight-report.json). Gate 4 verificato separatamente sul report con nonce: [IT](after/it/gate4-report.json), [EN](after/en/gate4-report.json); il reviewer blocca perché il punteggio resta sotto 90. Nessuna assenza di artefatti viene nascosta da un punteggio di contenuto.

Il controllo complessivo si ferma al Gate 2: mancano PDF, hero, metadati social e gli hash del renderer della skill; inoltre il noindex è intenzionale nella preview. I successivi Gate 3/5 non sono stati superati. La verifica Playwright sul sito non sostituisce quei gate.

Canonical pubblico, autore/editore effettivo, data di pubblicazione e asset non sono definiti per una consegna finale. `blog-rewrite` precisa: «the delivery render needs a local hero file plus `canonical`, `date` and `author`». Il renderer richiede un URL pubblico finale, non un dominio inventato o localhost. Non sono stati prodotti JSON-LD con identità fittizie, date di pubblicazione presunte o immagini generate a pagamento per far risultare il gate verde.

I helper sono quelli installati in claude-blog. Per il preflight finale è stato riutilizzato l'ambiente Python già installato di claude-seo, con Playwright disponibile: nessuna installazione o modifica ai pacchetti. Il campo `project_root_files` di capabilities rileva la directory del pacchetto, non questa root consumer; BRAND e VOICE sono stati caricati separatamente con il loro helper installato e non sono assenti dal progetto.

Non ripetere tre volte lo stesso errore di metadati mancanti: occorrono decisioni di lancio e un pacchetto di consegna pertinente, non riparazioni automatiche del testo. Il noindex resta finché il lancio non viene approvato.

## Lavoro ancora aperto

1. Identità editoriale, contatto, URL e asset reali, quindi produzione/schema e consegna finale per lingua con nuova review e gate.
2. Correzioni già emerse in usato e scuola/ricerca, non modificate in questo lavoro circoscritto.
3. Controlli pubblici e dati reali dopo lancio autorizzato; nessuna prova hardware o validazione commerciale eseguite qui.
