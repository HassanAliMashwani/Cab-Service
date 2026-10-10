"use client";

import Link from "next/link";
import {
  Phone,
  MapPin,
  ShieldCheck,
  ArrowUp,
  Clock,
  Car
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-12 mt-auto border-t-4 border-black relative z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">

          {/* Column 1: Logo & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-12 h-12 bg-amber-400 group-hover:bg-amber-300 flex items-center justify-center text-black transition-all border-4 border-black shadow-[4px_4px_0px_0px_#facc15]">
                <Car className="w-6 h-6" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-xl text-white uppercase tracking-tight">
                  Perth Maxi Cab
                </span>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mt-1">
                  Airport & Accessible
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/60 leading-relaxed max-w-sm font-medium">
              Your Local Perth Maxi Cab Service for Airport Transfers, Group Travel & Events. Fully equipped with certified ramps, wheelchair tie-downs, and child safety restraints.
            </p>

            <div className="pt-2 flex flex-col gap-3">
              <div className="flex items-center gap-2 backdrop-blur-md bg-white/5 border border-white/10 px-3 py-2 w-max">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] font-black uppercase text-white tracking-widest">WA DoT Licensed</span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-md bg-white/5 border border-white/10 px-3 py-2 w-max">
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
                  NDIS & Medical Transport
                </Link>
              </li>
              <li>
                <Link href="/services/local-everyday-transport" className="text-white/60 hover:text-sky-400 transition-colors uppercase tracking-wider text-[11px]">
                  Tours & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact (3 cols) */}
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
                <a href="https://wa.me/61424791786" target="_blank" rel="noopener noreferrer" className="group flex flex-col">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">WhatsApp Message</span>
                  <span className="flex items-center gap-2 text-white font-bold group-hover:text-emerald-400 transition-colors">
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                    +61 424 791 786
                  </span>
                </a>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Service Area</span>
                  <span className="flex items-start gap-2 text-white font-bold">
                    <MapPin className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <span>Perth Metro, Airport (T1-T4), Fremantle & Joondalup</span>
                  </span>
                </div>
              </li>
            </ul>

            <Link
              href="/enquire"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-amber-400 border-4 border-black text-black font-black uppercase text-xs px-6 py-3 shadow-[4px_4px_0px_0px_#facc15] hover:shadow-[6px_6px_0px_0px_#facc15] hover:-translate-x-1 hover:-translate-y-1 transition-all w-full"
            >
              Book Now &rarr;
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-white/10 pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-bold text-white/40 uppercase tracking-wider text-center md:text-left">
            &copy; {new Date().getFullYear()} Perth Accessible Taxi & Maxi Cab. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] font-bold text-white/40 uppercase tracking-wider">
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-10 right-4 sm:right-8 w-10 h-10 backdrop-blur-md bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-amber-400 hover:text-black hover:border-black transition-all z-10 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}
