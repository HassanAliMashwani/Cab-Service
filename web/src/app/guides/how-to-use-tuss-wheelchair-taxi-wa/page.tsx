import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, FileText, Phone } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "How to Use TUSS Vouchers for Wheelchair Taxis in WA | Guide",
  description:
    "Complete guide to Western Australia's Taxi User Subsidy Scheme (TUSS). Learn how 50% & 75% vouchers work, driver sign-offs, co-payments, and booking advice.",
  alternates: {
    canonical: `${SITE_URL}/guides/how-to-use-tuss-wheelchair-taxi-wa`,
  },
  openGraph: {
    title: "How to Use TUSS Vouchers for Wheelchair Taxis in WA | Guide",
    description:
      "Understand WA TUSS taxi vouchers: eligibility, subsidy rates, co-payment caps, and how to use your voucher book for accessible taxi travel in Perth.",
    url: `${SITE_URL}/guides/how-to-use-tuss-wheelchair-taxi-wa`,
    type: "article",
    siteName: SITE_CONFIG.name,
    locale: "en_AU",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "WA TUSS Wheelchair Taxi Guide",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/guides/how-to-use-tuss-wheelchair-taxi-wa#article`,
      headline: "How to Use the Taxi User Subsidy Scheme (TUSS) for Wheelchair Trips in WA",
      description:
        "Official explanation of Western Australia TUSS taxi voucher scheme: voucher booklets, 50% and 75% co-payments, and booking accessible maxi taxi vans.",
      image: `${SITE_URL}/images/og-image.jpg`,
      inLanguage: "en-AU",
      mainEntityOfPage: `${SITE_URL}/guides/how-to-use-tuss-wheelchair-taxi-wa`,
      publisher: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: SITE_URL,
      },
      author: {
        "@type": "Organization",
        name: "Perth Wheelchair Taxi Van Editorial Team",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Use TUSS Vouchers in WA",
          item: `${SITE_URL}/guides/how-to-use-tuss-wheelchair-taxi-wa`,
        },
      ],
    },
  ],
};

export default function HowToUseTUSSPage() {
  return (
    <article className="flex flex-col w-full bg-black text-white min-h-screen">
      <JsonLd data={articleSchema} />

      <header className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full border-b border-zinc-900">
        <SlideUp>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Government Subsidy Guide
            </span>
            <span className="text-xs text-zinc-500">• 5 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.05] text-white mb-6">
            How to Use TUSS for Wheelchair Taxi Trips in Western Australia
          </h1>

          <div className="p-5 sm:p-6 bg-zinc-950 border-2 border-emerald-500/40 rounded-2xl mb-4">
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
              <strong>The WA Taxi User Subsidy Scheme (TUSS) provides 50% or 75% subsidies for eligible Western Australian residents with permanent disabilities.</strong> When travelling with Perth Wheelchair Taxi Van, hand your signed TUSS voucher to the driver at the end of the journey, who deducts the government subsidy up to state caps, leaving you to pay only the remaining co-payment.
            </p>
          </div>
        </SlideUp>
      </header>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
            What is the Taxi User Subsidy Scheme (TUSS)?
          </h2>
          <p className="mb-3">
            TUSS is administered by the <strong>Western Australia Department of Transport (DoT)</strong>. It is designed to assist people who are prevented by a permanent disability from using conventional public bus and train services. Eligible participants receive voucher books containing either green or blue vouchers corresponding to their approved subsidy rate.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
            50% vs. 75% Subsidy Tiers Explained
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl">
              <span className="text-emerald-400 font-bold uppercase text-xs block mb-1">Tier 1: 50% Subsidy</span>
              <p className="text-zinc-300 text-xs leading-relaxed">
                Allocated to participants who have severe mobility impairments or medical conditions that prevent public transport use, but do not always require a wheelchair. Subsidises 50% of the metered fare up to the regulated cap per trip.
              </p>
            </div>
            <div className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl">
              <span className="text-amber-400 font-bold uppercase text-xs block mb-1">Tier 2: 75% Subsidy (Wheelchair Users)</span>
              <p className="text-zinc-300 text-xs leading-relaxed">
                Allocated to people who are permanently confined to a wheelchair or require specialised wheelchair accessible transport. Covers 75% of the fare up to the state maximum subsidy threshold per journey.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
            Step-by-Step: Using Your TUSS Voucher on a Trip
          </h2>
          <ol className="space-y-3 pl-2">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
              <span><strong>Book in Advance:</strong> When booking via phone or WhatsApp, inform the dispatcher that you will be presenting a TUSS voucher so the driver is prepared.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
              <span><strong>Bring Your Voucher Book:</strong> The participant whose name appears on the voucher book must be present on the trip. Vouchers cannot be transferred to third parties.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
              <span><strong>Sign the Voucher:</strong> At the destination, the driver records the trip details, total fare, and subsidy deduction. The participant or authorized companion signs the voucher.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
              <span><strong>Pay Remaining Co-Payment:</strong> Settle the balance via EFTPOS, Visa, Mastercard, or cash.</span>
            </li>
          </ol>
        </div>

        <div className="p-6 bg-zinc-950 border border-emerald-500/40 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white uppercase">Ready to Book with TUSS Vouchers?</h3>
            <p className="text-xs text-zinc-400 mt-1">We accept WA TUSS vouchers on all journeys across Perth 24 hours a day.</p>
          </div>
          <Link
            href="/enquire"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs uppercase tracking-wider shrink-0"
          >
            <span>Book with TUSS</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </article>
  );
}

