# Implementation Details & Constraints
**Project:** Jawad's Project — Wheelchair-Accessible Taxi Website

## 1. Guiding Principle for Build

Visual-first, text-light. Every section should be scannable in under 5 seconds — lead with imagery, icons, and short statements; use body copy only where it's doing real work (FAQ answers, safety/trust detail). This overrides the instinct to "explain everything" the way the reference site does.

## 2. Content Discipline Rules

- **Hero:** max 1 headline (≤8 words) + 1 subline (≤15 words) + CTA buttons. No paragraph.
- **Service cards:** icon/image + 3–5 word title + 1 short line. Full explanation lives on the service's own page, not the homepage.
- **Trust signals:** short chips/badges ("Insured", "Police-Checked Drivers", "NDIS & TUSS Accepted"), not sentences.
- **"How it works":** 3 steps max, each a few words + icon, no explanatory paragraphs.
- **FAQ:** collapsed accordion by default so the page doesn't look text-heavy on load — content is there for whoever wants it, hidden until clicked.
- **Service pages:** intro capped at 2–3 sentences; everything else conveyed through labeled equipment/vehicle images, short bullet specs, and a FAQ accordion rather than prose blocks.

## 3. Visual-Weight Budget (per homepage section)

| Section | Max word count (visible by default) |
|---|---|
| Hero | ~25 words |
| How it works | ~15 words total (3 steps) |
| Service cards (each) | ~10 words |
| Trust band | ~15 words total (chips) |
| Testimonials | quote length only, 1–2 shown at a time |
| FAQ teaser | question titles only, collapsed |

This table exists so content edits later don't quietly creep back toward the reference site's paragraph-heavy style.

## 4. Imagery Requirements

- Real/staged photos of the accessible vehicles in use (ramp deployed, wheelchair secured, driver assisting) — carry the information that text would otherwise need to explain.
- Every major section needs a visual anchor (photo, icon set, or illustration) — no stacked-text sections without one.
- Icons for: airport, medical/NDIS, local trips, insurance/safety, TUSS/NDIS acceptance, 24/7 availability.

## 5. Technical Constraints

- **Performance:** images must be served responsively (Next.js `<Image>` with defined sizes) — a visual-first site is only an asset if it still loads fast on mobile data at an airport.
- **No layout-shift CTAs:** Call/WhatsApp/Email buttons must be present in the DOM at first paint (not injected after JS hydration) so they're tappable immediately.
- **Accordion/FAQ components:** must be built accessibly (correct ARIA attributes, keyboard-operable) since collapsing content for visual cleanliness can't come at the cost of accessibility — ironic failure mode to avoid, given the site's subject matter.
- **Form length:** keep the accessibility-aware enquiry form short by using selects/toggles (wheelchair type, stays-seated Y/N) instead of free text wherever possible, consistent with the low-text direction.

## 6. Constraints From Client/Business Model

- No live booking/payment engine — all conversion ends at WhatsApp/call/email/form, per the PRD; implementation should not attempt to simulate real-time availability or pricing.
- Pricing is quote-based (owner confirms after enquiry) — do not hardcode fixed prices anywhere in the UI; use language like "fixed-price quote after enquiry" instead.
- Content such as actual fleet size, exact service suburbs, and NDIS/TUSS acceptance is still pending client confirmation (see PRD open questions) — build components so these are easy to drop in/edit later rather than hardcoding assumptions.

## 7. Build Sequencing

1. Design tokens + component library (buttons, cards, chips, accordion) — visual-weight rules from Section 3 should be enforced here first, not patched in later.
2. Homepage.
3. Flagship wheelchair-accessible service page.
4. Airport + NDIS/Medical + Local service pages (shared template).
5. Enquiry form + email/WhatsApp integration.
6. FAQ, footer, contact page.
7. SEO pages (suburb combinations) — phase 2, per SEO doc.

## 8. Risks / Watch-Outs

- Over-cropping content for visual appeal can remove information international visitors actually need (e.g. "can I stay in my wheelchair" is a real anxiety point) — solve with progressive disclosure (accordions, "learn more" links) rather than deleting the content outright.
- Stock-style "accessibility" imagery can look clinical/generic — prioritize real or realistic fleet photos once available from the client.
