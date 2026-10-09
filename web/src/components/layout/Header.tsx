"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Car,
  ArrowUpRight,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  const navLinks = [
    { label: "Home",      href: "/" },
    { label: "Services",  href: "/services" },
    { label: "About",     href: "/about" },
    { label: "Locations", href: "/locations" },
    { label: "Contact",   href: "/contact" },
  ];

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* â”€â”€ Glassmorphism Fixed Header â”€â”€ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-2xl bg-black/40 border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "backdrop-blur-xl bg-black/20 border-b border-white/[0.08]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-18">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Perth Maxi Cab Home"
            >
              <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center shadow-[0_0_16px_rgba(251,191,36,0.5)] group-hover:shadow-[0_0_24px_rgba(251,191,36,0.7)] transition-all">
                <Car className="w-5 h-5 text-black" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-white text-sm tracking-tight">
                  Perth Maxi Cab
                </span>
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest mt-0.5">
                  Airport &amp; Accessible
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all rounded-lg ${
                    active(link.href)
                      ? "text-amber-400 bg-white/10"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  {active(link.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href="tel:+61424791786"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white text-xs font-bold hover:bg-white/20 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden md:inline">+61 424 791 786</span>
                <span className="md:hidden">Call</span>
              </a>

              <Link
                href="/enquire"
                className="flex items-center gap-1.5 px-4 py-2 bg-amber-400 border-2 border-black text-black text-xs font-black uppercase tracking-wide rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Book Now <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/enquire"
                className="px-3.5 py-2 bg-amber-400 text-black text-xs font-black uppercase rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000]"
              >
                Book
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center text-white"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden backdrop-blur-2xl bg-black/70 border-t border-white/10">
            <nav className="flex flex-col px-5 py-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between ${
                    active(link.href)
                      ? "bg-amber-400/20 text-amber-400"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="tel:+61424791786"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  +61 424 791 786
                </a>
                <a
                  href="https://wa.me/61424791786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 text-white font-bold text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <Link
                  href="/enquire"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-400 text-black font-black text-sm border-2 border-black shadow-[3px_3px_0px_0px_#000]"
                >
                  Book Online <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

