"use client";

import React from "react";
import Link from "next/link";
import { 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ArrowUp, 
  Clock, 
  Car, 
  Accessibility,
  ArrowUpRight 
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import GmailIcon from "@/components/icons/GmailIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#000000] text-white border-t border-zinc-900 z-10">
      
      {/* ─────────────────────────────────────────────────────────────
          1. FLOATING CARD: Yellow "READY TO RIDE?" Banner (Compact & Spaced)
         ───────────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 mb-12 sm:mb-16 relative z-20">
        <div className="relative bg-amber-400 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.35)] overflow-hidden text-black border border-amber-300">
          
          {/* Subtle decorative background watermarks */}
          <div className="absolute -right-6 -bottom-8 pointer-events-none select-none opacity-[0.06]">
            <Car className="w-56 h-56 text-black" />
          </div>
          <div className="absolute left-6 -top-8 pointer-events-none select-none opacity-[0.05]">
            <Accessibility className="w-40 h-40 text-black rotate-12" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
            
            {/* Centered Typography: READY TO in White, RIDE? in Black */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight select-none mb-6">
              <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]">READY TO </span>
              <span className="text-black">RIDE?</span>
            </h2>

            {/* Centered Modern Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center gap-2 bg-black hover:bg-zinc-800 active:scale-95 text-white font-extrabold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)] hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                <span>Get Quote</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </Link>

              <a
                href="tel:+61424791786"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 active:scale-95 text-black font-extrabold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-black" />
                <span>+61 424 791 786</span>
              </a>

              <a
                href="https://wa.me/923335028515?text=Hi,%20I%20would%20like%20to%20book%20a%20Maxi%20Cab%20in%20Perth."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-extrabold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_25px_rgba(37,211,102,0.4)] hover:scale-105 transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN FOOTER BODY — Clean Modern Grid
         ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-11 h-11 bg-amber-400 group-hover:bg-amber-300 flex items-center justify-center text-black transition-all rounded-xl shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                <Car className="w-5 h-5" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-lg text-white uppercase tracking-tight">
                  Perth Maxi Cab
                </span>
                <span className="text-[9px] font-bold text-amber-400 uppercase tracking-[0.25em] mt-0.5">
                  Airport &amp; Accessible
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/60 leading-relaxed max-w-sm font-medium">
              Your Local Perth Maxi Cab Service for Airport Transfers, Group Travel &amp; Events. Fully equipped with certified ramps, wheelchair tie-downs, and child safety restraints.
            </p>

            <div className="pt-2 flex flex-col gap-3">
              <div className="flex items-center gap-2 backdrop-blur-md bg-white/5 border border-white/10 px-3 py-2 w-max rounded-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] font-black uppercase text-white tracking-widest">WA DoT Licensed</span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-md bg-white/5 border border-white/10 px-3 py-2 w-max rounded-lg">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="text-[10px] font-black uppercase text-white tracking-widest">24/7 No Surge Price</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400" /> Links
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              <li>
                <Link href="/" className="text-white/60 hover:text-amber-400 transition-colors uppercase tracking-wider text-[11px]">Home</Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-amber-400 transition-colors uppercase tracking-wider text-[11px]">All Services</Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-amber-400 transition-colors uppercase tracking-wider text-[11px]">About Us</Link>
              </li>
              <li>
                <Link href="/locations" className="text-white/60 hover:text-amber-400 transition-colors uppercase tracking-wider text-[11px]">Service Areas</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-amber-400 transition-colors uppercase tracking-wider text-[11px]">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-sky-400" /> Services
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              <li>
                <Link href="/services/airport-transfers" className="text-white/60 hover:text-sky-400 transition-colors uppercase tracking-wider text-[11px]">
                  Airport Transfers (T1–T4)
                </Link>
              </li>
              <li>
                <Link href="/services/wheelchair-accessible-taxi" className="text-white/60 hover:text-sky-400 transition-colors uppercase tracking-wider text-[11px]">
                  Wheelchair Taxis
                </Link>
              </li>
              <li>
                <Link href="/services/group-maxi-cab" className="text-white/60 hover:text-sky-400 transition-colors uppercase tracking-wider text-[11px]">
                  7-11 Seater Maxi Cab
                </Link>
              </li>
              <li>
                <Link href="/services/baby-seat-taxi" className="text-white/60 hover:text-sky-400 transition-colors uppercase tracking-wider text-[11px]">
                  Baby Seat Taxi
                </Link>
              </li>
              <li>
                <Link href="/services/medical-ndis-transport" className="text-white/60 hover:text-sky-400 transition-colors uppercase tracking-wider text-[11px]">
                  NDIS &amp; Medical Transport
                </Link>
              </li>
              <li>
                <Link href="/services/local-everyday-transport" className="text-white/60 hover:text-sky-400 transition-colors uppercase tracking-wider text-[11px]">
                  Tours &amp; Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact (3 cols) — Clean typography without colorful containers */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400" /> Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+61424791786" className="group flex flex-col">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Direct Line</span>
                  <span className="flex items-center gap-2 text-white font-bold group-hover:text-amber-400 transition-colors">
                    <Phone className="w-4 h-4 text-amber-400" />
                    +61 424 791 786
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923335028515?text=Hi,%20I%20would%20like%20to%20book%20a%20Maxi%20Cab%20in%20Perth."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col"
                >
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">WhatsApp Message</span>
                  <span className="flex items-center gap-2 text-white font-bold group-hover:text-emerald-400 transition-colors">
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                    +92 333 5028515
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:bookings@wheelchairmaxiperth.com" className="group flex flex-col">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Email (Gmail)</span>
                  <span className="flex items-center gap-2 text-white font-bold group-hover:text-amber-400 transition-colors text-xs break-all">
                    <GmailIcon className="w-4 h-4" colored={true} />
                    bookings@wheelchairmaxiperth.com
                  </span>
                </a>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Service Area</span>
                  <span className="flex items-start gap-2 text-white font-bold text-xs leading-relaxed">
                    <MapPin className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <span>Perth Metro, Airport (T1–T4), Fremantle &amp; Joondalup</span>
                  </span>
                </div>
              </li>
            </ul>

            <Link
              href="/enquire"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 border-2 border-black text-black font-black uppercase text-xs px-6 py-3.5 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all w-full rounded-full"
            >
              Book Now &rarr;
            </Link>
          </div>
        </div>


        {/* ─────────────────────────────────────────────────────────────
            3. BOTTOM SUB-FOOTER BAR
           ───────────────────────────────────────────────────────────── */}
        <div className="border-t border-zinc-800/60 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <p className="font-semibold tracking-wider text-center sm:text-left">
            &copy; {new Date().getFullYear()} Perth Accessible Taxi & Maxi Cab. All rights reserved.
          </p>
          <div className="flex items-center gap-4 font-semibold tracking-wider">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors duration-200">
              Privacy
            </Link>
            <span className="w-px h-3 bg-zinc-800" />
            <Link href="/terms" className="hover:text-zinc-300 transition-colors duration-200">
              Terms
            </Link>
          </div>
        </div>

      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-10 right-4 sm:right-8 w-10 h-10 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-black hover:bg-amber-400 hover:border-amber-400 transition-all z-10 shadow-lg cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}
