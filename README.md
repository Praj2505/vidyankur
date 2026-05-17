# Vidyankur Website — v1 (Homepage)

This is the first deliverable: a polished, production-ready homepage so you can react to the aesthetic direction before I build the remaining 6 pages + sales tracker.

## What's in this folder

```
vidyankur/
├── index.html          ← The homepage
├── css/style.css       ← All styles (design system + page styles)
├── js/main.js          ← Mobile nav + scroll reveals
└── assets/
    └── logo.svg        ← Placeholder logo (REPLACE with your real one)
```

## How to view it

**Option A — Open the file:** Double-click `index.html`. Most things will work, but the Google Fonts won't load without an internet connection.

**Option B — Local server (recommended):**
```bash
cd vidyankur
python3 -m http.server 8000
# Then open http://localhost:8000 in your browser
```

**Option C — Deploy to Netlify / Vercel:** Drag the `vidyankur` folder onto netlify.com/drop. Done.

## ⚠️ Important: replace the logo

I created a placeholder SVG that approximates your description (cream circle + gold ring + sage green book + sprout). It is decent, but it is **not your actual logo**. To swap it in:

1. Save your real logo as `assets/logo.svg` (recommended — scales perfectly) OR `assets/logo.png`
2. If you use PNG, edit two places in `index.html` (search for `nav-logo-mark`) and replace the inline SVG with `<img src="assets/logo.png" class="nav-logo-mark" alt="Vidyankur">`

## Design decisions made

- **Fonts:** Fraunces (display serif — has the regal-Indian-manuscript feel) + DM Sans (clean body) + Noto Sans Devanagari (for Hindi). All loaded from Google Fonts.
- **Parchment texture:** Implemented via SVG noise filter in CSS — no external image, very fast.
- **Fort silhouette:** Faint SVG pattern along the bottom of the hero, deliberately subtle.
- **Book covers:** Currently CSS gradients with decorative seals. When you have real cover photography, replace each `.book-cover` block.
- **Logo treatment:** Inline SVG in navbar + footer so it scales cleanly on retina screens.

## What's next

After your feedback on this, I'll build:

1. **Our Story** page (timeline, founder story layout)
2. **Books** page (full catalog with "Peek Inside" modal)
3. **For Schools** page (the B2B pitch — this is the most important one)
4. **Partner Schools** page
5. **Competitions & Events** page
6. **Contact** page (with form)
7. **Sales Tracker** page at `/sales-tracker.html` — internal-use form with:
   - All 18 fields you specified
   - **CSV download** (works immediately, no setup)
   - **Formspree / EmailJS integration ready** — you'll just paste in one endpoint URL and the email + Google Sheets sync will work

## Reality check on the sales tracker

You asked for: save to Google Sheets + send confirmation email + send copy to your Gmail. **None of that is possible from a pure static site.** Options:

- **Formspree** (formspree.io, free tier 50 submissions/month): handles the email + a copy to you. ~5 min setup.
- **Google Apps Script** (free, unlimited): writes directly to a Google Sheet. ~15 min setup but no external service.
- **EmailJS** (emailjs.com, free 200/month): handles the emails.

I'll structure the form to work with **all three** so you can pick later. The CSV download always works, so even without setup you'll have offline backup.

## Things I'd like your call on before continuing

1. **Aesthetic:** Does the homepage match your "royal nursery in a garden" vision, or do you want it pushed further in some direction (more ornate? more minimal? warmer? more formal)?
2. **Headline:** I went with "Where history meets imagination" — your other option was "Planting the Seeds of Indian Heritage". Which do you prefer? Or want to A/B mentally and tell me?
3. **Book covers:** Want me to keep the placeholder gradient look, or do you have cover photos I can use?
4. **Tone of testimonials:** I wrote placeholder testimonials. Should they sound more emotional / more practical / more pan-Indian / etc?
