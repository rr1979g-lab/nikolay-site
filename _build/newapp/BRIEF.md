# Translate the new app "Life Compass"

Sources (read both):
- Page: `/home/claude/nikolay-site/_build/content/en/apps/life-compass.json` (Ukrainian: use `/home/claude/nikolay-site/_build/content/ru/apps/life-compass.json`)
- Short card texts: `/home/claude/nikolay-site/_build/newapp/small.json` (key "en"; Ukrainian from "ru")

For each language you are given, write:
1. `/home/claude/nikolay-site/_build/content/<LANG>/apps/life-compass.json` — same keys and structure, translate string values only; keep `slug`, `related` and link targets `](app:...)`, `](book:...)` unchanged (translate only the anchor text). Keep "Life Compass", "LIFE COMPASS", "HEAD & HEART", "Google Play", "Android", "iPhone", "Premium", "JSON" in Latin. Book title "The Right Choice" stays in English.
   `title` max 60 characters (CJK max 32); `description` 100–160 characters (CJK 50–80).
2. `/home/claude/nikolay-site/_build/newapp/<LANG>.json` — `{"name":"LIFE COMPASS","sub":"…","desc":"…","head":"…"}` translated from small.json (`sub` = short subtitle like "Life compass", `head` = short slogan, `desc` = one sentence).

Natural, warm, native wording; polite/formal "you" where the language expects it on websites. Write files with Python json.dump(ensure_ascii=False, indent=1). Validate every file with json.load. Final message: "<LANG list>: ok" or problems.
