# Sitemap e redirect

30/10/2026. Senza SITE il generatore salta la sitemap: corretto per la preview.

**Medium pre-lancio:** `scripts/sitemap.mjs:14–21` raccoglie tutti gli index.html, compreso quello radice con redirect meta-refresh/noindex (`src/pages/index.astro:2`). Riprodotto eseguendo lo script reale in una fixture temporanea con dominio riservato `.invalid`; nessun dominio assegnato al progetto. [Evidenza](../evidence/sitemap-fixture.json).

**Low, robustezza:** il generatore elimina slash finali da SITE, mentre il controllo in `scripts/check.mjs:51` confronta il valore grezzo. Uniformare nel lavoro sul percorso di lancio.

Al lancio elencare le destinazioni canoniche indicizzabili, non redirect o pagine ancora noindex. [Google sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap). Non è stata generata o pubblicata una sitemap di produzione.
