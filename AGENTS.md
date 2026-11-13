# Portfolio — agent rules

Iuri Martinho's game development portfolio. Vue 3 + Vite + TypeScript, deployed to GitHub Pages at https://iurileitaomartinho.github.io/portfolio/ by `.github/workflows/deploy.yml` on every push to `main`. Site language: English.

Setup, commands and how to add a project are in [README.md](README.md).

## Rules

- **Hash routing stays** (`createWebHashHistory`). GitHub Pages has no SPA fallback, and existing links use `#/…`.
- **Base path is `/portfolio/`** (`vite.config.ts`). Assets in `public/` are referenced as plain relative paths (`img/projects/x.png`), never with a leading slash.
- **`transformAssetUrls: false`** in `vite.config.ts` is deliberate: without it Vite turns `src="img/…"` into imports and the build fails.
- **The `.dialog-content …` rules in `src/styles/global.css` must stay global.** They style the `v-html` project descriptions, which never carry a scoped `data-v` attribute.
- **File names are case-sensitive on GitHub Pages.** Windows and `vite preview` hide wrong-case paths. `scripts/check-assets.mjs` runs first in `npm run build` and fails on any `img/…` or `d/…` path that doesn't match a file in `public/` exactly. Keep it in the build.
- **Project ids are unique across all three data files** (they are `v-for` keys).
- **Never commit `dist/`.** Pages is fed by the workflow artifact.
- The original Vue 2 source is in `IuriLeitaoMartinho/gamedev-portfolio` (last commit 2024-08-29, older than this port). Use it as a reference only.

## Checks before calling work done

1. `npm run build` passes (type-check plus build).
2. In `npm run preview` (the production build), at 1280 px and 375 px wide:
   - every route renders and nothing is wider than the viewport (`document.documentElement.scrollWidth === clientWidth`);
   - project dialogs open and close with the X and "Close";
   - no console errors and no failed requests.
3. Click through with real clicks, not only by reading the diff.

Testing gotcha: when the browser pane is hidden, `requestAnimationFrame` stalls, so the `out-in` route transition never finishes and in-app navigation looks broken. Reload per route (`?n=1#/route`), or use headless Edge (`C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`) with `puppeteer-core`.
