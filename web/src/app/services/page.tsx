import type { Metadata } from "next";
import Link from "next/link";
import {
  Plane,
  Accessibility,
  Users,
  Clock,
  ShieldCheck,
  Phone,
  ArrowUpRight,
  MapPin,
  Baby,
  HeartPulse,
  Car,
  Sparkles,
  Star,
  Zap,
  Navigation,
  Calendar,
} from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";
import ServiceCard from "@/components/services/ServiceCard";
import HowItWorks from "@/components/services/HowItWorks";
import TestimonialsSection from "@/components/services/TestimonialsSection";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import GmailIcon from "@/components/icons/GmailIcon";


export const metadata: Metadata = {
  title: "Perth Maxi Cab Services | Airport Transfers, Wheelchair Taxis & Group Travel",
  description: "Explore our full range of 7-11 seater Perth Maxi Cab services. Guaranteed airport transfers (T1-T4), wheelchair-accessible taxis, wedding shuttles, and family travel with baby seats.",
};

/* â”€â”€ Service card data â€” short features (â‰¤4 words each) â”€â”€ */
const servicesList = [
  {
    title: "Airport Transfer",
    tagline: "T1 Â· T2 Â· T3 Â· T4",
    iconName: "Plane" as const,
    gradient: "amber" as const,
    features: ["Live Flight Tracking", "Meet & Greet", "8â€“10 Bags", "Zero Wait Guarantee"],
    serviceHref: "/services/airport-transfers",
    badgeText: "24 / 7",
  },
  {
    title: "Wheelchair Access",
    tagline: "NDIS Â· TUSS Â· Q'Straint",
    iconName: "Accessibility" as const,
    gradient: "sky" as const,
    features: ["Hydraulic Ramp", "4-Point Tie-Down", "Stay In Chair", "NDIS Invoices"],
    serviceHref: "/services/wheelchair-accessible-taxi",
    badgeText: "NDIS",
  },
  {
    title: "Weddings & Events",
    tagline: "Charters Â· Celebrations",
    iconName: "Sparkles" as const,
    gradient: "violet" as const,
    features: ["Tinted Windows", "Dual A/C Zones", "Multi-Stop", "Swan Valley Tours"],
    serviceHref: "/services/local-everyday-transport",
    badgeText: "VIP",
  },
  {
    title: "Family & Groups",
    tagline: "7 to 11 Seater Capacity",
    iconName: "Users" as const,
    gradient: "emerald" as const,
    features: ["Baby Seats Fitted", "Pram & Luggage", "Fixed Price", "All Suburbs"],
    serviceHref: "/services/group-maxi-cab",
    badgeText: "Family",
  },
];

/* â”€â”€ Stats data â”€â”€ */
const stats = [
  { value: "24/7", label: "Always Available", icon: Clock },
  { value: "11", label: "Max Passengers", icon: Users },
  { value: "4", label: "Core Services", icon: Star },
  { value: "0", label: "Surge Pricing", icon: Zap },
];

/* â”€â”€ Specialized mini-services â”€â”€ */
const specialised = [
  { icon: Baby, label: "Baby Seat Taxi", href: "/services/baby-seat-taxi" },
  { icon: HeartPulse, label: "Medical Transport", href: "/services/medical-ndis-transport" },
  { icon: Car, label: "Corporate Rides", href: "/services/local-everyday-transport" },
  { icon: Navigation, label: "Swan Valley Tours", href: "/services/local-everyday-transport" },
  { icon: Calendar, label: "Pre-Book Transfers", href: "/enquire" },
  { icon: MapPin, label: "All Perth Suburbs", href: "/enquire" },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          HERO â€” Brutalist dark + floating giant icons
         â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="relative bg-black text-white min-h-[92vh] flex items-center overflow-hidden border-b-4 border-black">

        {/* Floating decorative icons â€” pure visual maximalism */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <Plane      className="absolute -top-4 -left-8  w-72 h-72 text-amber-500/25 rotate-12" />
          <Accessibility className="absolute top-8 right-0   w-56 h-56 text-sky-400/25 -rotate-6" />
          <Sparkles   className="absolute bottom-24 left-0  w-52 h-52 text-violet-400/20 rotate-3" />
          <Users      className="absolute bottom-0  right-24 w-64 h-64 text-emerald-400/20 -rotate-12" />
          <Car        className="absolute top-1/2  left-1/2  w-96 h-96 text-white/[0.07] -translate-x-1/2 -translate-y-1/2" />
          <ShieldCheck className="absolute top-1/3 right-1/4  w-32 h-32 text-amber-400/20" />
        </div>

        {/* Amber radial glow */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 bg-amber-500/[0.06] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 w-full">



          {/* Giant brutalist headline */}
          <SlideUp delay={0.05}>
            <h1 className="text-[clamp(4rem,15vw,10rem)] font-black uppercase leading-[0.9] tracking-tighter text-white mb-1 select-none">
              OUR
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <h1 className="text-[clamp(4rem,15vw,10rem)] font-black uppercase leading-[0.9] tracking-tighter text-amber-400 mb-10 select-none">
              SERVICES
            </h1>
          </SlideUp>

          {/* Glass trust strip */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              {[
                { icon: Clock,       label: "24/7 Available",      color: "text-amber-400" },
                { icon: ShieldCheck, label: "Police-Checked Drivers", color: "text-emerald-400" },
                { icon: Plane,       label: "Flight Tracking",      color: "text-sky-400" },
                { icon: Accessibility, label: "Wheelchair Fleet",   color: "text-violet-400" },
              ].map(({ icon: Icon, label, color }, i) => (
                <div key={i} className="flex items-center gap-2 backdrop-blur-md bg-white/[0.07] border border-white/[0.15] px-4 py-2.5">
                  <Icon className={`w-4 h-4 ${color}`} />
                  <span className="text-[11px] font-black text-white uppercase tracking-widest">{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* CTA buttons */}
          <FadeIn delay={0.25}>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 bg-amber-400 border-4 border-black text-black font-black uppercase text-sm px-8 py-4 rounded-full shadow-[6px_6px_0px_0px_#000] hover:shadow-[10px_10px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                Book Now <ArrowUpRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/923335028515?text=Hi,%20I%20would%20like%20to%20book%20a%20Maxi%20Cab%20in%20Perth."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] border-4 border-black text-white font-black uppercase text-sm px-8 py-4 rounded-full shadow-[4px_4px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" /> WhatsApp
              </a>
              <a
                href="mailto:bookings@wheelchairmaxiperth.com"
                className="inline-flex items-center gap-2 bg-white border-4 border-black text-black font-black uppercase text-sm px-8 py-4 rounded-full shadow-[4px_4px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <GmailIcon className="w-5 h-5" colored={true} /> Email Us
              </a>
              <a
                href="tel:+61424791786"
                className="inline-flex items-center gap-2 bg-transparent border-4 border-white/40 text-white font-black uppercase text-sm px-8 py-4 rounded-full hover:border-white hover:bg-white hover:text-black transition-all"
              >
                <Phone className="w-4 h-4" /> +61 424 791 786
              </a>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          STATS BAR â€” 4 massive numbers
         â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="bg-amber-400 border-y-4 border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x-4 divide-y-4 lg:divide-y-0 divide-black">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-10 px-6 text-center group hover:bg-black transition-colors duration-200">
              <Icon className="w-8 h-8 mb-3 text-black group-hover:text-amber-400 transition-colors" />
              <span className="text-6xl lg:text-7xl font-black text-black group-hover:text-amber-400 transition-colors leading-none tracking-tighter">
                {value}
              </span>
              <span className="mt-2 text-[11px] font-black text-black/60 group-hover:text-white/60 uppercase tracking-widest transition-colors">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SERVICE CARDS â€” 2x2 brutalist+glass grid
         â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="bg-black py-20 px-6 sm:px-10 lg:px-16 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">

          {/* Section label */}
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <div>
              <div className="inline-block bg-white border-4 border-black px-3 py-1 mb-3 shadow-[3px_3px_0px_0px_#facc15]">
                <span className="text-black font-black uppercase text-[10px] tracking-widest">What We Offer</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
                Core Fleet &amp;<br />Services
              </h2>
            </div>
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 bg-amber-400 border-4 border-black text-black font-black uppercase text-xs px-5 py-3 shadow-[4px_4px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all self-end rounded-full"
            >
              Book Any Service <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-0 border-4 border-black">
            {servicesList.map((service, index) => (
              <div key={index} className={`${index % 2 === 1 ? "sm:border-l-4 border-black" : ""} ${index >= 2 ? "border-t-4 border-black" : ""} ${index >= 1 && index < 3 ? "xl:border-l-4 xl:border-t-0" : ""} ${index >= 3 ? "xl:border-l-4 xl:border-t-4" : ""}`}>
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

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SPECIALIZED SERVICES â€” Icon grid
         â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="bg-zinc-950 py-16 px-6 sm:px-10 lg:px-16 border-b-4 border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="text-[11px] font-black text-amber-400 uppercase tracking-[0.3em]">Also Available</span>
            <h2 className="text-3xl font-black text-white uppercase mt-1 tracking-tight">Specialized Services</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 border-2 border-zinc-800">
            {specialised.map(({ icon: Icon, label, href }, i) => (
              <Link
                key={i}
                href={href}
                className="group flex flex-col items-center justify-center gap-3 py-8 px-4 border-r-2 border-b-2 border-zinc-800 last:border-r-0 hover:bg-amber-400 transition-colors duration-150 text-center"
              >
                <Icon className="w-10 h-10 text-zinc-400 group-hover:text-black transition-colors" />
                <span className="text-[11px] font-black text-zinc-400 group-hover:text-black uppercase tracking-widest transition-colors leading-tight">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          BELOW-FOLD: How It Works, Why Us, etc.
         â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <HowItWorks />
      <TestimonialsSection />

      {/* Extra bottom padding so the footer floating banner overlaps cleanly */}
      <div className="h-32 sm:h-40 bg-black" />
    </div>
  );
}
