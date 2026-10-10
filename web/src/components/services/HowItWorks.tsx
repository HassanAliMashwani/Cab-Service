"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  CheckCircle2,
  MapPin,
  Smile,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";

export interface StepItem {
  num: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  activeBg: string;
  hoverBg: string;
  activeShadow: string;
}

const steps: StepItem[] = [
  {
    num: "01",
    title: "Request a Quote",
    description:
      "Submit your booking details online or message our dispatch team directly on WhatsApp for an immediate response.",
    icon: FileText,
    color: "text-amber-400",
    activeBg: "bg-amber-400",
    hoverBg: "hover:border-amber-400",
    activeShadow: "shadow-[6px_6px_0px_0px_#facc15]",
  },
  {
    num: "02",
    title: "Get Fixed Price",
    description:
      "Receive guaranteed upfront transparent pricing with zero airport surge fees and no credit card surcharges.",
    icon: CheckCircle2,
    color: "text-sky-400",
    activeBg: "bg-sky-400",
    hoverBg: "hover:border-sky-400",
    activeShadow: "shadow-[6px_6px_0px_0px_#38bdf8]",
  },
  {
    num: "03",
    title: "Driver Arrives",
    description:
      "Our accredited driver arrives promptly with hydraulic wheelchair ramp or child seats ready for a safe boarding.",
    icon: MapPin,
    color: "text-emerald-400",
    activeBg: "bg-emerald-400",
    hoverBg: "hover:border-emerald-400",
    activeShadow: "shadow-[6px_6px_0px_0px_#34d399]",
  },
  {
    num: "04",
    title: "Enjoy the Ride",
    description:
      "Relax in spacious, air-conditioned comfort with 4-point Q'Straint tie-downs and professional courteous service.",
    icon: Smile,
    color: "text-violet-400",
    activeBg: "bg-violet-400",
    hoverBg: "hover:border-violet-400",
    activeShadow: "shadow-[6px_6px_0px_0px_#a78bfa]",
  },
];

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance step every 3 seconds in a continuous loop: 1 -> 2 -> 3 -> 4 -> 1
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-zinc-950 border-b-4 border-zinc-800 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-black text-amber-400 uppercase tracking-[0.3em] block mb-2">
              Seamless Process
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
              How It<br />Works
            </h2>
          </div>

          <div className="flex items-center gap-6">
            {/* Step Counter Indicator */}
            <div className="text-left sm:text-right">
              <span className="text-[11px] font-black uppercase tracking-widest text-zinc-400 block mb-1">
                Active Step
              </span>
              <span className="text-2xl font-black text-amber-400 tabular-nums">
                0{activeIndex + 1}{" "}
                <span className="text-zinc-600 text-lg">/ 0{steps.length}</span>
              </span>
            </div>

            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 border-2 border-black text-black font-black uppercase text-xs px-6 py-3.5 rounded-full shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              <span>Book Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Dynamic 3-Second Loop Progress Track */}
        <div className="w-full bg-zinc-900 h-1.5 rounded-full mb-8 overflow-hidden">
          <div
            className="h-full bg-amber-400 transition-all duration-700 ease-out"
            style={{ width: `${((activeIndex + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* 4 Steps Grid: Automatic 3s rotation across cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((step, i) => {
            const isActive = activeIndex === i;
            const Icon = step.icon;

            return (
              <div
                key={step.num}
                onClick={() => setActiveIndex(i)}
                className={`group relative p-7 sm:p-8 rounded-3xl border-4 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[300px] cursor-pointer ${
                  isActive
                    ? `${step.activeBg} border-black ${step.activeShadow} -translate-y-2 scale-[1.02]`
                    : "bg-zinc-900 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850"
                }`}
              >
                {/* Giant watermark number */}
                <span
                  className={`absolute -right-2 -bottom-5 text-[7rem] sm:text-[7.5rem] font-black select-none leading-none pointer-events-none transition-colors ${
                    isActive ? "text-black/10" : "text-white/[0.04]"
                  }`}
                >
                  {step.num}
                </span>

                <div className="relative z-10">
                  {/* Icon Box */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 flex items-center justify-center mb-6 transition-all duration-300 shadow-sm ${
                      isActive
                        ? "border-black bg-black/10 text-black scale-105"
                        : "border-zinc-700 bg-zinc-950 text-white"
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                        isActive ? "text-black" : step.color
                      }`}
                    />
                  </div>

                  {/* Step label */}
                  <span
                    className={`text-[11px] font-black uppercase tracking-widest block mb-2 transition-colors ${
                      isActive ? "text-black/70" : "text-zinc-500"
                    }`}
                  >
                    Step {step.num}
                  </span>

                  {/* Title */}
                  <h3
                    className={`text-xl sm:text-2xl font-black uppercase tracking-tight mb-3 transition-colors ${
                      isActive ? "text-black" : "text-white"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm font-medium leading-relaxed transition-colors ${
                      isActive ? "text-black/85 font-semibold" : "text-zinc-400"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Status Indicator */}
                <div className="relative z-10 pt-4 mt-4 border-t border-black/10 flex items-center justify-between text-xs font-bold">
                  {isActive ? (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-black bg-black/10 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                      Active Step
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300">
                      Step {step.num} of 4
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
