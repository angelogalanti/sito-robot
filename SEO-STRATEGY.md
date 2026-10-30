# Robot Unpacked — Strategia SEO iniziale

Data: 30/10/2026. Fase 2 della pipeline: strategia e audit locale, non validazione di domanda o lancio pubblico. Contesto marketing già approvato; nessun nuovo target, canale a pagamento o calendario di produzione seriale.

## Obiettivo e criterio di successo

Intercettare domande concrete di appassionati italiani e PMI che valutano umanoidi o quadrupedi, aiutandoli a decidere cosa approfondire, comprare o rimandare. Il primo risultato di questa fase è una mappa intento → pagina esistente e una coda di interventi con prove, dipendenze e controlli. Traffico, ranking e ricavi non sono ancora misurati.

Il template publisher di claude-seo è adattato a una piccola guida evergreen: niente news obbligatorie, autori inventati, newsletter, nuove sezioni o volumi di contenuti presunti. Le 18 pagine esistenti coprono già il primo perimetro; non serve ripartire da zero.

## Evidenze disponibili

- Piano marketing v1 finalizzato; contesto prodotto, brand e voce presenti. Tono tecnico accessibile; ricerca/università secondarie.
- Build e test del 30/10 superati con Node 24.20.0: 18 pagine IT/EN più redirect. Browser locale: 54 navigazioni a tre larghezze, senza overflow di documento. Questo non misura ranking, CWV reali o utilità del lettore.
- Ricerca web esplorativa e lettura diretta di cinque alternative informative. Confronti, versioni, costi e limiti sono già coperti: nessuna esclusività dimostrata. [Analisi e fonti](COMPETITOR-ANALYSIS.md).
- Nessun dominio pubblico approvato, proprietà Search Console/GA4 del sito o dataset DataForSEO verificato. Configurazioni Google presenti sulla macchina non dimostrano accesso ai dati di questo progetto; non sono state interrogate proprietà estranee.

## Domande candidate e destinazioni

Sono ipotesi di intento, non keyword con volume o difficoltà misurati. I risultati della ricerca non sono una SERP Google italiana controllata né un campione statistico di domanda.

| Priorità operativa | Domanda candidata | Pagina IT esistente | Decisione |
| --- | --- | --- | --- |
| Prima guida | Unitree Go2 Air, Pro, X o EDU: cosa cambia per il mio uso? | `/it/go2/` | Raffinare il confronto esistente dopo verifica delle fonti; nessuna nuova pagina per ogni variante |
| Percorso collegato | Comprare un robot in Italia/UE: cosa è incluso e cosa chiedere al venditore? | `/it/buy/` | Raggiungibile dal confronto, distinguendo privato/B2B e provenienza della spedizione |
| Secondo confronto | R1, G1 o Booster K1: quale piattaforma corrisponde al progetto? | `/it/models/` | Mantenere una comparazione documentale; non recensioni o classifiche prestazionali |
| Da correggere prima del lancio | Robot usato: quali controlli e quali informazioni mancano? | `/it/used/` | Correggere generalizzazioni e istruzioni ambigue prima di ampliare |
| Secondario | Go2 per scuola/ricerca: quali accessi servono per il progetto concreto? | `/it/edu/` | Correggere assoluti e tono; non spostare la priorità verso università |
| Navigazione | Cani robot / umanoidi | `/it/dogs/`, `/it/humanoids/` | Hub brevi di orientamento verso le guide; non duplicare le risposte dei confronti |

Le coppie EN restano allineate per contenuto e limiti, senza presumere acquisizione in tutti i paesi. Nessun cambio URL o migrazione delle route attuali è necessario per iniziare.

## Ipotesi di contributo informativo

Una guida che separa configurazione, accessi software, costo consegnato e verifiche mancanti potrebbe aiutare una scelta concreta. Il contributo va dimostrato, non proclamato: per Go2, ad esempio, riaprire la matrice ufficiale e chiarire cosa il simbolo intermedio di sviluppo della X consenta davvero. La [pagina ufficiale](https://www.unitree.com/go2/) distingue le versioni e rinvia alla documentazione di sviluppo; non prova da sola la fattibilità del progetto del lettore.

Non dichiarare i concorrenti incompleti, i robot autonomi in generale o i lettori aiutati perché hanno trascorso tempo sulla pagina. Dopo il lancio approvato raccogliere dati disponibili e riscontri spontanei; nessun volontario o intervista obbligatori.

## Fondazione tecnica ed editoriale

Prima del lancio: identità effettiva dell'editore/contatto; correzioni editoriali; dominio e hosting approvati; modalità preview/produzione con test coerenti; canonical e hreflang; sitemap limitata agli URL di contenuto destinati all'indicizzazione. Il noindex attuale è una protezione corretta, non un errore da rimuovere durante l'audit.

Schema solo coerente col contenuto visibile e con l'identità reale: WebSite/home, CollectionPage/hub e Article o BlogPosting dove applicabili. Nessun Product/Offer/Review con prezzi o rating inventati. L'assenza di JSON-LD non è una prova di penalizzazione. Riferimento: [Google Article](https://developers.google.com/search/docs/appearance/structured-data/article).

Per la visibilità nelle funzioni AI di Google restano centrali indicizzabilità e contenuto utile; non esiste un requisito aggiuntivo automatico di llms.txt o WebMCP. Nessuna promessa di citazione AI. [Google AI features](https://developers.google.com/search/docs/appearance/ai-features).

## Misure e limiti

| Misura | Baseline attuale | Prima verifica utile |
| --- | --- | --- |
| Copertura locale | 18 pagine contenuto, 9 coppie IT/EN | Mantenere equivalenze, link e ancore dopo ogni modifica |
| Visite organiche, impression, CTR, ranking | ND | Dopo lancio e verifica di una proprietà del sito; finestre omogenee |
| Volumi/difficoltà keyword e autorità domini | ND | Solo con dati pertinenti effettivamente disponibili; nessuna stima numerica inventata |
| LCP/INP/CLS sul pubblico reale | ND | Dopo hosting e traffico sufficienti; browser locale non equivale a dati field |
| Riscontri di utilità e azioni commerciali | ND | Solo eventi/riscontri osservati, distinguendo intento presunto e decisione dichiarata |

Se un contenuto non riceve impression dopo che accessibilità e indicizzazione sono state verificate, rivedere intento e distribuzione prima di produrre altre pagine. Se riceve visite ma non ci sono riscontri, l'utilità resta ND. Se non emerge un programma commerciale praticabile, non fingere che la SEO risolva la monetizzazione.

Responsabile decisioni: Galo. Ricerca e preparazione: assistente. Sequenza operativa in [IMPLEMENTATION-ROADMAP.md](IMPLEMENTATION-ROADMAP.md); audit in [seo-local-audit/FULL-AUDIT-REPORT.md](seo-local-audit/FULL-AUDIT-REPORT.md).
