"use client";

import dynamic from "next/dynamic";
import React from "react";
import SlideUp from "@/components/animations/SlideUp";

import Link from "next/link";

// Client-only dynamic import to protect SSR on Vercel
const ServiceAreaMapClient = dynamic(
  () => import("@/components/home/ServiceAreaMapClient"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[280px] sm:h-[360px] bg-zinc-900 border-2 border-zinc-800 rounded-2xl flex flex-col items-center justify-center text-center p-6 my-2">
        <div className="w-8 h-8 border-3 border-amber-400 border-t-transparent rounded-full animate-spin mb-3" />
        <span className="text-zinc-400 text-xs font-semibold">
          Loading service area map...
        </span>
      </div>
    ),
  }
);

export default function ServiceAreaSection() {
  return (
    <section 
      id="service-area" 
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t-4 border-black"
      aria-label="Our Service Area"
    >
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <SlideUp>
          <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-2 sm:mb-3 block">
            Rapid Metropolitan Coverage
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-2 sm:mb-3">
            Our Service Area
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-medium">
            Based in Girrawheen, covering Perth and the surrounding 20 km.
          </p>
        </SlideUp>
      </div>

      <ServiceAreaMapClient />

      {/* Crawlable Service Area text for SEO and search bots */}
      <div className="mt-8 pt-6 border-t border-zinc-800/80 text-center max-w-4xl mx-auto px-2">
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
          Based in Girrawheen, we provide wheelchair taxi and maxi cab services across Perth and the surrounding 20 km, including{" "}
          <Link href="/locations" className="text-amber-400 hover:text-amber-300 hover:underline font-semibold">Girrawheen</Link>,{" "}
          <Link href="/locations" className="text-amber-400 hover:text-amber-300 hover:underline font-semibold">Joondalup</Link>,{" "}
          <Link href="/locations" className="text-amber-400 hover:text-amber-300 hover:underline font-semibold">Fremantle</Link>,{" "}
          <Link href="/locations" className="text-amber-400 hover:text-amber-300 hover:underline font-semibold">Perth CBD</Link>,{" "}
          <Link href="/locations" className="text-amber-400 hover:text-amber-300 hover:underline font-semibold">Scarborough</Link>,{" "}
          <Link href="/locations" className="text-amber-400 hover:text-amber-300 hover:underline font-semibold">Perth Airport (T1-T4)</Link>,{" "}
          <Link href="/locations" className="text-amber-400 hover:text-amber-300 hover:underline font-semibold">Swan Valley</Link>,{" "}
          <Link href="/locations" className="text-amber-400 hover:text-amber-300 hover:underline font-semibold">Nedlands</Link>,{" "}
          and similar Perth metropolitan hubs.
        </p>
      </div>
    </section>
  );
}
