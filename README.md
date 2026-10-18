# ANSCONS — Architecture, Construction & Bespoke Residential Interiors

Monographic, skeuomorphic static site showcasing ANSCONS — a design-build atelier for luxury residential architecture, cantilever engineering, and bespoke millwork. This repository contains the full static website (HTML, CSS, JavaScript, and assets) used as the interactive portfolio, estimator, and commission liaison.

## Stack
- Languages: HTML, JavaScript, CSS
- Runtime: Static site (vanilla ES modules)
- Notable modules / files:
  - `js/app.js` — main entry: initializes UI controllers (portfolio, estimator, desk tools, commission form, legal specs).
  - `js/*.js` — interactive modules: `portfolio.js`, `caliper.js`, `commission-form.js`, `desk-tools.js`, `legal-specs.js`, and more.
  - `css/*.css` — visual system and page styles (hero, projects, estimator, responsive, etc.).

## What’s included / top-level overview

```text
about.html           — Philosophy & heritage page
contact.html         — Commission liaison / contact form
estimator.html       — Parametric estimator / caliper page
index.html           — Home / Atelier master drawing sheet
projects.html        — Portfolio monograph folio & project dossiers
services.html        — Services & atelier capabilities
assets/              — Images and other static assets (assets/images/)
css/                 — Page- and component-level stylesheets
js/                  — ES module JavaScript controllers and helpers
scratch/             — Work-in-progress / experiments
```

How it fits together:
- The site is a collection of self-contained HTML pages that share common CSS and JS modules.
- Each page loads CSS and initializes interaction via JavaScript modules.
- `js/app.js` coordinates the main controllers for desk controls, portfolio folio, estimator, commission form, and legal spec modals.

## Key pages and features
- `index.html`: interactive home page with schematic SVG, material tray, portfolio folio, and drafting-table UI.
- `about.html`: editorial philosophy and heritage content with specimen boards and layered overlays.
- `services.html`: discipline register, technical diagrams, and guild specification matrix.
- `projects.html`: monograph folio, as-built split-reveal slider, timelapse archive, and dossier pages.
- `estimator.html`: sliding vernier caliper interface that calculates a parametric bill of quantities and cost range.
- `contact.html`: mechanical-stamp commission form for project briefing and tender transmission.

## How to preview locally
This is a static site, so no build step is required.

Option 1: open directly in a browser
1. Clone the repository.
2. Open `index.html` or any page in a browser.

Option 2: use a simple HTTP server (recommended)

```bash
python3 -m http.server 8000
```
Then open:

```text
http://localhost:8000/index.html
```

If you prefer Node:

```bash
npx http-server -c-1 .
```

Note: using a local HTTP server is recommended because some browser module imports and asset paths behave more reliably over HTTP than `file://`.

## Development notes
- Entry point: `js/app.js`
- Styles are split by topic, e.g. `css/main.css`, `css/hero.css`, `css/projects.css`, `css/caliper.css`, and `css/responsive.css`.
- Images and other media live under `assets/` and are referenced directly by the HTML and CSS files.
- The project is built with standard browser JavaScript; it does not currently include a package manager or bundler.

## Deploying
This repository is suitable for static hosting such as GitHub Pages, Netlify, or Vercel.

For GitHub Pages:
1. Open repository Settings.
2. Go to Pages.
3. Select the branch and folder to serve.
4. Publish the site.

## Contributing
- Fork the repository.
- Create a feature branch for your changes.
- Update relevant HTML, CSS, and JavaScript files.
- Submit a pull request with a concise summary of the change.

## Troubleshooting
- If pages do not load correctly, serve the repo over HTTP instead of opening files directly in the browser.
- If CSS or images do not render, verify that file paths match the repository structure exactly.

## Suggested next improvements
- Add a `LICENSE` file if you want clear usage/reuse terms.
- Add a lightweight linting and formatting setup.
- Consider introducing a build pipeline if the project grows beyond a static brochure site.

## Repository summary
This repo is a highly stylized, architecture-themed static website with a luxury editorial aesthetic. It functions as a digital portfolio and estimator for a boutique design-build practice, combining HTML, CSS, and JavaScript with a strong bespoke visual system.

---

Repository owner: Shreyal-JS  
Project: ANSCONS
