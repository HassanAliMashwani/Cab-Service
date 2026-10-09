import { MessageCircle, CheckCircle2, ShieldCheck, ArrowRight, Phone, Sliders, Calendar } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Wheelchair Accessible Taxi Perth | Flagship Ramp Service",
  description: "Specialized wheelchair accessible taxi service in Perth. Low-angle ramps, 4-point Q'Straint tie-downs, trained drivers, and transparent fixed pricing.",
};

export default function WheelchairTaxiPage() {
  const specs = [
    { title: "Ramp System", detail: "Heavy-duty low-gradient foldout & hydraulic ramp for smooth boarding" },
    { title: "Door Clearance", detail: "1,550 mm vertical entrance height to accommodate tall powerchairs" },
    { title: "Tie-Down Anchors", detail: "4-point Q'Straint crash-tested floor retractors + lap/sash inertia seatbelt" },
    { title: "Weight Capacity", detail: "Tested to 360 kg max capacity (Manual, motorized, and bariatric chairs)" },
    { title: "Passenger Capacity", detail: "Wheelchair occupant plus up to 4–6 additional family members / companions" },
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SlideUp>
              <span className="inline-block bg-blue-500/20 text-blue-300 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-500/30">
                Flagship Accessibility Fleet
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white tracking-tight">
                Dedicated Wheelchair Accessible Taxi in Perth
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                We believe accessible transport should be dignified, prompt, and completely stress-free. Every vehicle is purpose-engineered to ensure you remain safely seated in your wheelchair.
              </p>
            </SlideUp>

            <SlideUp delay={0.2} className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/enquire"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <span>Book Accessible Taxi</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/61400000000?text=Hi,%20I%20would%20like%20to%20book%20a%20wheelchair%20accessible%20taxi%20in%20Perth."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-7 py-3.5 rounded-xl transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Message on WhatsApp</span>
              </a>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                  Accessibility is Our Core Identity
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
                  Unlike traditional taxi fleets where accessible vans are an occasional afterthought, our service was built specifically around the requirements of wheelchair users, elderly passengers, and disability care providers.
                </p>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Our drivers take the time to properly assist with boarding, inspect harness tension, and drive with smooth acceleration and braking to ensure maximum passenger comfort.
                </p>
              </div>

              {/* Vehicle Specifications */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-blue-600" />
                  Vehicle & Equipment Specifications
                </h3>

                <div className="divide-y divide-slate-100">
                  {specs.map((item, idx) => (
                    <div key={idx} className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <span className="font-bold text-slate-900 text-sm">{item.title}:</span>
                      <span className="text-slate-600 text-sm sm:text-right">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Passenger Benefits on Every Trip
                </h3>
                <ul className="space-y-3.5">
                  {[
                    "Remain comfortably seated in your wheelchair throughout the entire journey",
                    "Certified 4-point floor tie-downs and shoulder harness restraint",
                    "Generous headroom suitable for motorized powerchairs and headrests",
                    "Punctual, guaranteed booking arrival — no cancellations",
                    "Companion seating so family, carers, or friends can travel together",
                    "Western Australia TUSS vouchers accepted with 50% / 75% co-payments",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
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
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                  Book This Service
                </h3>
                <p className="text-slate-500 mb-6 text-center text-xs">
                  Fixed pricing and instant vehicle verification.
                </p>

                <div className="space-y-3 mb-6">
                  <Link
                    href="/enquire"
                    className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white w-full py-3.5 rounded-xl font-bold text-sm transition-colors shadow-sm"
                  >
                    <span>Online Booking Form</span>
                  </Link>

                  <a
                    href="https://wa.me/61400000000?text=Hi,%20I%20need%20a%20wheelchair%20accessible%20taxi%20in%20Perth."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white w-full py-3.5 rounded-xl font-bold text-sm transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Booking</span>
                  </a>

                  <a
                    href="tel:+61400000000"
                    className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 w-full py-3 rounded-xl font-bold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call +61 400 000 000</span>
                  </a>
                </div>

                <div className="border-t border-slate-100 pt-4 text-xs text-slate-500 space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Police-Checked Commercial Drivers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Q'Straint Certified Securement</span>
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
