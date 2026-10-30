# TODO — sito robot

Stato: bozza locale navigabile, non pronta al lancio. Il completamento di una prima versione non equivale ad approvazione editoriale definitiva. Decisioni, struttura e comandi: [README](README.md).

## Punto di ripresa — 30/10/2026

Questa è la checklist operativa del sito. Piano marketing e fondazione editoriale per claude-blog sono preparati; il prossimo passo è eseguire la SEO strategica. Non rifare il piano né produrre nuove pagine prima di aver verificato quelle esistenti.

Riferimenti:

- Pipeline generale aggiornata il 28/10/2026: `/mnt/c/Users/x/Sync/Obsidian/comune/progetti/sito-popolare/01-pipeline-seo.md`.
- Contesto approvato: [.agents/product-marketing.md](.agents/product-marketing.md), v1 del 25/10/2026; presente nella cartella principale, ancora non tracciato in Git alla verifica del 30/10.
- Piano marketing approvato: `/home/x/marketing-plans/robot-unpacked/final_plan.md`; stato `phase: finalized` in `progress.md`, 13 sezioni approvate il 27/10/2026. I piani restano fuori dal repo.

| Fase della pipeline | Stato verificato | Cosa manca / applicazione al sito |
| --- | --- | --- |
| 0 — Fondazione marketing | Ricerca esplorativa fatta; product-marketing approvato | Domanda e utilità reale restano da validare. Nessun reclutamento di volontari, intervista o campione obbligatorio |
| 0 — Fondazione blog | Preparata il 30/10: `BRAND.md`, `VOICE.md`, `.claude-blog/personas/robot-unpacked.json` e riferimento alla persona attiva | Registro tecnico accessibile scelto da Galo; parametri numerici iniziali del default skill, non misure dei testi. `blog-style` rinviata, non blocca la SEO; lettura del contesto tramite helper verificata, nessun gate editoriale ancora eseguito |
| 1 — Piano | Completato | Non riaprire l'intake; `marketing-council` solo per un dubbio decisionale concreto |
| 2 — SEO strategica | Non risultano strategia e audit claude-seo nel progetto | `seo-plan` → audit adattato al prototipo locale; distinguere controlli locali da verifica pubblica e indicizzabilità |
| 2b — Keyword e brief | Non risultano brief del flusso nel progetto | Mappare domande e intento alle guide esistenti; brief per ogni nuova scrittura o revisione sostanziale. Accessi Google/DataForSEO non verificati, nessun volume inventato o servizio a pagamento automatico |
| 3 — Scrittura e gate blog | 18 pagine IT/EN esistenti; non risultano report dei gate claude-blog | Distinguere guide/confronti dal resto delle pagine, poi controllare i contenuti editoriali con fonti, factcheck e gate pertinenti. Build e test non equivalgono a gate editoriale 90/100 |
| 4 — Pagine che vendono | Home/categorie presenti, nessuna offerta commerciale attiva | Per presentazione e percorsi usare copywriting/CRO, non blog-write; controllo finale SEO. A/B test solo se esistono dati e traffico sufficienti |
| 6 — Distribuzione | Non avviata per il sito | Repurpose/social/Postiz solo se scegliamo un canale utile e ne verifichiamo accessi e collegamenti. Il piano non obbliga ad aprire tutti i social o a configurare Postiz |
| 5 — Manutenzione | Processo date/fonti già documentato; nessun monitoraggio pubblico verificato | Aggiornare fonti già ora; audit periodici, drift e decay quando applicabili. Non diagnosticare cali di traffico senza storico |

La pipeline generale dice che customer-research è stata saltata: il contesto approvato e `research.md` documentano invece ricerca esplorativa già svolta. Fa fede questa evidenza di progetto; la rinuncia riguarda il reclutamento dei volontari. La sezione «Stato sito-robot» della pipeline non sostituisce questo TODO.

### Prossime azioni in ordine

1. [x] Preparare la fondazione blog: [BRAND.md](BRAND.md), [persona editoriale JSON](.claude-blog/personas/robot-unpacked.json), [VOICE.md](VOICE.md) e riferimento locale alla persona attiva. Riutilizzato product-marketing §10; Galo ha scelto «tecnico accessibile». Identità legale, dominio e profili mancanti sono `not provided`. `blog-style` rinviata finché non ci sono campioni adatti.
2. [ ] Eseguire `claude-seo/seo-plan` e l'audit pertinente al sito locale; registrare evidenze, limiti e priorità. Il noindex di anteprima resta intenzionale fino al lancio approvato.
3. [ ] Associare intento/keyword alle pagine già presenti, scegliere la prima guida da migliorare e predisporre il brief. Evitare scalette duplicate fra SEO e blog: il secondo riusa l'input del primo.
4. [ ] Applicare revisione e gate claude-blog alle guide pertinenti; home e pagine di presentazione seguono il percorso copywriting/CRO + controllo SEO. Verificare schema senza duplicare JSON-LD fra i due pacchetti.
5. [ ] Completare la checklist di lancio sotto; distribuire e misurare solo dopo approvazione delle azioni concrete.

Filone commerciale parallelo: verificare condizioni pubbliche di affiliazione come prima ipotesi; segnalazioni commerciali come seconda possibilità. Non attendere la produzione di nuovi articoli per scoprire se il modello è accessibile. Nessun partner attivo o ricavo dimostrato.

Vincoli confermati: niente ads; strumenti esistenti/gratuiti prima; 10 € come tetto iniziale complessivo, non mensile. Nessun account, newsletter o community obbligatori. Pubblicazione, contatti, adesioni e spese richiedono approvazione specifica. La revisione interna non dimostra utilità per lettori reali; dopo il lancio approvato osservare dati disponibili e riscontri spontanei.

Verifica del 30/10: confronto di file, stato del piano e artefatti della pipeline; validazione della persona JSON, coerenza dei valori con VOICE e caricamento di BRAND/VOICE con helper installato. Nessun nuovo audit SEO, gate blog, controllo browser, build/test o verifica live delle fonti eseguito in questo aggiornamento. Il caricamento del contesto non prova l'efficacia della voce o il rispetto dei parametri in un articolo generato.

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
