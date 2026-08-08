---
target: image gallery section
total_score: 27
p0_count: 0
p1_count: 2
timestamp: 2026-08-05T19-51-56Z
slug: app-components-gallery-gallery-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | `scale(1.06)` on hover implies the photos are clickable; they aren't. No `:focus` state, so keyboard users get nothing. |
| 2 | Match System / Real World | 4 | Real shop objects (Clubman talc, the Illinois Razor Strop, the original chairs), plain-language heading, alt text now names specific objects. |
| 3 | User Control and Freedom | 3 | Static content, no traps — but the hover affordance leads nowhere. |
| 4 | Consistency and Standards | 1 | The only grid on the site with no separator system, while Services uses `1px solid rgba($gold, 0.15)` on every cell. Also introduces `$ink` (#1A1A1A) as a third section background, violating the documented Two-Field Rule. |
| 5 | Error Prevention | 4 | n/a — static content. |
| 6 | Recognition Rather Than Recall | 3 | Heading present, but nothing identifies what any individual photo shows. |
| 7 | Flexibility and Efficiency | 2 | 0 focusable elements confirmed via DOM query; no lightbox, no larger view. |
| 8 | Aesthetic and Minimalist Design | 2 | Six photos of near-identical tonality butted edge to edge; measured seam contrast 1.04–2.72:1, all below the 3:1 non-text boundary threshold. The deliberate 2-track lead photo is invisible as a lead. |
| 9 | Error Recovery | 4 | n/a. |
| 10 | Help and Documentation | 2 | No captions; "Inside the Shop" is the only context given. |
| **Total** | | **27/40** | **Acceptable** |

## Anti-Patterns Verdict

**LLM assessment**: Clean on the usual tells. No side-stripe borders, no gradient text, no glassmorphism, no eyebrow label, no card grid, no box-shadow. The alt-text problem flagged in the previous run is genuinely fixed — all six strings now name a distinct physical object rather than restating "this is the shop." The photos are real shop assets, not stock, which is the single hardest thing to fake and the reason this section reads as authentic despite its structural problem.

**Deterministic scan**: `node .claude/skills/impeccable/scripts/detect.mjs --json app/components/Gallery` returned `[]`, exit 0. Clean.

**Visual overlays**: `detect.js` injected successfully into a live page at `localhost:3000` (mutation confirmed). Console reported 3 anti-patterns page-wide, **zero of them inside the Gallery** — verified by containment check: the two `all-caps-body` hits are the Hero location line and the Footer tagline. The live server was stopped after the run.

The detector is silent here because it can't see the problem. It scans markup and style declarations for known anti-pattern shapes; "these six photographs have no boundary between them" is a property of the rendered pixels, not the CSS. That gap is why the client caught it and the tooling didn't.

## Overall Impression

**The client is right, and it's measurable, not a matter of taste.**

I sampled the 6px column on each side of every internal seam in the rendered grid, averaged it, and computed the luminance contrast across the boundary:

| Seam (desktop, 1280px) | Contrast |
|---|---|
| chairs \| talc & brush | 1.24:1 |
| talc & brush \| cash register | **1.04:1** |
| cash register \| clippers | 1.58:1 |
| clippers \| straight razor | 2.72:1 |
| straight razor \| strop | 1.37:1 |

Every seam is below 3:1 — the WCAG 1.4.11 threshold for a non-text boundary to be reliably perceivable. One of them (1.04:1) is within rounding distance of *identical*. On mobile the 2×3 layout makes it worse: seven internal seams, four of them below 1.6:1, inside a section that occupies 696px of an 812px screen. 86% of the viewport is one continuous warm-brown field.

The cause is straightforward: `.strip` has no `gap`, and all six photographs share the same palette — dark walnut, aged brass, warm amber lighting. Individually each is a good photo. Adjacent with no articulation, they read as one 1265px-wide smear of brown.

The section is also the only place on the site that opts out of the design system's own answer to this. DESIGN.md documents the Grid Gap Technique and the hairline-gold border language; Services uses it (`1px solid rgba($gold, 0.15)` on every cell). The Gallery — the grid with the *greatest* need for separation — uses nothing.

## What's Working

- **The photography is real and specific.** Not stock, not generic "barbershop vibes" — the Clubman talc tin, the engraved brass register drawer, the Illinois Razor Strop Co. No. 127. This is the section doing the exact job PRODUCT.md assigns it: proving the shop is real. Don't lose that in the fix.
- **Last round's fixes landed.** The heading exists, the alt text now describes distinct objects, and the grayscale-until-hover gating is gone — mobile visitors see the same full-colour photos desktop does. That was the right call and it's correctly implemented.
- **The 7-track grid math is genuinely clever.** Seven columns so the lead photo spans two at 3:2 while five siblings hold 3:4, resolving to identical row heights with no phantom cell. The comments explain the reasoning. This is craft — the problem is that with no seams, nobody can *see* it.

## Priority Issues

### [P1] No boundary between photos — the section reads as one image, not six

**Why it matters**: The client's complaint, confirmed at 1.04–2.72:1 across every seam. The audience skews 50–70+; PRODUCT.md explicitly flags legibility for aging eyes as above-average priority. A 1.2:1 edge that a 30-year-old squints at is simply not there for a 65-year-old regular. Beyond accessibility, the section loses its own argument: "here are six specific things about this shop" collapses into "here is some brown texture."

**Fix**: Apply the system's documented Grid Gap Technique, which exists for exactly this:

```scss
.strip {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: rgba(g.$gold, 0.25);  // bleeds through the gaps as a hairline
}
```

A 1px gold hairline at 0.25 alpha against these photos clears 3:1 comfortably and matches the Services grid exactly. If 1px reads too timid against photography at this scale, go to 2px — but stay hairline; the flat-first rule rules out shadows or heavy frames, and DESIGN.md prohibits anything above 1px as a *side* stripe specifically. A full perimeter is explicitly allowed. Consider extending the same treatment to the strip's outer edge so the block is framed, not just internally divided.

**Suggested command**: `/impeccable layout`

### [P1] `$ink` is a third section background, and it makes the Gallery/Services boundary invisible

**Why it matters**: DESIGN.md's Two-Field Rule is structural: every section is Espresso (`#1C0F07`) or Parchment (`#F0E8D5`), no third. The Gallery uses `$ink` (`#1A1A1A`), which sits at **1.08:1** against the Espresso of the Services section directly below it. So the strip's own bottom edge vanishes too — the dark run from the "Inside the Shop" heading band all the way through Services is one undifferentiated dark field with no articulation anywhere in it. This compounds the seam problem rather than being separate from it: the client's "blur together" almost certainly includes the section's own edges, not just the photo-to-photo seams.

**Fix**: Two decisions, and they interact — worth settling before touching the code. Either (a) move `.gallery` to `$brown-deep` to honour the Two-Field Rule and articulate the Gallery→Services boundary with an existing system element (the pole divider is already used at exactly this kind of joint, twice), or (b) keep the Gallery dark but hairline-rule the boundary in gold, same language as the fix above. My recommendation is (a) with the pole divider — it's the site's signature component, it already means "section break here," and it turns a defect into a brand beat.

**Suggested command**: `/impeccable layout`

### [P2] The lead photo's hierarchy is invisible

**Why it matters**: The first cell deliberately spans two tracks at a different aspect ratio — a real editorial decision to lead with the original chairs. Measured at 1280px it renders 361×241 against five 181×241 siblings. But with a 1.24:1 seam on its only boundary, a visitor cannot tell it's one wide photo rather than two narrow ones. The hierarchy exists in the CSS and nowhere in the perception.

**Fix**: Falls out of the P1 fix for free — seams make the span legible. Once visible, consider whether the lead deserves *more* differentiation (a wider gutter on its right edge, or a gold rule at 0.4 alpha against 0.25 elsewhere).

**Suggested command**: `/impeccable layout`

### [P2] Hover promises interactivity the section doesn't have

**Why it matters**: `transform: scale(1.06)` on hover is the web's near-universal signal for "this is clickable." Nothing happens on click. Confirmed 0 focusable elements in the section, and no `:focus-visible` state alongside `:hover`, so keyboard users skip the entire block. The code comment calls it "harmless bonus motion," but a hover state that resolves to nothing is a small broken promise on a page whose entire job is establishing trust.

**Fix**: Pick a side. Either drop the scale (the strip is documentary evidence, not a gallery widget — this is the cheaper, more honest option and fits "the UX never lies") or commit and make the photos genuinely open larger via a native `<dialog>` lightbox with keyboard support. Don't leave it half-implemented.

**Suggested command**: `/impeccable harden`

### [P3] No captions

**Why it matters**: The strop is a *No. 127 from the Illinois Razor Strop Company of Chicago*. That detail is doing real work for authenticity and it currently lives only in the alt text, where sighted visitors never see it. Six unlabelled photos is ambience; two or three labelled ones is evidence.

**Fix**: A single line of Source Sans 3 at 0.75rem, cream at 60%, under the lead photo only — not all six, which would turn the strip into a caption grid. One caption on the best object.

**Suggested command**: `/impeccable typeset`

## Persona Red Flags

**Dale, 62, local regular checking the site after a friend mentioned it** (project-specific, derived from PRODUCT.md's 50–70+ audience and its explicit legibility mandate): the seams are the failure point for exactly this visitor. At 1.04–1.58:1, the photo boundaries are not merely subtle for aging eyes — they are absent. Dale scrolls past a brown band and registers "some photos," not six pieces of evidence about a shop he's deciding whether to trust. The section's persuasive content never reaches its primary audience.

**Casey (distracted mobile user)**: 696px of an 812px screen — 86% of the viewport — is one continuous warm-brown mass with seven sub-1.6:1 internal seams and one line of text. Nothing to tap, nothing to anchor a thumb-scroll on. This is the longest stretch of the page with no textual footing, and it reads as a scroll-through dead zone rather than the trust-building beat it's meant to be.

**Riley (stress tester)**: hovers a photo, sees it scale, clicks. Nothing. Tabs through the page and the entire section is skipped — 0 focusable elements. Notes that the site's other grid (Services) has visible cell borders and this one doesn't, and reasonably concludes the Gallery is unfinished.

## Minor Observations

- The `.heading` band is 100% of section width but the h2 is constrained to a 1100px centered container, while `.strip` below it is full-bleed to the viewport edge. Two different width systems stacked with no visual relationship. Once the strip gains a perimeter this will be more noticeable, not less.
- All six images use default lazy loading with no `priority`. Correct for a below-the-fold section; just re-check if it ever moves up the page.
- Detector aside: nothing in the Gallery triggered any rule. The two page-level `all-caps-body` hits (Hero location line, Footer tagline) are outside this scope but worth a look on a future pass.

## Questions to Consider

- The system already documents the Grid Gap Technique and Services already uses hairline gold borders. Why did the Gallery — the grid that needed separation most — ship without either? If the answer is "full-bleed felt more cinematic," that instinct was right about the *ambition* and wrong about the *execution*: a hairline doesn't break a full-bleed strip, it makes it readable as one.
- If a visitor can only take one photograph away from this section, which is it? The layout already answers "the chairs" — but the layout can't say so out loud right now.
- Is this section documentary evidence or ambience? Evidence wants seams, a caption, and no fake hover affordance. Ambience wants none of those and probably wants fewer, larger photos. It's currently trying to be both.
