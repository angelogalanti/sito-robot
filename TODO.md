# TODO — sito robot

Stato: bozza locale navigabile, non pronta al lancio. Il completamento di una prima versione non equivale ad approvazione editoriale definitiva. Decisioni, struttura e comandi: [README](README.md).

## Punto di ripresa — 31/10/2026

Questa è la checklist operativa del sito. Piano marketing, fondazione blog, strategia SEO iniziale e audit locale sono preparati. Brief unici Go2, usato, scuola/ricerca, umanoidi e acquisto IT/EN preparati; revisione locale Go2 e review preliminari delle altre quattro guide eseguite. Le quattro bozze estese sono separate dalle pagine del sito e i gate di pubblicazione restano aperti. Correzioni mirate sono già state applicate anche alle pagine locali; restano revisione editoriale completa e requisiti di consegna/lancio. Non rifare il piano né produrre nuove pagine per riempire un calendario.

Riferimenti:

- Pipeline generale aggiornata il 28/10/2026: `/mnt/c/Users/x/Sync/Obsidian/comune/progetti/sito-popolare/01-pipeline-seo.md`.
- Contesto approvato: [.agents/product-marketing.md](.agents/product-marketing.md), v1 del 25/10/2026; versionato nel commit `3624323` senza alterarne il contenuto.
- Piano marketing approvato: `/home/x/marketing-plans/robot-unpacked/final_plan.md`; stato `phase: finalized` in `progress.md`, 13 sezioni approvate il 27/10/2026. I piani restano fuori dal repo.
- Strategia SEO: [SEO-STRATEGY.md](SEO-STRATEGY.md), [analisi alternative](COMPETITOR-ANALYSIS.md), [struttura](SITE-STRUCTURE.md), [coda editoriale](CONTENT-CALENDAR.md), [roadmap](IMPLEMENTATION-ROADMAP.md).
- Presentazione: [controllo SEO locale home/categorie](reports/seo-presentation/controllo.md) del 31/10; controlli pubblici e di lancio ancora aperti.
- Audit locale del 30/10: [report](seo-local-audit/FULL-AUDIT-REPORT.md), [azioni](seo-local-audit/ACTION-PLAN.md) ed evidenze browser/sitemap. Audit pubblico, ranking, volumi, CWV field e utilità reale ancora ND; nessuno score SEO globale attribuito.
- Acquisto: [brief SEO/editoriale unico](briefs/guida-acquisto-ue-brief.md) e bozze IT/EN in `drafts/buy/`; fonte MIMIT non riaperta, review preliminare svolta, gate e integrazione nel sito aperti.
- Umanoidi: [brief SEO/editoriale unico](briefs/confronto-umanoidi-brief.md), bozze IT/EN e review provvisorie in [drafts/humanoids](drafts/humanoids/README.md): seconda review IT 85/100, EN 84/100, sotto soglia. Gate e integrazione nel sito aperti. Preparata una [foto candidata attribuita](editorial-assets/humanoids/README.md), ancora da valutare nella pagina.
- Scuola/ricerca: [brief SEO/editoriale unico](briefs/go2-scuola-ricerca-brief.md) e bozze IT/EN in `drafts/edu/`; review preliminare eseguita, gate e integrazione nel sito aperti.
- Usato: [brief SEO/editoriale unico](briefs/robot-usato-brief.md), con ricognizione esplorativa e limiti; bozze IT/EN in `drafts/used/`, revisione preliminare eseguita e gate completo ancora aperto.
- Go2: [immagine candidata con fonte e licenza](editorial-assets/go2/README.md) preparata; renderer HTML/PDF Playwright e gate 1–2 verificati solo su fixture sintetica. Scelta grafica e gate della guida restano aperti.
- Go2: [brief unico](briefs/unitree-go2-brief.md) e [esito della revisione locale](reports/go2-review/README.md), con fonti, review per lingua e preflight strict bloccati. Non è una consegna pubblicabile.
- Go2: [copie preparatorie IT/EN per la consegna](drafts/go2/README.md) con firma e canonical ipotetico. Prove provvisorie con data di test: Gate 2–3 passati, review indipendenti provvisorie eseguite (IT 86, EN 86 nella terza prova, sotto soglia 90; ciclo di tre iterazioni terminato), ultimo preflight IT bloccato al Gate 3 per la firma localizzata (verificatore successivamente corretto e Gate 3 diagnostico passato) e EN al Gate 4 per punteggio; Gate 5 separato ha ricevuto HTTP 429 dallo store. Link pubblici ancora da verificare. Renderer corretto e verificato negli artefatti provvisori con la firma del progetto come Organization. Gate finale non superato.

| Fase della pipeline | Stato verificato | Cosa manca / applicazione al sito |
| --- | --- | --- |
| 0 — Fondazione marketing | Ricerca esplorativa fatta; product-marketing approvato | Domanda e utilità reale restano da validare. Nessun reclutamento di volontari, intervista o campione obbligatorio |
| 0 — Fondazione blog | Preparata il 30/10: `BRAND.md`, `VOICE.md`, `.claude-blog/personas/robot-unpacked.json` e riferimento alla persona attiva | Registro tecnico accessibile scelto da Galo; parametri numerici iniziali del default skill, non misure dei testi. `blog-style` rinviata, non blocca la SEO; lettura del contesto tramite helper verificata, nessun gate editoriale completo superato |
| 1 — Piano | Completato | Non riaprire l'intake; `marketing-council` solo per un dubbio decisionale concreto |
| 2 — SEO strategica | Prima strategia e audit locale eseguiti il 30/10; fonti competitive e Google consultate | Restano verifica pubblica dopo lancio, dati quantitativi e conferma dell'utilità; il noindex resta corretto in preview. Nessun punteggio 0–100 inventato |
| 2b — Keyword e brief | Brief unici Go2, usato, scuola/ricerca, umanoidi e acquisto IT/EN prodotti, con query candidate e fonti | Volumi/difficoltà/ranking Google non misurati; altri eventuali brief solo dopo necessità documentata |
| 3 — Scrittura e gate blog | Go2: review della pagina locale 81/100 IT e 80/100 EN; successiva terza review delle copie provvisorie 86/100 per lingua, entrambe sotto 90. Il listino italiano aggiunto successivamente è stato riportato nelle copie il 02/11, ma non è coperto dalle review precedenti. Per usato, scuola/ricerca, umanoidi e acquisto: bozze IT/EN separate e review preliminari | Fase aperta: il ciclo provvisorio Go2 è terminato senza superare i gate. Servono identità e contatto reali, dati di consegna, asset scelti e nuova review finale. Integrazione e gate delle quattro bozze ancora da valutare. Noindex intenzionale mantenuto |
| 4 — Pagine che vendono | Copy mirato e [revisione CRO qualitativa](reports/cro/home-categorie.md) di home/categorie IT/EN; nessuna offerta commerciale attiva | Valutare opportunità CRO, completare controlli SEO di lancio e verificare percorsi con dati quando disponibili; nessun A/B test senza traffico sufficiente |
| 6 — Distribuzione | Non avviata per il sito | Repurpose/social/Postiz solo se scegliamo un canale utile e ne verifichiamo accessi e collegamenti. Il piano non obbliga ad aprire tutti i social o a configurare Postiz |
| 5 — Manutenzione | Processo date/fonti già documentato; nessun monitoraggio pubblico verificato | Aggiornare fonti già ora; audit periodici, drift e decay quando applicabili. Non diagnosticare cali di traffico senza storico |

La pipeline generale dice che customer-research è stata saltata: il contesto approvato e `research.md` documentano invece ricerca esplorativa già svolta. Fa fede questa evidenza di progetto; la rinuncia riguarda il reclutamento dei volontari. La sezione «Stato sito-robot» della pipeline non sostituisce questo TODO.

### Prossime azioni in ordine

1. [x] Preparare la fondazione blog: [BRAND.md](BRAND.md), [persona editoriale JSON](.claude-blog/personas/robot-unpacked.json), [VOICE.md](VOICE.md) e riferimento locale alla persona attiva. Riutilizzato product-marketing §10; Galo ha scelto «tecnico accessibile». Identità legale, dominio e profili mancanti sono `not provided`. `blog-style` rinviata finché non ci sono campioni adatti.
2. [x] Eseguire `claude-seo/seo-plan` e l'audit pertinente al sito locale; salvati strategia, ricognizione competitiva, roadmap e report con limiti espliciti. Build/test PASS e 54 navigazioni browser locali; noindex intenzionale preservato. Verifica SEO pubblica rinviata al lancio approvato.
3. [x] Associare intento alle pagine, scegliere Go2 e produrre un brief unico SEO/blog IT/EN, senza nuova pagina o scaletta duplicata. La ricerca rimane esplorativa, senza volumi o ranking inventati.
4. [ ] Applicare revisione e gate claude-blog alle guide pertinenti; home e pagine di presentazione seguono il percorso copywriting/CRO + controllo SEO. Verificare schema senza duplicare JSON-LD fra i due pacchetti.
5. [ ] Completare la checklist di lancio sotto; distribuire e misurare solo dopo approvazione delle azioni concrete.

Filone commerciale parallelo: [ricognizione pubblica e verifica preliminare affiliazione](research/affiliazione-ricognizione.md) svolte il 31/10: condizioni contraddittorie, identità legale non verificata e accesso al registro bloccato; ammissibilità/affidabilità restano da verificare; affiliazione come prima ipotesi; segnalazioni commerciali come seconda possibilità. Non attendere la produzione di nuovi articoli per scoprire se il modello è accessibile. Nessun partner attivo o ricavo dimostrato.

Vincoli confermati: niente ads; strumenti esistenti/gratuiti prima; 10 € come tetto iniziale complessivo, non mensile. Nessun account, newsletter o community obbligatori. Pubblicazione, contatti, adesioni e spese richiedono approvazione specifica. La revisione interna non dimostra utilità per lettori reali; dopo il lancio approvato osservare dati disponibili e riscontri spontanei.

Firma concordata il 31/10: **Robot Unpacked**, nome del progetto, con collegamento al metodo e spiegazione dell'uso dell'AI; nessuna persona o squadra di esperti inventata. Identità dell'editore e contatti restano da definire insieme: [decisioni e fonti](research/editore-e-contatti.md). `robotunpacked.com` è il dominio di lavoro da assumere per ora come definitivo, su indicazione di Galo; la registrazione non è confermata. Controllo RDAP `.com` del 31/10 senza registrazione restituita, ma disponibilità e prezzo vanno confermati dal registrar. Nessun acquisto effettuato da noi; canonical effettivo e data di pubblicazione restano da confermare prima della consegna finale.

Verifiche del 30/10: audit locale conservato come snapshot; successivamente rivista Go2 IT/EN e riaperte tutte le sue sette fonti, con `verified` aggiornato al 30/10 solo su questa guida. Build/test con Node 24.20.0 PASS; nuova prova browser Go2 in entrambe le lingue a tre larghezze. Review e preflight strict documentati, non superati per pubblicazione. Nessun Lighthouse/CWV field, controllo legale, test hardware o prova con lettori. Successivamente applicate correzioni mirate alle guide; le date di verifica delle pagine precedenti sono mantenute dove non è stata eseguita una nuova revisione completa.

Anteprime del 31/10: erano disponibili il sito locale su `http://localhost:4321/it/` e una copia temporanea su `http://localhost:4333/it/` con le quattro bozze sovrapposte e l'immagine candidata Go2. La seconda era uno snapshot, non aggiornato automaticamente; la disponibilità attuale di entrambe va verificata. Build/test PASS; 33 visite automatiche Chromium su 11 pagine a 320, 390 e 1440 px senza overflow orizzontali o immagini mancanti. Verifica visiva limitata ad alcune schermate; nessuna approvazione grafica o editoriale implicita.

### Correzioni rilevate dall'audit

- [x] Tabelle delle guide: rese raggiungibili con Tab anche quando contengono link. Chromium e Firefox headless a 320 e 1440 px: 20 visite IT/EN per browser, focus su tutte le tabelle, scorrimento con freccia dove necessario e nessun overflow orizzontale della pagina. In Chromium i link alle fonti restano attivabili con Invio. Firefox 142.0.1 è stato eseguito con Playwright 1.54 e un browser già in cache non corrispondente alla revisione prevista dal driver. WebKit si è avviato ma il driver ha interrotto la connessione; WebKit, screen reader e dispositivi reali restano non verificati.
- [x] [Scansione automatica locale](reports/accessibilita-locale.md): nessuna violazione segnalata sulle 18 pagine IT/EN a 320 e 1440 px; tutti gli 82 elementi inizialmente incompleti a 320 px hanno superato il controllo del contrasto in almeno una posizione di scorrimento. Non è una verifica completa di accessibilità.
- [x] Usato IT/EN: corretti prova senza cadute provocate, perimetro del thread USA e tutele fra privati; riaperte le fonti citate e la pagina UE sulle garanzie. Nessuna verifica legale completa.
- [x] Scuola/ricerca IT/EN: requisiti SDK/ROS 2 legati al progetto, esempi attribuiti e tono corretto; riaperte le fonti citate. Restano brief e gate editoriali completi.
- [x] Go2 IT/EN: brief, fonti riaperte, revisione locale, collegamenti acquisto/usato/metodo e numerazione visibile delle fonti. Nessun gate di pubblicazione dichiarato superato.
- [x] Scuola/ricerca IT/EN: precisati controller Pro opzionale e sviluppo X parziale secondo la matrice Unitree riaperta; revisione completa ancora separata.
- [x] Usato IT/EN: chiariti ambito consumer/B2B, limiti della prova batteria, usura e natura storica della segnalazione software; resta aperta la verifica legale e la review completa.
- [x] Fonti: elenchi numerati e link descrittivi nelle guide usato, scuola/ricerca, acquisto e umanoidi IT/EN; richiami e ordine preservati.
- [x] Bozza acquisto IT/EN: tre indirizzi delle fonti allineati alle pagine locali; nessuna nuova verifica legale. Richiami di fonti consecutive separati visivamente nelle guide IT/EN.
- [x] Acquisto IT/EN: la FAQ MIMIT non raggiungibile è stata sostituita nella pagina locale con direttiva UE e Your Europe per i punti pertinenti; resta aperta la verifica legale completa.
- [ ] Acquisto IT/EN: verifica legale completa ancora aperta. L’art. 3 del decreto applica le modifiche alla garanzia ai contratti conclusi dal 31/07/2026; il decreto è in vigore dal 22/10/2026. La [direttiva UE 2024/1799, art. 16](https://eur-lex.europa.eu/eli/dir/2024/1799/oj) modifica la direttiva 2019/771; il [decreto legislativo italiano 176/2026, art. 1](https://www.gazzettaufficiale.it/atto/serie_generale/caricaArticoloDefault/originario?atto.codiceRedazionale=26G00191&atto.dataPubblicazioneGazzetta=2026-10-07&atto.tipoProvvedimento=DECRETO+LEGISLATIVO) prevede l'estensione una tantum di 12 mesi del periodo di responsabilità quando la riparazione è effettuata come rimedio di conformità. Aggiunto richiamo circoscritto in pagina e bozza IT/EN, invitando a verificare l'applicabilità al contratto. Il PDF della 2019/771 citato resta la versione 2019; non rappresenta da solo il testo aggiornato.
- [x] Umanoidi IT/EN: corretti nell’anteprima i dati di autonomia K1 secondo la scheda Booster consultata il 31/10 e chiarita la prova senza cadute provocate; la revisione completa resta nella bozza separata.
- [ ] Go2: completare requisiti reali di consegna e produzione, poi ripetere renderer/review/gate per ciascuna lingua; non inventare autore, canonical o data per aumentare il punteggio.
- [x] Sitemap locale: esclude redirect meta-refresh e pagine con meta robots `noindex`/`none`, normalizza `SITE` e rimuove output vecchi; fixture e build preview verificate.
- [ ] Al lancio: coordinare modalità preview/produzione e test, canonical/hreflang e verificare la sitemap con pagine effettivamente indicizzabili e dominio approvato. Definire schema soltanto con dati reali; gli header HTTP di produzione non sono controllabili dal generatore statico.

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
