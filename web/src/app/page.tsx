import Link from "next/link";
import {
  MessageCircle,
  ShieldCheck,
  CheckCircle,
  Clock,
  Plane,
  Car,
  HeartPulse,
  Navigation,
  Phone,
  Star,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Baby,
  MapPin
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import FAQAccordion from "@/components/services/FAQAccordion";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import VehicleShowcase from "@/components/home/VehicleShowcase";
import ServiceCard from "@/components/services/ServiceCard";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* ── Cinematic Hero Section ── */}
      <section className="relative w-full h-[100svh] min-h-[680px] max-h-[1080px] flex flex-col justify-between pt-28 pb-8 sm:pb-12 overflow-hidden">

        {/* Background Image & Crisp Overlays (Preserving original bright sunset & skyline) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/perth-maxi-van-hero.jpg"
            alt="Perth Maxi Cab Wheelchair Accessible Vehicle with Perth City Sunset Skyline"
            className="w-full h-full object-cover object-[70%_center] lg:object-center brightness-105"
          />
          {/* Subtle top header gradient so navbar text stays crisp */}
          <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-black/55 to-transparent pointer-events-none" />
          {/* Very light soft gradient on left for text legibility while keeping the entire picture bright and vivid */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent pointer-events-none" />
        </div>

        {/* Flight Path SVG Arc in Sky */}
        <div className="absolute top-20 right-8 sm:right-20 lg:right-32 pointer-events-none select-none z-10 hidden sm:block">
          <svg className="w-56 h-28 overflow-visible" viewBox="0 0 220 100" fill="none">
            <path
              d="M10 90 C 80 75, 140 40, 205 12"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </svg>
          <div className="absolute top-0 right-0 rotate-45">
            <Plane className="w-4 h-4 text-white fill-white/30 drop-shadow" />
          </div>
        </div>

        {/* Top/Middle: Headline & Catchy Punchy Line */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-4 sm:pt-8">
          <div className="max-w-xl lg:max-w-2xl flex flex-col items-start">

            {/* Main Headline */}
            <FadeIn delay={0.05}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-white mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                Perth <br />
                <span className="text-amber-400 drop-shadow-[0_4px_14px_rgba(0,0,0,0.6)]">Maxi Cab</span>
              </h1>
            </FadeIn>

            {/* Catchy Punchy Line */}
            <FadeIn delay={0.1}>
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white max-w-xl leading-snug drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
                Anywhere in Perth. <span className="text-amber-400">Always on Time.</span> Always Accessible.
              </p>
              <p className="text-sm sm:text-base text-white/80 mt-2.5 max-w-lg font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Airport transfers, city travel &amp; premium wheelchair-ready transport on demand.
              </p>
            </FadeIn>

          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn delay={0.15} className="w-full">
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 pb-2">

              {/* Book Now Button */}
              <Link
                href="/enquire"
                className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-[0_8px_24px_rgba(251,191,36,0.45)] hover:shadow-[0_12px_28px_rgba(251,191,36,0.6)] hover:scale-105 active:scale-95 transition-all"
              >
                <span>Book Now</span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black flex items-center justify-center text-white">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </Link>

              {/* 24/7 Support Call Pill */}
              <a
                href="tel:+61424791786"
                className="flex items-center gap-3 group backdrop-blur-md bg-black/50 border border-white/20 px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-full hover:bg-black/70 transition-colors shadow-lg"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-400/20 border border-amber-400 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Clock className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] sm:text-[11px] text-white/70 font-medium">24/7 Support</span>
                  <span className="text-xs sm:text-sm md:text-base font-bold text-white tracking-wide group-hover:text-amber-400 transition-colors">
                    +61 424 791 786
                  </span>
                </div>
              </a>



            </div>
          </FadeIn>
        </div>
      </section>


      {/* Brutalist Wrapper */}
      <div className="bg-black text-white w-full">
        {/* 3-Step Process (Brutalist) */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="bg-black border-4 border-zinc-800 shadow-[8px_8px_0px_0px_#000] p-8 lg:p-12 text-center">
            <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] block mb-4">
              Hassle-Free Booking Process
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-12 md:mb-16">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
              <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-1 bg-zinc-800 z-0"></div>

              <div className="relative z-10 flex flex-col items-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-black text-white border-4 border-zinc-800 rounded-none flex items-center justify-center font-black text-2xl md:text-3xl mb-4 group-hover:bg-amber-400 group-hover:text-black group-hover:border-black transition-colors shadow-[4px_4px_0px_0px_#000]">
                  1
                </div>
                <h3 className="font-black text-white text-lg md:text-xl mb-2 uppercase tracking-wider">Select Service</h3>
                <p className="text-white/60 font-medium text-xs md:text-sm leading-relaxed max-w-xs">
                  Pick wheelchair accessible, 7-11 seater, or baby seat taxi with your pickup date & time.
                </p>
              </div>

              <div className="relative z-10 flex flex-col items-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-black text-white border-4 border-zinc-800 rounded-none flex items-center justify-center font-black text-2xl md:text-3xl mb-4 group-hover:bg-emerald-500 group-hover:text-black group-hover:border-black transition-colors shadow-[4px_4px_0px_0px_#000]">
                  2
                </div>
                <h3 className="font-black text-white text-lg md:text-xl mb-2 uppercase tracking-wider">Instant Fixed Quote</h3>
                <p className="text-white/60 font-medium text-xs md:text-sm leading-relaxed max-w-xs">
                  We confirm vehicle availability and send an upfront fixed quote with no surge fees.
                </p>
              </div>

              <div className="relative z-10 flex flex-col items-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-black text-white border-4 border-zinc-800 rounded-none flex items-center justify-center font-black text-2xl md:text-3xl mb-4 group-hover:bg-sky-400 group-hover:text-black group-hover:border-black transition-colors shadow-[4px_4px_0px_0px_#000]">
                  3
                </div>
                <h3 className="font-black text-white text-lg md:text-xl mb-2 uppercase tracking-wider">Punctual Pickup</h3>
                <p className="text-white/60 font-medium text-xs md:text-sm leading-relaxed max-w-xs">
                  Driver arrives early with ramps or pre-installed child seats, ready for smooth transit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Core Services Grid using ServiceCard */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t-4 border-black">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-4 block">
              Comprehensive Perth Fleet
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Our Core Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Airport Transfer"
              tagline="T1 · T2 · T3 · T4"
              iconName="Plane"
              gradient="amber"
              features={["Live Flight Tracking", "Meet & Greet", "8-10 Bags"]}
              serviceHref="/services/airport-transfers"
              badgeText="24/7"
            />
            <ServiceCard
              title="Wheelchair Taxi"
              tagline="NDIS · TUSS"
              iconName="Accessibility"
              gradient="sky"
              features={["Hydraulic Ramp", "Q'Straint Locks", "NDIS Invoices"]}
              serviceHref="/services/wheelchair-accessible-taxi"
              badgeText="NDIS"
            />
            <ServiceCard
              title="Group Maxi Cab"
              tagline="7 to 11 Seats"
              iconName="Users"
              gradient="emerald"
              features={["Family Travel", "Corporate Events", "Swan Valley"]}
              serviceHref="/services/group-maxi-cab"
              badgeText="Spacious"
            />
            <ServiceCard
              title="Baby Seat Taxi"
              tagline="Pre-installed Seats"
              iconName="Baby"
              gradient="rose"
              features={["Infant Capsules", "Forward Facing", "Clean & Safe"]}
              serviceHref="/services/baby-seat-taxi"
              badgeText="Family"
            />
            <ServiceCard
              title="Medical Transport"
              tagline="Hospital Transfers"
              iconName="HeartPulse"
              gradient="sky"
              features={["Fiona Stanley", "Royal Perth", "Door to Door"]}
              serviceHref="/services/medical-ndis-transport"
              badgeText="Care"
            />
            <ServiceCard
              title="Local Events"
              tagline="Perth & Surrounds"
              iconName="Car"
              gradient="amber"
              features={["Optus Stadium", "Crown Perth", "Concerts"]}
              serviceHref="/services/local-everyday-transport"
              badgeText="Events"
            />
          </div>
        </section>

        {/* Testimonials Carousel Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t-4 border-black">
          <TestimonialsCarousel />
        </section>

        {/* FAQ Accordion Section */}
        <FAQAccordion />

        {/* Ready to Book Bottom Callout */}
        <section className="py-12 md:py-16 px-4 sm:px-6 max-w-7xl mx-auto border-t-4 border-black">
          <div className="bg-amber-400 border-4 border-black p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000]">
            <SlideUp>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl font-black mb-2 uppercase tracking-tight text-black">
                    Ready to Secure Your Transfer?
                  </h2>
                  <p className="text-black/80 font-bold text-sm max-w-lg">
                    Send us your trip details on WhatsApp or via our booking form for an instant fixed quote.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
                  <a
                    href="https://wa.me/61424791786"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-black text-white border-4 border-black font-black uppercase text-xs tracking-widest px-6 py-4 hover:bg-zinc-800 transition-all shadow-[4px_4px_0px_0px_#000] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000]"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                  <Link
                    href="/enquire"
                    className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-white text-black border-4 border-black font-black uppercase text-xs tracking-widest px-6 py-4 hover:bg-slate-100 transition-all shadow-[4px_4px_0px_0px_#000] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000]"
                  >
                    <span>Booking Form</span>
                  </Link>
                </div>
              </div>
            </SlideUp>
          </div>
        </section>
      </div>
    </div>
  );
}
