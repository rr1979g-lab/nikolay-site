#!/usr/bin/env python3
"""Check built pages: title/description length, one H1, canonical, hreflang reciprocity, JSON-LD parses, sitemap URLs exist."""
import glob, re, json, os, html
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://nikolayshcherbakov.com"
pages = {}
probs = []
for f in glob.glob(os.path.join(ROOT, "*", "**", "index.html"), recursive=True):
    if "/_build/" in f or "/node_modules/" in f: continue
    s = open(f, encoding="utf-8").read()
    path = "/" + os.path.relpath(os.path.dirname(f), ROOT) + "/"
    t = html.unescape(re.search(r"<title>(.*?)</title>", s).group(1))
    d = html.unescape(re.search(r'<meta name="description" content="([^"]*)"', s).group(1))
    cjk = bool(re.search(r"[぀-ヿ一-鿿가-힯]", t))
    if len(t) > (40 if cjk else 65): probs.append(f"{path} title {len(t)}: {t}")
    if len(d) > (110 if cjk else 170) or len(d) < (30 if cjk else 70): probs.append(f"{path} desc {len(d)}")
    h1 = len(re.findall(r"<h1[\s>]", s))
    if h1 != 1: probs.append(f"{path} h1 count {h1}")
    can = re.search(r'<link rel="canonical" href="([^"]+)"', s)
    if not can or can.group(1) != SITE + path: probs.append(f"{path} canonical {can and can.group(1)}")
    alts = dict(re.findall(r'<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"', s))
    pages[path] = alts
    for j in re.findall(r'<script type="application/ld\+json">(.*?)</script>', s, re.S):
        try: json.loads(j)
        except Exception as e: probs.append(f"{path} json-ld {e}")
    for a in re.findall(r'href="(/[^"#?]*)"', s):
        if a.startswith("/assets/") or a.startswith("/img/"):
            if not os.path.exists(ROOT + a): probs.append(f"{path} missing {a}")
        elif a.endswith("/") and not os.path.exists(ROOT + a + "index.html"): probs.append(f"{path} broken link {a}")
for path, alts in pages.items():
    for hl, u in alts.items():
        if hl == "x-default": continue
        p = u.replace(SITE, "")
        if p not in pages: probs.append(f"{path} hreflang target missing {p}")
        elif SITE + path not in pages[p].values(): probs.append(f"{path} not reciprocal with {p}")
sm = open(os.path.join(ROOT, "sitemap.xml")).read()
locs = re.findall(r"<loc>([^<]+)</loc>", sm)
for u in locs:
    if u.replace(SITE, "") not in pages: probs.append(f"sitemap missing page {u}")
print(f"pages {len(pages)}, sitemap {len(locs)}, problems {len(probs)}")
for p in probs[:60]: print(" ", p)
