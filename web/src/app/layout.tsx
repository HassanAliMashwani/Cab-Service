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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Perth Wheelchair Taxi Van | Premium Accessible & Maxi Transport Perth",
  description: "Perth Wheelchair Taxi Van provides reliable, comfortable, and premium wheelchair-accessible transport across Perth. Direct bookings via WhatsApp, Call, or Email. Book your airport transfer or everyday transport today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-200 pb-[calc(60px+env(safe-area-inset-bottom))] sm:pb-0">
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
