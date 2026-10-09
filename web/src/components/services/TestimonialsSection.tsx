"use client";

import { Star, Quote, ShieldCheck } from "lucide-react";

const reviews = [
  {
    name: "Marcus & Sarah J.",
    role: "Family of 5",
    rating: 5,
    text: "Landed at T1 with 3 kids, 6 suitcases, and a pram. Driver was waiting curbside with child seats pre-installed. Best airport transfer in Perth!",
    tag: "Airport Transfer",
  },
  {
    name: "David H.",
    role: "NDIS Plan Manager",
    rating: 5,
    text: "The hydraulic ramp and 4-point Q'Straint tie-downs make my father feel completely secure. Always on time for Fiona Stanley appointments.",
    tag: "Wheelchair Access",
  },
  {
    name: "Chloe Henderson",
    role: "Bride",
    rating: 5,
    text: "Two 11-seater Maxi Cabs for our wedding party from Perth CBD to Swan Valley. Drivers were punctual, impeccably dressed, vehicles spotless.",
    tag: "Wedding Shuttle",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-black py-20 px-6 sm:px-10 lg:px-16 border-b-4 border-zinc-800">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <span className="text-[11px] font-black text-amber-400 uppercase tracking-[0.3em] block mb-2">
            Proven Trust
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
            Passenger<br />Reviews
          </h2>
        </div>

        {/* Cards — matching home page brutalist style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000] relative flex flex-col justify-between"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-white/5" />
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[14px] font-bold text-white leading-relaxed mb-6 italic relative z-10">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="flex items-end justify-between gap-4 mt-auto border-t-2 border-zinc-800 pt-4">
                <div>
                  <h4 className="font-black text-[15px] text-white uppercase tracking-wider">{rev.name}</h4>
                  <p className="text-white/60 font-medium text-[11px] mt-1">{rev.role}</p>
                </div>
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
                  <span className="text-[9px] font-black uppercase text-white/40 tracking-widest">{rev.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
