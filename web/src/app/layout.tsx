import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileContactBar from "@/components/layout/MobileContactBar";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { Analytics } from "@vercel/analytics/react";
import { SITE_URL } from "@/config/site";
import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wheelchair Taxi Perth | Maxi Cab & Airport Transfers 24/7",
    template: "%s | Perth Wheelchair Taxi Van",
  },
  description:
    "Wheelchair accessible 7-11 seater maxi cab in Perth. NDIS & TUSS, fixed quotes, 24/7 airport transfers. Call or WhatsApp +61 493 252 766 for fast booking.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Perth Wheelchair Taxi Van",
    locale: "en_AU",
    url: SITE_URL,
    title: "Wheelchair Taxi Perth | Maxi Cab & Airport Transfers 24/7",
    description:
      "Wheelchair accessible 7-11 seater maxi cab in Perth. NDIS & TUSS, fixed quotes, 24/7 airport transfers. Call or WhatsApp +61 493 252 766 for fast booking.",
    images: [
      {
        url: "/images/hero-white-van.jpg",
        width: 1200,
        height: 630,
        alt: "White wheelchair-accessible maxi cab in front of the Perth skyline at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wheelchair Taxi Perth | Maxi Cab & Airport Transfers 24/7",
    description:
      "Wheelchair accessible 7-11 seater maxi cab in Perth. NDIS & TUSS, fixed quotes, 24/7 airport transfers. Call or WhatsApp +61 493 252 766 for fast booking.",
    images: ["/images/hero-white-van.jpg"],
  },
};

const taxiServiceSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "Perth Wheelchair Taxi Van",
  url: SITE_URL,
  telephone: "+61493252766",
  email: "bookings@wheelchairmaxiperth.com",
  image: `${SITE_URL}/images/hero-white-van.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Girrawheen",
    addressRegion: "WA",
    addressCountry: "AU",
  },
  areaServed: [
    { "@type": "City", name: "Perth" },
    { "@type": "Place", name: "Perth Airport" },
    { "@type": "City", name: "Fremantle" },
    { "@type": "City", name: "Joondalup" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-200 pb-[calc(60px+env(safe-area-inset-bottom))] sm:pb-0">
        <JsonLd data={taxiServiceSchema} />
        <SmoothScrollProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <MobileContactBar />
          <FloatingWhatsApp />
          <Analytics />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
