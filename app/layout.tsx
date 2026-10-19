import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kadar Rent Car — Sewa Mobil Terpercaya",
    template: "%s — Kadar Rent Car",
  },
  description:
    "Kadar Rent Car menyediakan layanan rental mobil terpercaya dengan pilihan sewa lepas kunci dan dengan driver. Temukan kendaraan yang tepat untuk perjalanan Anda.",
  keywords: ["rental mobil", "sewa mobil", "Kadar Rent Car", "lepas kunci", "dengan driver"],
  openGraph: {
    locale: "id_ID",
    type: "website",
    siteName: "Kadar Rent Car",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "#F7F9FC" }}>
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
