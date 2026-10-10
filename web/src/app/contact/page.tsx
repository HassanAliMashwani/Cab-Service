import type { Metadata } from "next";
import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import GmailIcon from "@/components/icons/GmailIcon";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Perth Maxi Cab | Direct Call, WhatsApp & Quick Booking",
  description:
    "Direct contact for Perth's premier maxi cab and wheelchair accessible service. Call or message WhatsApp +92 333 5028515 for immediate fixed quotes.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen text-white selection:bg-amber-400 selection:text-black">
      
      {/* ─────────────────────────────────────────────────────────────
          1. CLEAN HEADER HERO
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-8 sm:pt-36 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        {/* Amber glow spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-amber-400/15 blur-[130px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-4 text-white">
            Contact Perth <span className="text-amber-400">Maxi Cab</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-semibold leading-relaxed max-w-xl mx-auto">
            We connect you directly to the owner and driver. No automated phone trees or hold times.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. DIRECT CHANNELS & QUICK FORM (ROUNDED & OFFICIAL ICONS)
         ───────────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-6">
              Direct Contact Channels
            </h2>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/923335028515?text=Hi,%20I%20would%20like%20to%20enquire%20about%20a%20Maxi%20Cab%20in%20Perth."
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-zinc-900 p-6 sm:p-8 border-4 border-emerald-500 shadow-[6px_6px_0px_0px_#10b981] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_#10b981] transition-all group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute -bottom-6 -right-6 w-32 h-32 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors pointer-events-none flex items-center justify-center">
                <WhatsAppIcon className="w-28 h-28" />
              </div>
              <div className="flex items-center gap-5 sm:gap-6 relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white border-2 border-black flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform rounded-xl shadow-[2px_2px_0px_0px_#000]">
                  <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" colored={false} />
                </div>
                <div>
                  <h3 className="font-black text-xl mb-1 uppercase tracking-wider text-emerald-500">
                    WhatsApp
                  </h3>
                  <p className="text-white font-black text-lg sm:text-xl">
                    +92 333 5028515
                  </p>
                  <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mt-1">
                    Fastest Response
                  </p>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+923335028515"
              className="block bg-zinc-900 p-6 sm:p-8 border-4 border-amber-400 shadow-[6px_6px_0px_0px_#facc15] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_#facc15] transition-all group relative overflow-hidden rounded-2xl"
            >
              <Phone className="absolute -bottom-6 -right-6 w-32 h-32 text-amber-400/10 group-hover:text-amber-400/20 transition-colors pointer-events-none" />
              <div className="flex items-center gap-5 sm:gap-6 relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-400 text-black border-2 border-black flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform rounded-xl shadow-[2px_2px_0px_0px_#000]">
                  <Phone className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="font-black text-xl mb-1 uppercase tracking-wider text-amber-400">
                    Call Directly
                  </h3>
                  <p className="text-white font-black text-lg sm:text-xl">
                    +92 333 5028515
                  </p>
                  <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mt-1">
                    Available 24/7
                  </p>
                </div>
              </div>
            </a>

            {/* Email / Gmail Card (Official Gmail Logo + Rounded styling) */}
            <a
              href="mailto:bookings@wheelchairmaxiperth.com"
              className="block bg-zinc-900 p-6 sm:p-8 border-4 border-white shadow-[6px_6px_0px_0px_#ffffff] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_#ffffff] transition-all group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none flex items-center justify-center">
                <GmailIcon className="w-28 h-28" colored={false} />
              </div>
              <div className="flex items-center gap-5 sm:gap-6 relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform rounded-xl shadow-[2px_2px_0px_0px_#000]">
                  <GmailIcon className="w-7 h-7 sm:w-8 sm:h-8" colored={true} />
                </div>
                <div>
                  <h3 className="font-black text-xl mb-1 uppercase tracking-wider text-white">
                    Email Us (Gmail)
                  </h3>
                  <p className="text-white font-black text-sm sm:text-base break-all">
                    bookings@wheelchairmaxiperth.com
                  </p>
                  <p className="text-zinc-300 text-xs font-bold uppercase tracking-widest mt-1">
                    24 Hour Turnaround
                  </p>
                </div>
              </div>
            </a>

          </div>

          {/* RIGHT COLUMN: Quick Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
