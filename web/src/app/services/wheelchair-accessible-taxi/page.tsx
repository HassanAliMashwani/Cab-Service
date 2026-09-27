import { MessageCircle, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wheelchair Accessible Taxi Perth | Direct Booking",
  description: "Specialized wheelchair accessible taxi service in Perth. Fully equipped vehicles, trained drivers, and reliable door-to-door service.",
};

export default function WheelchairTaxiPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Wheelchair Accessible Taxi in Perth
            </h1>
            <p className="text-xl text-slate-300">
              Reliable, specialized transport designed entirely around accessibility and passenger comfort.
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
                <h2 className="text-3xl font-bold mb-4">Dedicated Accessible Transport</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  We don't just happen to have a wheelchair vehicle; accessible transport is our primary focus. We provide dignified, safe, and comfortable travel for passengers requiring mobility assistance across the Perth metropolitan area.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Whether you are traveling to a medical appointment, visiting family, or heading to a social event, our specialized service ensures a smooth journey from door to door.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
                <ul className="space-y-4">
                  {[
                    "Remain comfortably seated in your wheelchair during the entire journey",
                    "Fully equipped vehicles with secure tie-downs and restraints",
                    "Professional drivers trained in mobility assistance and passenger safety",
                    "Punctual, reliable service with no surprise fees",
                    "Spacious interior to accommodate extra passengers and luggage"
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
                <h3 className="text-xl font-bold mb-4 text-center">Book Your Ride</h3>
                <p className="text-slate-600 mb-6 text-center text-sm">
                  Send us your pickup details and we'll confirm your ride and price immediately.
                </p>
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/61400000000?text=Hi,%20I%20need%20a%20wheelchair%20accessible%20taxi%20in%20Perth."
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
