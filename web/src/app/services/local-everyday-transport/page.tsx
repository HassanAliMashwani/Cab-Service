import { MessageCircle, CheckCircle, Car } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Everyday Wheelchair Transport Perth | Direct Booking",
  description: "Reliable wheelchair accessible taxi for medical appointments, shopping, and everyday travel around the Perth metropolitan area.",
};

export default function LocalEverydayTransportPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              <Car className="w-4 h-4" />
              Perth Metropolitan Area
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Local Everyday Transport
            </h1>
            <p className="text-xl text-slate-300">
              Your reliable partner for everyday errands, medical appointments, and social outings around Perth.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Everyday Travel Made Easy</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Getting around Perth shouldn't be a hassle. Whether you have a routine check-up at the hospital, need to do some shopping, or want to visit friends and family, we provide a smooth door-to-door service.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Our drivers are punctual, patient, and familiar with major medical centers, shopping districts, and residential areas across Perth.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Perfect For:</h3>
                <ul className="space-y-4">
                  {[
                    "Hospital and specialist medical appointments",
                    "Shopping trips and everyday errands",
                    "Visiting family and friends",
                    "Attending social events and community activities",
                    "Recurring travel arrangements"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sticky top-28">
                <h3 className="text-xl font-bold mb-4 text-center">Book Your Transport</h3>
                <p className="text-slate-600 mb-6 text-center text-sm">
                  Let us know your pickup location, destination, and what time you need to be there.
                </p>
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/61400000000?text=Hi,%20I%20would%20like%20to%20book%20a%20local%20wheelchair%20taxi%20in%20Perth."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-accent-green hover:bg-accent-green-hover text-white w-full py-4 rounded-xl font-bold transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Us</span>
                  </a>
                  <a 
                    href="tel:+61400000000" 
                    className="flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-800 w-full py-4 rounded-xl font-bold transition-colors"
                  >
                    <span>Call +61 400 000 000</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
