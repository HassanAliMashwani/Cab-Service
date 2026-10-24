import type { Metadata } from "next";
import SlideUp from "@/components/animations/SlideUp";
import PerthLocationsRoadmap from "@/components/locations/PerthLocationsRoadmap";

export const metadata: Metadata = {
  title: "Connected Transit Roadmap | Perth Wheelchair Taxi Van",
  description:
    "Explore our connected transit roadmap across Perth. 24/7 wheelchair accessible taxis and maxi vans serving 16 key metropolitan hubs within 20 km of our Girrawheen base.",
};

export const suburbs = [
  "Fremantle",
  "Joondalup",
  "Scarborough",
  "Cottesloe",
  "Midland",
  "Rockingham",
  "Mandurah",
  "Armadale",
  "Cannington",
  "Victoria Park",
  "Perth CBD",
  "Subiaco",
  "Mount Lawley",
  "Applecross",
  "Belmont",
];

export default function LocationsPage() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen text-white selection:bg-amber-400 selection:text-black overflow-x-hidden">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER AREA: Connected Transit Roadmap
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-8 sm:pt-36 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center overflow-hidden">
        {/* Subtle radial ambient spotlight */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-amber-400/15 blur-[140px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <SlideUp>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-3 text-white">
              Connected <span className="text-amber-400">Transit Roadmap</span>
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium max-w-2xl mx-auto">
              Wheelchair accessible and maxi cab connections linking 16 key hubs within 20 km of our Girrawheen base.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. FULL TRANSIT MAP & PLACES DIRECTORY
         ───────────────────────────────────────────────────────────── */}
      <section className="px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-24 overflow-hidden">
        <PerthLocationsRoadmap />
      </section>
    </div>
  );
}
