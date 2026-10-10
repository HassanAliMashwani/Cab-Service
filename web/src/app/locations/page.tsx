import type { Metadata } from "next";
import SlideUp from "@/components/animations/SlideUp";
import PerthLocationsRoadmap from "@/components/locations/PerthLocationsRoadmap";

export const metadata: Metadata = {
  title: "Perth Suburbs Network & Connected Transit Roadmap | Perth Maxi Cab",
  description:
    "Explore our complete connected transit roadmap across Perth. 24/7 wheelchair accessible taxis and 7-11 seater maxi cabs connecting Perth Airport, Fremantle, Joondalup, Midland, Mandurah and all metropolitan suburbs.",
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
  "Belmont"
];

export default function LocationsPage() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen text-white selection:bg-amber-400 selection:text-black">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: Connected Transit Network
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center overflow-hidden">
        
        {/* Subtle radial ambient spotlight */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-amber-400/15 blur-[140px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <SlideUp>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-6 text-white">
              Connected <span className="text-amber-400">Transit Roadmap</span>
            </h1>

            

            
          </SlideUp>
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. BEAUTIFUL CONNECTED ROADMAP (Interactive Map & Directory)
         ───────────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-24">
        <PerthLocationsRoadmap />
      </section>

    </div>
  );
}
