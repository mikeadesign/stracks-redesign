# Strack's Barbershop

**Live** at [stracksbarbershop.com](https://www.stracksbarbershop.com/).

The site for Strack's Barbershop, 150 S Main St, Algonquin IL — a single-page
Next.js app exported to static HTML and hosted on the shop's existing cPanel
Apache account.

Next 16 (App Router) · React 19 · Sass modules · `output: "export"`

Design decisions and the rules the components follow live in [DESIGN.md](DESIGN.md).
Content and business facts live in [PRODUCT.md](PRODUCT.md).

## Local development

```bash
npm install
npm run dev
```

`npm run lint` reports two pre-existing errors in `Year.tsx` and `Schedule.tsx`
(`setState` inside an effect). They predate the current work and are known.

## Redeploying

There is no CI deploy to production — it's a manual upload to cPanel, same as
the initial launch. The GitHub Actions workflow only publishes a **client
preview** to GitHub Pages on every push to `master`; it never touches the live
site, so pushing here doesn't ship anything by itself.

1. **Build.**

   ```bash
   npm run build
   ```

   Everything to be deployed ends up in `out/`. Do not set `GITHUB_PAGES` — that
   variable exists for the Pages preview, which serves from a subdirectory, and
   it would prefix every asset path with `/stracks-redesign`.

2. **Upload the *contents* of `out/`** to the account's web root.

   **Turn on hidden files in your FTP client or file manager first.** `out/`
   contains `.htaccess`, and if it doesn't go up, every redirect below silently
   stops existing. This is the single easiest thing to get wrong.

3. **Delete leftovers from the old site** — `services.html`, `location.html`,
   `contact.html`, `rick.html` and any old asset folders. The rewrite rules fire
   before Apache serves a file so stale copies aren't reachable, but there's no
   reason to keep them.

4. **Verify immediately.**

   ```bash
   curl -sI https://www.stracksbarbershop.com/services.html
   ```

   A `301` to `https://www.stracksbarbershop.com/#services` means `.htaccess`
   parsed. A `500` means it didn't — and a malformed `.htaccess` takes the whole
   site down, so check this within a minute of uploading, not at the end.

   Then load `https://www.stracksbarbershop.com/#services` in a browser and
   confirm it lands on the section rather than the top of the page.

This was all done for the initial launch — sitemap submitted in Search Console,
redirects confirmed live (every old page and every scheme/host combination
301s to `https://www.stracksbarbershop.com/`). None of it needs repeating for
routine content updates; it's here for whoever does the next deploy after this
one, or the next hosting migration.

### The `.htaccess` is hand-maintained — read this before editing it

[`public/.htaccess`](public/.htaccess) is copied verbatim into `out/` by the
build, which means **deploying replaces whatever is on the server**. That file
is therefore the only source of truth for the server config, and it has to
carry everything, including the cPanel-generated PHP handler block at the top.

If anyone changes the PHP version in cPanel's MultiPHP Manager, cPanel rewrites
that block *on the server*, and the next deploy silently reverts it. Copy the
regenerated block back into `public/.htaccess` when that happens.

What the file does:

- Forces `https://www.` — the old site answered `200` on all four scheme/host
  combinations, which made four crawlable copies of every page
- 301s the retired pages onto the single-page sections that absorbed them
  (`services.html` → `/#services`, `location.html` and `contact.html` →
  `/#contact`, `hours.html` → `/#hours`, `rick.html` → `/`)
- Points `ErrorDocument 404` at the export's `404.html`
- Caches `/_next/static` for a year (content-hashed filenames), images for a
  week, HTML never

Apache-specific syntax to remember: `<Location>` and `<LocationMatch>` are
server-config only and are a **fatal error** inside `.htaccess` — match on the
request path with `SetEnvIf` instead. And the `[NE]` flag on the redirect rules
is what stops Apache escaping `#` to `%23`.

Known, accepted gap: an old-page link with a query string —
`services.html?ref=fb` — redirects to `/#services?ref=fb`, not `/?ref=fb#services`.
mod_rewrite auto-appends the original query string when the substitution has
no `?` of its own, and the substitution here already has a `#`, so it lands
after the fragment where the browser treats it as part of the hash rather than
an actual query param — `HashScroll` then can't find an element literally
named `services?ref=fb` and the page doesn't scroll. Confirmed live, not just
theoretical. Left as-is: no tracking-tagged links to the old pages are known
to exist, so this is very unlikely to matter, and fixing it means duplicating
each redirect into a query-string and no-query-string pair.

## Things that will surprise you

**Linking to a section from another page needs a full page load.** Arrival on
`/#services` is handled by [`HashScroll`](app/components/HashScroll/HashScroll.tsx),
which only runs on mount. A `next/link` soft navigation to `/#services` won't
trigger it and lands at the top of the page. The 404 page uses plain `<a>` for
exactly this reason.

**Images are pre-optimized, not optimized at request time.** `output: "export"`
has no image optimizer, so `next/image` runs with `unoptimized: true` and the
work happens ahead of time:

```bash
npm run optimize-images
```

Full-resolution originals live in `source-images/`, which is gitignored and
outside `public/` so it never deploys. The script skips any target whose source
is missing, so it's safe to re-run. The generated files in `public/` *are*
committed.

**`next/image` doesn't apply `basePath` when images are unoptimized**, which is
why public-folder paths are prefixed manually with `BASE_PATH` from
[`app/basePath.ts`](app/basePath.ts). Keep it in sync with `next.config.ts`.

**The favicon is generated too, not a static binary someone dropped in.**
[`scripts/favicon-source.svg`](scripts/favicon-source.svg) is the editable
source; `npm run build-favicon` rebuilds `app/favicon.ico` from it. Its
diagonal stripe is deliberately phased to match the hero ribbon's angle and
corner colors — see the comments in the SVG before changing the pattern.

**Analytics** is GA4 `G-XZD2N6BFDS`, the same property as the old site so the
history stays continuous. The old UA property on the live site is dead (Google
stopped collecting on UA in July 2023) and was deliberately not carried over.
