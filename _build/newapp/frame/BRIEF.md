# Translate the new app "Frame AI"

Sources (read both):
- Page: `/home/claude/nikolay-site/_build/content/en/apps/frame-ai.json` (Ukrainian: use `/home/claude/nikolay-site/_build/content/ru/apps/frame-ai.json`)
- Short card texts: `/home/claude/nikolay-site/_build/newapp/frame/small.json` (key "en"; Ukrainian from "ru")

For each language you are given, write:
   `title` max 60 characters (CJK max 32); `description` 100–160 characters (CJK 50–80).
2. `/home/claude/nikolay-site/_build/newapp/frame/<LANG>.json` — `{"name":"FRAME AI","sub":"…","desc":"…","head":"…"}` translated from small.json (`sub` = short subtitle like "Life compass", `head` = short slogan, `desc` = one sentence).

Natural, warm, native wording; polite/formal "you" where the language expects it on websites. Write files with Python json.dump(ensure_ascii=False, indent=1). Validate every file with json.load. Final message: "<LANG list>: ok" or problems.
