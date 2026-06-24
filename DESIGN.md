---
name: "Strack's Barbershop"
description: "A proper barbershop on South Main Street — classic cuts, straight-razor precision, and the kind of shop that's hard to find anymore."
colors:
  espresso: "#1C0F07"
  parchment: "#F0E8D5"
  barber-red: "#BE1E2D"
  antique-gold: "#C49A2A"
  worn-leather: "#6B5E52"
  press-black: "#1A1A1A"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Abril Fatface, Georgia, serif"
    fontSize: "clamp(3.5rem, 10vw, 8rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "normal"
  headline:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.1
  title:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "clamp(1rem, 2.5vw, 1.35rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Source Sans 3, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Source Sans 3, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    letterSpacing: "0.2em"
rounded:
  sharp: "2px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "2rem"
  lg: "4rem"
  xl: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.antique-gold}"
    textColor: "{colors.espresso}"
    rounded: "{rounded.sharp}"
    padding: "0.9rem 2rem"
  button-primary-hover:
    backgroundColor: "#D4B040"
  button-secondary:
    backgroundColor: "{colors.barber-red}"
    textColor: "{colors.white}"
    rounded: "{rounded.sharp}"
    padding: "0.4rem 1rem"
  button-secondary-hover:
    backgroundColor: "#A01828"
---

# Design System: Strack's Barbershop

## 1. Overview

**Creative North Star: "The Shop Window at Dusk"**

You walk by and you see it: the pole turning, warm amber through the glass, the barber's name lettered on the window. You know exactly what this place is before you open the door. The design system makes the same promise — nothing decorative, nothing aspirational, nothing that isn't true about the actual shop. What's visible is what's real.

The palette runs on two fields: deep espresso dark and warm parchment light, alternating section by section to create rhythm without ornament. Against the dark, parchment text reads at extreme contrast — like a name painted on glass backlit from inside. Against the light, press-black type and antique gold accents carry the weight of a trade ledger: specific, unhurried, authoritative. The one accent of barber red appears rarely — on the phone CTA, today's hours, the apostrophe in the logo — never as a field color. Its rarity is its signal.

The typography does the identity work that imagery would do elsewhere. Abril Fatface in the headline is the hand-painted shop sign. Libre Baskerville in subheadings is the editorial confidence of a shop that has nothing to prove. Source Sans 3 handles everything functional — labels, body text, pricing notes — with the neutral clarity of an invoice form. Together the three fonts give the system more personality than any image could. This system explicitly rejects: the slick uniformity of corporate salon chains (Great Clips, Sport Clips); the overwrought Instagram aesthetic of hipster barbershops; the generic warmth of WordPress local-business templates; and the SaaS-marketing language of gradient text, hero metrics, and scroll-triggered noise.

**Key Characteristics:**
- Two-field alternation (Espresso / Parchment) structures every page rhythm
- Near-square corner radius (2px) across all interactive elements — committed to the action, no softening
- Gold as the reward accent: appears wherever the interface invites engagement; never diluted into a background
- Hairline borders (1px, rgba gold at 0.15–0.3) for grouping — never heavier, never a stripe
- Flat elevation: depth through contrast, not shadow
- Staggered entrance and scroll-reveal motion that serves atmosphere without calling attention to itself

## 2. Colors: The Espresso Palette

Five tones, each with a distinct material character — not a family of shades, but five different surfaces with complementary purpose.

### Primary
- **Espresso** (`#1C0F07`): The dominant field. Hero, Services section, fixed header, contact icons, footer — carries roughly half of any screen's surface. Near-black with warm undertone; reads like the dark walnut of the original barber chairs.
- **Barber Red** (`#BE1E2D`): Signal color only. Header phone CTA, logo apostrophe, today's hours highlight, hero decorative stripe. Never used as a section background or large-area fill. Its job is to fire once, clearly. Used on at most 2–3 elements per screen.

### Secondary
- **Antique Gold** (`#C49A2A`): The reward accent. Active nav underlines, focus rings, eyebrow text, service prices, gift note border, CTA fill. Appears wherever the interface points to something worth engaging with. Brass without shine — aged, earned, not decorative.

### Neutral
- **Parchment** (`#F0E8D5`): Main body background (About, Hours sections) and reversed text on dark fields. Warm without being cream-by-default; it carries the hue of aged paper, not a paint chip.
- **Worn Leather** (`#6B5E52`): Secondary text on light backgrounds — About body copy, Hours schedule notes, contact labels. A warm brown-gray; reads at approximately 3.5:1 on Parchment. Use only for supporting text, not body copy. Body copy uses Press Black.
- **Press Black** (`#1A1A1A`): Primary text on light sections. Section headings, contact info, schedule text. Near-black without blue cast; the ink end of the ramp.
- **White** (`#FFFFFF`): Barber pole stripe, hero CTA text on gold, reversed label text. Functional — never used as a section background.

### Named Rules

**The Two-Field Rule.** Every section uses one of two background fields — Espresso or Parchment. No third background color is ever introduced. The rhythm of dark/light alternation is the structure; adding a mid-tone background breaks it.

**The Rarity Rule.** Barber Red appears on at most 2–3 elements per screen. The moment it becomes a field color or fills a large element, it stops functioning as a signal and becomes visual noise.

**The Gold Discipline.** Antique Gold is earned by engagement. It appears on CTAs, active states, focus rings, eyebrows, and accent elements — never as a background, never diluted into a large fill. If gold covers more than 10% of a screen, it has lost its function.

## 3. Typography

**Display Font:** Abril Fatface (400) with Georgia, serif fallback
**Heading Font:** Libre Baskerville (400, 700; normal, italic) with Georgia, serif fallback
**Body/Label Font:** Source Sans 3 (300, 400, 600, 700) with Helvetica Neue, Arial, sans-serif fallback

**Character:** Abril Fatface's extreme weight and ink-trap letterforms evoke hand-painted shop signage — not elegant, not refined, authoritative by mass. Libre Baskerville brings editorial calm and Old World confidence to subheadings, with the italic cut reserved for taglines that need room to breathe. Source Sans 3 handles everything functional with the clean legibility of a trade form. The contrast between the display's graphic weight and the heading's classical line is intentional; the three fonts never compete because each occupies a distinct register.

### Hierarchy

- **Display** (Abril Fatface 400, `clamp(3.5rem, 10vw, 8rem)`, line-height 0.95): Hero headline only. The word "Strack's Barbershop" at full weight. Also used for service prices (1.5rem, antique gold) and wordmark logo (1.25rem, 1.5rem), where its condensed weight gives the brand name gravity without needing all-caps.
- **Headline** (Libre Baskerville 400, `clamp(2rem, 4vw, 3rem)`, line-height 1.1): Section h2 headings on both light and dark backgrounds. Adapts color: Parchment on Espresso, Press Black on Parchment.
- **Title** (Libre Baskerville 400 italic, `clamp(1rem, 2.5vw, 1.35rem)`, line-height 1.5): Supporting taglines and editorial prose that needs to be set apart from body text. Currently used as the hero tagline (at 75% Parchment opacity on dark). Not for inline emphasis.
- **Body** (Source Sans 3 400, `1rem`, line-height 1.65): Main paragraph text. Press Black on Parchment. Max line length 50ch. Never use Worn Leather for body copy — contrast risk on Parchment.
- **Label** (Source Sans 3 600–700, `0.7rem–0.85rem`, uppercase, `letter-spacing 0.12em–0.2em`): Eyebrows, nav links, CTA text, schedule day names, contact category headers. Small caps utility that signals structure without claiming heading hierarchy.

### Named Rules

**The Display Rule.** Abril Fatface appears at ≥1.25rem only. The wordmark, service prices, and hero headline are the three contexts. Never use it as a body font or label font.

**The Italic Reserve.** Libre Baskerville italic is for taglines and supporting prose — one instance of breathing room per section. Never use it for inline emphasis within body copy.

**The Label Ceiling.** Labels (`letter-spacing: 0.2em`, uppercase) appear at most once per section, as a section locator — not on every heading. An eyebrow on every section is scaffolding, not voice. The system has one `.eyebrow` utility class; use it with the same restraint as Barber Red.

## 4. Elevation

This system is flat. There are no box-shadows anywhere in the design. Depth is created by three means, in order of prevalence: (1) high-contrast background alternation between Espresso (#1C0F07) and Parchment (#F0E8D5), which produces approximately 11:1 contrast and makes the section boundary the depth signal; (2) hairline gold borders — `1px solid rgba(#C49A2A, 0.15–0.3)` — used to group items within a field without shadow; (3) the service menu grid's technique of a `1px` gold-tinted background bleeding through `1px` gaps between flat-colored cells, producing a hairline grid without any border property on the cells themselves.

The single exception is the fixed header, which uses `backdrop-filter: blur(6px)` at 96% opacity. This is functional — it prevents content scrolling under a fully transparent bar — not decorative. It is not replicated anywhere else.

### Named Rules

**The Flat-First Rule.** Before adding any visual separation between elements, ask whether background alternation or a hairline border achieves the goal. If neither works, something is wrong with the structure, not the elevation. Box-shadows are prohibited.

**The Grid Gap Technique.** When tabular items need hairline separators, use `gap: 1px` on a container with a lightly gold-tinted background (`rgba(#C49A2A, 0.15)`), and set each cell's background to the section color. The gap bleeds through as the separator. This is cleaner than `border-bottom` on each row.

## 5. Components

### Header / Navigation

Fixed at top, 64px tall, Espresso field at 96% opacity with `backdrop-filter: blur(6px)`. Bottom border: `1px solid rgba(#C49A2A, 0.25)`. Max content width 1100px, centered.

- **Wordmark**: Abril Fatface 1.25rem, Parchment. Apostrophe in Barber Red — the only decorative use of Red in the system. The `'` is the shop's stamp.
- **Nav links**: Source Sans 3, 0.8rem, 600 weight, uppercase, 0.12em tracking, Parchment at 75% opacity. Gold on hover. On active section (via IntersectionObserver): Gold color + gold underline revealed via `transform: scaleX(0→1)`, 0.25s ease.
- **Phone CTA**: Barber Red button, Source Sans 3 700, 0.85rem, Parchment text, 2px radius, 0.4rem × 1rem padding. Darkens on hover. The only Barber Red button in the system; its placement in the header keeps it contextually separate from the gold primary CTAs below.
- **Responsive**: Nav links hide below 600px; phone CTA remains. The phone CTA is the entire mobile nav.

### CTA Buttons

**Primary (gold):** Antique Gold fill, Espresso text, Source Sans 3 700, 1rem, uppercase, 0.06em tracking, 2px radius, 0.9rem × 2rem padding. Lightens 8% on hover; shifts up 1px (`transform: translateY(-1px)`). Used in Hero only.

**Secondary (red):** Barber Red fill, white text, same radius and type treatment but smaller padding (0.4rem × 1rem). Used in Header only. Never combined with a gold CTA in the same visual cluster.

Both buttons are unhurried — transitions at 0.2s, no elaborate states. The hover confirmation is enough.

### Service Menu Grid

Service items laid out in `repeat(auto-fill, minmax(300px, 1fr))` on Espresso background. Hairline grid via `gap: 1px` on a `rgba(#C49A2A, 0.15)` container. Each cell: Espresso bg, 1.4rem × 1.75rem padding, flex row, service name left / price right.

- **Service name**: Libre Baskerville 1rem, Parchment. Qualification note (age bracket) in Source Sans 3 0.75rem, Parchment at 45% opacity, below the name.
- **Price**: Abril Fatface 1.5rem, Antique Gold. The display font's weight makes prices feel authoritative, not promotional.
- **Hover**: Cell background shifts to `rgba(#C49A2A, 0.06)` — a barely perceptible gold bloom.
- **Footer note** (gift certificates): `1px solid rgba(#C49A2A, 0.2)` full border, flex row, gold label chip.

### Badges / Info Cards (About section)

Currently: white background, `1px solid rgba(#C49A2A, 0.3)` full border, with `border-left: 4px solid #C49A2A` side stripe. **The side stripe is a prohibited pattern** (see Do's and Don'ts). The correct treatment is either the full border alone, or a gold left border removed in favor of a background tint or leading icon/number. The emoji icons already provide the left-anchor visual — the stripe is redundant.

### Gallery Strip

Full-bleed photo grid, `repeat(6, 1fr)` columns at desktop, 3:4 aspect ratio per cell. Images at `grayscale(20%) contrast(1.05)` rest state with a 30% Espresso overlay. On hover: scale to 1.06, desaturate to 0%, overlay fades out. The progression from muted/dark to full-color/open creates a "walking into the shop" effect. Transition: 0.5s ease (scale), 0.4s ease (filter).

### Reveal Animation (Scroll Component)

IntersectionObserver-triggered: opacity 0 → 1, translateY 16px → 0, 0.6s ease per instance. Staggered via inline `transition-delay`. Used in About, Services, Hours sections. Delay values: 0ms (primary content block), 120ms–360ms (secondary items in a list).

**Note:** The Reveal component starts content at `opacity: 0`. In headless renderers or when JS fails, sections will ship blank. A CSS-only default-visible state should be the baseline; the class-triggered transition enhances it, not gates it.

### Pole Divider (Signature Component)

14px horizontal band, `repeating-linear-gradient(-45deg, red 0px, red 8px, white 8px, white 16px)` at 22.6px repeat. On page load: one-time shimmer (`poleShimmer`, 1.1s ease, 0.4s delay) — a white light wipe from left to right, forwards only. The animation fires once; it doesn't loop. Used twice: between Hero and About, above the Footer. Never used inside sections.

### Hours Schedule

Top border: `2px solid #1A1A1A`. Rows: flex, space-between, `0.75rem` vertical padding, `1px solid rgba(#1A1A1A, 0.1)` bottom border. Day name in Source Sans 3 600, Press Black; hours in Source Sans 3 400, Worn Leather. Today's row: both day and hours in Barber Red, 700 weight. Closed rows: hours italic, Worn Leather at 50% opacity.

## 6. Do's and Don'ts

### Do:

- **Do** alternate Espresso and Parchment as the only two section backgrounds. The rhythm is the layout.
- **Do** use Antique Gold (`#C49A2A`) for every interactive state — hover underlines, focus rings, active nav, CTA fills. Consistency makes gold mean "engage here."
- **Do** keep border-radius at 2px across all interactive elements (buttons, icon containers). The system is committed and near-square.
- **Do** use the grid-gap technique for hairline item separators — `gap: 1px` on a gold-tinted container — rather than `border-bottom` on individual cells.
- **Do** use full borders (`border: 1px solid rgba(#C49A2A, 0.2–0.3)`) when you need to outline a card or info block. The entire perimeter, or none.
- **Do** apply `text-wrap: balance` on h1–h3 to prevent ragged line breaks.
- **Do** cap body line length at 50ch in single-column contexts.
- **Do** provide `@media (prefers-reduced-motion: reduce)` fallbacks for every animation — the globals.scss rule kills duration to 0.01ms; confirm that hidden elements still become visible.
- **Do** use the Display font (Abril Fatface) for service prices and the wordmark logo — these are its only uses outside the hero headline.

### Don't:

- **Don't** use `border-left` greater than 1px as a colored accent stripe on cards, callouts, or list items. The About section's badge currently has this pattern (`border-left: 4px solid #C49A2A`) — it is prohibited. Rewrite with a full border, a background tint, or nothing. The emoji icons already provide left-anchor weight.
- **Don't** use the `.eyebrow` label (small-caps, tracked, gold) on every section. An eyebrow on every heading is scaffolding, not voice. One or two per page at most.
- **Don't** add Barber Red as a field color or fill a large element with it. It functions only at small scale — buttons, one character, a row highlight.
- **Don't** use gradient text (`background-clip: text` with a gradient). The system uses solid colors only.
- **Don't** introduce a third section background color. The Two-Field Rule is structural, not aesthetic.
- **Don't** replicate the header's `backdrop-filter: blur` in other components. It is functional (fixed nav over scrolling content) and unique.
- **Don't** use box-shadows. The flat-first rule is absolute.
- **Don't** make the Reveal component the only path to visible content — content gated behind `opacity: 0` ships blank in headless environments and when JS is delayed.
- **Don't** style like a corporate salon chain (the slick uniformity of Great Clips or Sport Clips), a trendy hipster barbershop (all-black, neon accents, over-designed), a generic local business WordPress template (stock photos, booking widgets, contact forms), or a SaaS landing page (gradient text, hero metrics, scroll-triggered marketing noise). These are the explicit anti-references from PRODUCT.md and the prohibition stands on every new surface.
