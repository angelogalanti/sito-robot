# Go2 — preparazione della consegna, non pubblicabile

Pacchetti IT/EN ricavati dalle pagine del sito al commit `1046db0`. Sono copie di lavoro: confrontarle con le pagine correnti prima del renderer e della review, per non perdere modifiche successive. Non sono una nuova versione approvata e non sostituiscono le pagine del sito.

- Firma concordata: `Robot Unpacked`, nome del progetto, non persona inventata.
- Canonical IT/EN su `https://robotunpacked.com`: **ipotesi di lavoro** autorizzata; dominio, protocollo, host e percorsi vanno confermati al lancio. Non prova registrazione, DNS o hosting.
- `date` volutamente assente: inserire solo la data reale di pubblicazione. `verified` indica controllo fonti, non pubblicazione.
- Hero: candidato [documentato e attribuito](../../editorial-assets/go2/README.md); prima del rendering copiare `editorial-assets/go2/hero.jpg` in ciascun pacchetto come `hero.jpg` e verificare la scelta grafica. Credito incluso nelle bozze.
- Da completare per ogni lingua: capability discovery, renderer HTML/PDF, nonce e reviewer, preflight strict e correzioni richieste. Non attribuire un punteggio o un gate superato alle copie attuali. La verifica fixture precedente non è una review del contenuto reale.
- Responsabilità editoriale, contatto, verifica legale e requisiti del sito pubblico rimangono da definire. La preview del sito resta `noindex`.

Controllo preparatorio 31/10: Gate 1 PASS sulle copie temporanee IT/EN con il JPEG candidato; disponibilità MCP non rilevata, avviso non bloccante. Il renderer provato sulla copia IT si ferma perché `date` è assente; nessun HTML/PDF o gate successivo della consegna è stato prodotto. L'assenza della data è intenzionale.

Prova 31/10 con data e canonical provvisori: renderer IT/EN con `markdown` 3.5.1 già presente in locale, incluse libreria e metadati, e Playwright per il PDF. I Gate 2 e 3 sono passati dopo la correzione delle ancore e dello schema. Con il nuovo `--site-root /tmp/robot-draft-preview-kIAhS5/dist` anche il Gate 5 è passato per IT/EN: i tre link interni per lingua sono verificati sulla build locale, non sul dominio pubblico. Lo store Unitree ha restituito 429 al primo controllo ma non nel successivo.

Schema: il renderer locale supporta `author_type: Organization` (commit `df3f506` nel repository della skill); le bozze lo impostano per la firma del progetto, senza attribuire identità personale o forma giuridica. Il controllo dei link alla build locale è stato aggiunto nel commit `eeecd92` della skill; non modifica i controlli di rete né sostituisce la verifica del sito pubblicato. La disponibilità di quella build temporanea e della libreria Markdown va rivalutata a ogni esecuzione.

La review indipendente obbligatoria non è stata eseguita per limite di utilizzo degli agenti: i controlli qui sono diagnostici, non una consegna completa. Dopo qualsiasi modifica a markdown, HTML, PDF o hero, ripetere rendering, nonce, review e tutti i gate in ordine. Al lancio verificare date, dominio e link pubblici reali.
