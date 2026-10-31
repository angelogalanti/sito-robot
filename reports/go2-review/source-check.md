# Registro fonti — revisione Go2

Consultazione del 30/10/2026 tramite apertura delle pagine e verifica dei passaggi pertinenti. Nessun test hardware, contatto col venditore o verifica di identità degli autori dei thread. Tutte le fonti presenti nell'articolo sono state riaperte; nessun nuovo prezzo europeo adottato.

| N. | Fonte e passaggi controllati | Decisione editoriale |
| --- | --- | --- |
| 1 | [Unitree Go2](https://www.unitree.com/go2/), colonne AIR/PRO/X/EDU, graphical programme, secondary development, ISS 2.0, durata batteria e prezzi | Conservare matrice e prezzi come dichiarazioni del produttore, datare la consultazione; non dedurre dal simbolo parziale quali API siano incluse. La nota rinvia al manuale di sviluppo |
| 2 | [Store Unitree](https://shop.unitree.com/products/unitree-go2), opzioni con/senza controller, responsabilità per imposte/dazi/sdoganamento | Separare variante e costo consegnato; nessuna promessa di disponibilità o importo finale |
| 3 | [Abra Go2](https://abrarobotics.com/go2.html), descrizione Air e funzione follow | Conservare la divergenza con la matrice, senza dire che sia la stessa funzione o che una fonte sia falsa |
| 4 | [FauxHammer](https://www.fauxhammer.com/reviews/unitree-go-2-pro-review-whats-the-point-of-a-robot-dog-really/), data aggiornamento e valutazione hobby/utilità | Parafrasi breve e attribuita; non estenderla alla EDU o a tutti gli impieghi aziendali. Il sito contiene link commerciali: «terzi» non significa assenza verificata di interessi economici |
| 5 | [New Atlas](https://newatlas.com/robotics/review-unitree-go2-pro-quadruped-robot/), apprendimento comandi, difficoltà di avvio e usura | Sintesi attribuita, senza istruzioni operative rischiose e senza trattare prezzo della prova come offerta attuale |
| 6 | [Thread LiDAR](https://www.reddit.com/r/unitree/comments/1mjelev/go_2_pro_lidar_problem/), resoconto iniziale e commenti | Segnalazione storica individuale; non tasso di guasto o diagnosi nostra |
| 7 | [Thread nuovo utente](https://www.reddit.com/r/unitree/comments/1frs9og/go2_new_user_a_few_problems/), modalità avanzata e controllo app/telecomando | Non prova lo stato del firmware attuale. Rimosso il precedente riferimento al volo con batteria: non sostenuto dai due thread |

I passaggi tecnici provenienti dal produttore sono sue dichiarazioni; lettura della documentazione non equivale a prova delle funzioni. I thread non garantiscono proprietà o diagnosi verificata. Nessun test pratico o statistica viene aggiunto per soddisfare il template.

## Verifica mirata prezzi e configurazioni — 31/10/2026

- La [matrice Unitree](https://www.unitree.com/go2/) continua a indicare Air 1.600 USD, Pro 2.800 USD e X 4.500 USD, imposte e trasporto esclusi; EDU su richiesta. Indica sviluppo secondario parziale per X e presente per EDU, senza spiegare nella matrice le singole interfacce. I valori confermano quelli già riportati nella guida, non sono un preventivo europeo.
- Lo [store Unitree](https://shop.unitree.com/products/unitree-go2) mostra opzioni Air e Pro con e senza controller, X con controller e attribuisce al cliente eventuali dazi, imposte e sdoganamento. Non è stata simulata una consegna o verificata la disponibilità per l'Italia.
- La [pagina commerciale Abra](https://abrarobotics.com/go2.html) indica Go2 Air **da 2.576 EUR IVA esclusa**, con spedizione e dazio in Italia inclusi secondo il venditore, e precisa che ogni ordine va confermato con un preventivo aggiornato. È un listino dichiarato, non un'offerta verificata per una configurazione o un cliente specifici; non prova disponibilità, condizioni di assistenza o affidabilità del venditore. Non confrontare direttamente questo prezzo con la matrice internazionale senza uniformare dotazione, IVA e altri costi.
- La stessa pagina descrive Air come capace di seguire una persona, mentre la matrice Unitree non indica ISS 2.0 come incluso su Air. La discrepanza già riportata resta da chiarire sulla configurazione effettivamente offerta; non sappiamo se le due descrizioni si riferiscano alla stessa funzione.

Questo passaggio riguarda le fonti commerciali e la matrice, non rinnova la verifica completa delle sette fonti o la review finale. `verified` resta invariato; valutare il listino italiano in una futura revisione dell'articolo, senza trattarlo come raccomandazione o accordo commerciale.

## Controlli del pacchetto e adattamento al progetto

Analyzer meccanico eseguito prima e dopo su ogni lingua, report JSON conservati. Non equivale alla review editoriale 90/100: interpreta i Markdown Astro isolati senza il layout, non riconosce `verified` come data di pubblicazione, e nel baseline IT ha rilevato lingua `en`. Non usare Flesch inglese per certificare la leggibilità italiana.

Il preflight strict viene eseguito e riportato senza `--no-strict`; nessun dato fittizio per superarlo. Le pagine restano anteprime noindex: l'assenza dei metadati/artefatti pubblicabili già nota non è nascosta da un voto locale. La review sul rendering Astro è un controllo editoriale separato, non il superamento del delivery contract.
