import Link from "next/link";
import { 
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
import CoreServicesCarousel from "@/components/home/CoreServicesCarousel";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* ── Cinematic Hero Section ── */}
      <section className="relative w-full h-[62svh] min-h-[390px] max-h-[500px] sm:h-[70svh] sm:min-h-[460px] sm:max-h-[620px] lg:h-[72svh] lg:max-h-[650px] flex flex-col justify-between pt-[calc(var(--header-height,4rem)+0.5rem)] pb-3 sm:pt-20 sm:pb-6 overflow-hidden">
        
        {/* Background Image & Crisp Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/perth-maxi-van-hero.jpg" 
            alt="Perth Maxi Cab Wheelchair Accessible Vehicle with Perth City Sunset Skyline" 
            className="w-full h-full object-cover object-[60%_center] sm:object-[70%_center] lg:object-center brightness-[0.92] sm:brightness-105"
          />
          {/* Subtle top header gradient so navbar text stays crisp */}
          <div className="absolute top-0 left-0 right-0 h-28 sm:h-32 bg-gradient-to-b from-black/75 sm:from-black/55 to-transparent pointer-events-none" />
          {/* Darker mobile gradient overlay (45-55% black, stronger at top & bottom) so text is 100% readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65 sm:bg-none pointer-events-none" />
          {/* Desktop left gradient */}
          <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-black/50 via-black/15 to-transparent pointer-events-none" />
        </div>

        {/* Flight Path SVG Arc in Sky */}
        <div className="absolute top-12 right-8 sm:right-16 lg:right-28 pointer-events-none select-none z-10 hidden sm:block">
          <svg className="w-48 h-24 overflow-visible" viewBox="0 0 220 100" fill="none">
            <path
              d="M10 90 C 80 75, 140 40, 205 12"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </svg>
          <div className="absolute top-0 right-0 rotate-45">
            <Plane className="w-3.5 h-3.5 text-white fill-white/30 drop-shadow" />
          </div>
        </div>

        {/* Top/Middle: Headline & Catchy Punchy Line */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-1 sm:pt-4">
          <div className="max-w-xl lg:max-w-2xl flex flex-col items-start">
            
            {/* Main Headline */}
            <FadeIn delay={0.05}>
              <h1 className="text-[clamp(1.85rem,7.8vw,2.4rem)] sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] text-white mb-1.5 sm:mb-2.5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                Perth <br />
                <span className="text-amber-400 drop-shadow-[0_4px_14px_rgba(0,0,0,0.6)]">Maxi Cab</span>
              </h1>
            </FadeIn>

            {/* Catchy Punchy Line */}
            <FadeIn delay={0.1}>
              <p className="text-xs sm:text-base md:text-lg font-bold sm:font-extrabold text-white max-w-lg leading-snug drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
                Anywhere in Perth. <span className="text-amber-400 [text-shadow:0_2px_10px_rgba(0,0,0,0.95)]">Always on Time.</span> Always Accessible.
              </p>
            </FadeIn>

          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn delay={0.15} className="w-full">
            <div className="flex flex-row items-center gap-2 sm:gap-4 pb-1 sm:pb-2 w-full max-w-sm sm:max-w-none">
              
              {/* Book Now Button */}
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs sm:text-sm px-3.5 sm:px-6 py-2 sm:py-3 rounded-full shadow-[0_4px_16px_rgba(251,191,36,0.35)] sm:shadow-[0_8px_24px_rgba(251,191,36,0.45)] hover:scale-105 active:scale-95 transition-all text-center whitespace-nowrap shrink-0"
              >
                <span>Book Now</span>
                <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                  <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                </div>
              </Link>

              {/* 24/7 Support Call Pill */}
              <a
                href="tel:+923335028515"
                className="inline-flex items-center justify-center gap-2 group backdrop-blur-md bg-black/60 border border-white/20 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-full hover:bg-black/70 transition-colors shadow-md whitespace-nowrap shrink-0"
              >
                <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-amber-400/20 border border-amber-400 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shrink-0">
                  <Clock className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[9px] sm:text-[10px] text-white/70 font-semibold">24/7 Support</span>
                  <span className="text-[10px] sm:text-xs md:text-sm font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors mt-0.5">
                    +92 333 5028515
                  </span>
                </div>
              </a>

            </div>
          </FadeIn>
        </div>
      </section>


      {/* Brutalist Wrapper */}
      <div className="bg-black text-white w-full">
        {/* 3-Step Process with scroll fade in/out animation */}
        <HowItWorks />

        {/* 6 Core Services Grid using ServiceCard */}
        <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t-4 border-black">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-2 sm:mb-4 block">
              Comprehensive Perth Fleet
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              Our Core Services
            </h2>
          </div>

          <CoreServicesCarousel />
        </section>

        {/* Testimonials Carousel Section */}
        <section className="w-full border-t-4 border-black">
          <TestimonialsCarousel />
        </section>

        {/* FAQ Accordion Section */}
        <FAQAccordion />

      </div>
    </div>
  );
}
