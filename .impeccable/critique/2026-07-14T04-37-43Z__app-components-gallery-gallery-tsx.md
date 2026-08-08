---
target: Gallery section
total_score: 24
p0_count: 0
p1_count: 2
timestamp: 2026-07-14T04-37-43Z
slug: app-components-gallery-gallery-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 1 | Hover reveals full color, but nothing signals the grid is (barely) interactive before you've already hovered; touch gets zero feedback |
| 2 | Match Between System and Real World | 3 | Real shop photos, grayscale-to-color hover fits the old-time-shop mood |
| 3 | User Control and Freedom | 1 | No lightbox, no larger view, no link out — zero interactive affordance beyond desktop hover |
| 4 | Consistency and Standards | 2 | Only section on the page with no visible h2/h3 — About, Services, Hours all have one |
| 5 | Error Prevention | 4 | N/A, static content |
| 6 | Recognition Rather Than Recall | 3 | No memory burden, but no cue about what's coming next either |
| 7 | Flexibility and Efficiency | 1 | Zero focusable elements confirmed via DOM query — keyboard users cannot engage with this section at all |
| 8 | Aesthetic and Minimalist Design | 3 | Visually restrained, six clean photos, well-composed strip |
| 9 | Error Recovery | 4 | N/A |
| 10 | Help and Documentation | 2 | No caption/context; a first-time visitor has to infer "this is the actual shop" |
| **Total** | | **24/40** | **Acceptable** |

## Anti-Patterns Verdict

LLM assessment: Mostly clean — no side-stripe borders, gradient text, glassmorphism, or eyebrow labels. One real tell: the alt text pattern. Of the six strings, four ("Inside Strack's Barbershop," "Strack's Barbershop interior," "Strack's Barbershop Algonquin," "The shop at Strack's") are synonymous restatements of "this is the shop" with no distinguishing content — the classic plausible-but-content-free AI alt-text pattern. Only two ("Classic barber chairs at Strack's," "Barber at work at Strack's") actually describe something visually specific. Different strings across six images isn't the same as six distinct descriptions.

Deterministic scan: `detect.mjs --json app/components/Gallery` returned `[]`, exit 0. Clean — the detector can't evaluate alt-text semantic quality, only presence.

Browser evidence: no console errors, no horizontal overflow at 320/375/768/desktop widths, all 6 images load successfully (200/304, no broken images), correct responsive grid reflow (6 cols desktop -> 3x2 tablet -> 2x3 mobile) with matching aspect-ratio changes (3:4 -> 1:1) at each breakpoint. Confirmed via source: no `:focus` state exists alongside `:hover` on `.photo`, and `.gallery`/`.strip` have zero padding — the cream-to-black-to-cream transition is a real hard cut, not a rendering artifact.

## Overall Impression

The visual craft here is genuinely good — the grayscale-to-color hover treatment using the site's own brown token, and a responsive grid that changes aspect ratio (not just column count) at each breakpoint, are bespoke details, not template defaults. But the section's interaction model is desktop-only: the hover reveal (its best trick) never fires for touch users, who are most of a barbershop's first-time-visitor mobile traffic. Combined with zero heading and zero focusable elements, this reads as a section designed once for a mouse and shipped as-is.

## What's Working

- **The hover treatment is bespoke, not generic** — `grayscale(20%) contrast(1.05)` at rest, clearing to full color + `scale(1.06)` on hover, with a `rgba($brown-deep, 0.3)` overlay using the site's own token rather than a stock black tint.
- **Responsive grid reflow is deliberate, not naive** — aspect-ratio changes from 3:4 to 1:1 alongside the column-count change at each breakpoint; someone thought about how the crops read at each size, not just how many fit.
- **All 6 photos load correctly with correctly-tuned `sizes` attributes** for performance — verified via network requests, no 404s.

## Priority Issues

[P1] No visible heading, the only section on the page without one — an `aria-label="Shop photos"` exists but nothing is programmatically or visually announced to sighted users. Confirmed via DOM: About, Services, and Hours all have a real h2; Gallery has none. A one-line heading or caption ("Inside the shop") turns a mystery photo dump into a labeled proof point at near-zero cost.

[P1] Zero interactivity or feedback for touch and keyboard users — confirmed 0 focusable elements via DOM query, and the hover-reveal effect (the section's best asset) has no touch or `:focus` equivalent. For a majority-mobile first-time-visitor audience, the section's whole visual trick is invisible. Either drop the hover gating (show full color always) or make the photos genuinely interactive (tap-to-enlarge) so mobile gets equivalent value to desktop.

[P2] Alt text pattern is templated, not distinguishing — four of six strings are synonymous ways of saying "this is the shop" rather than describing what's actually in the frame. Screen-reader users get little real information about which photo is which.

[P2] No hierarchy among the six photos — all equal weight and size. A shop with a strong signature image (a straight-razor shave, the original chairs, the barber pole) loses the chance to lead with its best asset.

[P3] Hard, zero-padding transition between two very differently-toned sections (cream About -> black strip -> cream Services) confirmed via computed style. Not necessarily wrong for a bold statement, but worth a deliberate check that it's intentional rather than accidental.

## Persona Red Flags

First-time visitor deciding whether to walk in: nothing in this section answers "what will my experience actually look like" — it's ambience without evidence. No caption anchors trust in what's being shown.

Mobile scroller: this section runs roughly 562px tall at 375px width (about 70% of one screen) as flat, permanently-dimmed photos with no text anchor and nothing to tap — a scroll-through dead zone rather than a persuasion beat, since the hover-reveal never fires on touch.

## Minor Observations

- Transition durations differ slightly across the hover effect's three properties (`transform 0.5s`, `filter 0.4s`, `opacity 0.4s`) — could tighten to one shared duration for a crisper unified reveal.
- All six images use default lazy loading with no `priority` prop; reasonable since the section sits below the fold, worth a quick LCP sanity check if it's ever moved higher on the page.

## Questions to Consider

- If mobile visitors (the majority of first-time-visitor traffic) never see the hover-reveal effect, was this section actually designed for mobile, or built once for desktop and shipped as-is?
- What is this section's actual job — "prove we're a real, old-time shop" (then it needs a caption/heading and a hero image) or "pure texture/mood" (then maybe it shouldn't compete for a heading slot at all)?
- Would 2-3 larger, captioned photos build more trust than 6 small uncaptioned ones — trading breadth for narrative?
