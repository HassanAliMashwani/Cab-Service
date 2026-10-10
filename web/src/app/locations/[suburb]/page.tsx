import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, MapPin, CheckCircle } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import { suburbs } from "../page";

// Next.js will invalidate the cache when it needs to, but we pre-render all known suburbs
export function generateStaticParams() {
  return suburbs.map((suburb) => ({
    suburb: suburb.toLowerCase().replace(/\s+/g, '-'),
  }));
}

// Convert url slug back to Title Case (e.g., victoria-park -> Victoria Park)
function formatSuburbName(slug: string) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

type Props = {
  params: Promise<{ suburb: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const suburbName = formatSuburbName(resolvedParams.suburb);
  return {
    title: `Wheelchair Accessible Taxi in ${suburbName} | Perth Accessible Taxi`,
    description: `Reliable and comfortable wheelchair accessible taxi service in ${suburbName}. Book your accessible transport to Perth Airport or local destinations today.`,
  };
}

export default async function SuburbPage({ params }: Props) {
  const resolvedParams = await params;
  const suburbName = formatSuburbName(resolvedParams.suburb);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SlideUp className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/20 text-accent-green text-sm font-bold mb-6">
              <MapPin className="w-4 h-4" />
              <span>Serving {suburbName}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Wheelchair Accessible Taxi in {suburbName}
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Reliable, dignified, and comfortable travel for passengers in {suburbName}. Dedicated accessible transport for everyday travel and airport transfers.
            </p>
            
            <a 
              href={`https://wa.me/923335028515?text=Hi,%20I%20need%20a%20wheelchair%20accessible%20taxi%20in%20${encodeURIComponent(suburbName)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Book via WhatsApp</span>
            </a>
          </SlideUp>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <FadeIn delay={0.1}>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Your Trusted Transport in {suburbName}</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Finding dependable accessible transport in {suburbName} shouldn't be stressful. We provide a premium service designed specifically for passengers who use wheelchairs, ensuring a safe and comfortable journey every time.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Fully equipped vehicles with secure tie-downs",
                  "Professionally trained, compassionate drivers",
                  "Fixed pricing with no hidden fees",
                  `Direct transfers from ${suburbName} to Perth Airport`
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent-green shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-slate-100 rounded-3xl h-64 md:h-full min-h-[300px] border border-slate-200 p-8 flex flex-col justify-center items-center text-center">
               <ShieldCheck className="w-16 h-16 text-primary mb-4" />
               <h3 className="text-2xl font-bold text-primary mb-2">Safety Guaranteed</h3>
               <p className="text-slate-600">Our vehicles meet all safety standards for wheelchair transportation in Western Australia.</p>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Services List Specific to Suburb */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-10">Popular Services from {suburbName}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <SlideUp delay={0.1} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-2">{suburbName} to Perth Airport</h3>
              <p className="text-slate-600 mb-4">Stress-free airport transfers. We assist with luggage and ensure you arrive with plenty of time for your flight.</p>
              <Link href="/services/airport-transfers" className="text-primary font-bold hover:underline">Learn more &rarr;</Link>
            </SlideUp>
            <SlideUp delay={0.2} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Medical & Everyday Travel</h3>
              <p className="text-slate-600 mb-4">Need to get to a hospital, clinic, or shopping centre in or around {suburbName}? We provide reliable point-to-point service.</p>
              <Link href="/services/local-everyday-transport" className="text-primary font-bold hover:underline">Learn more &rarr;</Link>
            </SlideUp>
          </div>
        </div>
      </section>
    </div>
  );
}
