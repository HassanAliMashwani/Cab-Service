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
  Baby
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import FAQAccordion from "@/components/services/FAQAccordion";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import VehicleShowcase from "@/components/home/VehicleShowcase";
import ServiceCard from "@/components/services/ServiceCard";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* â”€â”€ Cinematic Hero Section â”€â”€ */}
      <section className="relative w-full h-[100svh] min-h-[700px] flex items-end pb-12 sm:pb-16 pt-24 overflow-hidden">
        
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=2000&q=80" 
            alt="Perth Cityscape Background" 
            className="w-full h-full object-cover"
          />
          {/* Gradient to darken the bottom and top (for header) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
        </div>

        {/* Giant Background Text (like "EGYPT" in the reference) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <h1 className="text-[25vw] font-black text-white/20 tracking-tighter mix-blend-overlay leading-none">
            PERTH
          </h1>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          
          {/* Left Side: Stats & CTA */}
          <div className="flex flex-col gap-6 lg:max-w-2xl">
            
            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 sm:gap-12 text-white">
              <FadeIn delay={0.1}>
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-5xl font-bold tracking-tight">10K+</span>
                  <span className="text-sm text-white/70 mt-1 font-medium">Verified Transfers</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-5xl font-bold tracking-tight">24/7</span>
                  <span className="text-sm text-white/70 mt-1 font-medium">Availability</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-5xl font-bold tracking-tight">100%</span>
                  <span className="text-sm text-white/70 mt-1 font-medium">NDIS & TUSS Approved</span>
                </div>
              </FadeIn>
            </div>

            {/* CTA & Short Desc Row */}
            <SlideUp delay={0.4} className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 mt-4">
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform"
              >
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5 bg-black text-white rounded-full p-1" />
              </Link>
              <p className="text-sm text-white/80 max-w-xs leading-relaxed font-medium">
                Book premium accessible transport & maxi cabs in Perth â€“ your gateway to dignified and reliable travel.
              </p>
            </SlideUp>
          </div>

          {/* Right Side: Glassmorphism Thumbnail Card (replacing VehicleShowcase button logic visually for the hero) */}
          <FadeIn delay={0.5} className="shrink-0 lg:w-[320px]">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 p-2 rounded-3xl shadow-2xl relative group cursor-pointer overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=600&q=80" 
                alt="Premium Maxi Cab"
                className="w-full h-40 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors rounded-3xl" />
              
              {/* Fake Video Player UI */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                <span>01:30</span>
                <div className="flex-1 mx-3 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-white rounded-full" />
                </div>
                <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent ml-0.5" />
                </div>
              </div>
            </div>
            {/* Keeping the VehicleShowcase as a hidden trigger or alternative if needed, but visually we use the card above to match design */}
            <div className="hidden"><VehicleShowcase /></div>
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
