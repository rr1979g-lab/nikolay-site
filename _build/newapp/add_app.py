#!/usr/bin/env python3
"""Add LIFE COMPASS to _build/source.html: APPS entry, card texts in I18N[lang].apps and APP_TXT[lang] for all languages."""
import json, re, base64, os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
P = os.path.join(B, "source.html")
s = open(P, encoding="utf-8").read()
if '"n": "LIFE COMPASS"' in s:
    raise SystemExit("already added")
icon = "data:image/webp;base64," + base64.b64encode(open(os.path.join(B, "newapp", "icon.webp"), "rb").read()).decode()
small = json.load(open(os.path.join(B, "newapp", "small.json"), encoding="utf-8"))
T = {}
for l in ["en", "ru", "uk", "ar", "zh", "fr", "de", "he", "hi", "id", "it", "ja", "ko", "pt", "es", "tr", "bn", "mr", "te", "ta"]:
    T[l] = small[l] if l in small else json.load(open(os.path.join(B, "newapp", l + ".json"), encoding="utf-8"))
app = {"k": "LC", "c": "#1F6B45", "n": "LIFE COMPASS", "img": icon, "url": "https://play.google.com/store/apps/details?id=com.nikolay.lifecompass",
       "ru": [T["ru"]["sub"], T["ru"]["desc"]], "en": [T["en"]["sub"], T["en"]["desc"]]}
anchor = "COURSES[2].url="
assert s.count(anchor) == 1
s = s.replace(anchor, "APPS.push(" + json.dumps(app, ensure_ascii=False) + ");\n" + anchor)


def patch_table(name, fn):
    global s
    m = re.search(r"^const " + name + r"=(\{.*\});\s*$", s, re.M)
    d = json.loads(m.group(1))
    for l, v in d.items():
        fn(l, v)
    s = s[:m.start(1)] + json.dumps(d, ensure_ascii=False) + s[m.end(1):]


def i18n(l, v):
    if l in T and "apps" in v and len(v["apps"]) == 13:
        v["apps"].append({"name": "LIFE COMPASS", "sub": T[l]["sub"], "desc": T[l]["desc"]})


def apptxt(l, v):
    if l in T and isinstance(v, list) and len(v) == 13:
        v.append({"head": T[l]["head"], "desc": T[l]["desc"]})


patch_table("I18N", i18n)
patch_table("APP_TXT", apptxt)
open(P, "w", encoding="utf-8").write(s)
print("added")
