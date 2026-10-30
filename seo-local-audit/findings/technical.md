# Technical SEO — locale

30/10/2026. Sorgenti, build e 54 navigazioni locali; nessuna verifica hosting pubblico.

- **PASS preview:** `src/layouts/Base.astro:25–26` espone noindex,nofollow; `scripts/check.mjs:19` lo richiede. Non rimuoverlo prima del lancio approvato. Aggiungere solo SITE non modifica il layout.
- **High al lancio:** nessun canonical e nessun alternate hreflang nel head delle 18 pagine di contenuto; il link di cambio lingua nel body (`Base.astro:36`) serve la navigazione ma non completa le annotazioni. Pianificare URL reali e reciprocità. [Google hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions).
- **PASS locale:** 18 risposte 200, un H1 e lingua corretta; controllo esistente supera link, ancore ed equivalenze. Nessun JS client.
- **Da misurare al lancio:** HTTPS, redirect HTTP, header e indicizzabilità effettiva. Il server Python di audit non rappresenta la configurazione di produzione.

Nessun voto globale assegnato. [Inventario](../evidence/browser-inventory.json).
