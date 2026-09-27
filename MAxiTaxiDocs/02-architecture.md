# Architecture Document
**Project:** Jawad's Project — Wheelchair-Accessible Taxi Website

## 1. Architecture Style

This is a **content + conversion site**, not a transactional platform — there is no live inventory, payments, or driver-matching logic. Architecture should stay simple and fast rather than over-engineered:

- Static/server-rendered marketing site (Next.js) for speed and SEO.
- A lightweight backend only for: (a) enquiry form submission, (b) optional NDIS/TUSS content management, (c) analytics event logging.
- No database required for v1 beyond form-submission storage — a simple table or hosted form service is enough.

## 2. High-Level Diagram (textual)

```
[Visitor Browser]
      │
      ▼
[Next.js Frontend — SSG/ISR pages]
   ├── Static service/SEO pages (pre-rendered)
   ├── Homepage (pre-rendered, revalidated)
   └── Enquiry Form (client component)
              │
              ▼
   [API Route: /api/enquiry]
              │
      ┌───────┴────────┐
      ▼                ▼
[Email service]   [Enquiry DB table]
 (owner notified)  (Postgres, optional)
              │
              ▼
   [WhatsApp deep link — client-side, no backend needed]
```

## 3. Frontend

- **Framework:** Next.js (App Router) — good SEO defaults (server rendering, metadata API, sitemap generation).
- **Styling:** Tailwind CSS for speed and consistency.
- **Pages:** Static-generated for all service/SEO/suburb pages; revalidate periodically if content changes (blog, pricing notes).
- **Forms:** Client-side validation, server action or API route submission, optimistic success state.
- **WhatsApp CTA:** `https://wa.me/<number>?text=<prefilled message>` — no backend needed, works from any device.

## 4. Backend / API

Minimal by design:
- `POST /api/enquiry` — validates payload, sends email via a transactional email provider, optionally logs to DB.
- No auth system needed for v1 (no client accounts).
- If NDIS/TUSS content or blog posts need non-technical editing later, add a headless CMS (see Phase 2 below) rather than building a custom admin panel.

## 5. Data Storage (minimal)

If persistence beyond email is wanted:
- Single `enquiries` table: id, name, phone, email, pickup, destination, date, time, wheelchair_type, stays_seated, passengers, notes, created_at.
- Postgres (e.g. via a managed provider) is sufficient — no need for a complex schema.

## 6. Third-Party Services

- Transactional email (for enquiry notifications to the owner).
- Maps embed (Google Maps) for service area / location context.
- Analytics (for measuring WhatsApp/call/email click-through — see PRD success metrics).

## 7. Hosting & Deployment

- Static/SSR-friendly host (e.g. Vercel or similar) matches Next.js well and keeps ops overhead low for a small business site.
- Custom domain + SSL.
- Image optimization built into Next.js for fleet/vehicle photos.

## 8. Phase 2 Considerations (not required for launch)

- Headless CMS (e.g. Sanity or similar) if the client wants to self-edit blog posts, suburb pages, or pricing notes without a developer.
- Multilingual routing (`/en`, `/zh`, etc.) if international-visitor language data supports it.
- Simple internal dashboard to view submitted enquiries, if email-only proves insufficient.

## 9. Non-Functional Requirements

- **Performance:** Fast first paint on mobile — international visitors often check on a phone from an airport or hotel Wi-Fi.
- **Accessibility (the site itself):** Given the subject matter, the site itself should meet WCAG 2.1 AA — proper contrast, keyboard navigation, alt text, readable font sizes. This is both an ethical fit and a trust signal.
- **SEO:** Server-rendered content, clean semantic HTML, structured data (LocalBusiness / TaxiService schema) for rich results.
