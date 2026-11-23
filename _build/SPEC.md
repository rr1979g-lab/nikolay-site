# Content spec — nikolayshcherbakov.com SEO pages

Author: Nikolay Shcherbakov (Николай Щербаков) — author of self-development books (intuition, intrusive thoughts, affirmations, decisions, future anxiety, nutrition) and creator of Android apps. 20+ years of personal practice of meditation, breathing, affirmations, attention techniques. 7 books, 13 apps.

Source facts: the existing pages in `_build/content/en|ru/{apps,books}/*.json` (site data: BOOKS, APPS, APP_TXT, BOOK_TXT, STORY, LINKS). Use ONLY facts from data.json and from the official store pages (Google Play / Litres / Amazon) you fetch with WebFetch. NEVER invent features, prices, ratings, review counts, download numbers, awards, scientific results or medical claims. If a store page cannot be fetched, write only from data.json and keep claims general.

Google Play pages: `https://play.google.com/store/apps/details?id=<id>&hl=en` (and `&hl=ru`). App ids are in data.json (APPS[i].url).

## Output format
One JSON file per page per language, UTF-8, valid JSON (no comments, no trailing commas), pretty-printed:
`content/<lang>/<kind>/<slug>.json`, kind ∈ apps | books | blog, lang ∈ ru | en.

```json
{
  "slug": "phone-detox",
  "title": "SEO <title>, max 60 characters, contains main search phrase + brand/app name",
  "description": "meta description, 120–160 characters, benefit + call to action",
  "h1": "App/book name — main benefit (one line, ~40–70 chars)",
  "lead": "1–2 sentence intro under the H1",
  "sections": [
    {"h2": "Heading", "p": ["paragraph", "paragraph"]},
    {"h2": "Heading", "p": ["optional intro"], "ul": ["bullet", "bullet"]}
  ],
  "faq": [{"q": "Question people actually search?", "a": "Answer 1–3 sentences."}],
  "related": ["slug-of-related-app-or-book"]
}
```
Blog files additionally have `"date": "2026-11-23"` and `"related"` lists app/book slugs the article links to. Inside paragraphs and bullets you MAY link with Markdown-style `[text](app:phone-detox)` or `[text](book:the-intuition-code)` or `[text](blog:<slug>)` — the build turns them into real links. Use 1–4 such links per page, natural anchor text.

Word counts: app/book pages: 350–550 words in sections (not counting FAQ). FAQ: 4–5 questions. Blog articles: 800–1200 words in sections + FAQ 4–5.

## Slugs (fixed — use exactly)
Apps (same for all languages): 0 intuition-trainer, 1 moment-now, 2 breath-prana-moment, 3 head-heart, 4 phone-detox, 5 perennial, 6 affirmation, 7 figure-out-why, 8 free-again, 9 pill-reminder, 10 parent-lock, 11 ferment-lab, 12 fridge.
Books — the `slug` field is the English slug in ALL files (the build maps Russian URLs itself): 0 thoughts-in-circles, 1 what-if-everything-turns-out-well, 2 destiny-to-order, 3 the-intuition-code, 4 the-right-choice, 5 minus-25-kg, 6 open-up-to-your-dreams.
Blog (English slug in all files): how-to-stop-scrolling-your-phone, parental-controls-android, how-to-develop-intuition, breathing-exercises-for-calm.

## Style
- Russian: natural, warm, clear, «вы» lowercase, no bureaucratese, no exclamation spam, typographic quotes «».
- English: natural, plain, friendly.
- Write the Russian and English versions each natively (do not word-for-word translate), same structure and same facts.
- Search intent first: the H2s and FAQ should match what people type in Google/Yandex (e.g. «как перестать сидеть в телефоне», «родительский контроль на андроид», «как развить интуицию упражнения», «дыхательные практики для успокоения»).
- App pages: what problem it solves, who it's for, key features (from store page), how to start (steps), why the author made it (link to his practice), free/paid only if the store page states it.
- Book pages: what the book is about, who it's for, what you'll learn (bullets), about the author, where to buy (Litres for Russian edition; Amazon for English edition where data.json has it). Book 5 (minus-25-kg) is a personal story — no medical promises, add a note to consult a doctor before changing diet.
- Health topics (breathing, pills, diet): no medical claims; add a short safety note where relevant (e.g., stop breathing exercise if dizzy; reminder app does not replace a doctor).
- Do not mention reader reviews, ratings or review counts.
- Do not use the word "React" or talk about the website itself.
