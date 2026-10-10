import type { Metadata } from "next";
import EnquiryForm from "@/components/booking/EnquiryForm";

export const metadata: Metadata = {
  title: "Secure Your Booking | Perth Maxi Taxi & Accessible Cab",
  description: "Book wheelchair-accessible transport and maxi cabs in Perth. Guaranteed ramps, accredited drivers, direct WhatsApp confirmation, and fixed upfront fares.",
};

export default function EnquirePage() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen text-white selection:bg-amber-400 selection:text-black">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER HERO (Secure Your Booking in WHITE)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-8 sm:pt-36 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        {/* Subtle glow spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-amber-400/15 blur-[130px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-4 text-white">
            Secure Your Booking
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-semibold leading-relaxed max-w-xl mx-auto">
            Direct owner dispatch with upfront fixed fares. Immediate flight and wheelchair scheduling across Greater Perth.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN BOOKING FORM (CENTERED FULL ENGINE)
         ───────────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full pb-24">
        <EnquiryForm />
      </section>

    </div>
  );
}
