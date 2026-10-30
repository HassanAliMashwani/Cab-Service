import { Users, CheckCircle2, ShieldCheck, ArrowRight, Phone, Calendar, Wine, Briefcase } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import type { Metadata } from "next";
import Link from "next/link";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";

import RelatedServices from "@/components/services/RelatedServices";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Accessible Group Taxi Perth",
  description:
    "Wheelchair accessible maxi taxi for up to 10 passengers across Perth metro. Rear ramp or lift vehicle with flexible seating for family, groups and carers.",
  alternates: {
    canonical: "/services/group-maxi-cab",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Group Maxi Cab Perth",
  description:
    "Wheelchair accessible group taxi vans in Perth carrying up to 10 passengers with rear ramp or lift access, available 24/7.",
  provider: {
    "@type": "TaxiService",
    name: "Perth Wheelchair Taxi Van",
    url: SITE_URL,
    telephone: "+61493252766",
  },
  areaServed: {
    "@type": "City",
    name: "Perth",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Group Maxi Cab Charters",
      item: `${SITE_URL}/services/group-maxi-cab`,
    },
  ],
};

export default function GroupMaxiCabPage() {
  const highlights = [
    { title: "Up to 10 Passengers", desc: "Spacious seating allowing entire groups or large families to ride together without splitting into multiple small cars." },
    { title: "Luggage Space by Arrangement", desc: "Ample room for suitcases, mobility aids, or sports equipment alongside passengers by arrangement." },
    { title: "Pre-Booked Reliability", desc: "Reliable pickup times for early morning flights, corporate conferences, and late-night return events." },
    { title: "Clean & Air-Conditioned", desc: "High-roof Toyota HiAce luxury vans with dual-zone climate control and premium tinted privacy glass." },
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SlideUp>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs sm:text-sm font-semibold mb-6 border border-blue-500/30">
                <Users className="w-4 h-4" />
                Up to 10 Passengers Maxi Van Fleet
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white tracking-tight">
                Spacious 7–11 Seater Maxi Cab in Perth
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                Travel together comfortably. Whether it’s Perth Airport transfers with luggage, wedding parties, corporate events, or Swan Valley winery tours, our high-capacity maxi cabs handle your entire group.
              </p>
              <p className="mt-3 text-sm text-amber-300 font-semibold">
                Our vehicles are fully <Link href="/services/wheelchair-accessible-taxi" className="underline underline-offset-4 hover:text-white">wheelchair accessible</Link> with rear ramp or lift access.
              </p>
            </SlideUp>

            <SlideUp delay={0.2} className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/enquire"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-full shadow-lg transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <span>Book Maxi Cab</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/61493252766?text=Hi,%20I%20would%20like%20to%20book%20a%20Maxi%20Cab%20in%20Perth."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-7 py-3.5 rounded-full transition-all text-sm sm:text-base flex items-center gap-2 shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                  Why Split Into Multiple Taxis When You Can Ride Together?
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
                  Coordinating multiple small rideshares for a group often leads to mismatched arrival times, surge pricing, and luggage that won’t fit. With our Maxi Cabs for up to 10 passengers, your whole group travels together in a clean, modern, air-conditioned vehicle with an upfront quote.
                </p>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Every driver is licensed by the Western Australia Department of Transport, police-checked, and deeply familiar with Perth roads, Perth Airport pickup forecourts, and popular tourist destinations.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((h, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                    <h3 className="font-bold text-slate-900 text-base mb-2">{h.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>

              {/* Occasions */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Perfect For Every Group Occasion
                </h3>
                <ul className="space-y-3.5">
                  {[
                    "Perth Airport Arrivals & Departures (T1, T2, T3, T4) with luggage by arrangement",
                    "Weddings, reception guest shuttles, and bachelor/bachelorette celebrations",
                    "Swan Valley wine tours, Bickley Valley cider tastings, and coastal trips",
                    "Corporate delegates, team off-sites, and Perth Convention Centre transit",
                    "Family holiday transfers with prams, strollers, and boogie boards",
                    "Optus Stadium and RAC Arena sports & concert group transport"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sticky top-28 shadow-lg">
                <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                  Book a Maxi Cab
                </h3>
                <p className="text-slate-500 mb-6 text-center text-xs">
                  Upfront quotes, reliable service, and 24/7 availability.
                </p>

                <div className="space-y-3 mb-6">
                  <Link
                    href="/enquire"
                    className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white w-full py-3.5 rounded-full font-bold text-sm transition-colors shadow-sm"
                  >
                    <span>Instant Booking Form</span>
                  </Link>

                  <a
                    href="https://wa.me/61493252766?text=Hi,%20I%20need%20a%20Maxi%20Cab%20for%20a%20group%20booking%20in%20Perth."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white w-full py-3.5 rounded-full font-bold text-sm transition-colors shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <a
                    href="tel:+61493252766"
                    className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 w-full py-3 rounded-full font-bold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call +61 493 252 766</span>
                  </a>
                </div>

                <div className="border-t border-slate-100 pt-4 text-xs text-slate-500 space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Carries Up to 10 Passengers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Upfront Quotes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices currentSlug="group-maxi-cab" />
    </div>
  );
}
