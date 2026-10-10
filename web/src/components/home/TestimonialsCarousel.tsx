"use client";

import { Star, Quote, ShieldCheck } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  tag: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Margaret H.",
    role: "Daughter of 84yo Passenger",
    location: "Nedlands, WA",
    rating: 5,
    text: "Finding reliable wheelchair transport used to cause anxiety. Jawad's service was on time, gentle with the ramp, and took complete care securely locking the chair. Won't use anyone else.",
    tag: "Medical Visit"
  },
  {
    name: "David K.",
    role: "International Traveler",
    location: "Perth Airport",
    rating: 5,
    text: "Flew into Perth Airport T1 with my powerchair. I was nervous about whether a maxi taxi would turn up. Driver was waiting right at terminal curbside with the ramp deployed.",
    tag: "Airport Transfer"
  },
  {
    name: "Sarah T.",
    role: "NDIS Coordinator",
    location: "Fremantle, WA",
    rating: 5,
    text: "Punctual transport and proper tax invoicing are critical. They send itemized receipts immediately after each trip, making NDIS claims completely effortless for our participants.",
    tag: "NDIS Participant"
  },
  {
    name: "Colin & Joyce B.",
    role: "TUSS Voucher Holders",
    location: "Joondalup, WA",
    rating: 5,
    text: "Courteous, clean vehicle, and they accept WA TUSS vouchers without hesitation. The driver always treats Joyce with warmth and respect rather than rushing. 10/10 recommended.",
    tag: "TUSS Vouchers"
  }
];

export default function TestimonialsCarousel() {
  return (
    <div className="bg-black py-12 md:py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-3 block">Proven Trust</span>
          <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">Real Passenger Reviews</h2>
        </div>

        {/* Horizontal scroll container (3 on desktop, 1 on mobile) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-[85vw] sm:w-[350px] lg:w-[calc(33.333%-1rem)] bg-zinc-900 border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000] relative flex flex-col justify-between"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-white/5" />
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[14px] font-bold text-white leading-relaxed mb-6 italic relative z-10">
                  "{test.text}"
                </p>
              </div>

              <div className="flex items-end justify-between gap-4 mt-auto border-t-2 border-zinc-800 pt-4">
                <div>
                  <h4 className="font-black text-[15px] text-white uppercase tracking-wider">{test.name}</h4>
                  <p className="text-white/60 font-medium text-[11px] mt-1">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
