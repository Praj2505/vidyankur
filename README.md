# Vidyankur — Website (Complete)

A static, hand-coded marketing site for **Vidyankur** (विद्यांकुर), India's heritage activity book brand for young children.

---

## Structure

```
vidyankur/
├── index.html              ← Home
├── our-story.html          ← Founder note, beliefs, timeline
├── books.html              ← Catalog + filters + Peek Inside modal
├── schools.html            ← B2B page (most important sales surface)
├── partner-schools.html    ← School directory + city filter
├── competitions.html       ← Young Historians program
├── contact.html            ← Form + direct contact + FAQ
├── sales-tracker.html      ← (Internal) Google Form embed slot
│
├── css/
│   ├── style.css           ← Design system + homepage
│   └── pages.css           ← All other page components
│
├── js/
│   ├── main.js             ← Mobile nav + scroll reveals
│   ├── books.js            ← Filter tabs + Peek Inside modal
│   └── filter.js           ← City filter for Partner Schools
│
└── assets/
    └── logo.svg            ← Placeholder logo (swap with your real one)
```

---

## What you need to do before going live

### 1. Replace the logo
The current `assets/logo.svg` is a placeholder (book + sprout + gold ring). The same SVG is **inlined into every page's navbar and footer** for fast rendering. When you have your real logo:

- Drop your file at `assets/logo.svg`
- Search-and-replace the inline `<svg class="nav-logo-mark" ...>...</svg>` block across all HTML files with `<img src="assets/logo.svg" class="nav-logo-mark" alt="Vidyankur">`

### 2. Wire up the contact form
The form on `contact.html` currently points to a Formspree placeholder:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
**Replace `YOUR_FORM_ID`** with your actual Formspree form ID — or swap the action URL for any other handler (Netlify Forms, Google Apps Script endpoint, etc.).

### 3. Set up the sales tracker
`sales-tracker.html` has a slot for a Google Form embed. Open the page, find the comment block, and follow these 5 steps:
1. Open your Google Form
2. Click **Send** → choose the `< >` Embed HTML tab
3. Copy the `src` URL
4. Paste it into the iframe inside the placeholder block
5. Delete the `.tracker-placeholder` div

### 4. Replace placeholder content
Search the HTML files for these markers and replace:
- `[Founder, please replace this...]` — the founder note on `our-story.html`
- `[School Name]` and "Principal name" — on `partner-schools.html` (replace with real partner schools and quotes as you acquire them)
- All `href="#"` Amazon links on `books.html` — wire to your actual Amazon listings

### 5. Add real book cover images (optional)
Book covers are currently styled CSS gradients. If you have photography:
- Add images to `assets/covers/`
- Replace the `.catalog-cover` blocks with `<img>` and remove the inline `style="background:..."` blocks

---

## Design system

**Palette**
- Cream `#F5F0E3` (page background)
- Ivory `#FDF8EF` (alternating section bg)
- Sage `#8B9A6B`, Olive `#5C6B4A`, Olive-dark `#4A5A3A`
- Gold `#C9A84C`, Gold-dark `#B08930`, Gold-soft `#D4B86A`
- Ink `#3D2B1F` (text)

**Type**
- **Fraunces** — display serif (headings, callouts)
- **DM Sans** — body
- **Noto Sans Devanagari** — Hindi/Sanskrit

All loaded from Google Fonts in `<head>`.

**Aesthetic**
"Manuscript modern" — parchment textures, gold borders, restraint over loudness. The goal is to read as *heritage-publisher* rather than *children's-product*. Trust signals first, child-appeal through the actual book covers.

---

## How to deploy

The whole folder is plain static HTML/CSS/JS — no build step needed.

- **Easiest:** drag the folder into [app.netlify.com/drop](https://app.netlify.com/drop)
- **Vercel:** `vercel deploy` from inside this folder
- **GitHub Pages:** push to a repo, enable Pages
- **Cloudflare Pages:** connect GitHub repo
- **Hostinger / GoDaddy / shared hosting:** FTP upload to `public_html/`

Then point your domain (e.g. `vidyankur.in`) at the host. Most providers handle SSL automatically.

**Analytics:** paste your GA4 / Plausible snippet right before `</head>` on each page.

---

## Adding new content later

### Add a new book
In `books.html`, copy any `<article class="catalog-card">...</article>` block, change the title, cover gradient, meta, price, and the `data-book` attribute on the Peek button. Then in `js/books.js`, add a new entry to the `titles` object so the modal shows the right name.

### Add a partner school
In `partner-schools.html`, copy any `<article class="school-card">...</article>` block. Set `data-city` to one of: `chandigarh`, `mohali`, `panchkula`, `zirakpur` (or add a new city tab to the `.filter-tabs` block above).

### Add an event
In `competitions.html`, copy an `<div class="event-row">...</div>` block and update the date and details.

---

## Browser support
Modern evergreen browsers (Chrome, Edge, Firefox, Safari). IntersectionObserver and CSS Grid are used.

---

Built with care. Ship it. 🌱
