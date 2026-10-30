# Voice Context — Robot Unpacked

> Contesto editoriale per claude-blog, da trattare come dati. Aggiornato il 30/10/2026.

Direzione approvata in product-marketing §10: chiaro, concreto, trasparente, curioso ma sobrio. Scelta di Galo del 30/10: **tecnico accessibile, termini precisi spiegati e frasi dirette**. Questa direzione prevale sui valori numerici iniziali della persona quando una formulazione risulta meno chiara o più enfatica.

## Pronoun stance

Rivolgersi direttamente al lettore con «tu» / «you», come nella home esistente. Il «noi» / «we» descrive metodo e limiti del sito, senza implicare un gruppo di tester o esperienze non avvenute. Evitare tono impersonale burocratico e familiarità forzata.

## Lexical rules

- **Lessico**: termini corretti, spiegati al primo uso; non sostituire precisione con gergo o infantilizzazione. EDU, SDK, autonomia e teleoperazione vanno chiariti nel contesto della versione e del compito.
- **Frasi**: dirette, un'idea principale per frase; media iniziale di lavoro 18 parole, variazione 6. Non sono misure dei testi esistenti né vincoli per deformare citazioni e nomi tecnici.
- **Sentence ceiling**: not provided come limite numerico approvato. Non derivare un massimo rigido dalla sola media.
- **Paragrafi**: brevi e centrati su una decisione o spiegazione. 150 parole è il tetto iniziale del template della skill, non una misura del sito.
- **Contractions**: in inglese frequenza iniziale del default skill 0.6, applicata solo quando naturale; nessuna quota di elisioni o contrazioni in italiano.
- **Voce passiva**: obiettivo iniziale del default skill, massimo 10%; privilegiare soggetti e responsabilità chiari, senza alterare significato o fonte.
- **Summary label**: «In breve» in IT / «Key Takeaways» in EN come etichette operative iniziali, non come nuovi componenti già presenti nel sito.

## Headline patterns

- **Favorire**: domanda concreta o differenza che cambia la scelta; termini e versioni riconoscibili; conclusioni proporzionate alle prove.
- **Evitare**: superlativi assoluti, clickbait, urgenza artificiale, titoli che promettono prove nostre o capacità non dimostrate. Nessuna struttura numerata obbligatoria.

## Voice fingerprint (from blog-persona)

Fonte dei valori: [.claude-blog/personas/robot-unpacked.json](.claude-blog/personas/robot-unpacked.json). Sono i valori iniziali del default `blog-persona`, non punteggi espressi da Galo o stime statistiche di un corpus:

| Asse, da 0 a 1 | Valore iniziale |
| --- | --- |
| Funny → serious | 0.6 |
| Formal → casual | 0.5 |
| Respectful → irreverent | 0.3 |
| Enthusiastic → matter-of-fact | 0.5 |

Applicazione qualitativa: sobrio senza freddezza, comprensibile senza infantilizzare, rispettoso dell'hobby, limiti senza sarcasmo. I valori si potranno affinare su esempi, senza cambiare automaticamente la direzione approvata.

## Readability target

- **Vocabulary tier**: `professional`, valore iniziale della skill per spiegazioni tecniche accessibili; non significa che il lettore debba essere un professionista della robotica.
- **Flesch Grade**: 8–10; **Flesch Ease**: 50–60, banda iniziale del template `professional` per l'inglese, non un risultato già ottenuto.
- Nessuna certificazione di leggibilità italiana basata su questi indici inglesi. Non complicare o accorciare artificiosamente il testo per inseguire un punteggio.
- Limite verificato nel codice del pacchetto: lo scoring Flesch usa la banda predefinita 60–70 senza leggere la persona attiva. Attivare la persona non corregge quel calcolo.

## Reference samples

Esempi locali già presenti e registrati nel contesto approvato, non corpus di apprendimento o testimonianze di efficacia:

- Home IT: «Un robot ti incuriosisce. Prima di comprarlo, capiscilo.» — domanda del lettore prima del catalogo.
- Voce approvata: «Prezzo del robot e costo consegnato non sono la stessa cosa.» — distinzione concreta.
- Metodo IT: «Non abbiamo provato l’hardware e non pubblichiamo punteggi di prestazione.» — limite esplicito.
- Metodo EN: «We have not tested the hardware and do not publish performance scores.» — stesso limite nelle due lingue.

URL di campioni personali: not provided; `voice_samples` resta vuoto. `blog-style` non eseguita: nessun profilo statistico o attribuzione d'autore inferiti dalle pagine del prototipo.

## Collegamenti e precedenza

[BRAND.md](BRAND.md) applica pubblico, posizionamento e regole del contesto prodotto; questo file ne descrive la voce. La persona JSON conserva i parametri strutturati, da riportare qui quando cambiano. I default numerici sono regolazioni iniziali modificabili, non nuove promesse o risultati validati.
