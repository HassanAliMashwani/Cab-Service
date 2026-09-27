import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Areas We Serve | Perth Accessible Taxi",
  description: "View the list of suburbs and areas we serve across Perth with our wheelchair accessible taxi services.",
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
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Areas We Serve
            </h1>
            <p className="text-xl text-slate-300">
              Providing reliable wheelchair-accessible transport across the Perth metropolitan area and beyond.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Service Areas</h2>
            <p className="text-slate-600 max-w-2xl">
              We cover all major suburbs in Perth, ensuring you have access to safe, comfortable transport no matter where you are located. Select a location below to learn more.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {suburbs.sort().map((suburb, i) => (
              <SlideUp key={suburb} delay={0.05 * (i % 10)}>
                <Link 
                  href={`/locations/${suburb.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl hover:border-primary hover:shadow-md transition-all group"
                >
                  <MapPin className="w-5 h-5 text-accent-green group-hover:text-primary transition-colors" />
                  <span className="font-semibold text-slate-800 group-hover:text-primary transition-colors">{suburb}</span>
                </Link>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
