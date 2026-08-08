---
target: app/components/Gallery/Gallery.tsx
total_score: 32
p0_count: 0
p1_count: 0
timestamp: 2026-08-08T15-10-52Z
slug: app-components-gallery-gallery-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Static by design; the misleading hover-scale is gone, so nothing promises interaction that isn't there. |
| 2 | Match System / Real World | 4 | Real shop objects, plain-language heading, alt text names distinct items (45–68 chars each). |
| 3 | User Control and Freedom | 3 | Nothing to escape, no traps. |
| 4 | Consistency and Standards | 3 | Two-Field Rule restored ($brown-deep). But the mat is a separator language used nowhere else on the site — Services still uses hairline gold borders — and it runs off the viewport edge rather than being bounded. |
| 5 | Error Prevention | 4 | n/a — static content. |
| 6 | Recognition Rather Than Recall | 3 | Heading present; still nothing identifies an individual photo to a sighted visitor. |
| 7 | Flexibility and Efficiency | 3 | 0 focusable elements, but the content is fully carried by alt text and there is no interaction to accelerate. |
| 8 | Aesthetic and Minimalist Design | 3 | The core defect is fixed and measured. Remaining: an unbounded mat, and a 6-up white-gutter photo grid sits close to a stock gallery block. |
| 9 | Error Recovery | 4 | n/a. |
| 10 | Help and Documentation | 2 | No captions. |
| **Total** | | **32/40** | **Good** |

## Anti-Patterns Verdict

**LLM assessment**: The section no longer has a structural defect, and the honest headline is that the client's complaint is measurably resolved. One new risk is worth naming plainly, though, because it wasn't there before: **a 6-up photo grid separated by white gutters is the shape of a stock gallery block.** WordPress galleries, Squarespace grids, and Instagram tiles all look like this, and "generic local business templates" is an explicit anti-reference in PRODUCT.md. Three things currently keep it on the right side of the line — the lead photo spans 2 tracks so the grid isn't uniform, the strip is full-bleed rather than boxed in a content column, and the mat is parchment rather than pure white, so it belongs to the palette instead of reading as chrome. That's a real margin, but it is a margin, not a moat. If anything later regularises the grid (six equal cells, a max-width container, a rounded corner), it tips.

The rest is clean: no side-stripes, no gradient text, no glassmorphism, no eyebrow, no box-shadow, no card grid, no fake affordance. Alt text describes six distinct objects.

**Deterministic scan**: `node .claude/skills/impeccable/scripts/detect.mjs --json app/components/Gallery` returned `[]`, exit 0. Production build compiles clean, TypeScript included.

**Visual overlays**: `detect.js` injected successfully into the live page and ran (mutation confirmed). It reported 3 anti-patterns page-wide, **zero inside the Gallery** — verified by DOM containment; the two `all-caps-body` hits are the Hero location line and the Footer tagline, same as the previous run. The live server was stopped afterward and its stale state file cleared. **No user-visible overlay is available** — the Browser pane is collapsed, so the page is not compositing frames and screenshots time out. Every finding below therefore comes from computed geometry and canvas pixel sampling, not from looking at a rendered image.

## Overall Impression

The section went from a structural failure to solid. The seams are the whole story:

| | original | parchment mat |
|---|---|---|
| mean seam contrast | 1.04–2.72:1 | **5.74–10.58:1** |
| % of seam length over 3:1 | 0% | **71–100%** |
| mobile, worst seam | 1.31:1 | **4.59:1** |

Every seam clears the 3:1 boundary threshold with real headroom, on every breakpoint. The client's complaint is answered, and answered with a mechanism — a mounted print sheet — rather than a drawn line, which is why it survived their taste test when the gold hairline didn't.

**One regression was found and fixed during this critique.** `.photo` carried `height: 100%` without `width: 100%`, so `aspect-ratio` began driving the cells' width: each single cell rendered 175.54px inside a 171.54px track, overflowing 4px into the gutter beside it. The result was a mat measuring 8px on the left edge and 4px on the right, with the gap between the lead and photo 2 at 8px but every other gap at 4px. Inconsistent gutters on the exact element built to fix "looks sloppy" — the defect and the complaint were the same thing. Now measured flush: 8/8 desktop, 6/6 tablet, 6/6 on all four edges at mobile, all inter-cell gaps exact.

The biggest remaining opportunity is that the mat isn't finished as an idea. It frames the photos on three conceptual sides but bleeds off the left and right viewport edges.

## What's Working

- **The mechanism is right, not just the outcome.** Parchment is one of the two fields the system already has, so the fix added no new colour and broke no rule. It reads as mounting board, which is on-brand for "old print discipline," rather than as a UI divider.
- **The mat solved two problems with one move.** Its bottom edge meets the Services espresso at 14:1, which closes the section-boundary finding ($ink sitting at 1.08:1 against Services) without needing a separate divider element between the sections.
- **The photography and its alt text.** Six specific objects, six distinct descriptions. This is what makes the section do its actual job — proving the shop is real — and none of the structural work touched it.

## Priority Issues

### [P2] The mat bleeds off the viewport edges, so it isn't really a mat

**Why it matters**: A mounted sheet is a bounded object — the board is visible on all four sides, which is what makes it read as mounting rather than as padding. Measured at 1280px, the strip spans the full 0→1264.8px with 8px of parchment against the left and right viewport edges. At those edges the parchment has nothing to sit on, so an 8px light band hugging the browser chrome is as likely to read as an accidental margin or a rendering artifact as it is to read as a mat. Top and bottom are fine because espresso sits against them.

**Fix**: Give the sheet a boundary. Either inset the whole strip (`margin-inline` at `$space-md`, or a `max-width` with auto margins) so espresso frames the parchment on all four sides and the object is unmistakably mounted, or commit the other way and remove the outer `padding` so photos bleed edge-to-edge with the mat only between them. The first is stronger — it completes the metaphor, and it keeps the bottom edge that currently carries the Gallery/Services boundary. The second is cheaper but reopens that boundary, since photos would then butt directly onto Services espresso at the low contrast this whole exercise was about.

**Suggested command**: `/impeccable layout`

### [P2] The grid is one regularisation away from looking like a gallery plugin

**Why it matters**: Covered in the verdict above. The lead photo's 2-track span is currently the main thing distinguishing this from a stock 6-up grid, and it's doing that work alone. Below `$bp-lg` the lead collapses to a normal cell, so tablet and mobile — most of the traffic — get a fully uniform 3×2 and 2×3 grid with white gutters and no hierarchy at all.

**Fix**: Carry some hierarchy into the smaller breakpoints. The lead could span 2 columns of the 3-col tablet layout, or the full width of the 2-col mobile layout, at a wider aspect ratio. That keeps the composition asymmetric everywhere and costs nothing but a `grid-column` and an `aspect-ratio` in the existing media queries.

**Suggested command**: `/impeccable layout`

### [P3] No captions

**Why it matters**: Unchanged from the last run and deliberately scoped out. The Illinois Razor Strop Co. No. 127 detail still lives only in alt text where sighted visitors never see it. Raised again only so it stays on the list, not as a new finding.

**Suggested command**: `/impeccable typeset`

### [P3] A code comment now describes geometry that no longer exists

**Why it matters**: The `grid-auto-rows: 1fr` comment still explains the raggedness in terms of "the 1px gap," from when the gutter was a gold hairline. The gutter is 8px parchment now. The reasoning is still correct, the number is wrong, and the next person to touch this file will trust it.

**Fix**: One-line comment edit.

**Suggested command**: `/impeccable polish`

## Persona Red Flags

**Dale, 62, local regular** (project persona, from PRODUCT.md's 50–70+ audience and its explicit legibility mandate): this is the persona the change was for, and he's served now. Worst seam anywhere on any breakpoint is 4.59:1 against a mat at L .79 — well past the point where aging eyes need to resolve a subtle edge. Six photos read as six photos.

**Casey (distracted mobile user)**: the section is still 693px of an 812px screen (85% of the viewport) with one line of text and nothing to tap. The mat means it now reads as six distinct pieces of evidence instead of one brown mass, which is a real improvement to a scroll-through beat. But it remains the longest stretch of the page without textual footing, and the uniform 2×3 grid gives the eye no reason to stop on any particular frame.

**Riley (stress tester)**: no longer finds a hover that resolves to nothing. Would still notice that the site's other grid (Services) separates its cells with gold hairlines while this one uses a parchment mat, and would ask which one is the system.

## Minor Observations

- Section rhythm through this stretch is About (parchment, 950px) → Gallery heading band (espresso, 142px) → mat (parchment) → Services (espresso, 800px). The 142px espresso band is sandwiched between two light fields. It holds the heading and is substantial enough not to read as a stripe, but it is the one place on the page where the two-field alternation switches twice inside 150px.
- Gallery and Services are now both `$brown-deep`, so they form 1192px of continuous espresso at desktop. The mat's bottom edge is the only thing articulating the join. That's sufficient and it's the intended design, but it means the strip's bottom padding is load-bearing for section structure — worth a comment in the file so nobody removes it as decoration.
- The `.heading` is capped at `max-width: 1100px` while the strip is full-bleed. Because the heading is centre-aligned there's no visible left edge to misalign, so this is theoretical rather than perceptible — noting it only because the last critique raised it and it's still technically true.
- `.impeccable/critique/` and `.impeccable/live/` are untracked. Worth a decision on `.gitignore` before the next commit.

## Questions to Consider

- The mat solved this because it's a *material* (mounting board) rather than a *line*. Is there anywhere else on the site currently using a line where a material would be more honest?
- Below `$bp-lg` the composition loses its lead photo and becomes a uniform grid. If most first-time visitors are on phones, is the desktop layout the one that got designed and the mobile one the one that got derived?
- The section is 85% of a phone viewport and carries one line of text. Is six the right number of photos, or would three larger ones — each big enough to actually read — persuade more with less scroll?
