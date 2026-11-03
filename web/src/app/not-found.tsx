import Link from "next/link";
import { ArrowRight, Phone, Home, MapPin, Compass } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-black text-white px-4 sm:px-6 py-24 text-center">
      <div className="w-16 h-16 rounded-full bg-amber-400/10 border-2 border-amber-400 flex items-center justify-center text-amber-400 mb-6 shadow-[0_0_24px_rgba(251,191,36,0.25)]">
        <Compass className="w-8 h-8 animate-pulse" aria-hidden="true" />
      </div>

      <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-400 mb-2">
        Error 404 — Page Not Found
      </span>

      <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 max-w-xl">
        We Couldn&apos;t Find That Route
      </h1>

      <p className="text-zinc-400 text-xs sm:text-sm max-w-md mb-8 leading-relaxed">
        The destination or page you requested may have moved or been updated. Choose from our key services or contact our 24/7 driver directly.
      </p>

      {/* Helpful Quick Navigation Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg mb-8 text-xs font-bold">
        <Link
          href="/"
          className="p-3 bg-zinc-950 border border-zinc-800 hover:border-amber-400 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <Home className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
          <span>Home</span>
        </Link>
        <Link
          href="/services"
          className="p-3 bg-zinc-950 border border-zinc-800 hover:border-amber-400 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <span>All Services</span>
        </Link>
        <Link
          href="/fares"
          className="p-3 bg-zinc-950 border border-zinc-800 hover:border-amber-400 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <span>Fares &amp; Pricing</span>
        </Link>
        <Link
          href="/locations"
          className="p-3 bg-zinc-950 border border-zinc-800 hover:border-amber-400 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <MapPin className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
          <span>Service Areas</span>
        </Link>
        <Link
          href="/guides"
          className="p-3 bg-zinc-950 border border-zinc-800 hover:border-amber-400 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <span>Transport Guides</span>
        </Link>
        <Link
          href="/enquire"
          className="p-3 bg-zinc-950 border border-zinc-800 hover:border-amber-400 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <span>Book Online</span>
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={SITE_CONFIG.phoneTel}
          className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-transform hover:scale-105"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          <span>Call 24/7: {SITE_CONFIG.phone}</span>
        </a>
      </div>
    </div>
  );
}

