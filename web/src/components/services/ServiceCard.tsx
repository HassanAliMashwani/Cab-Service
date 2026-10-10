"use client";

import Link from "next/link";
import {
  Plane, Accessibility, Sparkles, Users,
  Baby, HeartPulse, Car, Clock,
  ArrowUpRight, Zap, type LucideIcon,
} from "lucide-react";

/* ── Icon registry (client-side only — never passed as props) ── */
const ICON_MAP: Record<string, LucideIcon> = {
  Plane, Accessibility, Sparkles, Users,
  Baby, HeartPulse, Car, Clock,
};

/* ── Gradient presets ── */
type GradientKey = "amber" | "sky" | "violet" | "emerald" | "rose";
const GRADIENTS: Record<GradientKey, string> = {
  amber: "from-amber-400 via-orange-500 to-red-500",
  sky: "from-sky-400 via-blue-500 to-indigo-600",
  violet: "from-violet-500 via-purple-600 to-fuchsia-600",
  emerald: "from-emerald-400 via-teal-500 to-cyan-600",
  rose: "from-rose-400 via-pink-500 to-red-500",
};

export interface ServiceCardProps {
  title: string;
  tagline: string;
  iconName: string;
  features: string[];     // keep short — max 4 words each
  serviceHref: string;
  badgeText?: string;
  gradient?: GradientKey;
}

export default function ServiceCard({
  title,
  tagline,
  iconName,
  features,
  serviceHref,
  badgeText,
  gradient = "amber",
}: ServiceCardProps) {
  const IconComponent = ICON_MAP[iconName] ?? Plane;
  const grad = GRADIENTS[gradient];

  return (
    <div className="group relative overflow-hidden border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[10px_10px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col min-h-[480px]">

      {/* ── Gradient BG ── */}
      <div className={`absolute inset-0 bg-gradient-to-br ${grad}`} />

      {/* ── Oversized decorative background icon ── */}
      <div className="absolute inset-0 flex items-end justify-end pr-4 pb-4 pointer-events-none select-none">
        <IconComponent className="w-64 h-64 text-black opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col h-full">

        {/* Badge */}
        {badgeText && (
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-block px-2.5 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]">
              {badgeText}
            </span>
          </div>
        )}

        {/* Icon + Title */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 pt-14 text-center">
          {/* Glass icon box — brutalist */}
          <div className="w-28 h-28 border-4 border-black bg-black/25 backdrop-blur-sm flex items-center justify-center mb-5 shadow-[4px_4px_0px_0px_#000] group-hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-200">
            <IconComponent className="w-14 h-14 text-white drop-shadow-lg" />
          </div>

          <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight leading-none mb-2 drop-shadow-md">
            {title}
          </h3>
          <p className="text-[11px] font-black text-white/60 uppercase tracking-[0.2em]">
            {tagline}
          </p>
        </div>

        {/* ── Glass Bottom Panel ── */}
        <div className="backdrop-blur-md bg-black/55 border-t-4 border-black p-5">

          {/* Feature chips */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 mb-4">
            {features.slice(0, 4).map((f, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span className="text-[11px] font-black text-white/90 uppercase tracking-wide leading-tight">
                  {f}
                </span>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex gap-2 mt-3">
            <Link
              href={serviceHref}
              className="flex-1 flex items-center justify-center gap-1 px-3 py-2.5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Details
            </Link>
            <Link
              href="/enquire"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white text-black border-2 border-black text-[11px] font-black uppercase tracking-widest hover:bg-amber-400 transition-all shadow-[3px_3px_0px_0px_#000]"
            >
              Book Now
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

