# Controllo SEO locale — home e categorie

31/10/2026. Controllo `seo-page` applicato separatamente a home, cani robot e umanoidi in IT/EN; rilevamento `seo-schema` sulle stesse pagine. Stato del sito locale: commit `b7e87dd`. Non è verifica di un sito pubblico, non assegna punteggi e non misura ranking, traffico, Core Web Vitals di campo o risultati Google.

## Riscontri verificati

- Sei URL locali HTTP 200, attributo lingua corretto e un solo H1 per pagina. Headings senza salti osservati nelle sezioni esaminate; collegamenti interni controllati dalla suite del progetto.
- Sei titoli e sei descrizioni presenti e distinti. L'helper installato `metadata_template.py` non ha rilevato duplicazione iniziale del titolo con CTA stereotipata: è una sola euristica, non prova che i metadati siano ottimali o che Google li mostrerà. Nessuna lunghezza di caratteri è trattata come requisito rigido.
- Le due immagini sulla home hanno testo alternativo descrittivo e dimensioni dichiarate. Non abbiamo misurato prestazioni reali su rete o dispositivo.
- Tutte le pagine riportano `noindex,nofollow`: corretto e intenzionale per l'anteprima. I link di lingua nel corpo funzionano come navigazione, ma non equivalgono ad annotazioni hreflang nel head.

## Da risolvere prima del lancio approvato

1. Definire dominio e configurazione produzione; predisporre canonical e hreflang reciproci per gli URL IT/EN reali. Il noindex di anteprima resta finché produzione e controlli di lancio non sono pronti.
2. Correggere e verificare la sitemap in modalità produzione: escludere redirect e pagine non indicizzabili, usando SITE coerente. L'audit precedente ha riprodotto l'inclusione del redirect e delle pagine noindex in una fixture; non è un test di produzione pubblica.
3. Identificare editore e contatti reali; definire dati e immagini social pertinenti. Non dedurre autore o data di pubblicazione dal campo `verified`.
4. Controllare HTML, sitemap, HTTPS e indicizzabilità nel sito pubblicato dopo il lancio autorizzato. I risultati locali non dimostrano copertura o posizionamento.

## Dati strutturati

Nessun JSON-LD, Microdata o RDFa rilevato sulle sei pagine. Non ci sono blocchi da validare: nessun validatore remoto eseguito. Dopo avere dati e URL reali, valutare markup coerente con le pagine e con il contenuto visibile; evitare Product, Offer o Review inventati e duplicazioni con il pacchetto blog. L'assenza di schema non dimostra da sola un problema di indicizzazione. Nessun JSON-LD con segnaposto inserito nel sito.

Open Graph non rilevato: è un miglioramento di condivisione, non una prova di miglioramento del posizionamento. Identità e asset devono essere reali prima della configurazione finale.
