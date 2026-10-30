# TODO — sito robot

Stato: bozza locale navigabile, non pronta al lancio. Il completamento di una prima versione non equivale ad approvazione editoriale definitiva. Decisioni, struttura e comandi: [README](README.md).

## Punto di ripresa — 30/10/2026

Questa è la checklist operativa del sito. Piano marketing, fondazione blog, strategia SEO iniziale e audit locale sono preparati. Brief unici Go2, usato, scuola/ricerca e confronto umanoidi IT/EN preparati; revisione locale Go2 eseguita; gate di pubblicazione non superato. Correzioni mirate usato/scuola-ricerca IT/EN applicate; restano revisione editoriale completa e requisiti di consegna/lancio. Non rifare il piano né produrre nuove pagine per riempire un calendario.

Riferimenti:

- Pipeline generale aggiornata il 28/10/2026: `/mnt/c/Users/x/Sync/Obsidian/comune/progetti/sito-popolare/01-pipeline-seo.md`.
- Contesto approvato: [.agents/product-marketing.md](.agents/product-marketing.md), v1 del 25/10/2026; versionato nel commit `3624323` senza alterarne il contenuto.
- Piano marketing approvato: `/home/x/marketing-plans/robot-unpacked/final_plan.md`; stato `phase: finalized` in `progress.md`, 13 sezioni approvate il 27/10/2026. I piani restano fuori dal repo.
- Strategia SEO: [SEO-STRATEGY.md](SEO-STRATEGY.md), [analisi alternative](COMPETITOR-ANALYSIS.md), [struttura](SITE-STRUCTURE.md), [coda editoriale](CONTENT-CALENDAR.md), [roadmap](IMPLEMENTATION-ROADMAP.md).
- Audit locale del 30/10: [report](seo-local-audit/FULL-AUDIT-REPORT.md), [azioni](seo-local-audit/ACTION-PLAN.md) ed evidenze browser/sitemap. Audit pubblico, ranking, volumi, CWV field e utilità reale ancora ND; nessuno score SEO globale attribuito.
- Umanoidi: [brief SEO/editoriale unico](briefs/confronto-umanoidi-brief.md), fonti riaperte e confronto concorrenti esplorativo; revisione e gate aperti.
- Scuola/ricerca: [brief SEO/editoriale unico](briefs/go2-scuola-ricerca-brief.md) e bozze IT/EN in `drafts/edu/`; review preliminare eseguita, gate e integrazione nel sito aperti.
- Usato: [brief SEO/editoriale unico](briefs/robot-usato-brief.md), con ricognizione esplorativa e limiti; bozze IT/EN in `drafts/used/`, revisione preliminare e gate completo ancora aperto.
- Go2: [brief unico](briefs/unitree-go2-brief.md) e [esito della revisione locale](reports/go2-review/README.md), con fonti, review per lingua e preflight strict bloccati. Non è una consegna pubblicabile.

| Fase della pipeline | Stato verificato | Cosa manca / applicazione al sito |
| --- | --- | --- |
| 0 — Fondazione marketing | Ricerca esplorativa fatta; product-marketing approvato | Domanda e utilità reale restano da validare. Nessun reclutamento di volontari, intervista o campione obbligatorio |
| 0 — Fondazione blog | Preparata il 30/10: `BRAND.md`, `VOICE.md`, `.claude-blog/personas/robot-unpacked.json` e riferimento alla persona attiva | Registro tecnico accessibile scelto da Galo; parametri numerici iniziali del default skill, non misure dei testi. `blog-style` rinviata, non blocca la SEO; lettura del contesto tramite helper verificata, nessun gate editoriale ancora eseguito |
| 1 — Piano | Completato | Non riaprire l'intake; `marketing-council` solo per un dubbio decisionale concreto |
| 2 — SEO strategica | Prima strategia e audit locale eseguiti il 30/10; fonti competitive e Google consultate | Restano verifica pubblica dopo lancio, dati quantitativi e conferma dell'utilità; il noindex resta corretto in preview. Nessun punteggio 0–100 inventato |
| 2b — Keyword e brief | Brief unici Go2, usato, scuola/ricerca e umanoidi IT/EN prodotti, con query candidate e fonti | Volumi/difficoltà/ranking Google non misurati; altri eventuali brief solo dopo necessità documentata |
| 3 — Scrittura e gate blog | Revisione locale Go2 IT/EN, build/test e sei controlli browser superati; review 81/100 IT e 80/100 EN | Fase ancora aperta: soglia reviewer 90 non raggiunta, preflight strict bloccato. Mancano metadati/asset pubblicabili e artefatti del renderer; noindex intenzionale mantenuto. Usato: brief, bozze e review preliminare; gate formale e integrazione nel sito aperti; scuola/ricerca: brief, bozze e review preliminare; gate formale e integrazione nel sito aperti |
| 4 — Pagine che vendono | Home/categorie presenti, nessuna offerta commerciale attiva | Per presentazione e percorsi usare copywriting/CRO, non blog-write; controllo finale SEO. A/B test solo se esistono dati e traffico sufficienti |
| 6 — Distribuzione | Non avviata per il sito | Repurpose/social/Postiz solo se scegliamo un canale utile e ne verifichiamo accessi e collegamenti. Il piano non obbliga ad aprire tutti i social o a configurare Postiz |
| 5 — Manutenzione | Processo date/fonti già documentato; nessun monitoraggio pubblico verificato | Aggiornare fonti già ora; audit periodici, drift e decay quando applicabili. Non diagnosticare cali di traffico senza storico |

La pipeline generale dice che customer-research è stata saltata: il contesto approvato e `research.md` documentano invece ricerca esplorativa già svolta. Fa fede questa evidenza di progetto; la rinuncia riguarda il reclutamento dei volontari. La sezione «Stato sito-robot» della pipeline non sostituisce questo TODO.

### Prossime azioni in ordine

1. [x] Preparare la fondazione blog: [BRAND.md](BRAND.md), [persona editoriale JSON](.claude-blog/personas/robot-unpacked.json), [VOICE.md](VOICE.md) e riferimento locale alla persona attiva. Riutilizzato product-marketing §10; Galo ha scelto «tecnico accessibile». Identità legale, dominio e profili mancanti sono `not provided`. `blog-style` rinviata finché non ci sono campioni adatti.
2. [x] Eseguire `claude-seo/seo-plan` e l'audit pertinente al sito locale; salvati strategia, ricognizione competitiva, roadmap e report con limiti espliciti. Build/test PASS e 54 navigazioni browser locali; noindex intenzionale preservato. Verifica SEO pubblica rinviata al lancio approvato.
3. [x] Associare intento alle pagine, scegliere Go2 e produrre un brief unico SEO/blog IT/EN, senza nuova pagina o scaletta duplicata. La ricerca rimane esplorativa, senza volumi o ranking inventati.
4. [ ] Applicare revisione e gate claude-blog alle guide pertinenti; home e pagine di presentazione seguono il percorso copywriting/CRO + controllo SEO. Verificare schema senza duplicare JSON-LD fra i due pacchetti.
5. [ ] Completare la checklist di lancio sotto; distribuire e misurare solo dopo approvazione delle azioni concrete.

Filone commerciale parallelo: verificare condizioni pubbliche di affiliazione come prima ipotesi; segnalazioni commerciali come seconda possibilità. Non attendere la produzione di nuovi articoli per scoprire se il modello è accessibile. Nessun partner attivo o ricavo dimostrato.

Vincoli confermati: niente ads; strumenti esistenti/gratuiti prima; 10 € come tetto iniziale complessivo, non mensile. Nessun account, newsletter o community obbligatori. Pubblicazione, contatti, adesioni e spese richiedono approvazione specifica. La revisione interna non dimostra utilità per lettori reali; dopo il lancio approvato osservare dati disponibili e riscontri spontanei.

Verifiche del 30/10: audit locale conservato come snapshot; successivamente rivista Go2 IT/EN e riaperte tutte le sue sette fonti, con `verified` aggiornato al 30/10 solo su questa guida. Build/test con Node 24.20.0 PASS; nuova prova browser Go2 in entrambe le lingue a tre larghezze. Review e preflight strict documentati, non superati per pubblicazione. Nessun Lighthouse/CWV field, controllo legale, test hardware o prova con lettori. Successivamente applicate correzioni mirate alle guide usato e scuola/ricerca IT/EN; le date di verifica precedenti sono mantenute perché non è stata eseguita una nuova revisione completa. Codice del sito invariato.

### Correzioni rilevate dall'audit

- [x] Usato IT/EN: corretti prova senza cadute provocate, perimetro del thread USA e tutele fra privati; riaperte le fonti citate e la pagina UE sulle garanzie. Nessuna verifica legale completa.
- [x] Scuola/ricerca IT/EN: requisiti SDK/ROS 2 legati al progetto, esempi attribuiti e tono corretto; riaperte le fonti citate. Restano brief e gate editoriali completi.
- [x] Go2 IT/EN: brief, fonti riaperte, revisione locale, collegamenti acquisto/usato/metodo e numerazione visibile delle fonti. Nessun gate di pubblicazione dichiarato superato.
- [ ] Go2: completare requisiti reali di consegna e produzione, poi ripetere renderer/review/gate per ciascuna lingua; non inventare autore, canonical o data per aumentare il punteggio.
- [ ] Al lancio: coordinare modalità preview/produzione e test, canonical/hreflang, sitemap senza redirect/noindex e normalizzazione SITE coerente. Definire schema soltanto con dati reali.

## Completato

- [x] Definire la direzione di lavoro: guida all'acquisto di umanoidi e cani robot per appassionati e PMI, non esclusiva Unitree.
- [x] Svolgere una prima ricerca su prodotti, concorrenti, dubbi degli acquirenti e possibili affiliazioni. Ricerca esplorativa, non validazione del business.
- [x] Approvare il contesto product-marketing v1 e completare il piano marketing v1, 13 sezioni, il 27/10/2026. Ordine monetizzazione: affiliazione prima, segnalazioni commerciali come alternativa; fattibilità ancora da verificare.
- [x] Realizzare la base Astro statica con Markdown, Content Collections e layout condiviso, senza database o JavaScript client.
- [x] Predisporre italiano e inglese: 9 pagine per lingua, 18 totali, cambio lingua sulla pagina equivalente e redirect iniziale.
- [x] Creare la prima versione di home, categoria cani robot, categoria umanoidi e metodo editoriale.
- [x] Sviluppare il confronto documentale Go2 Air / Pro / X / EDU.
- [x] Approfondire il confronto documentale R1 / G1 / Booster K1: configurazioni, prezzi datati, sviluppo, autonomia e scelta per obiettivo.
- [x] Approfondire la guida acquisto UE: importazione, costo consegnato, consumatore/B2B, garanzia, recesso e assistenza, con fonti ufficiali UE/MIMIT.
- [x] Verificare build, collegamenti, ancore, lingue e protezioni dell'anteprima con il controllo ripetibile del repository.
- [x] Verificare in Chromium le 14 pagine a 320, 390 e 1440 px, navigazione e cambio lingua; correggere gli overflow rilevati.
- [x] Integrare codice e documentazione su main locale. Nessun push o deploy pubblico eseguito.

## Identità e presentazione — revisione ancora aperta

- [x] Adottare Robot Unpacked come nome di lavoro IT/EN e definire la direzione: guida tecnica chiara, testo scuro, cobalto, niente estetica futuristica da venditore.
- [x] Verificare marchi e acquistabilità del dominio scelto: TMview/EUIPO il 24/10/2026 — nessun «Robot Unpacked» identico; «UNPACKED» singolo esiste (Samsung cl. 9/14, Spotify cl. 41). RDAP preliminare: robotunpacked.com senza record. Non è parere legale; non acquistare senza approvazione.
- [x] Implementare wordmark e primo restyling condiviso: home, categorie, guide e tabelle; verificare responsive, navigazione da tastiera e contrasto.
- [ ] Rivedere e approvare la resa grafica della prima implementazione, ancora in bozza.
- [x] Sostituire gli schemi della home con foto reali Go2/G1: fonti e licenze Commons verificate, crediti e modifiche visibili in IT/EN, file WebP locali. La scelta fotografica finale resta nella revisione grafica.

## Qualità editoriale — prima del lancio

- [x] Revisionare tutte le pagine: titoli sezione nella lingua corretta, titoli dei link coerenti con le pagine, metodo aggiornato alle foto reali, ritocchi all’inglese. Resta la rilettura finale prima del lancio.
- [ ] Integrare prove indipendenti, demo o testimonianze verificabili, attribuendole correttamente. Non presentare i confronti documentali come recensioni hardware nostre. Fatto primo giro: due prove hands-on Go2 Pro attribuite (FauxHammer, New Atlas) + problemi reali da r/unitree nella guida Go2; dichiarata la scarsità di prove proprietari per R1/G1/K1.
- [ ] Ottenere risposte su configurazioni, prezzi consegnati, disponibilità, assistenza e discrepanze ancora aperte; aggiornare le guide con gli esiti o dichiarare le lacune.
- [x] Definire il processo di aggiornamento (sezione README, date `verified`/`checked`, sitemap con `SITE` solo al lancio, senza dominio inventato).

## Credibilità e pubblicazione — richiedono approvazione del lancio

- [ ] Inserire identità dell'editore, contatti e informazioni privacy applicabili agli strumenti effettivamente utilizzati.
- [ ] Scegliere hosting e collegare il dominio approvato.
- [ ] Completare SEO di lancio: URL canonici, hreflang, sitemap e verifica dell'indicizzabilità.
- [ ] Eseguire build e test finali; pubblicare solo dopo approvazione, rimuovendo consapevolmente il noindex dell'anteprima.
- [ ] Verificare sul sito pubblicato pagine, asset, navigazione, lingue e indicizzabilità.

## Validazione commerciale — filone ancora aperto

- [ ] Verificare domanda e acquisizione: ricerche e canali che portano lettori realmente interessati all'acquisto.
- [ ] Dimostrare un valore differenziante rispetto a schede produttore e concorrenti.
- [ ] Verificare partner e monetizzazione: affidabilità, ammissione ai programmi, paesi/prodotti coperti, attribuzione, commissioni e pagamenti. Nessun accordo attivo.

Non aggiungere account, CMS, database o altre lingue senza un'esigenza concreta. Nuove pagine solo con esigenza documentata; scritte: «Go2 per scuola e ricerca» (domanda college su EDU vs Pro/ROS2) e «Comprare un robot usato» (domande su usato e rischi), IT+EN con fonti, home e link incrociati. Queste guide non spostano la priorità da appassionati italiani e PMI alle università. Il nome di lavoro è Robot Unpacked; controllo preliminare marchio/dominio già svolto, acquisto dominio e approvazione grafica/fotografica finale e lancio restano aperti. Un sito funzionante non dimostra ricavi.
