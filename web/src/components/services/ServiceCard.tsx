"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Plane, Accessibility, Sparkles, Users,
  Baby, HeartPulse, Car, Clock,
  ArrowUpRight, Zap, X, CheckCircle, Phone,
  type LucideIcon,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

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

const GRADIENT_SOLID: Record<GradientKey, string> = {
  amber:   "bg-amber-500",
  sky:     "bg-sky-500",
  violet:  "bg-violet-600",
  emerald: "bg-emerald-500",
  rose:    "bg-rose-500",
};

export interface ServiceCardProps {
  title: string;
  tagline: string;
  iconName: string;
  features: string[];     // keep short — max 4 words each
  serviceHref: string;
  badgeText?: string;
  gradient?: GradientKey;
  description?: string;   // concise popup description
}

/* ── Service detail descriptions ── */
const SERVICE_DESCRIPTIONS: Record<string, string> = {
  "Airport Transfer":
    "Reliable 7–11 seater maxi cab transfers to and from Perth Airport terminals T1, T2, T3 & T4. We monitor live flight arrivals so your driver is always there on time — no waiting, no surge pricing, ever.",
  "Wheelchair Access":
    "Fully certified wheelchair-accessible maxi cabs with hydraulic ramps and Q'Straint 4-point tie-down systems. NDIS and TUSS invoicing available. Passengers travel safely in their own chair.",
  "Weddings & Events":
    "Premium group transport for weddings, corporate events, Swan Valley wine tours and special celebrations. Tinted windows, dual-zone climate control, and multi-stop flexibility for your party.",
  "Family & Groups":
    "Spacious 7–11 seater Toyota HiAce vans with pre-installed baby seats, pram storage and ample luggage room. Fixed pricing across all Perth suburbs — perfect for family outings and group travel.",
  "Baby Seat Taxi":
    "Pre-installed infant capsules and forward-facing child seats in every vehicle. Professionally fitted, Australian-standard approved, and always sanitised between rides for your little one's safety.",
  "Medical Transport":
    "Compassionate door-to-door medical transport to Fiona Stanley, Royal Perth, Sir Charles Gairdner and all WA hospitals. Wheelchair-ready vehicles with patient assistance from trained drivers.",
  "Local Events":
    "Get to Optus Stadium, Crown Perth, RAC Arena and Perth's biggest concerts hassle-free. Group capacity means your whole crew travels together at one fixed fare — no surge.",
  "Group Maxi Cab":
    "Spacious 7–11 seater Toyota HiAce vans for families, corporate events, and Swan Valley tours. Fixed pricing, clean vehicles, and professional drivers across all Perth suburbs.",
};

export default function ServiceCard({
  title,
  tagline,
  iconName,
  features,
  serviceHref,
  badgeText,
  gradient = "amber",
  description,
}: ServiceCardProps) {
  const IconComponent = ICON_MAP[iconName] ?? Plane;
  const grad = GRADIENTS[gradient];
  const solidBg = GRADIENT_SOLID[gradient];
  const [isOpen, setIsOpen] = useState(false);

  const finalDescription = description || SERVICE_DESCRIPTIONS[title] || "";

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        className="group relative overflow-hidden border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[10px_10px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col min-h-[480px] cursor-pointer text-left focus:outline-none focus:ring-4 focus:ring-amber-400"
      >

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

            {/* CTA row — Details opens popup instead of navigation */}
            <div className="flex gap-2 mt-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(true);
                }}
                className="flex-1 flex items-center justify-center gap-1 px-3 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer"
              >
                Details
              </button>
              <Link
                href="/enquire"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-white text-black border-2 border-black text-[11px] font-black uppercase tracking-widest hover:bg-amber-400 transition-all shadow-[3px_3px_0px_0px_#000]"
              >
                Book Now
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          POPUP MODAL — Service Details
         ═══════════════════════════════════════════════════════ */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn" />

          {/* Modal Card */}
          <div
            className="relative w-full max-w-lg bg-zinc-950 border-4 border-black shadow-[10px_10px_0px_0px_#000] animate-popIn overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Gradient Header ── */}
            <div className={`relative bg-gradient-to-br ${grad} p-6 sm:p-8`}>
              {/* Decorative watermark */}
              <div className="absolute -right-8 -bottom-6 pointer-events-none select-none opacity-[0.08]">
                <IconComponent className="w-44 h-44 text-black" />
              </div>

              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-all z-10 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Badge */}
              {badgeText && (
                <span className="inline-block px-2.5 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)] mb-4">
                  {badgeText}
                </span>
              )}

              <div className="relative z-10 flex items-center gap-4">
                <div className="w-16 h-16 border-4 border-black bg-black/25 backdrop-blur-sm flex items-center justify-center shadow-[3px_3px_0px_0px_#000] flex-shrink-0">
                  <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-none drop-shadow-md">
                    {title}
                  </h3>
                  <p className="text-[11px] font-black text-white/70 uppercase tracking-[0.2em] mt-1">
                    {tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* ── Body ── */}
            <div className="p-6 sm:p-8">
              {/* Description */}
              {finalDescription && (
                <p className="text-white/80 text-sm leading-relaxed mb-6 font-medium">
                  {finalDescription}
                </p>
              )}

              {/* Features list */}
              <div className="space-y-3 mb-8">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className={`w-4.5 h-4.5 flex-shrink-0 ${
                      gradient === "amber" ? "text-amber-400" :
                      gradient === "sky" ? "text-sky-400" :
                      gradient === "violet" ? "text-violet-400" :
                      gradient === "emerald" ? "text-emerald-400" :
                      "text-rose-400"
                    }`} />
                    <span className="text-sm text-white/90 font-bold uppercase tracking-wide">
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/enquire"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-amber-400 text-black border-4 border-black font-black uppercase text-xs tracking-widest hover:bg-amber-300 transition-all shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] rounded-full hover:-translate-y-0.5"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/923335028515?text=${encodeURIComponent(`Hi, I would like to book or enquire about ${title} service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] text-white border-4 border-black font-black uppercase text-xs tracking-widest hover:bg-[#20ba59] transition-all shadow-[4px_4px_0px_0px_#000] rounded-full"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="tel:+923335028515"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-transparent text-white border-4 border-zinc-700 font-black uppercase text-xs tracking-widest hover:border-white hover:bg-white hover:text-black transition-all rounded-full"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Inline keyframe animations ── */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          from { 
            opacity: 0; 
            transform: scale(0.9) translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .animate-popIn {
          animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
}
