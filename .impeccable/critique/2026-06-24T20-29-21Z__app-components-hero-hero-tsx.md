---
target: Hero
total_score: 32
p0_count: 0
p1_count: 1
p2_count: 3
p3_count: 1
timestamp: 2026-06-24T20-29-21Z
slug: app-components-hero-hero-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Photo has no load state; espresso fallback is graceful |
| 2 | Match System / Real World | 4 | "Call to Book," "Walk-ins welcome," "straight-razor" — all natural barbershop language |
| 3 | User Control and Freedom | 3 | Single-page hero, no traps; Header nav provides escape |
| 4 | Consistency and Standards | 4 | Token-perfect throughout |
| 5 | Error Prevention | 3 | N/A mostly; tel: link handles number formatting |
| 6 | Recognition Rather Than Recall | 4 | Name, location, number, action all visible simultaneously |
| 7 | Flexibility and Efficiency | 2 | Single CTA path; no map link, email, or Facebook shortcut |
| 8 | Aesthetic and Minimalist Design | 3 | 5 text strata before the CTA is dense for a 50s–70s audience |
| 9 | Error Recovery | 3 | N/A; tel: self-recovers |
| 10 | Help and Documentation | 3 | "Walk-ins welcome when time permits" is excellent contextual reassurance |
| **Total** | | **32/40** | **Good — address weak areas, solid foundation** |

## Anti-Patterns Verdict
Not obviously AI-generated. Abril Fatface treatment and flanking-rules kicker are specific and earned. One slop tell: scroll indicator is saturated template trope. Detector: [] — no automated findings.

## Overall Impression
Strong structure; biggest problem is the shop photo being obscured by 82% overlay. Fix opacity to 0.65–0.68, then address density and contrast.

## What's Working
1. CTA copy is exceptional — phone number in the button, walk-ins note eliminates hesitation.
2. Display typography avoids the category reflex.
3. Award kicker earns its place with real print convention.

## Priority Issues

### [P1] Photo invisible under 0.82 overlay
The shop exterior that motivated the photo-hero approach is nearly undetectable. Drop overlay to rgba($brown-deep, 0.65).

### [P2] Tagline contrast marginal at 70% cream opacity
Estimated 2.8–3.4:1 against effective background — below WCAG AA 4.5:1 for body text at this size. Raise to rgba($cream, 0.88) minimum.

### [P2] Five text strata before CTA create visual density
Award kicker → h1 → divider → est line → tagline = 5 read-points. Est line partially duplicates kicker geography. Remove est line from hero.

### [P2] "Best of the Fox" opaque to newcomers
"Fox" is insider shorthand — defeats the credibility it intends to signal. Change to "Voted Best of the Fox Valley · Algonquin, IL".

### [P3] Scroll indicator is saturated landing page scaffolding
Remove it. The About section's visible edge is organic navigation.

## Persona Red Flags

**Jordan (First-Timer)**: "Best of the Fox" is mystery text. 5 text layers stall scanning. No pricing signal before the call ask.

**Sam (Accessibility)**: Elements start at opacity:0 via fill-mode:both — risk if animations suspended. Mitigated by global prefers-reduced-motion rule (0.01ms). Otherwise clean.

**Casey (Mobile)**: Text density worse on smaller screen. Button and CTA wrap handled by flex-wrap. Generally solid.

## Minor Observations
- Diagonal grain texture at rgba($red, 0.04) is imperceptible — dead CSS weight.
- 64px header offset hardcoded in padding-top calc.
- Clamp floor of 3.5rem means headline doesn't scale below 56px on narrow mobile.

## Questions to Consider
- If the photo is the design justification, why hide 82% of it?
- Is there a second-tier action worth adding for users who want to look before they call?
- Est line appears in hero and footer — earning its place twice, or once is enough?
