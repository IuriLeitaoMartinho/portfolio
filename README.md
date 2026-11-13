# Iuri Martinho — game development portfolio

Live site: https://iurileitaomartinho.github.io/portfolio/#/

A small Vue 3 + Vite + TypeScript single-page site, deployed to GitHub Pages by GitHub Actions.

## Setup

Needs Node.js 20.19+ or 22.12+ (CI uses Node 24).

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:5173/portfolio/ — the `/portfolio/` part matters, it matches the GitHub Pages path.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Check image paths, type-check (`vue-tsc`) and build into `dist/` |
| `npm run check:assets` | Fail if any `img/…` or `d/…` path doesn't match a file in `public/` exactly (letter case included) |
| `npm run preview` | Serve the built `dist/` at http://localhost:4173/portfolio/ |
| `npm run typecheck` | Type-check only |

## Deploy

Every push to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml): it builds the site and publishes `dist/` to GitHub Pages. It can also be run by hand from the Actions tab.

One-time setting: **Settings → Pages → Build and deployment → Source: GitHub Actions**. The build output is never committed.

## Adding a project

Projects are data, not pages. Each list is one file in `src/data/`:

| File | Shown on |
| --- | --- |
| `AboutProjectsData.ts` | About me (the highlighted project) |
| `GameProjectsData.ts` | What I've done (game ports) |
| `OtherProjectsData.ts` | What I've been part of (co-development) |

Add one entry to the right list:

```ts
new ProjectData(
  'project-9',                         // unique id across all lists
  'Project name',                      // tile title and dialog title
  'img/projects/my-project-icon.jpg',  // tile thumbnail
  `<div class="paragraph">…</div>`,    // dialog body, plain HTML
  '#1E5A7A',                           // accent color of the tile bar and dialog
  false,                               // isHigh: tile takes 2 rows
  false,                               // isWide: tile takes 2 columns
),
```

- Put images in `public/img/projects/` and reference them as `img/projects/<file>` (no leading slash).
- File names are **case-sensitive** on GitHub Pages: `BeaconPines3.png` and `beaconpines3.png` are different files. Windows hides this locally; `npm run build` (and so the deploy) fails with `check-assets` if a path's case is wrong.
- Dialog body classes available: `paragraph`, `center`, `youtube` (on an `iframe`), `phone-screenshot`, `pc-screenshot`, `notice`.
- Close every tag you open in the dialog HTML.

## Project layout

```
public/            static files served as-is (images, CV PDF, favicon)
src/
  App.vue          header, routed page with fade, footer
  router/          hash routes (#/resume, #/contact, …)
  views/           one component per page
  components/      header, footer, project grid, project dialog, skill dots
  data/            project lists (see above)
  styles/          global CSS, including the dialog-content rules
```

## Check before each release

Run `npm run build`, then `npm run preview`, and go through this on a desktop browser, a phone-sized window (375 px wide), and the Galaxy Tab S7:

- [ ] Every header link opens its page, and the active link is underlined
- [ ] No page scrolls sideways
- [ ] Every project tile opens its dialog, and the X and "Close" both close it
- [ ] Videos and screenshots in the dialogs load
- [ ] "Download as PDF" on Resume opens the CV
- [ ] The footer email button shows "Copied!"
- [ ] An unknown address (e.g. `#/nope`) shows the 404 page

After the deploy finishes, open the live site and repeat the dialog and image checks there.
