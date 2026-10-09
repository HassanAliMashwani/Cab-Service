import { MessageCircle, HeartPulse, CheckCircle2, ShieldCheck, FileText, Phone, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Medical & NDIS Transport Perth | Wheelchair Accessible Taxi",
  description: "Specialized NDIS transport and medical appointment taxi services in Perth. TUSS vouchers accepted, plan-managed tax invoices, hospital patient transfers.",
};

export default function MedicalNdisTransportPage() {
  const hospitals = [
    { name: "Fiona Stanley Hospital", suburb: "Murdoch" },
    { name: "Royal Perth Hospital", suburb: "Perth CBD" },
    { name: "Sir Charles Gairdner Hospital", suburb: "Nedlands" },
    { name: "Perth Children's Hospital", suburb: "Nedlands" },
    { name: "St John of God Hospital", suburb: "Subiaco & Murdoch" },
    { name: "Hollywood Private Hospital", suburb: "Nedlands" },
    { name: "Joondalup Health Campus", suburb: "Joondalup" },
    { name: "Armadale Health Service", suburb: "Armadale" },
  ];

  const features = [
    "Fixed-time pickup guaranteed — never miss a medical consultation or treatment session",
    "Driver stays on standby or arranges exact return pickup time after appointment",
    "Assistance provided from clinic/hospital entrance directly into the vehicle",
    "Spacious cabin allowing support worker, nurse, or family members to sit adjacent to wheelchair",
    "Compliant with Western Australia Department of Transport accessible vehicle standards",
    "Detailed tax invoices generated for NDIS plan managers and self-managed participants",
  ];

  const faqs = [
    {
      q: "Can I use my NDIS funding for these taxi trips?",
      a: "Yes. If your NDIS plan includes transport funding under Core Supports (Category 04: Assistance with Social and Economic Participation or specialized transport), we provide fully compliant tax invoices that you or your plan manager can claim immediately."
    },
    {
      q: "Do you accept Western Australia TUSS vouchers?",
      a: "Yes. We accept Western Australia Taxi User Subsidy Scheme (TUSS) vouchers. Hand the endorsed voucher to your driver, and you only pay the subsidized co-payment rate (typically 50% or 75% off the metered/agreed fare)."
    },
    {
      q: "Can my support worker or carer ride with me?",
      a: "Absolutely. Our accessible vehicles comfortably seat the wheelchair passenger plus up to 4 to 6 additional companions, family members, or support staff at no extra charge."
    },
    {
      q: "Can the driver wait during my appointment?",
      a: "Yes. For medical visits, dialysis, dental surgery, or day hospital procedures, you can pre-book a round trip with scheduled standby time or a guaranteed return collection time."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <SlideUp>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/20 text-rose-300 text-sm font-semibold mb-6 border border-rose-500/30">
                <HeartPulse className="w-4 h-4" />
                Medical Appointments & NDIS Transport
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white tracking-tight">
                Compassionate Medical & NDIS Transport in Perth
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                Punctual, dignified, and comfortable travel for hospital appointments, therapy sessions, and community access. TUSS vouchers accepted and NDIS-compliant tax invoices provided.
              </p>
            </SlideUp>

            <SlideUp delay={0.2} className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/enquire"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all text-base flex items-center gap-2"
              >
                <span>Book Medical Transport</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/61400000000?text=Hi,%20I%20need%20to%20book%20an%20NDIS/medical%20wheelchair%20transfer%20in%20Perth."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-7 py-3.5 rounded-xl transition-all text-base flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Driver</span>
              </a>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Dignified Medical Rides */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                  Dignified Healthcare Transfers Built Around You
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Medical visits can be stressful, especially when relying on irregular general taxis that may not have appropriate wheelchair ramps or safety tie-downs. We prioritize medical transport bookings with strict punctuality, gentle vehicle handling, and patient assistance to ensure you arrive relaxed and on time.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-white rounded-2xl border border-slate-200">
                    <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-3">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">Police-Checked & Trained</h3>
                    <p className="text-xs text-slate-500">
                      Drivers are experienced in mobility assistance, patient empathy, and secure wheelchair harness operation.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-3">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">NDIS Invoicing Ready</h3>
                    <p className="text-xs text-slate-500">
                      Self-managed, plan-managed, or agency participants receive prompt itemized receipts for effortless claiming.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Features */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Medical Transport Standards
                </h3>
                <ul className="space-y-4">
                  {features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Major Perth Hospitals We Serve */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Key Hospitals & Medical Centers We Frequently Serve
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  We know the accessible drop-off bays, elevator corridors, and patient pickup locations across all major Perth hospitals:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {hospitals.map((h, i) => (
                    <div key={i} className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                      <span className="font-bold text-slate-800 block">{h.name}</span>
                      <span className="text-slate-500">{h.suburb}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  NDIS & Medical Transport FAQs
                </h3>
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-base mb-2">{faq.q}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky Sidebar Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sticky top-28 shadow-lg">
                <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                  Book Medical Transport
                </h3>
                <p className="text-slate-500 mb-6 text-center text-xs">
                  Tell us your clinic address, appointment time, and wheelchair requirements.
                </p>

                <div className="space-y-3 mb-6">
                  <Link
                    href="/enquire"
                    className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white w-full py-3.5 rounded-xl font-bold text-sm transition-colors shadow-sm"
                  >
                    <span>Complete Online Booking</span>
                  </Link>
                  <a
                    href="https://wa.me/61400000000?text=Hi,%20I%20would%20like%20to%20enquire%20about%20NDIS/medical%20transport%20in%20Perth."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white w-full py-3.5 rounded-xl font-bold text-sm transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                  <a
                    href="tel:+61400000000"
                    className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 w-full py-3 rounded-xl font-bold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call +61 400 000 000</span>
                  </a>
                </div>

                <div className="border-t border-slate-100 pt-4 text-xs text-slate-500 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>TUSS Vouchers Accepted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>NDIS Itemized Invoicing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Direct Door-to-Door Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
