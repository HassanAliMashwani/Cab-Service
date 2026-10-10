"use client";

import React from "react";
import Link from "next/link";
import { 
  Phone, 
  MapPin, 
  ArrowUp, 
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
          1. FLOATING CARD: Yellow "READY TO RIDE?" Banner (Compact & Sleek)
         ───────────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 mb-6 sm:mb-8 relative z-20">
        <div className="relative bg-amber-400 rounded-2xl sm:rounded-3xl py-5 px-6 sm:py-6 sm:px-8 shadow-[0_12px_35px_rgba(0,0,0,0.3)] overflow-hidden text-black border border-amber-300">
          
          {/* Subtle decorative background watermarks */}
          <div className="absolute -right-6 -bottom-8 pointer-events-none select-none opacity-[0.06]">
            <Car className="w-56 h-56 text-black" />
          </div>
          <div className="absolute left-6 -top-8 pointer-events-none select-none opacity-[0.05]">
            <Accessibility className="w-40 h-40 text-black rotate-12" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
            
            {/* Centered Typography: READY TO in White, RIDE? in Black */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-[0.95] tracking-tight select-none mb-3.5">
              <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]">READY TO </span>
              <span className="text-black">RIDE?</span>
            </h2>

            {/* Centered Modern Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 w-full">
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center gap-2 bg-black hover:bg-zinc-800 active:scale-95 text-white font-extrabold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-[0_6px_16px_rgba(0,0,0,0.25)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.35)] hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                <span>Get Quote</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </Link>

              <a
                href="tel:+923335028515"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 active:scale-95 text-black font-extrabold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-[0_6px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-black" />
                <span>+92 333 5028515</span>
              </a>

              <a
                href="https://wa.me/923335028515?text=Hi,%20I%20would%20like%20to%20book%20a%20Maxi%20Cab%20in%20Perth."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-extrabold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-[0_6px_16px_rgba(37,211,102,0.3)] hover:shadow-[0_10px_20px_rgba(37,211,102,0.4)] hover:scale-105 transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN FOOTER BODY — Clean Compact Modern Grid
         ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Brand Header */}
        <div className="mb-6 pb-4 border-b border-zinc-800/80">
          <Link href="/" className="flex items-center gap-3 group inline-flex">
            <div className="w-10 h-10 bg-amber-400 group-hover:bg-amber-300 flex items-center justify-center text-black transition-all rounded-xl shadow-[0_0_15px_rgba(251,191,36,0.3)]">
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
        </div>

        {/* 3 Columns: Links, Services, Contact aligned in the exact same line */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 lg:gap-8 mb-8 items-start">
          
          {/* Column 1: Links (directly under Perth Maxi Cab) */}
          <div className="lg:col-span-4">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400" /> Links
            </h3>
            <ul className="space-y-2 text-sm font-bold">
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

          {/* Column 2: Services (moved a bit to the left) */}
          <div className="lg:col-span-4 lg:col-start-5">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-sky-400" /> Services
            </h3>
            <ul className="space-y-2 text-sm font-bold">
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

          {/* Column 3: Contact (aligned to the far right) */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400" /> Contact
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:+923335028515" className="group flex flex-col">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-0.5">Direct Line</span>
                  <span className="flex items-center gap-2 text-white font-bold group-hover:text-amber-400 transition-colors text-xs sm:text-sm">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    +92 333 5028515
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
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-0.5">WhatsApp Message</span>
                  <span className="flex items-center gap-2 text-white font-bold group-hover:text-emerald-400 transition-colors text-xs sm:text-sm">
                    <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                    +92 333 5028515
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:bookings@wheelchairmaxiperth.com" className="group flex flex-col">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-0.5">Email (Gmail)</span>
                  <span className="flex items-center gap-2 text-white font-bold group-hover:text-amber-400 transition-colors text-xs break-all">
                    <GmailIcon className="w-3.5 h-3.5" colored={true} />
                    bookings@wheelchairmaxiperth.com
                  </span>
                </a>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-0.5">Service Area</span>
                  <span className="flex items-start gap-1.5 text-white font-bold text-xs leading-relaxed">
                    <MapPin className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                    <span>Perth Metro, Airport (T1–T4), Fremantle &amp; Joondalup</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>


        {/* ─────────────────────────────────────────────────────────────
            3. BOTTOM SUB-FOOTER BAR
           ───────────────────────────────────────────────────────────── */}
        <div className="border-t border-zinc-800/60 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] text-zinc-500">
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
        className="absolute top-6 right-4 sm:right-8 w-9 h-9 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-black hover:bg-amber-400 hover:border-amber-400 transition-all z-10 shadow-lg cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}
