# CLAUDE.md

Personal portfolio, resume, and blog for Evelyn Gaskin. Static Astro site deployed to GitHub Pages at
https://eggaskin.github.io/evelyneverything/.

## Stack

- **Astro 6** (static output) + **TypeScript**. Scoped `<style>` blocks and one global stylesheet; no UI or CSS framework.
- **Content collections** (Markdown) defined in `src/content.config.ts`, loaded from `blog/` and `projects/` at the repo root.
- **Node >= 22.12**, **npm** with a committed lockfile (`npm ci`, not `npm install`, unless changing dependencies).
- **Deploy:** `.github/workflows/astro.yml` builds and publishes on every push to `main`.

## Commands

```bash
npm run dev       # http://localhost:4321/evelyneverything/
npm run build     # outputs dist/
npm run preview   # serve the production build
```

## Where things live

| Path | Purpose |
| --- | --- |
| `site.config.ts` | Site-wide strings and social links |
| `src/data/resume.ts` | Resume content (experience, education, skills, headshot) |
| `blog/*.md`, `projects/*.md` | Content entries; the file name is the public URL slug |
| `src/styles/theme.css` | Color/spacing tokens and global styles |
| `src/utils/` | Shared helpers: `url.ts`, `date.ts`, `collections.ts` |
| `src/layouts/`, `src/components/` | Presentational Astro components |

## Project conventions (use these, don't reimplement)

- **Links and `public/` assets:** always `url('/path')` from `src/utils/url.ts`. The site is served under `/evelyneverything/`,
  so a hardcoded root-relative `href="/blog"` breaks in production.
- **Dates:** `formatDate(date, style)` from `src/utils/date.ts`. It formats in UTC so frontmatter dates don't shift a day.
- **Content queries:** `getPublished('blog' | 'projects')` from `src/utils/collections.ts`. It filters drafts and sorts newest
  first. Don't call `getCollection` directly in pages.
- **Colors:** only CSS custom properties from `theme.css`, never hex values in components. Text on an accent background
  uses `--on-accent`. A palette change must update all three blocks: `:root`,
  `[data-theme="dark"]`, and the `prefers-color-scheme` fallback.
- **Images in `src/`:** import them and render with `<Image>` from `astro:assets`. It handles optimization and the base path.
- **Data vs. markup:** components render data passed in. Copy, links, and resume facts belong in config, `src/data/`, or content.

## Content

- The frontmatter schema lives in `src/content.config.ts` and is the source of truth.
- `draft: true` hides an entry everywhere, dev and production: no page, card, or link is generated. Remove the flag to publish.
- Don't rename existing content files: file names are public URLs.

## Development practices

### Keep changes scoped
- Make the smallest change that fully solves the task. Don't reformat, rename, or "tidy" unrelated code alongside it.
- Read the surrounding code first and match its style, naming, and comment density.
- If you notice an unrelated issue, call it out or propose a separate branch instead of fixing it inline.

### Abstract deliberately, never hardcode
- Extract a helper when logic repeats or is easy to get subtly wrong (URLs, dates, content queries). Don't add layers for a single use.
- No magic values: colors, radii, widths, site name, contact links, and base paths come from tokens or config.
- Keep one source of truth. Never duplicate config that can drift (e.g., a palette defined in both TS and CSS).

### Readable code, no tech debt
- Clear names over comments; comment only the non-obvious *why*.
- In the same change that makes something obsolete, delete it: dead code, unused imports/props/files, stale config.
- No sentinel-value hacks, commented-out code, or TODOs in source. TODOs belong only in draft content.
- Keep types and the content schema accurate.
- Accessibility: meaningful `alt` text, valid HTML (e.g., no nested `<a>`), and WCAG AA contrast (4.5:1 for text) in both themes.

### Git workflow
- **Never commit directly to `main`.** Every push to `main` deploys the live site.
- One branch per concern, named `fix/…`, `feat/…`, `content/…`, `docs/…`, or `chore/…`.
- Small, atomic commits that each build. Imperative subject of 72 characters or fewer; the body explains *why*.
- Stage specific files rather than `git add -A`. Never commit `dist/`, `.astro/`, `node_modules/`, or local tooling files.
- Open a PR into `main` and review the diff and a local build before merging.

## Verifying a change

1. Build with the same flags CI uses. It must succeed without warnings:
   `npx astro build --site https://eggaskin.github.io --base /evelyneverything`
2. Every internal `href`/`src` in `dist/**/*.html` starts with `/evelyneverything/` and resolves to a real file.
3. Click through `npm run dev` at `/evelyneverything/`: nav, cards, and back links.
4. For UI changes, check the light theme, the dark theme, and a ~375px mobile width.
