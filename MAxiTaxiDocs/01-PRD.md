# Product Requirements Document (PRD)
**Project:** Jawad's Project — Wheelchair-Accessible Taxi Website
**Status:** Draft v1
**Reference site:** maxicabsperth.au (business-model reference only, not a design/content clone)

## 1. Background

The client runs a taxi service offering wheelchair-accessible transportation. The current gap is an online presence that (a) positions accessible transport as the core identity rather than one of many services, and (b) is built specifically to convert **international visitors** into **direct contact with the owner** via WhatsApp, phone, or email — not a self-serve booking engine.

## 2. Goals

1. Make wheelchair-accessible transportation the primary brand identity of the site (not buried among general taxi services).
2. Get an international visitor from landing page to a WhatsApp/email/call enquiry with minimal friction.
3. Pre-answer the questions an overseas visitor would have (does the vehicle fit my wheelchair, can I stay seated, how does airport pickup work, how far in advance to book) so the enquiry is already qualified.
4. Build local SEO equity around accessible-transport + airport + suburb + NDIS/TUSS keywords.

## 3. Non-Goals (v1)

- No live booking engine, real-time driver tracking, or online payments.
- No account creation / login system.
- No multi-service catalogue (weddings, baby capsules, general maxi cabs) unless the client actually offers these — accessible transport stays the hero.

## 4. Target Users

| Persona | Need |
|---|---|
| International traveler / family member | Booking accessible airport pickup ahead of a trip to Perth, doesn't know local terms (TUSS, suburbs) |
| Local NDIS participant / support coordinator | Recurring accessible transport to appointments, needs NDIS-compatible language and invoicing trust signals |
| Local senior / aged-care family | Reliable, dignified transport for a parent, values safety/trust signals |
| Hospital / medical appointment booker | Time-sensitive, wants a fast, direct contact channel |

## 5. Core User Flow

1. Visitor lands (organic search, Google Business, referral).
2. Hero immediately states: what (wheelchair-accessible taxi), where (service area), and how to act (Call / WhatsApp / Email buttons — persistent).
3. Visitor scans trust signals (insured, police-checked drivers, TUSS/NDIS accepted, fleet photos) and service pages (Airport, Medical, Local/NDIS).
4. Visitor either taps WhatsApp/Call directly, or fills a short accessibility-aware enquiry form.
5. Owner receives enquiry (WhatsApp message, email, or form submission → email) and replies directly with a quote/confirmation.

## 6. Functional Requirements

### 6.1 Homepage
- Persistent header with Call, WhatsApp, Email buttons (sticky on mobile).
- Hero answering: what / where / who it's for / why trust us / how to book, within the first screen.
- Service summary cards: Airport Transfers, Medical/NDIS Transport, Local/Everyday Transport.
- Trust section: insured & police-checked drivers, TUSS + NDIS accepted, fleet description, years of experience.
- Testimonials.
- Short FAQ teaser linking to full FAQ page.
- Footer with full contact block + service area list.

### 6.2 Service Pages
- Wheelchair Accessible Taxi (flagship page)
- Airport Transfers (wheelchair-focused)
- Medical & NDIS Transport
- Local/Everyday Transport
Each page: what it solves, vehicle/equipment specifics, process, FAQ, CTA block.

### 6.3 Enquiry Form (accessibility-aware)
Fields:
- Name, phone, email
- Pickup location, destination, date, time
- Wheelchair passenger? (manual / powered / mobility scooter / none)
- Does passenger remain seated in wheelchair during travel? (Y/N)
- Number of passengers / companions
- Return journey details (optional)
- Flight number (optional)
- Additional accessibility notes (free text)
Submission routes to owner's email and/or triggers a WhatsApp deep link pre-filled with the same details.

### 6.4 Contact Options
- Click-to-call
- WhatsApp deep link (wa.me)
- mailto: link
- Contact form (fallback)
- Google Map embed of service area

### 6.5 SEO Pages (phase 2)
- Suburb + accessible-taxi combination pages
- Suburb + airport combination pages
- NDIS transport landing page
- TUSS voucher explainer page
- Blog: "what to check before booking accessible transport," "TUSS vs NDIS explained," "flying into Perth with a wheelchair — what to expect"

## 7. Content Requirements

- Explain TUSS and NDIS in plain English for overseas visitors unfamiliar with Australian schemes.
- Explicit "how it works" section: enquire → owner confirms → fixed price → trip.
- Vehicle/equipment specifics: ramp or lowering-door, tie-down type, whether passenger stays in wheelchair, luggage space.
- Multilingual consideration (optional phase 2) if a meaningful share of visitors are non-English speaking.

## 8. Success Metrics

- WhatsApp/call/email click-through rate from homepage.
- Form completion rate.
- Organic ranking for "wheelchair accessible taxi Perth," "NDIS transport Perth," "disabled taxi Perth airport."
- Time-on-page for the flagship wheelchair service page (proxy for trust-building content working).

## 9. Open Questions for Client

- Does the client accept NDIS-funded bookings, TUSS vouchers, or both?
- What is the actual service area (Perth CBD only, or wider suburbs)?
- Fleet details: number of accessible vehicles, ramp vs lowering-door, max passengers per vehicle.
- Does the client want a blog / ongoing SEO content plan, or a static informational site for v1?
- Preferred primary contact channel to emphasize (WhatsApp vs phone vs email)?
