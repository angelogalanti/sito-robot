# Go2 — preparazione della consegna, non pubblicabile

Pacchetti IT/EN ricavati dalle pagine del sito al commit `1046db0`. Sono copie di lavoro: confrontarle con le pagine correnti prima del renderer e della review, per non perdere modifiche successive. Non sono una nuova versione approvata e non sostituiscono le pagine del sito.

- Firma concordata: `Robot Unpacked`, nome del progetto, non persona inventata.
- Canonical IT/EN su `https://robotunpacked.com`: **ipotesi di lavoro** autorizzata; dominio, protocollo, host e percorsi vanno confermati al lancio. Non prova registrazione, DNS o hosting.
- `date` volutamente assente: inserire solo la data reale di pubblicazione. `verified` indica controllo fonti, non pubblicazione.
- Hero: candidato [documentato e attribuito](../../editorial-assets/go2/README.md); prima del rendering copiare `editorial-assets/go2/hero.jpg` in ciascun pacchetto come `hero.jpg` e verificare la scelta grafica. Credito incluso nelle bozze.
- Da completare per ogni lingua: capability discovery, renderer HTML/PDF, nonce e reviewer, preflight strict e correzioni richieste. Non attribuire un punteggio o un gate superato alle copie attuali. La verifica fixture precedente non è una review del contenuto reale.
- Responsabilità editoriale, contatto, verifica legale e requisiti del sito pubblico rimangono da definire. La preview del sito resta `noindex`.

Controllo preparatorio 31/10: Gate 1 PASS sulle copie temporanee IT/EN con il JPEG candidato; disponibilità MCP non rilevata, avviso non bloccante. Il renderer provato sulla copia IT si ferma perché `date` è assente; nessun HTML/PDF o gate successivo della consegna è stato prodotto. L'assenza della data è intenzionale.

Prova 31/10 con data e canonical provvisori: renderer IT/EN corretto con `markdown` 3.5.1 già presente in locale, incluse le tabelle; Gate 2 e Gate 3 passati prima dell’ultima correzione alle ancore. Aggiunti ID espliciti alle sezioni Fonti/Sources, verificati nel rendering. Gate 5 rimane aperto: link interni assoluti del sito non compatibili con il controllo di pacchetto locale e risposta 429 dello store Unitree; nessuna eccezione 429 ammessa dal controllo. Le due review indipendenti richieste non sono partite per limite di utilizzo degli agenti. Dopo modifiche, ripetere rendering, nonce, review e gate: nessun gate finale superato.
