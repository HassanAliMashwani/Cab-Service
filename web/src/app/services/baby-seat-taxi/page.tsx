import { Baby, ShieldCheck, CheckCircle2, ArrowRight, Phone, Heart, Users, Sparkles } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import type { Metadata } from "next";
import Link from "next/link";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Maxi Taxi with Baby Seat Perth | Certified Child & Booster Seats",
  description: "Book a Maxi Taxi in Perth equipped with certified baby capsules, toddler car seats, and booster seats (AS/NZS 1754). Sanitized and securely installed for stress-free family travel.",
};

export default function BabySeatTaxiPage() {
  const seatTypes = [
    {
      name: "Infant Capsule (Rear-Facing)",
      age: "0 – 6 Months (Up to ~9kg)",
      desc: "Deep contoured ergonomic shell with padded infant inserts, 5-point harness, and sun canopy for newborn safety.",
      features: ["AS/NZS 1754 Certified", "Rearward tethered", "Deep side impact protection"]
    },
    {
      name: "Forward-Facing Child Seat",
      age: "6 Months – 4 Years (8kg – 18kg)",
      desc: "Comfortable upright seat with multi-position recline, adjustable headrest, and secure 5-point harness system.",
      features: ["Factory anchor tethered", "Padded chest straps", "Pram-compatible travel"]
    },
    {
      name: "Booster Seat",
      age: "4 – 7+ Years (14kg – 26kg+)",
      desc: "Elevated high-back or cushion booster ensuring proper sash seatbelt geometry across your child's shoulder and pelvis.",
      features: ["Anti-submarining design", "Contoured armrests", "Safe lap-sash positioning"]
    }
  ];

  const benefits = [
    {
      title: "AS/NZS 1754 Australian Standards",
      desc: "We exclusively carry premium car seats that strictly comply with Australian Safety Standard AS/NZS 1754, never generic or expired restraints."
    },
    {
      title: "Pre-Installed & Safety Inspected",
      desc: "Your driver installs and verifies the restraint using certified vehicle anchor points prior to arriving at your doorstep or airport terminal."
    },
    {
      title: "Hospital-Grade Sanitization",
      desc: "Every baby seat and booster is thoroughly vacuumed, steam-cleaned, and disinfected between family bookings for total hygiene."
    },
    {
      title: "Multiple Seats Available",
      desc: "Traveling with twins, triplets, or multiple young siblings? We can equip our spacious Maxi Cabs with 2, 3, or even 4 child seats simultaneously."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SlideUp>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-semibold mb-6 border border-amber-500/30">
                <Baby className="w-4 h-4" />
                Family Safety Priority
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white tracking-tight">
                Maxi Taxi with Baby Seat & Child Restraints Perth
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                Traveling with infants or young children? Don’t risk dragging heavy car seats through Perth Airport. We provide spotless, certified baby capsules, toddler seats, and boosters pre-installed in spacious Maxi Cabs.
              </p>
            </SlideUp>

            <SlideUp delay={0.2} className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/enquire"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-full shadow-lg transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <span>Book Taxi with Baby Seat</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/923335028515?text=Hi,%20I%20would%20like%20to%20book%20a%20Maxi%20Taxi%20with%20a%20Baby%20Seat%20in%20Perth."
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
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                  Safe, Stress-Free Travel for Perth Families
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
                  Under Western Australian road safety laws, children under 7 years of age must be secured in an approved, properly fastened child restraint. While regular taxis are technically exempt in certain circumstances, your child’s life should never depend on an exemption.
                </p>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Our family-friendly Maxi Cabs provide top-tier safety. Whether arriving at Perth Airport after a long flight or heading out for a day trip to Rottnest ferry or Hillarys Boat Harbour, your children ride safely anchored with zero hassle.
                </p>
              </div>

              {/* Seat Types Breakdown */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Available Child Restraint Options
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {seatTypes.map((seat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-4">
                          <Baby className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-base mb-1">{seat.name}</h4>
                        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block mb-3">
                          {seat.age}
                        </span>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                          {seat.desc}
                        </p>
                      </div>
                      <ul className="border-t border-slate-100 pt-3 space-y-1.5 text-xs text-slate-500">
                        {seat.features.map((f, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Why Perth Parents Choose Our Service
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((b, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <ShieldCheck className="w-5 h-5 text-emerald-600" />
                        <h4 className="font-bold text-slate-900 text-base">{b.title}</h4>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Airport & Luggage note */}
              <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-300">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Perth Airport Transfers with Prams & Bulky Luggage
                  </h3>
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  Traveling with babies often means bulky double prams, portacots, and endless suitcases. Regular sedans simply don't have the trunk space. Our high-roof Maxi Cabs comfortably hold all your baby gear and suitcases with room to spare.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-blue-200">
                  <span className="bg-white/10 px-3 py-1.5 rounded-lg">✓ Terminals T1, T2, T3 & T4</span>
                  <span className="bg-white/10 px-3 py-1.5 rounded-lg">✓ Curbside Terminal Meet & Greet</span>
                  <span className="bg-white/10 px-3 py-1.5 rounded-lg">✓ Zero Surge Pricing</span>
                </div>
              </div>
            </div>

            {/* Sidebar Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Baby className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Pre-Book Child Seat</h3>
                    <p className="text-xs text-slate-500">Fixed rate • Seats verified prior to arrival</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6 text-sm text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>State which seat types your children need in the notes</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Up to 11 passenger seating capacity + huge boot space</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Flight delay monitoring for airport arrivals</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/enquire"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-full text-center block text-sm transition-all shadow-md"
                  >
                    Online Booking Form
                  </Link>

                  <a
                    href="https://wa.me/923335028515?text=Hi,%20I'd%20like%20to%20reserve%20a%20Maxi%20Taxi%20with%20a%20Baby%20Seat."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-4 rounded-full text-center flex items-center justify-center gap-2 text-sm transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp Instant Quote</span>
                  </a>

                  <a
                    href="tel:+61424791786"
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-full text-center flex items-center justify-center gap-2 text-xs transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Driver Dispatch: +61 424 791 786</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
