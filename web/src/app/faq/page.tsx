import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Perth Accessible Taxi",
  description: "Common questions about booking our wheelchair accessible taxi service in Perth.",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "Do I need to book in advance?",
      a: "Yes, we strongly recommend booking at least 24 hours in advance to guarantee availability, especially for airport transfers or medical appointments."
    },
    {
      q: "Can I stay in my wheelchair during the ride?",
      a: "Absolutely. Our vehicles are equipped with specialized ramps and secure 4-point tie-down systems, allowing you to remain comfortably in your wheelchair for the entire journey."
    },
    {
      q: "How many passengers can travel with me?",
      a: "In addition to the wheelchair passenger, our vehicles can typically accommodate 4 to 6 additional passengers. Please let us know your exact party size when booking."
    },
    {
      q: "How much luggage can you fit for an airport transfer?",
      a: "We have ample space. We can usually accommodate 2-4 large suitcases along with the wheelchair and passengers. Let us know how much luggage you have when booking so we can prepare accordingly."
    },
    {
      q: "How do I get a price quote?",
      a: "Simply send us a WhatsApp message or email with your pickup location, destination, date, and time. We will provide a fixed-price quote upfront so there are no surprises."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-300">
              Everything you need to know about our service.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 mb-16">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={0.1 * i} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-primary">{faq.q}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{faq.a}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary">Still have questions?</h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              We're here to help. Send us a message directly on WhatsApp and we'll answer any specific questions you have.
            </p>
            <a 
              href="https://wa.me/61400000000?text=Hi,%20I%20have%20a%20question%20about%20your%20taxi%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent-green hover:bg-accent-green-hover text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Ask us on WhatsApp</span>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
