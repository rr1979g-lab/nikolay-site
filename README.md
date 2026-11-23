# nikolayshcherbakov.com

Static site on GitHub Pages.

- Master of the home page: `_build/source.html` (one file: HTML + CSS + JS + images). Edit it, never the generated files.
- Texts of app, book and blog pages: `_build/content/<lang>/{apps,books,blog}/*.json`, interface words: `_build/content/<lang>/ui.json`.
- App screenshots: put `.webp` files into `img/screens/<app-slug>/` (sorted by name).
- Search Console / Yandex verification codes: `_build/verify.json`, e.g. `{"google-site-verification": "...", "yandex-verification": "..."}`.
- Build: `python3 _build/build.py` (needs Python 3, Node and Playwright). It writes `/<lang>/…`, `/assets`, `/img`, `sitemap.xml`, `robots.txt`, the root redirect page, prerenders the home pages and makes preview images.
- Day's promo app: `PROMO_DEFAULT` in `_build/source.html`; the popup shows only to visitors with `promo=`, `utm_…`, `fbclid`, `gclid` or `yclid` in the link.
