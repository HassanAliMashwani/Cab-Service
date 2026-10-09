import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, ArrowRight, Phone, HelpCircle } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Perth Accessible Taxi",
  description: "Common questions about booking wheelchair accessible taxis in Perth: vehicle ramps, Q'Straint tie-downs, airport transfers, NDIS claiming, and TUSS vouchers.",
};

export default function FAQPage() {
  const categories = [
    {
      title: "Booking & Pricing",
      faqs: [
        {
          q: "Do I need to book in advance?",
          a: "We strongly recommend booking at least 12–24 hours in advance to guarantee vehicle allocation, particularly for airport arrivals, hospital clinics, and weekend events. However, we also take same-day bookings subject to current driver location."
        },
        {
          q: "How does your pricing work? Are there surge rates?",
          a: "We offer clear, upfront fixed-price quotes. There is no dynamic surge pricing during busy hours or rainy days. The quote we confirm is the exact fare you pay."
        },
        {
          q: "How do I pay for my journey?",
          a: "We accept all major credit and debit cards (Visa, Mastercard, Amex), EFTPOS in-vehicle, cash, Western Australia TUSS vouchers, and direct invoicing for registered NDIS plan managers."
        }
      ]
    },
    {
      title: "Wheelchair & Vehicle Equipment",
      faqs: [
        {
          q: "Can I remain seated in my wheelchair during the journey?",
          a: "Yes. Our vehicles are equipped with certified low-gradient ramps and 4-point Q'Straint self-tensioning retractors plus a crash-tested passenger lap and diagonal sash belt. You do not need to transfer."
        },
        {
          q: "What types of wheelchairs can you accommodate?",
          a: "We accommodate standard manual wheelchairs, heavy motorized powerchairs, pediatric wheelchairs, and 3- or 4-wheel mobility scooters with up to 360 kg total certified capacity."
        },
        {
          q: "How many family members or companions can travel with me?",
          a: "Our accessible maxi taxis seat the wheelchair passenger plus up to 4 to 6 additional family members, friends, or support staff, all traveling together in the same vehicle."
        }
      ]
    },
    {
      title: "Perth Airport Transfers",
      faqs: [
        {
          q: "What happens if my inbound flight into Perth is delayed?",
          a: "We track your flight number in real time via live radar. If your flight is delayed or lands early, our driver automatically adjusts pickup timing without any waiting or penalty fees."
        },
        {
          q: "Where do we meet the driver at Perth Airport?",
          a: "Our driver meets you right at the designated accessible commercial arrivals pickup bay outside Terminals 1, 2, 3 or 4 with the vehicle ramp prepared."
        },
        {
          q: "How much luggage can fit with the wheelchair?",
          a: "Our accessible vehicles feature an expansive luggage area that comfortably holds 3–4 large travel suitcases plus smaller carry-ons, walking frames, or oxygen equipment."
        }
      ]
    },
    {
      title: "NDIS & TUSS Vouchers",
      faqs: [
        {
          q: "How do I claim trips through my NDIS plan?",
          a: "We provide an itemized tax invoice containing all necessary details (ABN, route, date, wheelchair transport line item). Self-managed participants can claim immediately through the NDIS Myplace portal, and plan-managed participants can have invoices forwarded to their plan manager."
        },
        {
          q: "Do you accept Western Australia TUSS vouchers?",
          a: "Yes, we accept Western Australia Taxi User Subsidy Scheme (TUSS) vouchers. Hand the voucher from your book to the driver, and you pay only the subsidized co-payment (typically 25% or 50% of the fare)."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp className="max-w-3xl">
            <span className="inline-block bg-white/10 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Help Center & FAQs
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
              Find clear answers regarding wheelchair equipment, vehicle dimensions, airport meet-and-greets, and billing options.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-3">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                {cat.title}
              </h2>
              <div className="space-y-4">
                {cat.faqs.map((faq, i) => (
                  <FadeIn key={i} delay={0.05 * i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-base sm:text-lg font-bold mb-2 text-slate-900">{faq.q}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Box */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-3 text-white">Still have a specific question?</h2>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto text-sm">
              We are happy to answer any questions about wheelchair dimensions, customized routes, or medical appointment schedules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/61400000000?text=Hi,%20I%20have%20a%20question%20about%20your%20wheelchair%20accessible%20taxi%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-7 py-3.5 rounded-xl font-bold transition-colors text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-7 py-3.5 rounded-xl font-bold transition-colors text-sm"
              >
                <span>Book a Ride Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
