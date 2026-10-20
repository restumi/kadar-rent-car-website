import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { config } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: {
    default: "Kadar Rent Car — Rental Mobil Semarang & Ungaran",
    template: "%s — Kadar Rent Car",
  },
  description:
    "Kadar Rent Car menyediakan layanan rental mobil di Semarang dan Ungaran. Pilihan sewa lepas kunci dan dengan driver, armada MPV, SUV, dan sedan. Pesan via WhatsApp.",
  keywords: [
    "rental mobil Semarang",
    "sewa mobil Semarang",
    "Kadar Rent Car",
    "rental mobil lepas kunci Semarang",
    "rental mobil dengan driver Semarang",
    "rental mobil Ungaran",
    "sewa mobil Ungaran",
  ],
  openGraph: {
    locale: "id_ID",
    type: "website",
    siteName: "Kadar Rent Car",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Build JSON-LD only with confirmed facts — no placeholder values emitted.
  const addressIsReal = !config.address.startsWith("[");
  const phoneIsReal = !config.phoneNumber.startsWith("[");

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": config.companyName,
    "description":
      "Layanan rental mobil di Semarang dan Ungaran. Pilihan sewa lepas kunci dan dengan driver.",
    "url": config.siteUrl,
    "address": {
      "@type": "PostalAddress",
      ...(addressIsReal ? { "streetAddress": config.address } : {}),
      "addressLocality": "Semarang",
      "addressRegion": "Jawa Tengah",
      "addressCountry": "ID",
    },
    "areaServed": [
      { "@type": "City", "name": "Semarang" },
      { "@type": "City", "name": "Ungaran" },
    ],
  };

  // Only add telephone if it's a real number, not a placeholder.
  if (phoneIsReal) {
    jsonLd["telephone"] = config.phoneNumber;
  }

  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "#F7F9FC" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <WhatsAppButton />
      </body>
    </html>
  );
}
