# Audit SEO sito-robot — 13/11/2026 (locale, pre-lancio)

Metodo: skill `claude-seo/seo-audit` con 3 audit paralleli (tecnico, contenuti, schema/struttura/AI).
Perimetro: 22 pagine locali (`/it/`, `/en/` + 10 slug × 2). Niente dominio, niente chiavi Google/DataForSEO:
voci field-data escluse, proiezione con SITE nel piano d'azione.

## Punteggi

| Area | Score | Nota |
|---|---|---|
| Tecnico | 62/100 | 100 con SITE + fix x-default/favicon/redirect |
| Contenuti / E-E-A-T | 62/100 | guide forti ~75, stub categorie/glossario/index abbassano la media |
| Schema | 35/100 | solo DefinedTermSet; aggiunti Article + BreadcrumbList in questo giro |
| AI-readiness | 86 go2 / 79 home | struttura citabile, manca entità editore |

## Risultati per pagina (sintesi)

Guide buy/models/go2 ~75/100. Stub: dogs/humanoids (~100 parole, 0 link), glossary (corpo 45 parole,
voci da JSON), index (~200 parole). Method orfana solo nel corpo md (il template la linka ovunque).

## Cosa è stato corretto in questo giro

x-default → `/it/…`; footer con 6ª guida; breadcrumb buy sotto dogs; `inLanguage` nel glossario;
Article + BreadcrumbList JSON-LD; robots.txt minimo; favicon.svg; 6 title e 8 description fuori range.

## Resta per il lancio (serve decisione o dominio)

Dominio → SITE + verifica canonical/hreflang/sitemap; redirect trailing-slash in hosting;
header di sicurezza; og:image; Organization/WebSite con logo e sameAs; pagina Chi siamo con
contatti e policy correzioni; portata geografica della versione EN; stub: noindex o consolidare;
intento transazionale (prezzi/disponibilità) scoperto per scelta — confermare o accettare il gap.
