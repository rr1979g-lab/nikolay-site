# Translation brief

Translate the website content for nikolayshcherbakov.com (author Nikolay Shcherbakov: self-help books + Android apps).

Source folder: `/home/claude/nikolay-site/_build/content/<SRC>/` (SRC is given in your task).
Files: `ui.json`, `apps/*.json` (13), `books/*.json` (7), `blog/*.json` (4) = 25 files.
Write the same 25 files, same file names, to `/home/claude/nikolay-site/_build/content/<LANG>/`.

Rules
- Keep the JSON structure and all keys exactly. Translate only string values. Keep `slug`, `related`, `date` unchanged.
- Keep link markup exactly: in `[anchor text](app:phone-detox)` translate only the anchor text; never change the part in parentheses.
- Keep in Latin script and untranslated: app names (PHONE DETOX, Phone Detox, PARENT LOCK, MOMENT NOW, Moment Now, Perennial…), "Google Play", "Android", "iPhone", "Litres", "Amazon", "Google Family Link", technique names like "Box Breathing", "4-7-8" (you may add a local name in parentheses).
- Book titles: the books are not translated, so keep the book title as in the source (English titles from en, e.g. "The Intuition Code"); you may add a short translation of its meaning in parentheses once on the book's own page. Russian titles in quotes «…» from the ru source may be rendered as the English title instead.
- `title`: max 60 characters (CJK: max 32 characters), keep the main search phrase people in that language would type, plus the app/book name. `description`: 100–160 characters (CJK: 50–80 characters).
- Localize, don't word-for-word: natural, warm, plain language a native speaker would write; FAQ questions phrased the way people search in that language. Use the formal/polite "you" where the language expects it on websites (e.g. German Sie, French vous, Spanish tú is fine for apps but stay consistent).
- Do not add facts, prices, ratings or features that are not in the source. Keep safety notes.
- Write valid UTF-8 JSON, pretty-printed, no trailing commas. Write files with Python (json.dump(..., ensure_ascii=False, indent=1)) to avoid escaping errors.
- When done, validate: `python3 -c "import json,glob;[json.load(open(f)) for f in glob.glob('/home/claude/nikolay-site/_build/content/<LANG>/**/*.json',recursive=True)];print('ok')"` and check that all 25 files exist and every `](app:`, `](book:`, `](blog:` link from the source is still present.
- Final message: one line "LANG: 25 files ok" or the list of problems. Do not paste the texts.
