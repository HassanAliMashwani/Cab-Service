import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send
} from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";
import EnquiryForm from "@/components/booking/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Perth Accessible Taxi | Direct WhatsApp, Call & Booking",
  description: "Get in touch directly with Perth's trusted wheelchair accessible taxi service. Phone, WhatsApp, email, or fast online booking with instant confirmations.",
};

export default function ContactPage() {
  const serviceZones = [
    {
      zone: "Perth Central & Inner Suburbs",
      areas: "Perth CBD, Northbridge, Subiaco, Victoria Park, South Perth, Mount Lawley, Leederville"
    },
    {
      zone: "Perth Airport & Eastern Region",
      areas: "Perth Airport (Terminals 1, 2, 3, 4), Belmont, Redcliffe, Midland, Guildford, Swan Valley"
    },
    {
      zone: "Southern Metropolitan & Coast",
      areas: "Fremantle, Applecross, Murdoch (Hospitals), Cockburn, Rockingham, Mandurah"
    },
    {
      zone: "Northern Suburbs & Coast",
      areas: "Scarborough, Cottesloe, City Beach, Stirling, Joondalup, Wanneroo, Hillarys"
    },
  ];

  return (
    <div className="flex flex-col w-full bg-black min-h-screen text-white">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SlideUp>
            <span className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-emerald-500/30">
              <Clock className="w-4 h-4" />
              Available 24/7 for Pre-Booked Transfers
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Contact Perth Accessible Taxi
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              We connect you directly to the owner and driver. No automated phone trees or hold times.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">

          {/* Direct Channels Cards (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Direct Contact Channels</h2>
            </FadeIn>

            {/* WhatsApp Card */}
            <FadeIn delay={0.1}>
              <a
                href="https://wa.me/61424791786?text=Hi,%20I%20would%20like%20to%20enquire%20about%20a%20wheelchair%20accessible%20taxi%20in%20Perth."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-zinc-900 p-8 border-4 border-emerald-500 shadow-[6px_6px_0px_0px_#10b981] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_#10b981] transition-all group relative overflow-hidden"
              >
                <MessageCircle className="absolute -bottom-6 -right-6 w-32 h-32 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors" />
                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-16 h-16 bg-emerald-500 text-black border-2 border-black flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-400 transition-colors">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-1 uppercase tracking-wider text-emerald-500">WhatsApp</h3>
                    <p className="text-white font-medium text-lg">+61 424 791 786</p>
                    <p className="text-emerald-500/80 text-xs font-bold uppercase tracking-widest mt-1">Fastest Response</p>
                  </div>
                </div>
              </a>
            </FadeIn>

            {/* Phone Card */}
            <FadeIn delay={0.2}>
              <a
                href="tel:+61424791786"
                className="block bg-zinc-900 p-8 border-4 border-amber-400 shadow-[6px_6px_0px_0px_#facc15] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_#facc15] transition-all group relative overflow-hidden"
              >
                <Phone className="absolute -bottom-6 -right-6 w-32 h-32 text-amber-400/10 group-hover:text-amber-400/20 transition-colors" />
                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-16 h-16 bg-amber-400 text-black border-2 border-black flex items-center justify-center flex-shrink-0 group-hover:bg-amber-300 transition-colors">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-1 uppercase tracking-wider text-amber-400">Call Directly</h3>
                    <p className="text-white font-medium text-lg">+61 424 791 786</p>
                    <p className="text-amber-400/80 text-xs font-bold uppercase tracking-widest mt-1">Available 24/7</p>
                  </div>
                </div>
              </a>
            </FadeIn>

            {/* Email Card */}
            <FadeIn delay={0.3}>
              <a
                href="mailto:bookings@wheelchairmaxiperth.com"
                className="block bg-zinc-900 p-8 border-4 border-sky-400 shadow-[6px_6px_0px_0px_#38bdf8] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_#38bdf8] transition-all group relative overflow-hidden"
              >
                <Mail className="absolute -bottom-6 -right-6 w-32 h-32 text-sky-400/10 group-hover:text-sky-400/20 transition-colors" />
                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-16 h-16 bg-sky-400 text-black border-2 border-black flex items-center justify-center flex-shrink-0 group-hover:bg-sky-300 transition-colors">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-1 uppercase tracking-wider text-sky-400">Email Us</h3>
                    <p className="text-white font-medium text-sm break-all">bookings@wheelchairmaxiperth.com</p>
                    <p className="text-sky-400/80 text-xs font-bold uppercase tracking-widest mt-1">24 Hour Turnaround</p>
                  </div>
                </div>
              </a>
            </FadeIn>
          </div>

          {/* Contact Form Wrapper (7 columns) */}
          <div className="lg:col-span-7 bg-zinc-900 border-4 border-black p-8 sm:p-12 shadow-[8px_8px_0px_0px_#000]">
            <FadeIn delay={0.2}>
              <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-4 block">Secure Your Ride</span>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Quick Enquiry Form</h2>
              <p className="text-white/60 font-medium mb-10 border-l-4 border-amber-400 pl-4">
                Fill out the form below. We will verify availability and confirm your booking with an upfront fixed quote within minutes.
              </p>

              <div className="bg-black border-4 border-zinc-800 p-6 sm:p-8">
                <EnquiryForm />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Operating Zones Map Area */}
        <div className="bg-zinc-900 border-4 border-black p-8 sm:p-16 shadow-[8px_8px_0px_0px_#000] relative overflow-hidden">
          <MapPin className="absolute -right-20 -bottom-20 w-[400px] h-[400px] text-white/5" />
          <div className="relative z-10">
            <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-4 block">Where We Drive</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-12">Service Coverage Areas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {serviceZones.map((zone, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="w-12 h-12 bg-black border-2 border-zinc-800 rounded-none flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400 group-hover:border-black group-hover:text-black transition-colors">
                    <MapPin className="w-5 h-5 text-zinc-400 group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg uppercase tracking-wider mb-2">{zone.zone}</h3>
                    <p className="text-white/60 text-sm leading-relaxed font-medium">
                      {zone.areas}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-black border-2 border-zinc-800 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-black text-lg uppercase tracking-wider mb-2">Outside these zones?</p>
                <p className="text-white/60 text-sm font-medium">
                  We frequently operate long-distance regional transfers to Mandurah, Bunbury, Margaret River, and beyond. Contact us on WhatsApp for a custom long-distance quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
