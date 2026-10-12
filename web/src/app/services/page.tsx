import type { Metadata } from "next";
import Link from "next/link";
import {
  Plane,
  Accessibility,
  Users,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  Car,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import ServiceCard from "@/components/services/ServiceCard";
import HowItWorks from "@/components/services/HowItWorks";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";

export const metadata: Metadata = {
  title: "Perth Maxi Cab Services | Airport Transfers, Wheelchair Taxis & Group Travel",
  description: "Explore our full range of 7-11 seater Perth Maxi Cab services. Guaranteed airport transfers (T1-T4), wheelchair-accessible taxis, wedding shuttles, and family travel with baby seats.",
};

/* ── Service card data — short features (≤4 words each) ── */
const servicesList = [
  {
    title: "Airport Transfer",
    tagline: "T1 · T2 · T3 · T4",
    iconName: "Plane" as const,
    gradient: "amber" as const,
    features: ["Live Flight", "Meet & Greet", "8-10 Bags"],
    serviceHref: "/services/airport-transfers",
    badgeText: "24 / 7",
  },
  {
    title: "Wheelchair Access",
    tagline: "NDIS · TUSS · Q'Straint",
    iconName: "Accessibility" as const,
    gradient: "sky" as const,
    features: ["Ramp Lift", "Q'Straint", "NDIS Invoice"],
    serviceHref: "/services/wheelchair-accessible-taxi",
    badgeText: "NDIS",
  },
  {
    title: "Weddings & Events",
    tagline: "Charters · Celebrations",
    iconName: "Sparkles" as const,
    gradient: "violet" as const,
    features: ["Tinted Glass", "Dual A/C", "Swan Valley"],
    serviceHref: "/services/local-everyday-transport",
    badgeText: "VIP",
  },
  {
    title: "Family & Groups",
    tagline: "7 to 11 Seater Capacity",
    iconName: "Users" as const,
    gradient: "emerald" as const,
    features: ["7-11 Seater", "Baby Seats", "Fixed Price"],
    serviceHref: "/services/group-maxi-cab",
    badgeText: "Family",
  },
];

/* ── Stats data ── */
const stats = [
  { value: "24/7", label: "Always Available", icon: Clock },
  { value: "11", label: "Max Passengers", icon: Users },
  { value: "4", label: "Core Services", icon: Star },
  { value: "0", label: "Surge Pricing", icon: Zap },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">

      {/* ═════════════════════════════════════════════════════════════
          HERO — Clean, distant background icons on mobile, bold brutalist
         ═════════════════════════════════════════════════════════════ */}
      <section className="relative bg-black text-white min-h-[45vh] sm:min-h-[55vh] flex items-center overflow-hidden border-b-4 border-black">

        {/* Floating decorative icons — clean, small, distant & appealing */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <Plane className="absolute top-3 left-3 sm:-top-4 sm:-left-8 w-14 h-14 sm:w-72 sm:h-72 text-amber-500/15 sm:text-amber-500/25 rotate-12" />
          <Accessibility className="absolute top-4 right-3 sm:top-8 sm:right-0 w-14 h-14 sm:w-56 sm:h-56 text-sky-400/15 sm:text-sky-400/25 -rotate-6" />
          <Sparkles className="absolute bottom-6 left-4 sm:bottom-24 sm:left-0 w-12 h-12 sm:w-52 sm:h-52 text-violet-400/15 sm:text-violet-400/20 rotate-3" />
          <Users className="absolute bottom-4 right-4 sm:bottom-0 sm:right-24 w-14 h-14 sm:w-64 sm:h-64 text-emerald-400/15 sm:text-emerald-400/20 -rotate-12" />
          <Car className="hidden sm:block absolute top-1/2 left-1/2 w-96 h-96 text-white/[0.07] -translate-x-1/2 -translate-y-1/2" />
          <ShieldCheck className="hidden sm:block absolute top-1/3 right-1/4 w-32 h-32 text-amber-400/20" />
        </div>

        {/* Amber radial glow */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 bg-amber-500/[0.06] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24 w-full">

          {/* Giant brutalist headline */}
          <SlideUp delay={0.05}>
            <h1 className="text-[clamp(3.5rem,15vw,10rem)] font-black uppercase leading-[0.9] tracking-tighter text-white mb-1 select-none">
              OUR
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <h1 className="text-[clamp(3.5rem,15vw,10rem)] font-black uppercase leading-[0.9] tracking-tighter text-amber-400 mb-0 select-none">
              SERVICES
            </h1>
          </SlideUp>
          <SlideUp delay={0.15}>
            <p className="mt-3 sm:mt-6 text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider text-zinc-300 max-w-2xl">
              Guaranteed On-Time Airport Transfers, Wheelchair Accessible &amp; Group Travel Across Greater Perth
            </p>
          </SlideUp>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════
          STATS BAR — 4 massive numbers
         ═════════════════════════════════════════════════════════════ */}
      <section className="bg-amber-400 border-y-4 border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x-4 divide-y-4 lg:divide-y-0 divide-black">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-8 sm:py-10 px-4 sm:px-6 text-center group hover:bg-black transition-colors duration-200">
              <Icon className="w-7 h-7 sm:w-8 sm:h-8 mb-2 sm:mb-3 text-black group-hover:text-amber-400 transition-colors" />
              <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-black group-hover:text-amber-400 transition-colors leading-none tracking-tighter">
                {value}
              </span>
              <span className="mt-2 text-[10px] sm:text-[11px] font-black text-black/60 group-hover:text-white/60 uppercase tracking-widest transition-colors">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════
          SERVICE CARDS — 2x2 brutalist+glass grid
         ═════════════════════════════════════════════════════════════ */}
      <section className="bg-black py-12 sm:py-20 px-4 sm:px-10 lg:px-16 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">

          {/* Section label */}
          <div className="flex items-end justify-between mb-8 sm:mb-10 gap-4 flex-wrap">
            <div>
              <div className="inline-block bg-white border-2 sm:border-4 border-black px-2.5 py-0.5 sm:px-3 sm:py-1 mb-2.5 sm:mb-3 shadow-[2px_2px_0px_0px_#facc15] sm:shadow-[3px_3px_0px_0px_#facc15]">
                <span className="text-black font-black uppercase text-[9px] sm:text-[10px] tracking-widest">What We Offer</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
                Core Fleet &amp;<br />Services
              </h2>
            </div>
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 bg-amber-400 border-2 sm:border-4 border-black text-black font-black uppercase text-xs px-4 sm:px-5 py-2.5 sm:py-3 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all self-end rounded-full"
            >
              Book Any Service <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-0 sm:border-4 sm:border-black">
            {servicesList.map((service, index) => (
              <div key={index} className={`${index % 2 === 1 ? "sm:border-l-4 border-black" : ""} ${index >= 2 ? "sm:border-t-4 border-black" : ""} ${index >= 1 && index < 3 ? "xl:border-l-4 xl:border-t-0" : ""} ${index >= 3 ? "xl:border-l-4 xl:border-t-4" : ""}`}>
                <ServiceCard
                  title={service.title}
                  tagline={service.tagline}
                  iconName={service.iconName}
                  gradient={service.gradient}
                  features={service.features}
                  serviceHref={service.serviceHref}
                  badgeText={service.badgeText}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════
          BELOW-FOLD: How It Works & Reviews Carousel (Matching Home)
         ═════════════════════════════════════════════════════════════ */}
      <HowItWorks />
      
      {/* Testimonials Carousel matching Home */}
      <section className="w-full border-b-4 border-zinc-800">
        <TestimonialsCarousel />
      </section>

      {/* Minimized bottom spacer */}
      <div className="h-4 sm:h-8 bg-black" />
    </div>
  );
}
