#!/usr/bin/env python3
"""Build the static, search-friendly site from _build/source.html (the single-file master).

Steps: split CSS/JS, move embedded WebP images to /img, patch JS (path languages, promo only for ads,
links to app/book pages), write one JS per language, home shells per language, app/book/blog pages,
root redirect, sitemap.xml, robots.txt. Then run prerender.js and og.js (node).
Usage: python3 _build/build.py [--no-node]
"""
import json, re, os, sys, hashlib, html, shutil, subprocess, glob, datetime

B = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(B)
SITE = "https://nikolayshcherbakov.com"
TODAY = datetime.date.today().isoformat()

LANGS = ["en", "ru", "uk", "ar", "zh", "fr", "de", "he", "hi", "id", "it", "ja", "ko", "pt", "es", "tr", "bn", "mr", "te", "ta"]
HREFLANG = {"zh": "zh-CN", "pt": "pt-BR"}
OG_LOCALE = {"en": "en_US", "ru": "ru_RU", "uk": "uk_UA", "ar": "ar_AR", "zh": "zh_CN", "fr": "fr_FR", "de": "de_DE", "he": "he_IL", "hi": "hi_IN", "id": "id_ID",
             "it": "it_IT", "ja": "ja_JP", "ko": "ko_KR", "pt": "pt_BR", "es": "es_ES", "tr": "tr_TR", "bn": "bn_IN", "mr": "mr_IN", "te": "te_IN", "ta": "ta_IN"}
RTL = {"ar", "he"}

APP_SLUGS = ["intuition-trainer", "moment-now", "breath-prana-moment", "head-heart", "phone-detox", "perennial", "affirmation",
             "figure-out-why", "free-again", "pill-reminder", "parent-lock", "ferment-lab", "fridge", "life-compass", "frame-ai"]
BOOK_SLUGS = ["thoughts-in-circles", "what-if-everything-turns-out-well", "destiny-to-order", "the-intuition-code", "the-right-choice", "minus-25-kg", "open-up-to-your-dreams"]
BOOK_SLUGS_RU = ["mysli-po-krugu", "a-chto-esli-vse-budet-horosho", "sudba-po-zakazu", "kod-intuicii", "pravilnyj-vybor", "minus-25-kg", "otkrojsya-svoim-mechtam"]
BLOG_SLUGS = ["how-to-stop-scrolling-your-phone", "parental-controls-android", "how-to-develop-intuition", "breathing-exercises-for-calm"]
BLOG_SLUGS_RU = ["kak-perestat-sidet-v-telefone", "roditelskij-kontrol-na-android", "kak-razvit-intuiciyu", "dyhatelnye-praktiki-dlya-spokojstviya"]
APP_CAT = ["EducationalApplication", "HealthApplication", "HealthApplication", "LifestyleApplication", "LifestyleApplication", "LifestyleApplication", "LifestyleApplication",
           "EducationalApplication", "HealthApplication", "HealthApplication", "LifestyleApplication", "LifestyleApplication", "LifestyleApplication", "LifestyleApplication", "MultimediaApplication"]
FREE_APPS = {1, 2}  # MOMENT NOW, BREATH PRANA MOMENT (as on the site)

PRUNE = ["I18N", "STORY", "FEAT", "APP_TXT", "BOOK_TXT", "ML_TXT", "EXTRA", "CF_TXT", "CT_TXT", "FREE_TXT", "APP_HINT", "ALSO_TXT", "RV_TXT"]


def esc(s):
    return html.escape(str(s), quote=True)


def w(path, text):
    path = os.path.join(ROOT, path.lstrip("/"))
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(text)


def h8(b):
    return hashlib.sha1(b if isinstance(b, bytes) else b.encode()).hexdigest()[:10]


def must_replace(s, old, new, count=1):
    n = s.count(old)
    if n != count:
        raise SystemExit(f"patch failed ({n} matches, expected {count}): {old[:90]!r}")
    return s.replace(old, new)


def url_item(lang, kind, i):
    if kind == "apps":
        return f"/{lang}/apps/{APP_SLUGS[i]}/"
    if kind == "books":
        return f"/{lang}/books/{(BOOK_SLUGS_RU if lang == 'ru' else BOOK_SLUGS)[i]}/"
    return f"/{lang}/blog/{(BLOG_SLUGS_RU if lang == 'ru' else BLOG_SLUGS)[i]}/"


# ---------------------------------------------------------------- 1. split source
src = open(os.path.join(B, "source.html"), encoding="utf-8").read()

img_dir = os.path.join(ROOT, "img")
for f in glob.glob(os.path.join(img_dir, "*.webp")):
    os.remove(f)
os.makedirs(img_dir, exist_ok=True)


def img_out(m):
    import base64
    data = base64.b64decode(m.group(1))
    name = h8(data) + ".webp"
    with open(os.path.join(img_dir, name), "wb") as f:
        f.write(data)
    return "/img/" + name


src = re.sub(r"data:image/webp;base64,([A-Za-z0-9+/=]+)", img_out, src)

css_a = src.find("<style>", src.find("<title>"))
css_b = src.find("</style>", css_a)
CSS = src[css_a + 7:css_b]
FONTS = re.search(r'<link rel="stylesheet" href="(https://fonts.googleapis.com[^"]+)">', src).group(1)
body_a = src.find("<body>") + 6
js_a = src.find("<script>\nconst T")
js_b = src.rfind("</script>")
BODY = src[body_a:js_a]
JS = src[js_a + 8:js_b]

# ---------------------------------------------------------------- 2. patch JS
SEO_JS = """
/* SEO build: language comes from the path (/ru/, /en/ ...); app and book pages live at /<lang>/apps|books/<slug>/ */
const PATH_LANG=(location.pathname.match(/^\\/([a-z]{2})(?:\\/|$)/)||[])[1]||"";
const __T0=document.title;
const BOOK_SLUGS_RU=%s;
const APP_SLUGS=%s;
const MORE_TXT=%s;
const PAGE_LANGS=%s;
function pl(){ const l=PATH_LANG||lang; return PAGE_LANGS.indexOf(l)>=0?l:"en"; }
function bookHref(i){ const l=pl(); return "/"+l+"/books/"+(l==="ru"?BOOK_SLUGS_RU[i]:SLUGS[i])+"/"; }
function appHref(i){ return "/"+pl()+"/apps/"+APP_SLUGS[i]+"/"; }
function goLang(){ if(PATH_LANG && lang!==PATH_LANG){ location.href="/"+lang+"/"+location.hash; return true; } return false; }
"""

JS = must_replace(JS, 'lang=b.dataset.lg; saveLang(); close(); render();', 'lang=b.dataset.lg; saveLang(); close(); if(!goLang()) render();')
JS = must_replace(JS, 'lang=pick; saveLang(); close(); render();', 'lang=pick; saveLang(); close(); if(!goLang()) render();')
JS = must_replace(JS, 'lang = lb.dataset.lang; try{localStorage.setItem("ns-lang",lang)}catch(err){} render();',
                  'lang = lb.dataset.lang; try{localStorage.setItem("ns-lang",lang)}catch(err){} if(!goLang()) render();')
JS = must_replace(JS, '  const norm=c=>{ c=String(c||"").toLowerCase().split(/[-_]/)[0]; return ({iw:"he",in:"id",ua:"uk"})[c]||c; };\n',
                  '  const norm=c=>{ c=String(c||"").toLowerCase().split(/[-_]/)[0]; return ({iw:"he",in:"id",ua:"uk"})[c]||c; };\n  if(PATH_LANG && ok(PATH_LANG)){ lang=PATH_LANG; saveLang(); return; }\n')
JS = must_replace(JS, 'if(i>=0){ renderBookPage(i);', 'if(i>=0){ location.replace(bookHref(i)); return; renderBookPage(i);')
JS = must_replace(JS, 'document.title="Nikolay Shcherbakov";', 'document.title=__T0;')
JS = must_replace(JS, 'location.hash="book-"+SLUGS[+bb.dataset.book];', 'location.href=bookHref(+bb.dataset.book);')
JS = must_replace(JS, '<button class="linkbtn" type="button" data-book="${i}">${t("more_book")} ${arrow}</button>',
                  '<a class="linkbtn" href="${bookHref(i)}">${t("more_book")} ${arrow}</a>')
JS = must_replace(JS, 'appc-a">${btn}</div>', 'appc-a">${btn}<a class="linkbtn more-app" href="${appHref(i)}">${esc(MORE_TXT[lang]||MORE_TXT.en)} <span aria-hidden="true">→</span></a></div>')
# promo popup only for visitors from ads: ?promo=..., utm_*, or ad click ids
JS = must_replace(JS, '  const slug=q||PROMO_DEFAULT; if(!slug||slug==="none") return;',
                  '  const fromAd=!!q||/[?&](utm_[a-z]+|fbclid|gclid|yclid)=/i.test(location.search); if(!fromAd) return;\n  const slug=q||PROMO_DEFAULT; if(!slug||slug==="none") return;')
# the lotus icon's gradient ids clash with the language dialog (#lp) once the page is prerendered
JS = must_replace(JS, '<linearGradient id="lp"', '<linearGradient id="lotus-p"')
JS = must_replace(JS, 'url(#lp)', 'url(#lotus-p)')
JS = must_replace(JS, '<radialGradient id="lg"', '<radialGradient id="lotus-g"')
JS = must_replace(JS, 'url(#lg)', 'url(#lotus-g)')
# lazy images in templates
JS = JS.replace('<img src="${', '<img loading="lazy" decoding="async" src="${')
JS = JS.replace('<img class="', '<img loading="lazy" decoding="async" class="')
JS = JS.replace('loading="lazy" decoding="async" src="${cov(b)}" alt="" loading="lazy">', 'loading="lazy" decoding="async" src="${cov(b)}" alt="">')
JS = JS.replace('loading="lazy" decoding="async" src="${c}" alt="" loading="lazy">', 'loading="lazy" decoding="async" src="${c}" alt="">')

UI = {}
for l in LANGS:
    p = os.path.join(B, "content", l, "ui.json")
    try:
        UI[l] = json.load(open(p, encoding="utf-8"))
    except Exception:
        UI[l] = {}
U = lambda l, k: UI.get(l, {}).get(k) or UI["en"][k]
MORE = {l: U(l, "more") for l in LANGS}
def complete(l):
    need = [("apps", x) for x in APP_SLUGS] + [("books", x) for x in BOOK_SLUGS] + [("blog", x) for x in BLOG_SLUGS]
    if not os.path.exists(os.path.join(B, "content", l, "ui.json")):
        return False
    for k, x in need:
        try:
            json.load(open(os.path.join(B, "content", l, k, x + ".json"), encoding="utf-8"))
        except Exception:
            return False
    return True


COMPLETE = [l for l in LANGS if complete(l)]
print("languages with full texts:", " ".join(COMPLETE))
JS = SEO_JS % (json.dumps(BOOK_SLUGS_RU), json.dumps(APP_SLUGS), json.dumps(MORE, ensure_ascii=False), json.dumps(COMPLETE)) + JS

# split into one JS per language: big translation tables keep only English + that language
lines = JS.split("\n")
table_idx = {}
for n, line in enumerate(lines):
    m = re.match(r"^const ([A-Z_0-9]+)=(\{.*\});\s*$", line)
    if m and m.group(1) in PRUNE:
        try:
            table_idx[n] = (m.group(1), json.loads(m.group(2)))
        except json.JSONDecodeError:
            pass
for f in glob.glob(os.path.join(ROOT, "assets", "site.*.js")):
    os.remove(f)
JS_FILES = {}
for l in LANGS:
    out = list(lines)
    for n, (name, data) in table_idx.items():
        keep = {k: v for k, v in data.items() if k in ("en", l)}
        out[n] = f"const {name}={json.dumps(keep, ensure_ascii=False)};"
    code = "\n".join(out)
    fn = f"assets/site.{l}.{h8(code)}.js"
    JS_FILES[l] = "/" + fn
    w(fn, code)

# CSS + extra CSS for content pages
for f in glob.glob(os.path.join(ROOT, "assets", "*.css")):
    os.remove(f)
CSS_EXTRA = open(os.path.join(B, "page.css"), encoding="utf-8").read()
CSS = CSS + "\n/* home: link to app page */\n.appc-a{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px}.more-app{font-size:14px}\n"
CSS_FILE = f"/assets/site.{h8(CSS)}.css"
w(CSS_FILE, CSS)
PAGE_CSS_FILE = f"/assets/page.{h8(CSS_EXTRA)}.css"
w(PAGE_CSS_FILE, CSS_EXTRA)
PAGE_JS = open(os.path.join(B, "page.js"), encoding="utf-8").read()
PAGE_JS_FILE = f"/assets/page.{h8(PAGE_JS)}.js"
for f in glob.glob(os.path.join(ROOT, "assets", "page.*.js")):
    os.remove(f)
w(PAGE_JS_FILE, PAGE_JS)

# ---------------------------------------------------------------- 3. meta from the site (names, images, i18n) via node
META_P = os.path.join(B, "meta.json")
if "--no-node" not in sys.argv or not os.path.exists(META_P):
    w("_build/tmp_full.js", JS)
    w("_build/tmp_meta.html", "<!doctype html><meta charset=utf-8><body>" + BODY + '<script src="/_build/tmp_full.js"></script>')
    subprocess.run(["node", os.path.join(B, "meta.js")], check=True, cwd=ROOT)
META = json.load(open(META_P, encoding="utf-8"))
_m = re.search(r'<div class="portrait"><img src="(/img/[^"]+)"', BODY)
META["portrait"] = _m.group(1) if _m else ""
_m = re.search(r'\.hero \.photo\{[^}]*url\((?:["\']?)(/img/[^)"\']+)', CSS)
META["hero_img"] = _m.group(1) if _m else ""

# ---------------------------------------------------------------- 4. content
def load(lang, kind, slug):
    for l in (lang, "en"):
        p = os.path.join(B, "content", l, kind, slug + ".json")
        if os.path.exists(p):
            return json.load(open(p, encoding="utf-8")), l
    return None, None




def langs_for(kind, slug):
    """only languages whose whole text set is ready get app/book/blog pages"""
    return list(COMPLETE)


def mdlinks(text, lang):
    def rep(m):
        label, kind, slug = m.group(1), m.group(2), m.group(3)
        if kind == "app" and slug in APP_SLUGS:
            href = url_item(lang, "apps", APP_SLUGS.index(slug))
        elif kind == "book" and slug in BOOK_SLUGS:
            href = url_item(lang, "books", BOOK_SLUGS.index(slug))
        elif kind == "blog" and slug in BLOG_SLUGS:
            href = url_item(lang, "blog", BLOG_SLUGS.index(slug))
        else:
            return esc(label)
        return f'<a href="{href}">{esc(label)}</a>'
    parts = re.split(r"(\[[^\]]+\]\((?:app|book|blog):[a-z0-9-]+\))", text)
    out = []
    for p in parts:
        m = re.fullmatch(r"\[([^\]]+)\]\((app|book|blog):([a-z0-9-]+)\)", p)
        out.append(mdlinks_one(m, lang, rep) if m else esc(p))
    return "".join(out)


def mdlinks_one(m, lang, rep):
    return rep(m)


def short(t, n):
    return t if len(t) <= n else t[:n].rsplit(" ", 1)[0].rstrip(",;:—-") + "…"


def strip_md(text):
    return re.sub(r"\[([^\]]+)\]\((?:app|book|blog):[a-z0-9-]+\)", r"\1", text)


# ---------------------------------------------------------------- 5. templates
LOGO = '<svg viewBox="0 0 48 48" aria-hidden="true"><g fill="none" stroke="url(#gg)" stroke-width="2.2" stroke-linejoin="round"><path d="M24 8c5 5 6 13 0 22-6-9-5-17 0-22z"/><path d="M24 30c-4-7-10-10-17-10 1 8 8 12 17 10z"/><path d="M24 30c4-7 10-10 17-10-1 8-8 12-17 10z"/><path d="M8 34c6 3 26 3 32 0"/></g></svg>'
GRAD = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><linearGradient id="gg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFC93C"/><stop offset="1" stop-color="#E8821E"/></linearGradient></defs></svg>'
GLOBE = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>'
PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true" class="i"><path fill="currentColor" stroke="none" d="M5 3.5v17a1 1 0 0 0 1.5.86l14-8.5a1 1 0 0 0 0-1.72l-14-8.5A1 1 0 0 0 5 3.5z"/></svg>'
VERIFY = json.load(open(os.path.join(B, "verify.json"))) if os.path.exists(os.path.join(B, "verify.json")) else {}


def lang_name(l):
    for c, en, nat in META["LP_LANGS"]:
        if c == l:
            return nat
    return l


def head(lang, title, desc, path, alts, og_img, og_type="website", jsonld=(), extra="", css=(CSS_FILE,)):
    """alts: {lang: path} for hreflang"""
    hl = "".join(f'<link rel="alternate" hreflang="{HREFLANG.get(l, l)}" href="{SITE}{p}">' for l, p in alts.items())
    if "en" in alts:
        hl += f'<link rel="alternate" hreflang="x-default" href="{SITE}{alts["en"]}">'
    ld = "".join(f'<script type="application/ld+json">{json.dumps(j, ensure_ascii=False)}</script>' for j in jsonld)
    ver = "".join(f'<meta name="{k}" content="{esc(v)}">' for k, v in VERIFY.items())
    og_alt = "".join(f'<meta property="og:locale:alternate" content="{OG_LOCALE[l]}">' for l in alts if l != lang)
    return f"""<!doctype html>
<html lang="{HREFLANG.get(lang, lang)}" dir="{'rtl' if lang in RTL else 'ltr'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
<link rel="canonical" href="{SITE}{path}">
{hl}
<meta property="og:type" content="{og_type}"><meta property="og:site_name" content="Nikolay Shcherbakov">
<meta property="og:title" content="{esc(title)}"><meta property="og:description" content="{esc(desc)}">
<meta property="og:url" content="{SITE}{path}"><meta property="og:image" content="{SITE}{og_img}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:locale" content="{OG_LOCALE[lang]}">{og_alt}
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#1B2B6E">
<link rel="icon" href="/img/favicon.svg" type="image/svg+xml">
{ver}
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="{FONTS}" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="{FONTS}"></noscript>
{''.join(f'<link rel="stylesheet" href="{c}">' for c in css)}
{extra}
<script data-goatcounter="https://nikolayshcherbakov.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
{ld}
</head>
"""


def person_ld(lang):
    return {"@context": "https://schema.org", "@type": "Person", "@id": SITE + "/#person", "name": "Nikolay Shcherbakov",
            "alternateName": "Николай Щербаков", "url": f"{SITE}/{lang}/", "image": SITE + META["portrait"],
            "jobTitle": "Author and app developer", "description": U(lang, "author_bio"),
            "sameAs": ["https://t.me/nikolayintuition", "https://t.me/nikolaymind", "https://play.google.com/store/apps/developer?id=Nikolay+Shcherbakov"]}


def crumbs_ld(items):
    return {"@context": "https://schema.org", "@type": "BreadcrumbList",
            "itemListElement": [{"@type": "ListItem", "position": n + 1, "name": name, "item": SITE + url} for n, (name, url) in enumerate(items)]}


def faq_ld(faq):
    return {"@context": "https://schema.org", "@type": "FAQPage",
            "mainEntity": [{"@type": "Question", "name": strip_md(x["q"]), "acceptedAnswer": {"@type": "Answer", "text": strip_md(x["a"])}} for x in faq]}


def header(lang, alts, cur):
    nav = [("nav_home", f"/{lang}/"), ("nav_apps", f"/{lang}/#apps"), ("nav_books", f"/{lang}/#books"), ("nav_blog", f"/{lang}/blog/")]
    navh = "".join(f'<a href="{u}"{" class=on" if k == cur else ""}>{esc(U(lang, k))}</a>' for k, u in nav)
    items = "".join(f'<a href="{p}" hreflang="{HREFLANG.get(l, l)}" lang="{l}"{" aria-current=true" if l == lang else ""}>{esc(lang_name(l))}</a>'
                    for l, p in sorted(alts.items(), key=lambda x: LANGS.index(x[0])))
    return f"""<body class="pg">
{GRAD}
<header class="top"><div class="wrap">
<a class="brand" href="/{lang}/">{LOGO}<span><b>Nikolay Shcherbakov</b><span>{esc(META["brand_sub"].get(lang, META["brand_sub"]["en"]))}</span></span></a>
<nav class="main" aria-label="Menu">{navh}</nav>
<details class="lsw"><summary class="langsel" aria-label="{esc(U(lang, 'language'))}">{GLOBE}<span>{esc(lang_name(lang))}</span><svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></summary><div class="lsw-list">{items}</div></details>
</div></header>
"""


def footer(lang):
    return f"""<footer class="pg-foot"><div class="wrap">
<a class="brand" href="/{lang}/">{LOGO}<span><b>Nikolay Shcherbakov</b><span>{esc(META["brand_sub"].get(lang, META["brand_sub"]["en"]))}</span></span></a>
<nav aria-label="Footer"><a href="/{lang}/#apps">{esc(U(lang, 'nav_apps'))}</a><a href="/{lang}/#books">{esc(U(lang, 'nav_books'))}</a><a href="/{lang}/blog/">{esc(U(lang, 'nav_blog'))}</a><a href="https://t.me/nikolayintuition" rel="noopener">Telegram</a></nav>
<p class="copy">{esc(META["copy"].get(lang, META["copy"]["en"]))}</p>
</div></footer>
<script src="{PAGE_JS_FILE}" defer></script>
</body>
</html>
"""


def sections_html(doc, lang):
    out = []
    for s in doc.get("sections", []):
        out.append(f'<h2>{esc(s["h2"])}</h2>')
        for p in s.get("p", []):
            out.append(f"<p>{mdlinks(p, lang)}</p>")
        if s.get("ul"):
            out.append("<ul>" + "".join(f"<li>{mdlinks(x, lang)}</li>" for x in s["ul"]) + "</ul>")
        if s.get("ol"):
            out.append("<ol>" + "".join(f"<li>{mdlinks(x, lang)}</li>" for x in s["ol"]) + "</ol>")
    return "\n".join(out)


def faq_html(doc, lang):
    if not doc.get("faq"):
        return ""
    qs = "".join(f'<details class="faq-q"><summary><h3>{esc(x["q"])}</h3></summary><p>{mdlinks(x["a"], lang)}</p></details>' for x in doc["faq"])
    return f'<section class="faq" aria-labelledby="faq-h"><h2 id="faq-h">{esc(U(lang, "faq_h"))}</h2>{qs}</section>'


def screen_files(slug, lang):
    """Russian screenshots for ru/uk pages, English for the rest; a flat folder is used for every language"""
    base = os.path.join(ROOT, "img", "screens", slug)
    order = ["ru", "en"] if lang in ("ru", "uk") else ["en"]
    for sub in order:
        files = sorted(glob.glob(os.path.join(base, sub, "*.webp")))
        if len(files) > 1:  # more than the language-picker screen alone
            return [f"/img/screens/{slug}/{sub}/{os.path.basename(f)}" for f in files]
    return [f"/img/screens/{slug}/{os.path.basename(f)}" for f in sorted(glob.glob(os.path.join(base, "*.webp")))]


def screens_html(slug, lang, name):
    files = screen_files(slug, lang)
    if not files:
        return ""
    def size(u):
        from PIL import Image
        with Image.open(ROOT + u) as im:
            return im.size
    imgs = "".join(f'<img src="{u}" alt="{esc(name)} — {esc(U(lang, "screens_h"))} {n + 1}" loading="lazy" decoding="async" width="{size(u)[0]}" height="{size(u)[1]}">' for n, u in enumerate(files))
    return f'<section class="screens" aria-labelledby="sc-h"><h2 id="sc-h">{esc(U(lang, "screens_h"))}</h2><div class="sc-row">{imgs}</div></section>'


def author_html(lang):
    return f'<aside class="author"><img src="{META["portrait"]}" alt="Nikolay Shcherbakov" loading="lazy" decoding="async" width="96" height="96"><div><h2>{esc(U(lang, "author_h"))}</h2><p>{esc(U(lang, "author_bio"))}</p></div></aside>'


def card(lang, kind, i):
    if kind == "apps":
        a = META["apps"][i]
        txt = (META["app_txt"].get(lang) or META["app_txt"]["en"])[i]
        return f'<a class="rcard" href="{url_item(lang, "apps", i)}"><img src="{a["img"]}" alt="" loading="lazy" decoding="async" width="64" height="64"><span><small>{esc(U(lang, "app_word"))}</small><b>{esc(a["n"])}</b><span>{esc(txt["head"])}</span></span></a>'
    if kind == "books":
        b = META["books"][i]
        img = b["imgRu"] if lang == "ru" and b.get("imgRu") else b["img"]
        title = b["t"].get(lang) or b["t"]["en"]
        txt = (META["book_txt"].get(lang) or META["book_txt"]["en"])[i]
        return f'<a class="rcard book" href="{url_item(lang, "books", i)}"><img src="{img}" alt="" loading="lazy" decoding="async" width="64" height="96"><span><small>{esc(U(lang, "book_word"))}</small><b>{esc(title)}</b><span>{esc(txt["head"])}</span></span></a>'
    doc, _ = load(lang, "blog", BLOG_SLUGS[i])
    return f'<a class="rcard post" href="{url_item(lang, "blog", i)}"><span><small>{esc(U(lang, "nav_blog"))}</small><b>{esc(doc["h1"])}</b><span>{esc(short(strip_md(doc["lead"]), 150))}</span></span></a>'


def related_html(lang, doc, self_kind, self_i):
    refs = []
    for r in doc.get("related", []):
        if r in APP_SLUGS:
            refs.append(("apps", APP_SLUGS.index(r)))
        elif r in BOOK_SLUGS:
            refs.append(("books", BOOK_SLUGS.index(r)))
        elif r in BLOG_SLUGS:
            refs.append(("blog", BLOG_SLUGS.index(r)))
    refs = [x for x in refs if x != (self_kind, self_i)][:4]
    if not refs:
        return ""
    return f'<section class="related"><h2>{esc(U(lang, "related_h"))}</h2><div class="rgrid">{"".join(card(lang, k, i) for k, i in refs)}</div></section>'


SITEMAP = []  # (path, {lang: path})


def gp_button(lang, url, slug):
    return f'<a class="btn gold" href="{url}" target="_blank" rel="noopener" data-gc="{slug}">{PLAY}<span>{esc(U(lang, "download_gp"))}</span></a>'


def build_item(kind, i):
    slug = (APP_SLUGS if kind == "apps" else BOOK_SLUGS)[i]
    langs = langs_for(kind, slug)
    alts = {l: url_item(l, kind, i) for l in langs}
    for lang in langs:
        doc, _ = load(lang, kind, slug)
        path = alts[lang]
        home_anchor = "#apps" if kind == "apps" else "#books"
        sec_name = U(lang, "nav_apps" if kind == "apps" else "nav_books")
        if kind == "apps":
            a = META["apps"][i]
            name, img, og = a["n"], a["img"], f"/img/og/app-{slug}.jpg"
            visual = f'<img class="pg-icon" src="{img}" alt="{esc(name)}" width="120" height="120">'
            cta = gp_button(lang, a["url"], slug) + f'<p class="pg-note">{esc(U(lang, "android_only"))}{" · " + esc(U(lang, "free")) if i in FREE_APPS else ""}</p>'
            kicker = f'{esc(U(lang, "app_word"))} · Android'
            main_ld = {"@context": "https://schema.org", "@type": "SoftwareApplication", "name": name, "operatingSystem": "Android",
                       "applicationCategory": APP_CAT[i], "description": doc["description"], "url": SITE + path, "image": SITE + img,
                       "installUrl": a["url"], "downloadUrl": a["url"], "inLanguage": HREFLANG.get(lang, lang),
                       "author": {"@id": SITE + "/#person", "@type": "Person", "name": "Nikolay Shcherbakov"}}
            if screen_files(slug, lang):
                main_ld["screenshot"] = [SITE + u for u in screen_files(slug, lang)]
            if i in FREE_APPS:
                main_ld["offers"] = {"@type": "Offer", "price": "0", "priceCurrency": "USD"}
        else:
            b = META["books"][i]
            name = b["t"].get(lang) or b["t"]["en"]
            img = b["imgRu"] if lang == "ru" and b.get("imgRu") else b["img"]
            og = f"/img/og/book-{slug}{'-ru' if lang == 'ru' else ''}.jpg"
            visual = f'<img class="pg-cover" src="{img}" alt="{esc(name)}" width="220" height="330">'
            links = []
            if lang == "ru" and b.get("urlRu"):
                links = [(b["urlRu"], b["storeRu"], "ru"), (b["url"], b["store"], "en")]
            elif b.get("urlRu"):
                links = [(b["url"], b["store"], "en"), (b["urlRu"], b["storeRu"], "ru")]
            else:
                links = [(b["url"], b["store"], "ru" if b["store"] == "Литрес" else "en")]
            store_name = lambda s: "Litres" if (s == "Литрес" and lang != "ru") else s
            btns = "".join(f'<a class="btn {"gold" if n == 0 else "ghost2"}" href="{u}" target="_blank" rel="noopener"><span>{esc(U(lang, "buy_on"))} {esc(store_name(s))}</span></a><p class="pg-note">{esc(U(lang, "edition_" + ed))}</p>' for n, (u, s, ed) in enumerate(links))
            cta = f'<div class="pg-buy">{btns}</div>'
            kicker = esc(U(lang, "book_word"))
            main_ld = {"@context": "https://schema.org", "@type": "Book", "name": name, "author": {"@id": SITE + "/#person", "@type": "Person", "name": "Nikolay Shcherbakov"},
                       "description": doc["description"], "url": SITE + path, "image": SITE + img,
                       "inLanguage": "ru" if b["store"] == "Литрес" and not b.get("urlRu") else ("ru" if lang == "ru" else "en"),
                       "sameAs": [u for u, s, e in links],
                       "offers": [{"@type": "Offer", "url": u, "seller": {"@type": "Organization", "name": store_name(s)}, "availability": "https://schema.org/InStock"} for u, s, e in links]}
            if len(links) > 1:
                main_ld["workExample"] = [{"@type": "Book", "inLanguage": e, "url": u} for u, s, e in links]
        crumbs = [(U(lang, "nav_home"), f"/{lang}/"), (sec_name, f"/{lang}/{home_anchor}"), (name, path)]
        lds = [main_ld, crumbs_ld(crumbs)] + ([faq_ld(doc["faq"])] if doc.get("faq") else [])
        body = header(lang, alts, "nav_apps" if kind == "apps" else "nav_books") + f"""<main class="wrap pg-main">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/{lang}/">{esc(U(lang, 'nav_home'))}</a><span aria-hidden="true">›</span><a href="/{lang}/{home_anchor}">{esc(sec_name)}</a><span aria-hidden="true">›</span><span>{esc(name)}</span></nav>
<article class="pg-art">
<div class="pg-hero">{visual}<div class="pg-hero-t"><p class="kick">{kicker}</p><h1>{esc(doc["h1"])}</h1><p class="lead">{mdlinks(doc["lead"], lang)}</p><div class="pg-cta">{cta}</div></div></div>
{screens_html(slug, lang, name) if kind == "apps" else ""}
<div class="prose">{sections_html(doc, lang)}</div>
{faq_html(doc, lang)}
{author_html(lang)}
{related_html(lang, doc, kind, i)}
<p class="back"><a href="/{lang}/{home_anchor}">← {esc(U(lang, 'all_apps' if kind == 'apps' else 'all_books'))}</a></p>
</article>
</main>
""" + footer(lang)
        w(path + "index.html", head(lang, doc["title"], doc["description"], path, alts, og, "website" if kind == "apps" else "book", lds, css=(CSS_FILE, PAGE_CSS_FILE)) + body)
        SITEMAP.append((path, alts))


def build_blog():
    langs = list(COMPLETE)
    idx_alts = {l: f"/{l}/blog/" for l in langs}
    for i, slug in enumerate(BLOG_SLUGS):
        alts = {l: url_item(l, "blog", i) for l in langs}
        for lang in langs:
            doc, _ = load(lang, "blog", slug)
            path = alts[lang]
            og = next((f"/img/og/app-{r}.jpg" for r in doc.get("related", []) if r in APP_SLUGS), "/img/og/home.jpg")
            crumbs = [(U(lang, "nav_home"), f"/{lang}/"), (U(lang, "nav_blog"), f"/{lang}/blog/"), (doc["h1"], path)]
            date = doc.get("date", TODAY)
            art = {"@context": "https://schema.org", "@type": "Article", "headline": doc["h1"][:110], "description": doc["description"],
                   "datePublished": date, "dateModified": date, "inLanguage": HREFLANG.get(lang, lang), "mainEntityOfPage": SITE + path,
                   "image": SITE + og, "author": {"@id": SITE + "/#person", "@type": "Person", "name": "Nikolay Shcherbakov", "url": f"{SITE}/{lang}/"},
                   "publisher": {"@type": "Person", "name": "Nikolay Shcherbakov"}}
            lds = [art, crumbs_ld(crumbs)] + ([faq_ld(doc["faq"])] if doc.get("faq") else [])
            # main app call-to-action box
            cta = ""
            for r in doc.get("related", []):
                if r in APP_SLUGS:
                    k = APP_SLUGS.index(r); a = META["apps"][k]
                    txt = (META["app_txt"].get(lang) or META["app_txt"]["en"])[k]
                    cta = f'<aside class="app-cta"><img src="{a["img"]}" alt="" width="72" height="72" loading="lazy" decoding="async"><div><b>{esc(a["n"])}</b><p>{esc(txt["head"])}. {esc(txt["desc"])}</p><div class="pg-cta">{gp_button(lang, a["url"], r)}<a class="linkbtn" href="{url_item(lang, "apps", k)}">{esc(U(lang, "more"))} →</a></div></div></aside>'
                    break
            body = header(lang, alts, "nav_blog") + f"""<main class="wrap pg-main">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/{lang}/">{esc(U(lang, 'nav_home'))}</a><span aria-hidden="true">›</span><a href="/{lang}/blog/">{esc(U(lang, 'nav_blog'))}</a></nav>
<article class="pg-art post">
<header class="post-h"><h1>{esc(doc["h1"])}</h1><p class="meta">Nikolay Shcherbakov · <time datetime="{date}">{esc(U(lang, 'published'))}: {date}</time></p><p class="lead">{mdlinks(doc["lead"], lang)}</p></header>
<div class="prose">{sections_html(doc, lang)}</div>
{cta}
{faq_html(doc, lang)}
{author_html(lang)}
{related_html(lang, doc, "blog", i)}
<p class="back"><a href="/{lang}/blog/">← {esc(U(lang, 'all_articles'))}</a></p>
</article>
</main>
""" + footer(lang)
            w(path + "index.html", head(lang, doc["title"], doc["description"], path, alts, og, "article", lds, css=(CSS_FILE, PAGE_CSS_FILE)) + body)
            SITEMAP.append((path, alts))
    for lang in langs:
        path = idx_alts[lang]
        cards = "".join(card(lang, "blog", i) for i in range(len(BLOG_SLUGS)))
        lds = [crumbs_ld([(U(lang, "nav_home"), f"/{lang}/"), (U(lang, "nav_blog"), path)]),
               {"@context": "https://schema.org", "@type": "Blog", "name": U(lang, "blog_title"), "url": SITE + path, "inLanguage": HREFLANG.get(lang, lang),
                "author": {"@id": SITE + "/#person", "@type": "Person", "name": "Nikolay Shcherbakov"}}]
        body = header(lang, idx_alts, "nav_blog") + f"""<main class="wrap pg-main">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/{lang}/">{esc(U(lang, 'nav_home'))}</a><span aria-hidden="true">›</span><span>{esc(U(lang, 'nav_blog'))}</span></nav>
<header class="post-h"><h1>{esc(U(lang, 'blog_h1'))}</h1><p class="lead">{esc(U(lang, 'blog_lead'))}</p></header>
<div class="rgrid posts">{cards}</div>
<section class="related"><h2>{esc(U(lang, 'home_h_apps'))}</h2><div class="rgrid">{"".join(card(lang, "apps", k) for k in (4, 10, 0, 2))}</div></section>
</main>
""" + footer(lang)
        w(path + "index.html", head(lang, U(lang, "blog_title"), U(lang, "blog_desc"), path, idx_alts, "/img/og/home.jpg", "website", lds, css=(CSS_FILE, PAGE_CSS_FILE)) + body)
        SITEMAP.append((path, idx_alts))
    return langs


# ---------------------------------------------------------------- 6. home page per language
def build_home(blog_langs):
    alts = {l: f"/{l}/" for l in LANGS}
    for lang in LANGS:
        path = alts[lang]
        body = BODY
        # blog link in header and footer menus (static; the app script does not touch it)
        if lang in blog_langs:
            body = must_replace(body, '<a href="#about" data-t="nav_me"></a>', f'<a href="#about" data-t="nav_me"></a>\n      <a href="/{lang}/blog/">{esc(U(lang, "nav_blog"))}</a>')
            body = must_replace(body, '<a href="#contact" data-t="nav_contact"></a>', f'<a href="#contact" data-t="nav_contact"></a><a href="/{lang}/blog/">{esc(U(lang, "nav_blog"))}</a>')
        body = body.replace('<img src="/img/', '<img loading="lazy" decoding="async" src="/img/')
        # crawlable lists of app and book pages (visually hidden duplicates are bad; this is a real, small index in the footer)
        idx = f'<div class="wrap seo-index"><h2>{esc(U(lang, "home_h_apps"))}</h2><ul>' + "".join(
            f'<li><a href="{url_item(lang, "apps", i)}">{esc(META["apps"][i]["n"])}</a></li>' for i in range(len(APP_SLUGS)) if lang in COMPLETE) + \
            f'</ul><h2>{esc(U(lang, "home_h_books"))}</h2><ul>' + "".join(
            f'<li><a href="{url_item(lang, "books", i)}">{esc(META["books"][i]["t"].get(lang) or META["books"][i]["t"]["en"])}</a></li>' for i in range(len(BOOK_SLUGS)) if lang in COMPLETE) + "</ul></div>"
        body = must_replace(body, "<footer>\n  <div class=\"wrap\">", "<footer>\n  " + idx + "\n  <div class=\"wrap\">")
        hero = META.get("hero_img", "")
        extra = f'<link rel="preload" as="image" href="{hero}" fetchpriority="high">' if hero else ""
        lds = [person_ld(lang), {"@context": "https://schema.org", "@type": "WebSite", "name": "Nikolay Shcherbakov", "url": SITE + path, "inLanguage": HREFLANG.get(lang, lang)}]
        page = head(lang, U(lang, "home_title"), U(lang, "home_desc"), path, alts, "/img/og/home.jpg", "website", lds, extra) + "<body>" + body + f'<script src="{JS_FILES[lang]}" defer></script>\n</body>\n</html>\n'
        w(path + "index.html", page)
        SITEMAP.insert(0, (path, alts))


# ---------------------------------------------------------------- 7. root (x-default) and redirects
def build_root():
    codes = json.dumps(LANGS)
    alts = "".join(f'<link rel="alternate" hreflang="{HREFLANG.get(l, l)}" href="{SITE}/{l}/">' for l in LANGS)
    links = "".join(f'<li><a href="/{l}/" hreflang="{HREFLANG.get(l, l)}">{esc(lang_name(l))}</a></li>' for l in LANGS)
    page = f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Nikolay Shcherbakov — self-help books and Android apps</title>
<meta name="description" content="{esc(U('en', 'home_desc'))}">
<link rel="alternate" hreflang="x-default" href="{SITE}/">{alts}
<meta property="og:title" content="Nikolay Shcherbakov — Books • Apps"><meta property="og:image" content="{SITE}/img/og/home.jpg"><meta property="og:url" content="{SITE}/"><meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/img/favicon.svg" type="image/svg+xml">
<script>
/* Old links (?lang=ru, #book-...) and the bare domain go to the language address, keeping promo and utm parameters */
(function(){{
  var L={codes}, SL={json.dumps(BOOK_SLUGS)}, RU={json.dumps(BOOK_SLUGS_RU)};
  function norm(c){{ c=String(c||"").toLowerCase().split(/[-_]/)[0]; return ({{iw:"he","in":"id",ua:"uk"}})[c]||c; }}
  function ok(c){{ return L.indexOf(c)>=0; }}
  var p=new URLSearchParams(location.search), l=norm(p.get("lang"));
  if(!ok(l)){{ try{{ l=localStorage.getItem("ns-lang")||""; }}catch(e){{ l=""; }} }}
  if(!ok(l)){{ var n=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language]; l="en"; for(var i=0;i<n.length;i++){{ if(ok(norm(n[i]))){{ l=norm(n[i]); break; }} }} }}
  p.delete("lang");
  var h=location.hash, path="/"+l+"/", m=h.match(/^#book-([a-z0-9-]+)$/);
  if(m){{ var k=SL.indexOf(m[1]); if(k>=0){{ path+="books/"+(l==="ru"?RU[k]:SL[k])+"/"; h=""; }} }}
  var s=p.toString(); location.replace(path+(s?"?"+s:"")+h);
}})();
</script>
<style>body{{font:17px/1.5 system-ui,sans-serif;max-width:640px;margin:40px auto;padding:0 16px;color:#1F2A48;background:#F6F9FF}}a{{color:#1B2B6E}}ul{{columns:2}}</style>
</head><body>
<h1>Nikolay Shcherbakov</h1><p>Books • Apps • Courses</p>
<ul>{links}</ul>
</body></html>
"""
    w("index.html", page)
    w("404.html", page.replace("<head>", '<head><meta name="robots" content="noindex">', 1).replace('<link rel="alternate" hreflang="x-default" href="' + SITE + '/">' + alts, ""))


def build_sitemap():
    seen = set(); urls = []
    for path, alts in SITEMAP:
        if path in seen:
            continue
        seen.add(path)
        al = "".join(f'<xhtml:link rel="alternate" hreflang="{HREFLANG.get(l, l)}" href="{SITE}{p}"/>' for l, p in alts.items())
        if "en" in alts:
            al += f'<xhtml:link rel="alternate" hreflang="x-default" href="{SITE}{alts["en"]}"/>'
        urls.append(f"<url><loc>{SITE}{path}</loc><lastmod>{TODAY}</lastmod>{al}</url>")
    w("sitemap.xml", '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' + "\n".join(urls) + "\n</urlset>\n")
    w("robots.txt", f"User-agent: *\nAllow: /\nDisallow: /_build/\n\nSitemap: {SITE}/sitemap.xml\nHost: nikolayshcherbakov.com\n")
    return len(urls)


# ---------------------------------------------------------------- run
for l in LANGS:
    for d in ("apps", "books", "blog"):
        shutil.rmtree(os.path.join(ROOT, l, d), ignore_errors=True)
for i in range(len(APP_SLUGS)):
    build_item("apps", i)
for i in range(len(BOOK_SLUGS)):
    build_item("books", i)
blog_langs = build_blog()
build_home(blog_langs)
build_root()
n = build_sitemap()
w("img/favicon.svg", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFC93C"/><stop offset="1" stop-color="#E8821E"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="#1B2B6E"/><g fill="none" stroke="url(#g)" stroke-width="2.6" stroke-linejoin="round"><path d="M24 8c5 5 6 13 0 22-6-9-5-17 0-22z"/><path d="M24 30c-4-7-10-10-17-10 1 8 8 12 17 10z"/><path d="M24 30c4-7 10-10 17-10-1 8-8 12-17 10z"/><path d="M8 34c6 3 26 3 32 0"/></g></svg>')
print(f"built: {n} URLs in sitemap; blog languages: {len(blog_langs)}")
if "--no-node" not in sys.argv:
    subprocess.run(["node", os.path.join(B, "prerender.js")], check=True, cwd=ROOT)
    subprocess.run(["node", os.path.join(B, "og.js")], check=True, cwd=ROOT)
