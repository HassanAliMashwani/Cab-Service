import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileContactBar from "@/components/layout/MobileContactBar";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Wheelchair-Accessible Taxi Perth | Direct Booking",
  description: "Reliable, comfortable, and premium wheelchair-accessible transport in Perth. Direct bookings via WhatsApp, Call, or Email. Book your airport transfer or everyday transport today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-200 pb-[72px] sm:pb-0">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <MobileContactBar />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
