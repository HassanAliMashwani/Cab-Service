import type { Metadata } from "next";
import EnquiryForm from "@/components/booking/EnquiryForm";
import { ShieldCheck, Clock, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Book Wheelchair Accessible Taxi Perth | Online Enquiry & WhatsApp",
  description: "Book wheelchair-accessible transport in Perth. Ramp-equipped vehicles, qualified drivers, direct WhatsApp confirmation, and fixed upfront fares.",
};

export default function EnquirePage() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen text-white">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SlideUp>
            <span className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-emerald-500/30">
              <Clock className="w-4 h-4" />
              Fast Direct Response • Fixed Fare Quotes
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Book Your Accessible Ride
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Please share your journey and accessibility specifications. We will review vehicle availability and confirm your ride immediately.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 bg-zinc-900 border-4 border-black p-8 sm:p-12 shadow-[8px_8px_0px_0px_#000]">
              <FadeIn>
                <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-4 block">Reservation Form</span>
                <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Secure Your Booking</h2>
                <div className="bg-black border-4 border-zinc-800 p-6 sm:p-8">
                  <EnquiryForm />
                </div>
              </FadeIn>
            </div>

            {/* Sidebar Highlights */}
            <div className="lg:col-span-4 space-y-8">
              <FadeIn className="bg-amber-400 text-black border-4 border-black p-8 shadow-[6px_6px_0px_0px_#000] relative overflow-hidden">
                <ShieldCheck className="absolute -bottom-6 -right-6 w-32 h-32 text-black/10" />
                <h3 className="text-2xl font-black uppercase tracking-wider mb-6 relative z-10 flex items-center gap-3">
                  <div className="w-10 h-10 bg-black text-amber-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  Why Book With Us
                </h3>
                <ul className="space-y-4 text-sm font-medium relative z-10">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>100% Guaranteed Ramp</strong> — Heavy-duty hydraulic and low-angle foldout ramps.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>4-Point Q'Straint Tie-Downs</strong> — Passenger remains fully secured in their wheelchair.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Perth Airport Meet & Greet</strong> — Direct terminal curbside assistance for arriving flights.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>NDIS & TUSS Approved</strong> — Tax invoices provided for plan-managed and self-managed participants.</span>
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.1} className="bg-zinc-900 border-4 border-emerald-500 p-8 shadow-[6px_6px_0px_0px_#10b981]">
                <h3 className="text-xl font-black uppercase tracking-wider text-emerald-500 mb-2">Need an Immediate Taxi?</h3>
                <p className="text-sm font-medium text-white/60 mb-6">
                  If your ride is within the next 2 hours or urgent, please contact us directly via phone or WhatsApp.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/61424791786?text=Hi,%20I%20need%20an%20urgent%20wheelchair%20accessible%20taxi%20in%20Perth."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black border-2 border-black font-black uppercase tracking-widest py-4 px-4 transition-all shadow-[4px_4px_0px_0px_#000] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Direct</span>
                  </a>
                  <a
                    href="tel:+61424791786"
                    className="w-full flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-black border-2 border-black font-black uppercase tracking-widest py-4 px-4 transition-all shadow-[4px_4px_0px_0px_#000] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000]"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call +61 424 791 786</span>
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
