# Go2 — preparazione della consegna, non pubblicabile

Pacchetti IT/EN ricavati dalle pagine del sito al commit `1046db0`. Sono copie di lavoro: confrontarle con le pagine correnti prima del renderer e della review, per non perdere modifiche successive. Non sono una nuova versione approvata e non sostituiscono le pagine del sito.

- Firma concordata: `Robot Unpacked`, nome del progetto, non persona inventata.
- Canonical IT/EN su `https://robotunpacked.com`: **ipotesi di lavoro** autorizzata; dominio, protocollo, host e percorsi vanno confermati al lancio. Non prova registrazione, DNS o hosting.
- `date` volutamente assente: inserire solo la data reale di pubblicazione. `verified` indica controllo fonti, non pubblicazione.
- Hero: candidato [documentato e attribuito](../../editorial-assets/go2/README.md); prima del rendering copiare `editorial-assets/go2/hero.jpg` in ciascun pacchetto come `hero.jpg` e verificare la scelta grafica. Credito incluso nelle bozze.
- Da completare per ogni lingua: capability discovery, renderer HTML/PDF, nonce e reviewer, preflight strict e correzioni richieste. Non attribuire un punteggio o un gate superato alle copie attuali. La verifica fixture precedente non è una review del contenuto reale.
- Responsabilità editoriale, contatto, verifica legale e requisiti del sito pubblico rimangono da definire. La preview del sito resta `noindex`.

Controllo preparatorio 31/10: Gate 1 PASS sulle copie temporanee IT/EN con il JPEG candidato; disponibilità MCP non rilevata, avviso non bloccante. Il renderer provato sulla copia IT si ferma perché `date` è assente; nessun HTML/PDF o gate successivo della consegna è stato prodotto. L'assenza della data è intenzionale.

Prova 31/10 con data e canonical provvisori: renderer IT/EN corretto con `markdown` 3.5.1 già presente in locale, incluse libreria e metadati, e Playwright per il PDF. I Gate 2 e 3 sono passati anche dopo la correzione degli ID Fonti/Sources. Gate 5 resta bloccato sui tre link interni per lingua: il controllo richiede percorsi relativi ai file del pacchetto e rifiuta quelli assoluti del sito. Lo store Unitree ha restituito 429 al primo controllo ma non nel successivo. Le review indipendenti richieste non sono partite per limite di utilizzo degli agenti. L'ambiente Markdown utilizzato è temporaneo; dopo qualsiasi modifica ripetere rendering, nonce, review e gate. Nessun gate finale superato.

Schema: il renderer locale supporta `author_type: Organization` (commit `df3f506` nel repository della skill); le bozze lo impostano per la firma del progetto, senza attribuire identità personale o forma giuridica. Rigenerare gli artefatti e rifare la review dopo ogni modifica. Non modificare a mano l’HTML renderizzato: il contratto ne controlla l’integrità. I link `/it/...` e `/en/...` del sito sono validati dalla build Astro, ma Gate 5 li interpreta come percorsi locali assoluti vietati; convertirli in URL pubblici definitivi richiede un dominio raggiungibile, senza aggirare i controlli di rete.

Dopo la correzione del renderer: artefatti provvisori rigenerati IT/EN con `author` Organization, tabelle e ancore presenti; Gate 2 e 3 PASS, Gate 5 ancora bloccato sui link interni del sito. Review indipendente non eseguita per limite di utilizzo degli agenti.
