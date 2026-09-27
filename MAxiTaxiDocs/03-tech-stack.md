# Tech Stack
**Project:** Jawad's Project — Wheelchair-Accessible Taxi Website

## Frontend
- **Framework:** Next.js (React, App Router) — SSR/SSG for SEO, fast builds, good image handling.
- **Language:** TypeScript.
- **Styling:** Tailwind CSS.
- **Icons:** Lucide React (or similar lightweight icon set).
- **Forms:** React Hook Form + basic client-side validation (zod or similar schema validation).

## Backend
- **API layer:** Next.js API routes / server actions (no separate backend service needed for v1 scope).
- **Email delivery:** Transactional email provider (e.g. Resend, SendGrid, or Postmark) for enquiry notifications to the owner.
- **Database (optional, if persisting enquiries):** PostgreSQL via a managed provider (e.g. Supabase or Neon) — lightweight, no need for a heavier ORM setup; Prisma if the schema grows.

## Hosting & Infra
- **Hosting:** Vercel (pairs naturally with Next.js; simple CI/CD from Git).
- **Domain/SSL:** Standard domain registrar + automatic SSL via host.
- **Maps:** Google Maps Embed API for service-area visualization.
- **Analytics:** Google Analytics 4 or Plausible — needs to track WhatsApp/call/email click events specifically, not just pageviews.

## SEO & Content Tooling
- **Structured data:** JSON-LD `LocalBusiness` / `TaxiService` schema on relevant pages.
- **Sitemap/robots:** Auto-generated via Next.js metadata routes.
- **CMS (phase 2, optional):** Sanity or a similar headless CMS if the client wants to self-manage blog/suburb pages without developer involvement.

## Communication Integrations
- **WhatsApp:** `wa.me` deep links with pre-filled message text — no API/backend integration required for v1.
- **Click-to-call:** standard `tel:` links.
- **Email:** standard `mailto:` links plus the enquiry form backend above.

## Why this stack fits the project
- The site is a conversion/content site, not a transactional platform — this stack avoids over-engineering (no need for a heavy backend, auth system, or real-time infrastructure).
- Next.js gives strong SEO fundamentals out of the box, which matters given the suburb/airport/NDIS keyword strategy in the SEO doc.
- Everything here is low-maintenance for a small business client — no dev-ops burden once deployed.
