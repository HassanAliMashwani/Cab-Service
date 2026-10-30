"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import ServiceCard from "@/components/services/ServiceCard";

const services = [
  {
    title: "Wheelchair Taxi",
    tagline: "Girrawheen & Perth Metro",
    iconName: "Accessibility",
    gradient: "sky" as const,
    features: ["Ramp or Lift", "Secure Restraints", "Carer Welcome"],
    serviceHref: "/services/wheelchair-accessible-taxi",
    badgeText: "24/7",
  },
  {
    title: "NDIS & Medical Transport",
    tagline: "NDIS · TUSS · Medical",
    iconName: "HeartPulse",
    gradient: "rose" as const,
    features: ["Medical Visits", "TUSS Vouchers", "NDIS Invoice"],
    serviceHref: "/services/medical-ndis-transport",
    badgeText: "NDIS",
  },
  {
    title: "Group Maxi Cab",
    tagline: "Up to 10 Passengers",
    iconName: "Users",
    gradient: "emerald" as const,
    features: ["Up to 10 Passengers", "Dual A/C", "Swan Valley"],
    serviceHref: "/services/group-maxi-cab",
    badgeText: "Spacious",
  },
  {
    title: "Baby Seat Taxi",
    tagline: "Pre-installed Seats",
    iconName: "Baby",
    gradient: "amber" as const,
    features: ["Baby Seats", "Capsules", "Clean & Safe"],
    serviceHref: "/services/baby-seat-taxi",
    badgeText: "Family",
  },
  {
    title: "Airport Transfer",
    tagline: "T1 · T2 · T3 · T4",
    iconName: "Plane",
    gradient: "amber" as const,
    features: ["Flight Timing", "Meet & Greet", "Luggage by Arrangement"],
    serviceHref: "/services/airport-transfers",
    badgeText: "24/7",
  },
  {
    title: "Weddings & Events",
    tagline: "Charters & Celebrations",
    iconName: "Sparkles",
    gradient: "violet" as const,
    features: ["Up to 10 Passengers", "Dual A/C", "Swan Valley"],
    serviceHref: "/services/tours-and-events-transport",
    badgeText: "VIP",
  },
];

export default function CoreServicesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check prefers-reduced-motion safely
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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

  // Auto-advance every 4 seconds, loops infinitely
  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % services.length;
        scrollTo(next);
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion, isPaused, scrollTo]);

  // Handle interaction pause & 3-second resume
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

  // Sync dot indicator with manual scroll position on mobile
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstItem = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstItem ? firstItem.offsetWidth : container.clientWidth * 0.84;
    const gap = 14;
    const scrollLeft = container.scrollLeft;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    const bounded = Math.min(Math.max(0, index), services.length - 1);
    setActiveIndex(bounded);
  };

  return (
    <div>
      {/* ── Mobile Horizontal Swipe Carousel with peek (max-width: 640px) ── */}
      <div
        className="block sm:hidden"
        aria-hidden="true"
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        onMouseDown={handleInteractionStart}
        onMouseUp={handleInteractionEnd}
        onFocus={handleInteractionStart}
        onBlur={handleInteractionEnd}
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-2 px-1 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`w-[84vw] max-w-[340px] shrink-0 snap-center transition-all duration-500 ease-in-out ${activeIndex === idx
                  ? "scale-100 opacity-100"
                  : "scale-[0.95] opacity-70"
                }`}
            >
              <ServiceCard
                title={item.title}
                tagline={item.tagline}
                iconName={item.iconName}
                gradient={item.gradient}
                features={item.features}
                serviceHref={item.serviceHref}
                badgeText={item.badgeText}
              />
            </div>
          ))}
        </div>

        {/* Mobile Carousel Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-3" aria-label="Services carousel pagination">
          {services.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                handleInteractionStart();
                scrollTo(i);
                handleInteractionEnd();
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === i
                  ? "w-6 bg-amber-400"
                  : "w-2 bg-zinc-700 hover:bg-zinc-500"
                }`}
              aria-label={`Go to service ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Desktop & Tablet Multi-column Grid (>= 640px) ── */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {services.map((item, idx) => (
          <ServiceCard
            key={idx}
            title={item.title}
            tagline={item.tagline}
            iconName={item.iconName}
            gradient={item.gradient}
            features={item.features}
            serviceHref={item.serviceHref}
            badgeText={item.badgeText}
          />
        ))}
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
