# Controllo automatico di accessibilità — anteprima locale

31/10/2026. Build locale del commit `db6eb7a`; Chromium headless, axe-core 4.10.2 già installato nell'ambiente. Eseguite 36 scansioni: le 18 pagine IT/EN a 320 × 900 e 1440 × 900 px. Regole selezionate: tag `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`.

- Nessuna violazione automatica segnalata nelle 36 scansioni.
- Otto scansioni a 320 px (Go2, umanoidi, acquisto e scuola/ricerca, in entrambe le lingue) riportano risultati **incompleti** per `color-contrast`: alcune celle nelle tabelle a scorrimento erano parzialmente fuori vista e lo strumento non ha potuto determinarne lo sfondo. Sono 82 elementi complessivi nelle otto scansioni; non sono né passati né violazioni confermate.
- Ripetendo `color-contrast` a 320 px con le tabelle in cinque posizioni di scorrimento, nessuna violazione è stata segnalata. Tutti gli 82 elementi inizialmente incompleti compaiono fra i controlli superati in almeno una posizione; il confronto è stato fatto sui selettori restituiti da axe.
- A 1440 px le stesse pagine non hanno risultati incompleti per quelle regole.

Questa è una scansione automatica della build locale, non una dichiarazione di conformità WCAG. Non comprende la verifica con screen reader o dispositivi reali, tutte le possibili interazioni, WebKit o il sito pubblicato. Ripetere i controlli dopo modifiche e sul sito finale.
