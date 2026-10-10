import { ShieldCheck, Heart, Navigation, Users, CheckCircle2, ArrowRight, Clock, Award, Star } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export const metadata: Metadata = {
  title: "About Us | Perth Accessible Taxi | Wheelchair Specialist",
  description: "Learn about Perth Accessible Taxi: Western Australia's dedicated wheelchair transport operator offering dignified, punctual, and safe journeys.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen text-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-12 md:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SlideUp className="max-w-3xl">
            <span className="inline-block bg-white/10 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Our Mission & Commitment
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white tracking-tight">
              Dignity, Freedom & Safe Mobility for Perth
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
              We started with a straightforward belief: wheelchair passengers and their families deserve prompt, compassionate, and predictable transport â€” never treated as a secondary priority.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn delay={0.1} className="relative">
            <div className="relative aspect-square w-full bg-zinc-900 border-4 border-black shadow-[8px_8px_0px_0px_#facc15] overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white text-black p-6 border-4 border-black shadow-[6px_6px_0px_0px_#000] rotate-3 max-w-[200px]">
                <p className="font-black text-2xl">10+ Years</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Of Experience</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-4 block">Our Story</span>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tight text-white">Accessibility Is Not An Add-On</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6 font-medium">
              In many general taxi fleets, wheelchair vehicles are a tiny fraction of the fleet. Passengers often endure long waits, no-shows, or drivers untrained in securing modern powerchairs.
            </p>
            <p className="text-white/70 text-lg leading-relaxed font-medium">
              Perth Accessible Taxi was founded to change that. Every vehicle in our fleet is purpose-equipped with commercial hydraulic or low-gradient foldout ramps, 4-point Qâ€™Straint anchor locks, and ample space for companions. We operate with scheduled reservations, guaranteeing your ride arrives on time.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission / Values Cards */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-4 block">What Guides Us</span>
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Safety First", desc: "Rigorous vehicle inspection, certified tie-down points, and defensive driving.", color: "emerald" },
              { icon: Heart, title: "Compassion", desc: "Patient assistance without ever rushing passengers or their families.", color: "rose" },
              { icon: Clock, title: "Punctuality", desc: "We track flights and traffic to ensure we are always on time.", color: "amber" },
              { icon: Users, title: "Community", desc: "Supporting NDIS participants and local community transport needs.", color: "sky" }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-black border-4 border-zinc-800 p-8 shadow-[6px_6px_0px_0px_#000] hover:-translate-y-2 hover:border-zinc-700 transition-all group relative overflow-hidden">
                  <Icon className="absolute -bottom-6 -right-6 w-48 h-48 text-white/[0.03] group-hover:text-white/[0.05] transition-colors" />
                  <div className="w-16 h-16 bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center mb-6 text-white group-hover:bg-amber-400 group-hover:text-black group-hover:border-black transition-colors">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-wider mb-4 relative z-10">{value.title}</h3>
                  <p className="text-white/60 font-medium leading-relaxed relative z-10">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Counters */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "10K+", label: "Transfers", icon: Navigation },
            { value: "15+", label: "Years Experience", icon: Award },
            { value: "100%", label: "NDIS Friendly", icon: CheckCircle2 },
            { value: "24/7", label: "Availability", icon: Clock }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 border-4 border-black bg-zinc-900 shadow-[6px_6px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#facc15] transition-all">
              <stat.icon className="w-10 h-10 text-amber-400 mb-4" />
              <div className="text-4xl sm:text-5xl font-black mb-2">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team Placeholder */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t-4 border-black">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-4 block">Professional Drivers</span>
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-16">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="bg-black border-4 border-zinc-800 p-6 shadow-[6px_6px_0px_0px_#000] group">
                <div className="aspect-square bg-zinc-900 mb-6 flex items-center justify-center relative overflow-hidden grayscale group-hover:grayscale-0 transition-all border-2 border-zinc-800">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wider mb-1">John Doe</h3>
                <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">Senior Driver</p>
                <p className="text-white/60 font-medium text-sm">Certified in Q'Straint tie-downs and defensive driving. 5+ years experience in Perth.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications and Trust */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-amber-400 text-black border-4 border-black p-8 sm:p-16 shadow-[8px_8px_0px_0px_#000] relative overflow-hidden">
          <ShieldCheck className="absolute -right-20 -bottom-20 w-[400px] h-[400px] text-black/5" />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6">Fully Licensed & Certified</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 mt-1" />
                <span className="text-lg font-bold">Licensed Commercial Passenger Vehicle Operator in WA</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 mt-1" />
                <span className="text-lg font-bold">Registered for TUSS Vouchers & NDIS Claim Support</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 mt-1" />
                <span className="text-lg font-bold">Regular Police & Working with Vulnerable People Checks</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
