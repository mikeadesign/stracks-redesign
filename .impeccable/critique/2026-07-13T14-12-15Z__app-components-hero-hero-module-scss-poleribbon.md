---
timestamp: 2026-07-13T14-12-15Z
slug: app-components-hero-hero-module-scss-poleribbon
---
# Critique — Barber-pole ribbon (.poleRibbon, homepage hero)

Target: app/components/Hero/Hero.module.scss (.poleRibbon) + app/components/Hero/Hero.tsx:24
Date: 2026-07-13
Score: element-level review (no full heuristic table — single decorative element)

## Verdict
Not AI slop. A category-owned brand mark, not generic decoration. Horizontal diagonal stripe band is established barbershop vernacular (awning trim, sign borders); the -45deg angle carries "barber," and it rhymes with the -45deg pinstripe texture in the hero overlay. Detector: 0 findings (Hero.tsx, Hero.module.scss, globals.scss). Browser evidence confirmed rendering: 104×8px, red #BE1E2D / white stripes at 12px period, correct DOM position between h1 and location line, no console errors. Screenshots unavailable (renderer hidden/timeouts); programmatic evidence used.

## Strengths
1. Category-owned motif replacing the generic divider; -45deg rhyme with overlay pinstripe shows system thinking.
2. Proximity logic correct: 2rem above / 1rem below binds ribbon to location line; subordinate scale (~1/3 headline width); shadow matches hero shadow language.
3. Robust reduced-motion (component-level animation:none + global clamp); correct stagger slot (0.65s between headline 0.15s and location 0.8s); center transform-origin fits the centered poster composition.

## Priority issues
1. P1 — scaleX draw distorts stripe geometry during entrance (stripes squash/steepen as the element scales). Animate clip-path inset / mask, or a wrapper width, so stripes stay fixed at -45deg. Hero.module.scss ~L106.
2. P2 — Pure $white stripes are the hero's only pure white over the darkened photo; everything else is cream/gold. Either try $cream side-by-side or keep white deliberately (pole authenticity) with a comment. ~L102.
3. P2 — Motif hard-coded (angle, 6/12px bands, colors) with magic-number 104px width (≈6.1 stripe periods — not scale- or stripe-derived). Extract a barber-stripe mixin/token if reused; derive width from stripe period (6 periods ≈ 102px) or type scale.
4. P3 — Hard-cropped stripe ends. Decide raw crop (butcher-stripe convention) vs edge treatment; currently a default, not a decision.

## Minor
- aria-hidden on empty div: harmless, redundant, fine.
- 8px height safe; 10–12px would assert slightly more against the clamp(4rem+) headline.
- Former global .pole-divider was removed (commit 4f82ff9); ribbon is now the only striped element on the page — no consistency conflict exists.

## Open questions
1. A mark earns status through repetition — should a quieter stripe echo exist (footer, favicon), or is scarcity the point?
2. Would no entrance animation at all (the ribbon simply being there) better fit the analog, unchanged-since-the-chairs-were-new register?
