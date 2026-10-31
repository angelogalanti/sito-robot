# Guida usato — bozze locali

30/10/2026. Bozze IT/EN separate dalle pagine del sito, ricavate dal brief `briefs/robot-usato-brief.md`. Le tre fonti delle bozze sono state riaperte; `verified` riguarda il controllo delle fonti, non la pubblicazione. Nessun test hardware proprio o parere legale.

Revisione indipendente preliminare sulle due lingue: nessuna incoerenza sostanziale individuata. È stato suggerito di precisare l'ambito degli acquisti nell'UE e il periodo ordinario della garanzia; tali indicazioni sono state recepite successivamente. Non è il reviewer formale sul rendering definitivo né un gate superato.

31/10: confronto con le pagine locali precedenti; ripristinati nelle bozze il richiamo al pagamento tracciabile e la verifica dei possibili vincoli dell'account precedente. Il collegamento alla guida acquisto è ora accanto alle tutele, per rendere più facile trovare il richiamo all'estensione italiana in caso di riparazione. Il controllo non sostituisce la revisione legale completa né una nuova review editoriale.

Preflight strict IT su copia temporanea: Gate 1 passato con avvisi; il renderer si è fermato per `date` e `author` mancanti; il Gate 2 ha segnalato assenza di HTML, PDF e hero. Il controllo si è fermato lì: Gate 3–5 non verificati. Il Python usato non rilevava Playwright o backend PDF; esiste un altro ambiente già installato, da verificare al momento della consegna. Il rilevamento automatico dei file di contesto puntava alla root della skill, non alla root del progetto.

Per il completamento servono URL pubblico canonico, autore/editore e data reali, hero con diritti idonei, renderer, revisione formale separata e gate strict. Non inventare i metadati né considerare la bozza pubblicabile. Le pagine `src/content/pages/*/used.md` restano quelle precedenti.
