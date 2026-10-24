"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  tag: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Margaret H.",
    role: "Daughter of 84yo Passenger",
    location: "Nedlands, WA",
    rating: 5,
    text: "Finding reliable wheelchair transport used to cause anxiety. Jawad's service was on time, gentle with the ramp, and took complete care securely locking the chair. Won't use anyone else.",
    tag: "Medical Visit"
  },
  {
    name: "David K.",
    role: "International Traveler",
    location: "Perth Airport",
    rating: 5,
    text: "Flew into Perth Airport T1 with my powerchair. I was nervous about whether a maxi taxi would turn up. Driver was waiting right at terminal curbside with the ramp deployed.",
    tag: "Airport Transfer"
  },
  {
    name: "Sarah T.",
    role: "NDIS Coordinator",
    location: "Fremantle, WA",
    rating: 5,
    text: "Punctual transport and proper tax invoicing are critical. They send itemized receipts immediately after each trip, making NDIS claims completely effortless for our participants.",
    tag: "NDIS Participant"
  },
  {
    name: "Colin & Joyce B.",
    role: "TUSS Voucher Holders",
    location: "Joondalup, WA",
    rating: 5,
    text: "Courteous, clean vehicle, and they accept WA TUSS vouchers without hesitation. The driver always treats Joyce with warmth and respect rather than rushing. 10/10 recommended.",
    tag: "TUSS Vouchers"
  }
];

export default function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check prefers-reduced-motion on client safely
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const total = testimonials.length;

  const scrollTo = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstItem = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstItem ? firstItem.offsetWidth : container.clientWidth * 0.84;
    const gap = 14; // gap-3.5 = 14px
    const targetLeft = index * (cardWidth + gap);

    container.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });
    setActiveIndex(index);
  }, []);

  const prevReview = () => {
    handleInteractionStart();
    const prev = activeIndex === 0 ? total - 1 : activeIndex - 1;
    scrollTo(prev);
    handleInteractionEnd();
  };

  const nextReview = () => {
    handleInteractionStart();
    const next = (activeIndex + 1) % total;
    scrollTo(next);
    handleInteractionEnd();
  };

  // Auto-advance every 4.5 seconds like Core Services
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % total;
        scrollTo(next);
        return next;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion, total, scrollTo]);

  // Pause on interaction and resume 3 seconds later
  const handleInteractionStart = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    setIsPaused(true);
  };

  const handleInteractionEnd = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  // Sync active index with manual scroll position
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstItem = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstItem ? firstItem.offsetWidth : container.clientWidth * 0.84;
    const gap = 14;
    const scrollLeft = container.scrollLeft;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    const bounded = Math.min(Math.max(0, index), total - 1);
    setActiveIndex(bounded);
  };

  return (
    <div className="bg-black py-10 sm:py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-10">
          <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-2 sm:mb-3 block">Proven Trust</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">Real Passenger Reviews</h2>
        </div>

        {/* ── Mobile View: Smooth Scroll-Snap Swipe Carousel with scale & opacity (same as Core Services) ── */}
        <div 
          className="block sm:hidden"
          onTouchStart={handleInteractionStart}
          onTouchEnd={handleInteractionEnd}
          onMouseDown={handleInteractionStart}
          onMouseUp={handleInteractionEnd}
          onFocus={handleInteractionStart}
          onBlur={handleInteractionEnd}
        >
          {/* Horizontal Scroll Track */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-2 px-1 hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className={`w-[84vw] max-w-[340px] shrink-0 snap-center transition-all duration-500 ease-in-out ${
                  activeIndex === idx
                    ? "scale-100 opacity-100"
                    : "scale-[0.95] opacity-70"
                }`}
              >
                <div className="bg-zinc-900 border-3 border-black p-5 shadow-[4px_4px_0px_0px_#000] relative flex flex-col justify-between h-[230px] rounded-none">
                  <Quote className="absolute top-3 right-3 w-10 h-10 text-white/5 pointer-events-none" />
                  
                  <div>
                    {/* Star rating */}
                    <div className="flex items-center gap-1 mb-2.5">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                      <span className="ml-2 text-[10px] font-black uppercase tracking-wider text-amber-400 bg-black/60 px-2 py-0.5 border border-zinc-800">
                        {test.tag}
                      </span>
                    </div>

                    {/* Review Quote text ~0.95rem */}
                    <p className="text-[0.95rem] font-bold text-white leading-relaxed mb-3 italic relative z-10 line-clamp-4">
                      "{test.text}"
                    </p>
                  </div>

                  {/* Author footer */}
                  <div className="flex items-center justify-between border-t border-zinc-800/80 pt-2.5 mt-auto">
                    <div>
                      <h4 className="font-black text-sm text-white uppercase tracking-wider">{test.name}</h4>
                      <p className="text-white/60 font-medium text-[11px] mt-0.5">{test.role} • {test.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls: Left & Right Arrow Buttons + Active Pill Dot Indicators */}
          <div className="flex items-center justify-between mt-3 px-1">
            <button
              type="button"
              onClick={prevReview}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full bg-amber-400 active:bg-amber-300 text-black border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_#000] active:scale-95 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2" aria-label="Review pagination">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    handleInteractionStart();
                    scrollTo(i);
                    handleInteractionEnd();
                  }}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === i 
                      ? "w-6 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]" 
                      : "w-2 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextReview}
              aria-label="Next review"
              className="w-10 h-10 rounded-full bg-amber-400 active:bg-amber-300 text-black border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_#000] active:scale-95 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* ── Desktop & Tablet View (>= 640px) — Exact Existing Layout ── */}
        <div className="hidden sm:flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-[350px] lg:w-[calc(33.333%-1rem)] bg-zinc-900 border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000] relative flex flex-col justify-between"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-white/5" />
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[14px] font-bold text-white leading-relaxed mb-6 italic relative z-10">
                  "{test.text}"
                </p>
              </div>

              <div className="flex items-end justify-between gap-4 mt-auto border-t-2 border-zinc-800 pt-4">
                <div>
                  <h4 className="font-black text-[15px] text-white uppercase tracking-wider">{test.name}</h4>
                  <p className="text-white/60 font-medium text-[11px] mt-1">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
