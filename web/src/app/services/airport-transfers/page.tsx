import { MessageCircle, Plane, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wheelchair Accessible Airport Transfers Perth | Direct Booking",
  description: "Pre-book your wheelchair accessible airport transfer in Perth. We monitor your flight and provide meet-and-greet service at the terminal.",
};

export default function AirportTransfersPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              <Plane className="w-4 h-4" />
              Perth Airport (PER)
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Accessible Airport Transfers
            </h1>
            <p className="text-xl text-slate-300">
              Stress-free arrivals and departures. Pre-book your accessible transport to or from Perth Airport.
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
                <h2 className="text-3xl font-bold mb-4">Seamless Airport Travel</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Traveling with a wheelchair shouldn't mean extra stress at the airport. Our dedicated airport transfer service is designed for international visitors, interstate travelers, and locals heading out of Perth.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We track your flight in real-time, so whether you land early or are delayed, we'll be there waiting.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Airport Service Features</h3>
                <ul className="space-y-4">
                  {[
                    "Flight tracking to ensure we're there exactly when you land",
                    "Meet and greet service at the arrivals terminal",
                    "Assistance with luggage and safe boarding",
                    "Space for multiple passengers, suitcases, and your wheelchair",
                    "Fixed-price quotes so you know the exact cost before you fly"
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
                <h3 className="text-xl font-bold mb-4 text-center">Pre-Book Your Transfer</h3>
                <p className="text-slate-600 mb-6 text-center text-sm">
                  Send us your flight number, date, and hotel/destination to secure your ride.
                </p>
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/61400000000?text=Hi,%20I%20need%20an%20airport%20transfer%20from%20Perth%20Airport."
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
