# sito-robot

Checklist operativa: [TODO.md](TODO.md).

Il [punto di ripresa nel TODO](TODO.md#punto-di-ripresa--31102026) confronta le fasi marketing/SEO/blog con gli artefatti realmente presenti. Contesto approvato e versionato: [.agents/product-marketing.md](.agents/product-marketing.md); piano marketing v1 concluso il 27/10/2026 in `/home/x/marketing-plans/robot-unpacked/` (fuori repo). Fondazione blog del 30/10: [BRAND.md](BRAND.md), [VOICE.md](VOICE.md) e [persona editoriale](.claude-blog/personas/robot-unpacked.json), registro tecnico accessibile scelto da Galo. Disponibili [strategia SEO iniziale](SEO-STRATEGY.md), [audit locale](seo-local-audit/FULL-AUDIT-REPORT.md), [brief Go2](briefs/unitree-go2-brief.md) e [revisione locale IT/EN](reports/go2-review/README.md). La fase 3 resta aperta: gate di pubblicazione non superati, nessun audit pubblico eseguito.

Guida all’acquisto di robot umanoidi e quadrupedi/cani robot per privati appassionati e PMI. Unitree è un esempio, non un marchio esclusivo. Progetto europeo: italiano e inglese nello stesso sito, con condizioni di acquisto specifiche per mercato.

## Decisioni e stato

- **Astro statico** è lo stack approvato. La precedente bozza Python era soltanto un prototipo; non è parte del progetto e non serve alla build.
- Percorsi `/it/` e `/en/`: cambio lingua sulla pagina equivalente, contenuti in Markdown, layout comune.
- **Robot Unpacked** è il nome di lavoro adottato per IT/EN. Direzione visiva: guida editoriale tecnica, bianco, testo scuro e cobalto; titoli tecnici, percorsi di categoria e guide leggibili. Palette CSS: `#142130`, `#1849d2`, `#ffffff`, `#f3f6fc`, `#c9d4e5`, `#526176`. Font di sistema, nessun servizio font esterno. La resa finale resta da rivedere; Foto reali Go2/G1 nella home con attribuzione e licenza, senza presentarle come test nostri. Nessun test hardware effettuato, nessun punteggio prestazionale inventato.
- `robotunpacked.com` è il dominio di lavoro indicato da Galo; nessun record nel controllo preliminare RDAP Verisign. Questo non garantisce disponibilità, prezzo o assenza di conflitti di marchio; registrazione non confermata e nessun acquisto effettuato da noi.
- Sito non pubblicato: `noindex,nofollow` intenzionale, nessun account, form o link affiliato attivo. Dominio effettivo e hosting restano da confermare per il lancio.
- Le precedenti ipotesi «solo ristoranti/retail», lead da 50–200 euro, soglia 3 lead/mese e stop a 90 giorni **non sono decisioni approvate**. Non usarle come vincoli.

## Sviluppo

Node compatibile con Astro 7.4.2: `>=22.23.4`; sviluppo verificato con **Node 24.20.0**, versione indicata in `.node-version`. pnpm 10.22.0, lockfile versionato.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm test
pnpm preview
```

`pnpm test` controlla l’output di `pnpm build`: 18 pagine di contenuto, equivalenti linguistici, titoli, ID, collegamenti e ancore locali; nessun JavaScript client e anteprima non indicizzabile. La build genera anche il redirect dalla radice a `/it/`.

## Dove intervenire

| Percorso | Contenuto |
| --- | --- |
| `src/content/pages/{it,en}/*.md` | Categorie, guide e metodo; frontmatter validato dalla collection |
| `src/data/ui.json` | Testi di navigazione e homepage nelle due lingue |
| `src/layouts/Base.astro` | Layout condiviso e cambio lingua |
| `src/pages/[...path].astro` | Generazione delle pagine dalle Content Collections |
| `src/styles/global.css` | Stile responsive provvisorio |
| `public/images/` e `src/data/photos.json` | Foto WebP locali, fonte, autore, licenza, didascalia e modifiche |
| `scripts/check.mjs` | Controllo ripetibile del sito generato |

Ogni lingua ha home, categoria cani robot, categoria umanoidi, confronto Go2, orientamento R1/G1/K1, guida acquisto, guida Go2 per scuola/ricerca, guida usato e metodo. Go2 e R1/G1/K1 sono confronti documentali: la guida umanoidi distingue versioni, prezzi datati, limiti software, impieghi e condizioni da verificare per l’acquisto europeo. La guida acquisto IT/EN distingue venditore e luogo di spedizione, importazione, consumatore e B2B, garanzia e recesso; sei fonti UE/MIMIT sono citate nelle pagine. Le indicazioni italiane non vengono estese a tutta Europa. Non confondere questi stati con articoli pronti per il lancio.

Il campo frontmatter **`route`** è relativo alla lingua (vuoto per la home). Non usare `slug` per duplicare lo stesso valore fra lingue: il loader può usarlo come identificatore globale, facendo collidere le traduzioni. Lingue alternative e pagine sono controllate nel test.

## Aggiornamento prezzi e fonti

Ogni pagina guida ha `verified:` nel frontmatter = data dell'ultima verifica delle fonti, non data di pubblicazione. Procedura a ogni giro:

1. Riapri le fonti citate nella pagina; se un prezzo o una condizione è cambiato, aggiorna testo e data.
2. Se una fonte è sparita, sostituiscila o dichiara la lacuna nella pagina — mai lasciare link morti.
3. Foto: `checked` in `src/data/photos.json` = data dell'ultima verifica di licenza.
4. `pnpm build && pnpm test` dopo ogni giro; la sitemap si genera solo con `SITE` impostato e almeno una pagina indicizzabile (`SITE=https://dominio-approvato pnpm build`); redirect e pagine con meta robots `noindex` sono esclusi. La preview attuale resta tutta `noindex` e non produce sitemap.

## Criterio editoriale

Separare capacità dichiarata dal produttore, dichiarazione commerciale del venditore, prova di terzi attribuita e test nostro. Registrare configurazione e data della fonte. Programmazione grafica non equivale a controllo avanzato; compatibilità con una base non significa base inclusa; carico utile non dimostra esecuzione autonoma di un lavoro.

Fonti iniziali, consultate nella ricerca del 23 ottobre 2026:
- [Unitree Go2](https://www.unitree.com/go2): matrice versioni e avvertenze; [store](https://shop.unitree.com/products/unitree-go2): trasporto e importazione separati.
- [Unitree R1](https://shop.unitree.com/products/unitree-r1), [G1](https://www.unitree.com/g1), [Booster K1](https://www.booster.tech/booster-k1/): configurazioni e sviluppo, non prove indipendenti.
- [RobotPower](https://robotpower.it/blog/robot-umanoidi/robot-umanoidi-vendita-italia/), [Osservatorio Robotica](https://www.osservatoriorobotica.com/), [Robolero](https://www.robolero.com/), [Robot Price Index](https://robotpriceindex.com/it/robots/unitree-go2): concorrenza già presente; prezzi e limiti spiegati non sono da soli differenziazione.

## Immagini e diritti

Fonte dei crediti e metadati: `src/data/photos.json`; attribuzione, link alla fonte, licenza e modifiche sono visibili nelle didascalie IT/EN. Le immagini rappresentano esemplari in esposizione, non una promessa di dotazione o una prova di capacità.

- Go2: RuinDig/Yuki Uchida, [Japan-Mobility-Show-2025-RuinDig 0543.jpg](https://commons.wikimedia.org/wiki/File:Japan-Mobility-Show-2025-RuinDig_0543.jpg), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Ritaglio dell'originale 3840×2160 alle coordinate `(1810, 920, 2560, 1510)` e conversione WebP, senza generazione o ricostruzione AI.
- G1: Sayanesy, [Unitree G1.jpg](https://commons.wikimedia.org/wiki/File:Unitree_G1.jpg), [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). Ridimensionamento a 570×960 e conversione WebP, senza ritaglio della figura.

Licenze e attribuzioni controllate sulle schede Commons il 23 ottobre 2026; queste sono le dichiarazioni dei rispettivi autori. Non implicano approvazione del sito da parte degli autori o del produttore. La foto Go2 Salvamont è stata esclusa: derivava da video esterno con revisione licenza ancora pendente su Commons. Le foto scelte sono caricate come opere proprie dagli autori. Nessun hotlink o richiesta ai server Wikimedia durante la navigazione.

## Da verificare prima del lancio

- Domanda di acquisto italiana/europea e canali di acquisizione: non dimostrati dai soli dati globali o dalle visualizzazioni dei video.
- Partner affidabili, ammissibilità del sito, paesi, categorie commissionabili, attribuzione preventivi e pagamenti: nessun accordo verificato. [Sovrn elenca Unitree](https://merchants.sovrn.com/merchants/229573-unitree-robotics), ma questo non garantisce operatività per noi. [Robots Europa](https://www.robotseuropa.com/partners/terms) pubblica condizioni, non prova affidabilità/pagamenti; non è un partner raccomandato.
- Prove/demo e proprietari verificabili; informazioni divergenti fra produttore e venditore da risolvere, non nascondere.
- Nome, dominio, hosting, immagini con diritti verificati, identità editore/contatti e informazioni privacy applicabili.
- Prima di pubblicare: decidere URL canonici e annotazioni `hreflang` delle pagine realmente esistenti, verificare SEO, rimuovere consapevolmente le protezioni dell’anteprima. Non impostare un dominio inventato.
