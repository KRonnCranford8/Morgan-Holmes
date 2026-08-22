# Morgan & Holmes — website

A plain HTML/CSS static site (no build step, no framework) that replaces the
Squarespace site at morganandholmes.com. Hosted for free on GitHub Pages.

## What's already done

- All page copy pulled from the live Squarespace site: Home, Our Story,
  Our Team, Start a Club, Donate, Blog index, and both blog posts.
- New responsive design (mobile-friendly, keyboard-accessible, respects
  reduced-motion).
- All internal links, the mailto link, and the tel link work as-is.

## What YOU need to do before this goes live

### 1. Save your images — do this today, before you cancel Squarespace

My tools can't run JavaScript, so I couldn't pull the 12 team headshots
programmatically (they load through a Squarespace gallery script). Everything
else I found is either already referenced by direct URL below, or needs the
same manual save. **Do this before you request the refund/cancellation** —
once the site comes down, these links stop working.

**How:** open each page on the live site in your browser, right-click each
photo, choose "Save image as," and save it with the exact filename below into
the matching folder in this project.

**Team photos** → save into `assets/images/team/`
| Person | Save as |
|---|---|
| Antonio Brown | `antonio-brown.jpg` |
| Christopher Calhoun Sr. | `christopher-calhoun-sr.jpg` |
| Kevin Cranford Jr. | `kevin-cranford-jr.jpg` |
| K'Ronn W. Cranford | `kronn-cranford.jpg` |
| Eric G Jamison II | `eric-jamison-ii.jpg` |
| Sequean Zev Mahnke | `sequean-mahnke.jpg` |
| Darwin Martinez | `darwin-martinez.jpg` |
| Kareem Mitchell | `kareem-mitchell.jpg` |
| Tremayne Ottley | `tremayne-ottley.jpg` |
| Dr. Eric Seabron | `eric-seabron.jpg` |
| Landon White | `landon-white.jpg` |
| Antoine Wroten | `antoine-wroten.jpg` |

The team page already looks for these exact filenames and will show a "Photo
needed" placeholder box until you drop the file in — nothing will look broken
in the meantime.

**Blog + other photos** — these I *do* have direct URLs for since they were
plain `<img>` tags. Easiest is still to right-click → save from your browser,
but here are the source URLs if you'd rather download them directly:

| Save as | Source |
|---|---|
| `assets/images/hero.jpg` | https://images.squarespace-cdn.com/content/v1/624b503b4e8eed088f164602/1649102922305-MPYCYMT1OP1V6F8RT8KX/justice-rising-ECHO-AND-EARL-3.jpg |
| `assets/images/blog/staying-private.jpg` | https://images.squarespace-cdn.com/content/v1/688e8c0d9a9cdd7176789199/1754270992926-SVY1SW2IM9IMJIC6KSDM/unsplash-image-VBLHICVh-lI.jpg |
| `assets/images/blog/origins.jpg` | https://images.squarespace-cdn.com/content/v1/688e8c0d9a9cdd7176789199/1754269879397-UTF52X5SBU01UX0RVYMH/unsplash-image-VBLHICVh-lI.jpg |
| `assets/images/logo.jpg` | https://images.squarespace-cdn.com/content/v1/688e8c0d9a9cdd7176789199/13493409-5731-4527-bc06-8357966843db/morgan+%26+holmes.jpg |

The site works fine without these too (the hero and post pages just show the
background color), so don't let this block you from launching — add them
whenever you get to it.

### 2. Wire up real donations

The Squarespace donate block was never actually connected to a payment
processor ("Set up a payment processor to start receiving donations" was
showing live on the site), so this isn't a regression — you need to do this
regardless of platform. Fastest free options:

- **Stripe Payment Links** (stripe.com/payments/payment-links) — create a
  link, no code needed, takes ~5 minutes.
- **PayPal.me** or a PayPal "Donate" button — even faster, no approval wait.
- **GiveButter** or **Zeffy** — built for nonprofits/clubs, no platform fee.

Once you have a link, open `donate.html`, find the `id="donate-cta"` button,
and replace `href="#"` with your real link.

### 3. Push to GitHub

```bash
cd morganandholmes
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/morganandholmes.git
git push -u origin main
```

(Create the empty repo on GitHub first at github.com/new — don't initialize
it with a README there, since you already have one.)

### 4. Turn on GitHub Pages

1. On GitHub, open the repo → **Settings** → **Pages**.
2. Under "Build and deployment," set **Source** to "Deploy from a branch."
3. Set **Branch** to `main`, folder `/ (root)`, then **Save**.
4. GitHub will give you a URL like `https://YOUR-USERNAME.github.io/morganandholmes/` — check it loads.

### 5. Point morganandholmes.com at GitHub Pages

This part happens at whoever your domain **registrar** is (check your
Squarespace billing — if you bought the domain *through* Squarespace, it may
be Squarespace itself; if so, you keep the domain even after cancelling the
website plan, but confirm this with support before you request a refund).

At your registrar's DNS settings:

1. Add these four **A records** for the root domain (`@`):
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
2. Add a **CNAME record** for `www` pointing to `YOUR-USERNAME.github.io`.
3. Back in GitHub → **Settings** → **Pages** → **Custom domain**, enter
   `www.morganandholmes.com`, save, and check **Enforce HTTPS** once it's
   available (can take up to 24 hours for the cert to issue).

A `CNAME` file is already included in this repo set to `www.morganandholmes.com`
— GitHub Pages uses it automatically, you don't need to create it again.

DNS changes can take anywhere from a few minutes to 48 hours to fully
propagate, so don't cancel Squarespace until you've confirmed
morganandholmes.com is loading the new site.

### 6. Cancel Squarespace last, not first

Recommended order: (1) save all images, (2) get the new site live on its
GitHub Pages URL, (3) point DNS at GitHub Pages, (4) confirm the domain
resolves to the new site, (5) *then* contact Squarespace about the refund and
cancellation.

## Conversion audit (why the hero and CTAs changed tonight)

Path from entry to action, walked page by page:

- **Friction found:** the original hero had two equal-weight buttons
  ("Our Vision" and "Meet the Team") — neither was the actual thing you
  want a visitor to do. Fixed: one primary button now goes straight to
  a pre-filled email ("Get in Touch"), one secondary button goes to the
  story. One clear next step instead of two vague ones.
- **Trust signal:** the eyebrow stat line (est. 2019, 12 members, 5
  states) sits above the fold on every page, so a first-time visitor
  gets legitimacy signals before they scroll.
- **Stated objection, addressed inline:** on Start a Club, the waitlist
  button now has a one-line answer to "what happens if I click this" —
  it's a direct email, not a mailing list signup.
- **Left alone on purpose:** I didn't add urgency language, fake
  scarcity, exit-intent popups, or a newsletter capture — none of that
  fits a club whose entire philosophy is "we don't publicize, we don't
  actively recruit." A generic CRO pass would push all of those; they'd
  work against the brand here.

## Launch plan — first 30 days after this goes live

**Week 1 — confirm the move worked**
- Check `morganandholmes.com` and `www.morganandholmes.com` both resolve
  and show HTTPS (padlock, no warning).
- Test every nav link and the mailto/tel links from an actual phone.
- Search your own name/LLC name in Google to see whether the old
  Squarespace URL is still showing in results (it will fade over 1–2
  weeks; nothing to do but wait).

**Weeks 2–3 — light traffic check**
- Add the free GitHub Pages traffic count (Settings → repo → Insights →
  Traffic) or, if you want real analytics, Cloudflare Web Analytics or
  Plausible — both free tiers, both privacy-respecting, no cookie
  banner required.
- Watch which page gets the most visits after the homepage. If it's
  "Our Team" or "Our Story," that tells you people are vetting you
  before reaching out — a soft signal the site is doing its job.

**Week 4 — decide if anything needs to change**
- If you're getting email inquiries through "Get in Touch," decide
  whether the current one-line disclaimer on Donate ("Donations
  Opening Soon") needs to become a real Stripe/PayPal link yet.
- If team photos still aren't added, that's the one thing worth
  prioritizing — empty photo boxes are the biggest visual gap right
  now.
- Stop changing things once the site does its one job: let a visitor
  understand who you are, see you're legitimate, and know how to reach
  you. Resist scope creep past that.

## Local preview

No build tools needed — just open `index.html` in a browser. Or, for a local
server (so relative paths behave exactly like they will in production):

```bash
cd morganandholmes
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## File structure

```
morganandholmes/
├── index.html
├── our-story.html
├── our-team.html
├── start-a-club.html
├── donate.html
├── blog.html
├── blog/
│   ├── the-power-of-staying-private.html
│   └── origins.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
│       ├── team/        ← add the 12 headshots here
│       └── blog/
└── CNAME
```
