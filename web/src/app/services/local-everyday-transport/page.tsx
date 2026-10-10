import { CheckCircle2, Car, ShieldCheck, Clock, ArrowRight, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import type { Metadata } from "next";
import Link from "next/link";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Local Everyday Wheelchair Transport Perth | Direct Booking",
  description: "Reliable wheelchair accessible taxi for shopping, social outings, church, and everyday errands across the Perth metropolitan area.",
};

export default function LocalEverydayTransportPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SlideUp>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs sm:text-sm font-semibold mb-6 border border-emerald-500/30">
                <Car className="w-4 h-4" />
                Greater Perth Metropolitan Area
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white tracking-tight">
                Local Everyday Wheelchair Transport
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                Enjoy complete independence and community mobility. Point-to-point accessible travel for shopping, visiting friends, dining out, and family gatherings across Perth.
              </p>
            </SlideUp>

            <SlideUp delay={0.2} className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/enquire"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-full shadow-lg transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <span>Book Local Ride</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/923335028515?text=Hi,%20I%20would%20like%20to%20book%20a%20local%20wheelchair%20taxi%20in%20Perth."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-7 py-3.5 rounded-full transition-all text-sm sm:text-base flex items-center gap-2 shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Us</span>
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
                  Stay Connected with Your Community
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
                  Having a physical disability or limited mobility shouldn't restrict you from living an active, fulfilling life. Whether you need a ride to Westfield Carousel, a weekend lunch in Fremantle, or a visit to family in Joondalup, we ensure you travel with ease.
                </p>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Our ramp-equipped vehicles accommodate manual wheelchairs, electric powerchairs, and mobility scooters with room for companions to ride alongside.
                </p>
              </div>

              {/* What We Support */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Everyday Destinations We Cover
                </h3>
                <ul className="space-y-4">
                  {[
                    "Shopping centers (Westfield Booragoon, Carousel, Karrinyup, Midland Gate)",
                    "Social gatherings, family birthday dinners, and weddings",
                    "Church, community centers, and recreational group activities",
                    "Day-trip outings around Kings Park, Elizabeth Quay, and South Perth Foreshore",
                    "Scheduled return trips with guaranteed pickup times",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
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
                <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                  Book Local Ride
                </h3>
                <p className="text-slate-500 mb-6 text-center text-xs">
                  Fixed pricing across all Perth metropolitan suburbs.
                </p>

                <div className="space-y-3 mb-6">
                  <Link
                    href="/enquire"
                    className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white w-full py-3.5 rounded-full font-bold text-sm transition-colors shadow-sm"
                  >
                    <span>Online Booking Form</span>
                  </Link>
                  <a
                    href="https://wa.me/923335028515?text=Hi,%20I%20would%20like%20to%20book%20a%20local%20wheelchair%20taxi%20in%20Perth."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white w-full py-3.5 rounded-full font-bold text-sm transition-colors shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
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
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Perth Wide Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Guaranteed On-Time Pickups</span>
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
