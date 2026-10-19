import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";
import { config } from "@/lib/config";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kadar Rent Car — Sewa Mobil Nyaman & Terpercaya",
  description:
    "Kadar Rent Car menyediakan layanan rental mobil terpercaya di Indonesia. Pilihan sewa lepas kunci dan dengan driver, kendaraan beragam dari MPV hingga SUV premium.",
  openGraph: {
    title: "Kadar Rent Car — Sewa Mobil Nyaman & Terpercaya",
    description: "Layanan rental mobil terpercaya dengan pilihan lepas kunci dan dengan driver.",
    locale: "id_ID",
    type: "website",
  },
};

const features = [
  {
    title: "Pilihan Mobil Beragam",
    description: "Tersedia berbagai pilihan kendaraan mulai dari MPV keluarga, SUV tangguh, hingga sedan premium.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Pilihan Sewa Fleksibel",
    description: "Sewa harian, mingguan, atau bulanan sesuai kebutuhan perjalanan Anda.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Layanan dengan Driver",
    description: "Nikmati perjalanan tanpa repot dengan pengemudi profesional dan berpengalaman.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Pemesanan Mudah via WhatsApp",
    description: "Hubungi kami langsung melalui WhatsApp untuk informasi ketersediaan dan reservasi.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const featuredCars = cars.filter((c) => c.isFeatured);
  const waContactUrl = buildWhatsAppUrl(
    config.whatsappNumber,
    "Halo Kadar Rent Car, saya ingin bertanya tentang layanan rental mobil."
  );

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Perjalanan Nyaman Dimulai Bersama Kadar Rent Car"
        subtitle="Layanan rental mobil terpercaya dengan pilihan kendaraan beragam. Sewa lepas kunci atau dengan driver profesional — sesuaikan dengan kebutuhan perjalanan Anda."
        primaryCta={{ label: "Lihat Katalog Mobil", href: "/katalog" }}
        secondaryCta={{ label: "Hubungi Kami", href: waContactUrl }}
      />

      {/* Service Highlights */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#F7F9FC" }} aria-labelledby="keunggulan-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Mengapa Memilih Kadar Rent Car?"
            subtitle="Kami hadir untuk memberikan pengalaman rental mobil yang nyaman dan terpercaya."
            centered
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-start gap-4 rounded-xl bg-white p-6 shadow-sm"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "#EAF2FF", color: "#155EEF" }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: "#172B4D" }}>
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Methods */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="metode-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Pilih Metode Sewa Anda"
            subtitle="Dua pilihan metode sewa yang fleksibel untuk memenuhi berbagai kebutuhan perjalanan."
            centered
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Lepas Kunci */}
            <div
              className="flex flex-col gap-5 rounded-2xl border p-8"
              style={{ borderColor: "#EAF2FF", backgroundColor: "#F8FBFF" }}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl"
                style={{ backgroundColor: "#EAF2FF" }}
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#155EEF" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: "#172B4D" }}>Lepas Kunci</h3>
                <p className="mt-2 leading-relaxed" style={{ color: "#64748B" }}>
                  Kemudikan kendaraan sendiri dengan bebas. Cocok bagi Anda yang ingin fleksibilitas
                  penuh dalam mengatur jadwal dan rute perjalanan, sesuai dengan ketentuan yang berlaku.
                </p>
              </div>
              <Link
                href="/katalog?method=lepas-kunci"
                className="inline-flex items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-semibold transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2"
                style={{ borderColor: "#155EEF", color: "#155EEF", minHeight: 44 }}
              >
                Lihat Pilihan Lepas Kunci
              </Link>
            </div>

            {/* Dengan Driver */}
            <div
              className="flex flex-col gap-5 rounded-2xl p-8 text-white"
              style={{ background: "linear-gradient(135deg, #102A56 0%, #155EEF 100%)" }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Dengan Driver</h3>
                <p className="mt-2 leading-relaxed" style={{ color: "#c8daf0" }}>
                  Nikmati kenyamanan berkendara bersama pengemudi profesional kami. Ideal untuk
                  perjalanan bisnis, wisata, atau acara formal yang membutuhkan kehadiran tepat waktu.
                </p>
              </div>
              <Link
                href="/katalog?method=dengan-driver"
                className="inline-flex items-center justify-center rounded-lg border border-white/60 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                style={{ minHeight: 44 }}
              >
                Lihat Pilihan dengan Driver
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      {featuredCars.length > 0 && (
        <section className="py-16 sm:py-20" style={{ backgroundColor: "#F7F9FC" }} aria-labelledby="unggulan-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <SectionHeading
                title="Kendaraan Unggulan"
                subtitle="Pilihan kendaraan terpopuler kami siap menemani perjalanan Anda."
              />
              <Link
                href="/katalog"
                className="shrink-0 text-sm font-semibold underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2"
                style={{ color: "#155EEF" }}
              >
                Lihat semua →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section
        className="py-16 sm:py-24"
        style={{ background: "linear-gradient(135deg, #102A56 0%, #155EEF 100%)" }}
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="cta-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Siap Memulai Perjalanan?
          </h2>
          <p className="mt-4 text-lg" style={{ color: "#c8daf0" }}>
            Hubungi kami sekarang melalui WhatsApp untuk menanyakan ketersediaan kendaraan,
            harga, dan proses pemesanan yang mudah.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={waContactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-base font-semibold transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
              style={{ backgroundColor: "#25D366", color: "white", minHeight: 48 }}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Hubungi via WhatsApp
            </a>
            <Link
              href="/katalog"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
              style={{ minHeight: 48 }}
            >
              Lihat Katalog Mobil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
