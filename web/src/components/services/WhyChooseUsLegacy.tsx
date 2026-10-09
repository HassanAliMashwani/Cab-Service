"use client";

import { 
  ShieldCheck, 
  Clock, 
  HeartHandshake, 
  Award, 
  CalendarCheck, 
  CheckCircle2, 
  Phone, 
  Star 
} from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function WhyChooseUsLegacy() {
  const checklist = [
    {
      title: "Professional Drivers",
      desc: "Every driver is fully licensed by the Western Australia Department of Transport, police-checked, and trained in passenger assistance.",
    },
    {
      title: "Consistent Reliability",
      desc: "Guaranteed on-time arrivals with live traffic planning and Perth Airport flight status monitoring for early or delayed landings.",
    },
    {
      title: "Community Focused",
      desc: "Dedicated to accessible transport, wheelchair passengers, hospital visits, elderly care, and welcoming local families.",
    },
    {
      title: "Proven Track Record",
      desc: "Over 15,000 successful trips across Greater Perth with an exceptional 4.9/5 star passenger satisfaction rating.",
    },
    {
      title: "Years of Trusted Service",
      desc: "5+ years of dedicated transport excellence delivering clean, comfortable, and reliable 7–11 seater maxi cabs.",
    },
  ];

  const stats = [
    { value: "5+", label: "Years of Service" },
    { value: "15K+", label: "Happy Passengers" },
    { value: "8,500+", label: "Airport Transfers" },
    { value: "24/7", label: "Availability" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Image with Floating Badge (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
                alt="Professional Perth Maxi Cab Fleet and Driver"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-slate-900">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                    <Star className="w-5 h-5 fill-slate-950" />
                  </div>
                  <div>
                    <span className="font-extrabold text-sm block">4.9 / 5 Star Rating</span>
                    <span className="text-xs text-slate-600">Based on 500+ verified customer reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-6 -right-4 sm:-right-6 bg-slate-950 text-white p-5 rounded-3xl shadow-xl border-2 border-amber-500/50 max-w-[200px] hidden sm:block">
              <span className="text-3xl font-black text-amber-400 block font-mono">5+ Years</span>
              <span className="text-xs font-semibold text-slate-300 leading-snug block mt-1">
                Of Trusted Excellence in Perth Transport
              </span>
            </div>
          </div>

          {/* Column 2: Content & Checklist (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <SectionHeading
                badge="Our Legacy"
                title="Why Choose Perth Maxi Cab?"
                subtitle="We combine clean, high-capacity vehicles with punctual, courteous drivers to make group and accessible travel effortless."
                align="left"
              />
            </div>

            {/* Checklist */}
            <div className="space-y-4">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stat Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-slate-900 text-white p-4 sm:p-5 rounded-2xl text-center border border-slate-800 shadow-sm">
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono block mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-slate-300 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct Call / Booking CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="tel:+61424791786"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us: +61 424 791 786</span>
              </a>

              <span className="text-xs text-slate-500 font-medium">
                Direct phone booking • Instant fixed quote
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
