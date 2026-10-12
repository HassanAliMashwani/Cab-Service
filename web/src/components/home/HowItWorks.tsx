"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Car, Zap, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Choose Vehicle",
    description: "Wheelchair accessible, 7-11 seater, or baby seat taxi for your exact pickup time.",
    icon: Car,
    color: "text-amber-400",
    activeBg: "bg-amber-400",
    hoverBg: "hover:bg-amber-400",
  },
  {
    num: "02",
    title: "Fixed Quote",
    description: "Instant guaranteed upfront price with zero surge fees, day or night.",
    icon: Zap,
    color: "text-sky-400",
    activeBg: "bg-sky-400",
    hoverBg: "hover:bg-sky-400",
  },
  {
    num: "03",
    title: "Punctual Pickup",
    description: "Licensed driver arrives on time with pre-fitted child seats or wheelchair ramps.",
    icon: Clock,
    color: "text-emerald-400",
    activeBg: "bg-emerald-400",
    hoverBg: "hover:bg-emerald-400",
  },
  {
    num: "04",
    title: "Safe Journey",
    description: "Enjoy smooth, direct Perth transit with full luggage space and NDIS care.",
    icon: ShieldCheck,
    color: "text-violet-400",
    activeBg: "bg-violet-400",
    hoverBg: "hover:bg-violet-400",
  },
];

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Sequential auto-cycle highlight loop
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="bg-black border-2 sm:border-4 border-zinc-800 shadow-[4px_4px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] p-4 sm:p-8 lg:p-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6 mb-6 sm:mb-10">
          <div>
            <span className="text-[10px] sm:text-xs font-black text-amber-400 uppercase tracking-[0.25em] block mb-1 sm:mb-2">
              Hassle-Free Booking Process
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              How It Works
            </h2>
          </div>
          <Link
            href="/enquire"
            className="self-start sm:self-end inline-flex items-center gap-1.5 sm:gap-2 bg-amber-400 border-2 sm:border-4 border-black text-black font-black uppercase text-[11px] sm:text-xs px-3.5 sm:px-5 py-2 sm:py-2.5 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all rounded-full sm:rounded-none shrink-0"
          >
            <span>Book Now</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </div>

        {/* Steps – 2 above 2 below on mobile, 4 across on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-zinc-700 bg-zinc-950">
          {steps.map(({ num, title, description, icon: Icon, color, activeBg, hoverBg }, i) => {
            const isActive = activeIndex === i;

            return (
              <div
                key={num}
                onClick={() => setActiveIndex(i)}
                className={`group relative p-3 sm:p-6 lg:p-7 ${
                  i % 2 === 0 ? "border-r-2" : "border-r-0 lg:border-r-2"
                } ${
                  i < 2 ? "border-b-2" : "border-b-0 lg:border-b-0"
                } border-zinc-700 lg:last:border-r-0 cursor-pointer transition-colors duration-200 overflow-hidden ${
                  isActive ? activeBg : `${hoverBg} bg-zinc-950`
                }`}
              >
                {/* Giant background watermark number */}
                <span
                  className={`absolute -right-2 -bottom-2 sm:-right-3 sm:-bottom-4 text-4xl sm:text-7xl lg:text-8xl font-black select-none leading-none pointer-events-none transition-colors duration-200 ${
                    isActive
                      ? "text-black/10"
                      : "text-white/[0.04] group-hover:text-black/10"
                  }`}
                >
                  {num}
                </span>

                {/* Icon box */}
                <div
                  className={`w-9 h-9 sm:w-13 sm:h-13 sm:w-14 sm:h-14 border-2 sm:border-4 flex items-center justify-center mb-2.5 sm:mb-5 transition-colors duration-200 ${
                    isActive
                      ? "border-black bg-black/10"
                      : "border-zinc-700 group-hover:border-black"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 sm:w-7 sm:h-7 transition-colors duration-200 ${
                      isActive ? "text-black" : `${color} group-hover:text-black`
                    }`}
                  />
                </div>

                {/* Step badge */}
                <span
                  className={`text-[9px] sm:text-[11px] font-black uppercase tracking-wider sm:tracking-widest block mb-1 sm:mb-1.5 transition-colors duration-200 ${
                    isActive
                      ? "text-black/70"
                      : "text-zinc-500 group-hover:text-black/70"
                  }`}
                >
                  Step {num}
                </span>

                {/* Title */}
                <h3
                  className={`text-xs sm:text-lg lg:text-xl font-black uppercase tracking-tight transition-colors duration-200 leading-snug mb-1 sm:mb-2 ${
                    isActive ? "text-black" : "text-white group-hover:text-black"
                  }`}
                >
                  {title}
                </h3>

                {/* Description */}
                <p
                  className={`text-[10px] sm:text-xs leading-normal sm:leading-relaxed font-medium transition-colors duration-200 line-clamp-3 sm:line-clamp-none ${
                    isActive ? "text-black/85" : "text-zinc-400 group-hover:text-black/85"
                  }`}
                >
                  {description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
