"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import Link from "next/link";
import SlideUp from "@/components/animations/SlideUp";
import { MapPin, Navigation, ArrowRight, Hospital, Plane, Building2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

// Client-only dynamic map component with accessible fallback
const ServiceAreaMapClient = dynamic(
  () => import("@/components/home/ServiceAreaMapClient"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[280px] sm:h-[360px] bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex flex-col items-center justify-center text-center p-6 my-2">
        <div className="w-8 h-8 border-3 border-amber-400 border-t-transparent rounded-full animate-spin mb-3" />
        <span className="text-zinc-300 text-xs font-semibold uppercase tracking-wider">
          Initializing Interactive Perth Map...
        </span>
      </div>
    ),
  }
);

export const KEY_SUBURBS = [
  { slug: "girrawheen", name: "Girrawheen", tag: "Dispatch Base (North Metro)", distance: "0 km" },
  { slug: "joondalup", name: "Joondalup", tag: "Joondalup Health Campus", distance: "14 km" },
  { slug: "nedlands", name: "Nedlands", tag: "Sir Charles Gairdner / PCH", distance: "18 km" },
  { slug: "perth-cbd", name: "Perth CBD", tag: "Royal Perth Hospital / Central", distance: "15 km" },
  { slug: "perth-airport", name: "Perth Airport", tag: "Terminals T1, T2, T3 & T4", distance: "21 km" },
  { slug: "fremantle", name: "Fremantle", tag: "Fremantle Hospital / Port Hub", distance: "28 km" },
  { slug: "scarborough", name: "Scarborough", tag: "Accessible Coastal Precinct", distance: "14 km" },
  { slug: "subiaco", name: "Subiaco", tag: "St John of God Medical Hub", distance: "16 km" },
  { slug: "swan-valley", name: "Swan Valley", tag: "Wineries & Event Charters", distance: "19 km" },
  { slug: "perth-hills", name: "Perth Hills", tag: "Kalamunda & Mundaring", distance: "29 km" },
  { slug: "morley", name: "Morley", tag: "Galleria Shopping & Transit Hub", distance: "10 km" },
  { slug: "midland", name: "Midland", tag: "St John of God Midland Public Hospital", distance: "20 km" },
  { slug: "cottesloe", name: "Cottesloe", tag: "Western Suburbs & Beach Access", distance: "20 km" },
  { slug: "victoria-park", name: "Victoria Park", tag: "South-East Dining & Accessible Stays", distance: "18 km" },
];

export default function ServiceAreaSection() {
  const [showInteractiveMap, setShowInteractiveMap] = useState(false);

  return (
    <section
      id="service-area"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t-4 border-black"
      aria-label="Our Service Area"
    >
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <SlideUp>
          <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-2 sm:mb-3 block">
            Girrawheen Base &amp; 20 km Metro Radius
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-2 sm:mb-3">
            Perth Wheelchair Taxi Service Areas
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-medium">
            Based in Girrawheen WA 6064, we provide 24/7 accessible wheelchair vans and 10-seater maxi cabs across Perth and surrounding destinations.
          </p>
        </SlideUp>
      </div>

      {/* Interactive Map Toggle / Loader */}
      <div className="mb-8">
        {!showInteractiveMap ? (
          <div className="w-full bg-zinc-950 border-2 border-zinc-800 rounded-2xl p-6 sm:p-10 text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/40 flex items-center justify-center mb-4">
              <Navigation className="w-6 h-6 text-amber-400" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-black text-white uppercase tracking-wide mb-2">
              Interactive Metropolitan Route Map
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mb-6">
              View our primary 20 km dispatch zone centred on Girrawheen, covering northern corridors, airport transfer links, and hospital transfer routes.
            </p>
            <button
              type="button"
              onClick={() => setShowInteractiveMap(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md hover:scale-105"
            >
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Load Interactive Perth Map</span>
            </button>
          </div>
        ) : (
          <ServiceAreaMapClient />
        )}
      </div>

      {/* Fully Crawlable, Server-Rendered Suburbs & Destinations Grid */}
      <div className="mt-8 pt-8 border-t border-zinc-800/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-black text-white uppercase tracking-tight">
              Major Service Hubs &amp; Suburbs
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              Select your suburb to see typical hospital routes, airport travel times, and local accessibility details.
            </p>
          </div>
          <Link
            href="/locations"
            className="inline-flex items-center gap-1.5 text-xs font-black text-amber-400 hover:text-amber-300 uppercase tracking-wider"
          >
            <span>View All Suburbs</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {KEY_SUBURBS.map((sub) => (
            <Link
              key={sub.slug}
              href={`/locations/${sub.slug}`}
              className="p-3.5 bg-zinc-950 border border-zinc-800 hover:border-amber-400/60 rounded-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-black text-white text-sm group-hover:text-amber-400 transition-colors block">
                  {sub.name}
                </span>
                <span className="text-[11px] text-zinc-400 font-medium block mt-0.5 leading-snug">
                  {sub.tag}
                </span>
              </div>
              <span className="text-[10px] text-amber-400/80 font-bold uppercase tracking-wider mt-2.5">
                Approx {sub.distance} from base →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
