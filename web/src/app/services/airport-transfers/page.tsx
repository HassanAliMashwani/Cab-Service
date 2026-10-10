import { Plane, CheckCircle2, ShieldCheck, Clock, Luggage, ArrowRight, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import type { Metadata } from "next";
import Link from "next/link";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Wheelchair Accessible Airport Transfers Perth (PER) | Direct Meet & Greet",
  description: "Pre-book your wheelchair accessible airport transfer in Perth. Real-time flight tracking, dedicated curbside ramp boarding at Terminals 1, 2, 3 & 4.",
};

export default function AirportTransfersPage() {
  const terminals = [
    { code: "T1 International & Domestic", airlines: "Singapore Airlines, Emirates, Qatar, AirNZ, Virgin Domestic", gate: "Dedicated commercial accessible pickup bay" },
    { code: "T2 Regional", airlines: "Virgin Regional, Alliance, Regional WA flights", gate: "Direct curbside disabled parking bay" },
    { code: "T3 Domestic", airlines: "Jetstar, Regional FIFO charter departures", gate: "Sheltered terminal arrival lane" },
    { code: "T4 Qantas Domestic & Int'l", airlines: "Qantas Group domestic and international flights", gate: "Immediate arrivals forecourt access" },
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SlideUp>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-semibold mb-6 border border-amber-500/30">
                <Plane className="w-4 h-4" />
                Perth Airport (PER) Specialist
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white tracking-tight">
                Wheelchair Accessible Perth Airport Transfers
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                Arriving or departing Perth Airport? We monitor your flight live, wait curbside with the ramp deployed, and assist with all luggage into your hotel or home.
              </p>
            </SlideUp>

            <SlideUp delay={0.2} className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/enquire"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-full shadow-lg transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <span>Book Airport Transfer</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/923335028515?text=Hi,%20I%20would%20like%20to%20book%20an%20accessible%20Perth%20Airport%20transfer."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-7 py-3.5 rounded-full transition-all text-sm sm:text-base flex items-center gap-2 shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Driver</span>
              </a>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                  Stress-Free Airport Arrivals for Overseas & Interstate Visitors
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
                  Long-haul flights and disembarking in a wheelchair can be exhausting. Standard taxi ranks at Perth Airport rarely have ramp-equipped vehicles waiting on demand, leading to unpredictable waiting times.
                </p>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  When you pre-book with us, our driver monitors your inbound flight radar. We account for customs clearance or baggage handling delays, ensuring your taxi is ready when you step through terminal doors.
                </p>
              </div>

              {/* Terminal Guide */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Plane className="w-5 h-5 text-amber-600" />
                  Terminals We Serve at Perth Airport (PER)
                </h3>

                <div className="space-y-4">
                  {terminals.map((t, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="font-bold text-slate-900 text-sm">{t.code}</h4>
                        <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                          Curbside Access
                        </span>
                      </div>
                      <p className="text-slate-600 text-xs mb-1">Airlines: {t.airlines}</p>
                      <p className="text-slate-400 text-xs italic">Pickup Location: {t.gate}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Airport Transfer Features
                </h3>
                <ul className="space-y-3.5">
                  {[
                    "Live flight tracking (no penalty fees for delayed or early landings)",
                    "Direct meet-and-greet curbside with heavy-duty wheelchair ramp ready",
                    "Massive luggage capacity for 3–4 large suitcases plus medical gear",
                    "Fixed transparent rates without hidden toll or surge charges",
                    "Assistance with boarding, luggage loading, and hotel check-in drop-off",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sticky Sidebar Booking */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sticky top-28 shadow-lg">
                <div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                  Book Airport Transfer
                </h3>
                <p className="text-slate-500 mb-6 text-center text-xs">
                  Provide flight number and hotel destination for fixed quote.
                </p>

                <div className="space-y-3 mb-6">
                  <Link
                    href="/enquire"
                    className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white w-full py-3.5 rounded-full font-bold text-sm transition-colors shadow-sm"
                  >
                    <span>Online Airport Booking</span>
                  </Link>
                  <a
                    href="https://wa.me/923335028515?text=Hi,%20I%20need%20an%20accessible%20taxi%20transfer%20to/from%20Perth%20Airport."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white w-full py-3.5 rounded-full font-bold text-sm transition-colors shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp Booking</span>
                  </a>
                  <a
                    href="tel:+61424791786"
                    className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 w-full py-3 rounded-full font-bold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call +61 424 791 786</span>
                  </a>
                </div>

                <div className="border-t border-slate-100 pt-4 text-xs text-slate-500 space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>24/7 International Flight Coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Luggage className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Full Luggage Support Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
