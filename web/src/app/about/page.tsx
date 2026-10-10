import type { Metadata } from "next";
import {
  ShieldCheck,
  Accessibility,
  CheckCircle2,
  Star,
  Users,
  Car,
  Sparkles,
  Plane,
} from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";
import AboutStatsCounter from "@/components/about/AboutStatsCounter";
import CoreValuesGrid from "@/components/about/CoreValuesGrid";

export const metadata: Metadata = {
  title: "About Us | Perth Maxi Cab | Wheelchair Accessible & Group Transport",
  description:
    "Learn about Perth Maxi Cab: Western Australia's trusted provider for 7-11 seater vans, wheelchair-accessible transport, guaranteed airport transfers, and NDIS support.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen text-white overflow-x-hidden selection:bg-amber-400 selection:text-black">

      {/* ═════════════════════════════════════════════════════════════
          1. ABOUT PAGE HEADER — Brutalist dark + floating giant icons
         ═════════════════════════════════════════════════════════════ */}
      <section className="relative bg-black text-white min-h-[50vh] sm:min-h-[55vh] flex items-center overflow-hidden border-b-4 border-black">

        {/* Floating decorative icons — pure visual maximalism */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <Plane className="absolute -top-4 -left-8 w-72 h-72 text-amber-500/25 rotate-12" />
          <Accessibility className="absolute top-8 right-0 w-56 h-56 text-sky-400/25 -rotate-6" />
          <Sparkles className="absolute bottom-24 left-0 w-52 h-52 text-violet-400/20 rotate-3" />
          <Users className="absolute bottom-0 right-24 w-64 h-64 text-emerald-400/20 -rotate-12" />
          <Car className="absolute top-1/2 left-1/2 w-96 h-96 text-white/[0.07] -translate-x-1/2 -translate-y-1/2" />
          <ShieldCheck className="absolute top-1/3 right-1/4 w-32 h-32 text-amber-400/20" />
        </div>

        {/* Amber radial glow */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 bg-amber-500/[0.06] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-24 w-full">

          {/* Giant brutalist headline */}
          <SlideUp delay={0.05}>
            <h1 className="text-[clamp(4rem,15vw,10rem)] font-black uppercase leading-[0.9] tracking-tighter text-white mb-1 select-none">
              ABOUT
            </h1>
          </SlideUp>
          <SlideUp delay={0.1}>
            <h1 className="text-[clamp(4rem,15vw,10rem)] font-black uppercase leading-[0.9] tracking-tighter text-amber-400 mb-0 select-none">
              US
            </h1>
          </SlideUp>

        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════
          2. "OUR STORY" SECTION (Aligned Photo + Story + Stats)
         ═════════════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b-4 border-black w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Visual Column: Adjusted to match text height */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <FadeIn delay={0.1} className="h-full">
                <div className="relative group h-full min-h-[300px] sm:min-h-[380px] w-full">
                  {/* Offset Accent Backdrop Frame */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-2.5 bg-amber-400/90 rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-300 shadow-[6px_6px_0px_0px_#000]"
                  />

                  {/* Main Image Container */}
                  <div className="relative h-full w-full bg-zinc-900 border-3 border-black rounded-xl overflow-hidden shadow-xl z-10">
                    <img
                      src="/images/our-story-maxi.jpg"
                      alt="Modern Yellow and Black Perth Maxi Taxi Van parked on sunny St Georges Terrace Perth"
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Badge */}
                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/95 backdrop-blur-md text-white px-3.5 py-2 sm:px-4 sm:py-2.5 border border-amber-400 rounded-lg shadow-[3px_3px_0px_0px_#000] z-20 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-md bg-amber-400 text-black flex items-center justify-center font-black">
                        <Star className="w-4 h-4 fill-black" />
                      </div>
                      <div>
                        <p className="font-black text-base text-amber-400 leading-none">
                          10+ Years
                        </p>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-300 mt-0.5">
                          Serving Greater Perth
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Story Text Column: Symmetrical & Scannable */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
              <div>
                <SlideUp delay={0.15}>
                  <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] block mb-1">
                    Our Mission &amp; Heritage
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
                    Accessibility Is Not An Add-On
                  </h2>
                </SlideUp>

                <FadeIn delay={0.2} className="space-y-3 mt-3.5">
                  {/* Bold Opening Line */}
                  <p className="text-sm sm:text-base text-white font-extrabold leading-snug border-l-3 border-amber-400 pl-3">
                    We started with one clear standard: every passenger in Perth deserves prompt, compassionate, and predictable transport.
                  </p>

                  {/* Short Paragraph 1 */}
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-medium">
                    In traditional fleets, wheelchair vehicles are often treated as an afterthought, leading to long waits and missed flights. We built Perth Maxi Cab to eliminate those compromises with a dedicated fleet of spacious <span className="text-amber-400 font-bold">7 to 11 seater maxi cabs</span> available around the clock.
                  </p>

                  {/* Short Paragraph 2 */}
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-medium">
                    Every accessible van is purpose-equipped with <span className="text-amber-400 font-bold">certified hydraulic ramps</span> and <span className="text-amber-400 font-bold">4-point Q&apos;Straint tie-down locks</span>, ensuring wheelchair users travel with absolute dignity, safety, and room for companions and luggage.
                  </p>

                  {/* Short Paragraph 3 */}
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-medium">
                    Whether booking for Perth Airport (T1–T4), hospital transfers, or special group occasions, our passengers enjoy locked-in reservation times and <span className="text-amber-400 font-bold">transparent fixed fares with zero surge pricing</span>.
                  </p>
                </FadeIn>
              </div>

              {/* Mini Stats Row With Animated Count-Up */}
              <FadeIn delay={0.25}>
                <AboutStatsCounter />
              </FadeIn>
            </div>

          </div>
        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════
          3. "OUR CORE VALUES" CARDS
         ═════════════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-black border-b-4 border-black w-full">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <SlideUp>
              <span className="text-[11px] font-black text-amber-400 uppercase tracking-[0.25em] mb-2 block">
                What Guides Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
                Our Core Values
              </h2>
            </SlideUp>
          </div>

          {/* Core Values 4-Card Grid */}
          <CoreValuesGrid />
        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════
          4. "FULLY LICENSED & CERTIFIED" BANNER (3 Points + NDIS Logo)
         ═════════════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-zinc-950 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 text-black border-4 border-black p-6 sm:p-8 lg:p-10 rounded-2xl shadow-[6px_6px_0px_0px_#000] relative overflow-hidden">
            {/* Background watermark */}
            <ShieldCheck className="absolute -right-8 -bottom-8 w-64 h-64 text-black/[0.08] pointer-events-none select-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              
              {/* Left / Center content: Title + 3 punchy points */}
              <div className="space-y-4 max-w-3xl">
                <div>
                  <span className="inline-block bg-black text-amber-400 text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-1.5">
                    Accreditation &amp; Trust
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-black">
                    Fully Licensed &amp; Certified
                  </h2>
                </div>

                {/* 3 Points with concise details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-black/90 text-white p-3.5 rounded-xl border-2 border-black flex items-start gap-2.5 shadow-sm">
                    <div className="w-6 h-6 rounded-md bg-amber-400 text-black flex items-center justify-center shrink-0 font-bold mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wide text-amber-400">
                        WA DoT Licensed
                      </h3>
                      <p className="text-[10px] text-zinc-300 font-medium mt-0.5 leading-snug">
                        Authorized On-Demand Passenger Transport in WA
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/90 text-white p-3.5 rounded-xl border-2 border-black flex items-start gap-2.5 shadow-sm">
                    <div className="w-6 h-6 rounded-md bg-amber-400 text-black flex items-center justify-center shrink-0 font-bold mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wide text-amber-400">
                        TUSS Vouchers
                      </h3>
                      <p className="text-[10px] text-zinc-300 font-medium mt-0.5 leading-snug">
                        Approved Taxi User Subsidy Scheme operator
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/90 text-white p-3.5 rounded-xl border-2 border-black flex items-start gap-2.5 shadow-sm">
                    <div className="w-6 h-6 rounded-md bg-amber-400 text-black flex items-center justify-center shrink-0 font-bold mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wide text-amber-400">
                        Police Cleared
                      </h3>
                      <p className="text-[10px] text-zinc-300 font-medium mt-0.5 leading-snug">
                        Annual mechanical checks &amp; WWC verified drivers
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side: Clean NDIS Logo placed directly in banner */}
              <div className="flex items-center justify-start lg:justify-center shrink-0">
                <img
                  src="/images/ndis-badge.png"
                  alt="Official NDIS Registered Provider"
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain rounded-2xl shadow-lg"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
