# Daily blog article — runbook

Goal: publish ONE new, genuinely useful article on nikolayshcherbakov.com in all 20 site languages, then deploy.
Work in the repo root (the folder that contains `_build/`). Never edit generated files (`/<lang>/…`, `/assets`, `sitemap.xml`) by hand — only `_build/…`, then build.

## 1. Pick the topic
- Open `_build/BLOG_PLAN.md`, take the first line with `[ ]`.
- If none is left: choose a new topic yourself that targets a real search query and links to one of the apps/books (see `_build/content/en/apps` and `_build/content/en/books`), make sure its slug is not already in `_build/blog.json`, and add it to the plan.
- If the slug already exists in `_build/blog.json`, mark the line `[x]` and take the next one.

## 2. Write Russian and English
- Read `_build/SPEC.md` (style, format, rules) and one existing article, e.g. `_build/content/ru/blog/how-to-stop-scrolling-your-phone.json`, and copy its JSON structure exactly.
- Facts about apps and books: ONLY from `_build/content/en|ru/apps/<slug>.json` and `_build/content/en|ru/books/<slug>.json`. Never invent features, prices, studies, numbers or medical claims. Health topics: add a short safety note; never present an app as treatment.
- Apps that are "coming soon" (closed testing, listed in `_build/soon.json` context / `SOON_SLUGS` in build.py): may be mentioned, but say they are coming soon to Google Play; don't tell readers to download them now.
- Practical advice first (steps, exercises, examples), app/book as a helpful tool after. 800–1200 words in sections, 4–5 FAQ, 2–4 links using `[text](app:slug)` / `[text](book:slug)` / `[text](blog:slug)`, `"related"` = 2–4 slugs, `"date"` = today (YYYY-MM-DD).
- `title` ≤ 60 chars with the search phrase; `description` 120–160 chars.
- Write `_build/content/ru/blog/<english-slug>.json` and `_build/content/en/blog/<english-slug>.json` (file name = English slug in both).

## 3. Translate to the other 18 languages
- Languages: uk ar zh fr de he hi id it ja ko pt es tr bn mr te ta. Follow `_build/TRANSLATE.md` rules (keep keys, slugs, link targets; title ≤ 60 chars, CJK ≤ 32; description 100–160, CJK 50–80). Ukrainian from the Russian file, others from English.
- Use 3 parallel sub-agents of 6 languages each if available; otherwise do it yourself. Each file: `_build/content/<lang>/blog/<english-slug>.json`.
- Validate: every one of the 20 files exists and loads with `json.load`, and every `](app:` / `](book:` / `](blog:` link from the English file is present.

## 4. Register and build
- Add the post at the TOP of `_build/blog.json` → `posts`: `{"slug": "<english-slug>", "slug_ru": "<russian-slug>", "date": "<today>"}`.
- Run: `python3 _build/build.py --no-node && node _build/prerender.js && python3 _build/check.py`
- `check.py` must print `problems 0`. If not, fix the content and rebuild. If the build fails and you can't fix it, do NOT push; revert your changes (`git checkout -- . && git clean -fd _build/content`) and report.

## 5. Publish
- Mark the topic `[x] (YYYY-MM-DD)` in `_build/BLOG_PLAN.md`.
- `git add -A && git commit` with message `Blog: <English title>` and push to `main` of `rr1979g-lab/nikolay-site`.
- Wait for the Pages deployment: `gh run list -R rr1979g-lab/nikolay-site -L 1` until `completed success`.
- Optionally, in Yandex Webmaster the owner can send the new URL for re-crawl; mention the URL in the final message.

## 6. Report (in Russian, short)
Title of the article, its Russian URL `https://nikolayshcherbakov.com/ru/blog/<russian-slug>/`, which apps/books it links to, and anything that went wrong.
