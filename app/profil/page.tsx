import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { config } from "@/lib/config";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Profil Perusahaan",
  description:
    "Kenali lebih dekat Kadar Rent Car — layanan rental mobil terpercaya dengan pilihan kendaraan beragam dan dua metode sewa: lepas kunci dan dengan driver.",
  openGraph: {
    title: "Profil Perusahaan — Kadar Rent Car",
    description:
      "Layanan rental mobil terpercaya dengan armada beragam dan pengemudi profesional.",
    locale: "id_ID",
    type: "website",
  },
};

const waUrl = buildWhatsAppUrl(
  config.whatsappNumber,
  "Halo Kadar Rent Car, saya ingin bertanya tentang layanan rental mobil."
);

export default function ProfilPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F9FC" }}>
      {/* Page header */}
      <header
        className="border-b py-12"
        style={{ backgroundColor: "white", borderColor: "#e8edf5" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Profil Perusahaan"
            subtitle="Mengenal Kadar Rent Car lebih dekat — misi, layanan, dan komitmen kami."
          />
        </div>
      </header>

      <main>
        {/* About section */}
        <section
          className="py-16 sm:py-20"
          aria-labelledby="tentang-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
              {/* Text */}
              <div className="flex flex-col gap-6">
                <h2
                  id="tentang-heading"
                  className="text-3xl font-bold tracking-tight sm:text-4xl"
                  style={{ color: "#172B4D" }}
                >
                  Tentang {config.companyName}
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
                  {config.companyName} adalah penyedia layanan rental mobil profesional yang
                  berkomitmen menghadirkan pengalaman perjalanan yang nyaman, aman, dan terpercaya
                  bagi setiap pelanggan.
                </p>
                <p className="leading-relaxed" style={{ color: "#64748B" }}>
                  Kami menyediakan armada kendaraan beragam — mulai dari MPV keluarga, SUV tangguh,
                  hingga sedan premium — dengan dua pilihan metode sewa yang fleksibel: lepas kunci
                  untuk Anda yang ingin kebebasan penuh, dan dengan driver profesional untuk
                  perjalanan yang lebih santai.
                </p>
                {/* PLACEHOLDER — Informasi tahun berdiri dan jumlah armada perlu dikonfirmasi pemilik bisnis */}
                <div
                  className="rounded-lg border-l-4 p-4 text-sm italic"
                  style={{ borderColor: "#F59E0B", backgroundColor: "#FFFBEB", color: "#92400E" }}
                >
                  <strong>Catatan untuk pemilik bisnis:</strong> Bagian ini memerlukan informasi
                  yang perlu dikonfirmasi, seperti tahun berdiri perusahaan, jumlah armada, dan
                  area layanan. Harap perbarui konten sesuai fakta aktual sebelum dipublikasikan.
                </div>
              </div>

              {/* Illustration */}
              <div
                className="flex items-center justify-center rounded-2xl p-10"
                style={{ background: "linear-gradient(135deg, #EAF2FF 0%, #dbeafe 100%)" }}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 300 200"
                  className="w-full max-w-xs"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Simple car icon */}
                  <rect x="40" y="100" width="220" height="60" rx="12" fill="#155EEF" opacity="0.2" />
                  <path d="M80 100 L100 65 L200 65 L220 100 Z" fill="#155EEF" opacity="0.3" />
                  <circle cx="95" cy="162" r="24" fill="#102A56" opacity="0.7" />
                  <circle cx="95" cy="162" r="14" fill="#EAF2FF" opacity="0.5" />
                  <circle cx="205" cy="162" r="24" fill="#102A56" opacity="0.7" />
                  <circle cx="205" cy="162" r="14" fill="#EAF2FF" opacity="0.5" />
                  {/* Building */}
                  <rect x="190" y="40" width="70" height="80" rx="4" fill="#102A56" opacity="0.15" />
                  <rect x="200" y="50" width="10" height="12" rx="2" fill="#155EEF" opacity="0.4" />
                  <rect x="220" y="50" width="10" height="12" rx="2" fill="#155EEF" opacity="0.4" />
                  <rect x="240" y="50" width="10" height="12" rx="2" fill="#155EEF" opacity="0.4" />
                  <rect x="200" y="72" width="10" height="12" rx="2" fill="#155EEF" opacity="0.4" />
                  <rect x="220" y="72" width="10" height="12" rx="2" fill="#155EEF" opacity="0.4" />
                  <rect x="240" y="72" width="10" height="12" rx="2" fill="#155EEF" opacity="0.4" />
                  {/* Road */}
                  <ellipse cx="150" cy="188" rx="130" ry="10" fill="#102A56" opacity="0.1" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Komitmen / Values */}
        <section
          className="py-16 sm:py-20 bg-white"
          aria-labelledby="komitmen-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Komitmen Kami"
              subtitle="Nilai-nilai yang menjadi landasan setiap layanan yang kami berikan."
              centered
            />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {commitments.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-4 rounded-xl p-6"
                  style={{ backgroundColor: "#F7F9FC" }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "#EAF2FF", color: "#155EEF" }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-semibold" style={{ color: "#172B4D" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jenis Kendaraan */}
        <section
          className="py-16 sm:py-20"
          style={{ backgroundColor: "#F7F9FC" }}
          aria-labelledby="armada-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Jenis Kendaraan yang Tersedia"
              subtitle="Armada kami mencakup berbagai kategori kendaraan untuk setiap kebutuhan perjalanan."
              centered
            />
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {vehicleTypes.map((type) => (
                <div
                  key={type.name}
                  className="flex flex-col items-center gap-3 rounded-xl bg-white p-6 text-center shadow-sm"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full text-2xl"
                    style={{ backgroundColor: "#EAF2FF" }}
                    aria-hidden="true"
                  >
                    {type.emoji}
                  </div>
                  <h3 className="font-semibold" style={{ color: "#172B4D" }}>
                    {type.name}
                  </h3>
                  <p className="text-sm" style={{ color: "#64748B" }}>
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metode Sewa */}
        <section
          className="py-16 sm:py-20 bg-white"
          aria-labelledby="metode-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Dua Pilihan Metode Sewa"
              subtitle="Fleksibilitas penuh dalam memilih cara Anda menikmati perjalanan."
              centered
            />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div
                className="flex flex-col gap-4 rounded-2xl border p-8"
                style={{ borderColor: "#EAF2FF", backgroundColor: "#F8FBFF" }}
              >
                <h3 className="text-xl font-bold" style={{ color: "#172B4D" }}>
                  🔑 Lepas Kunci
                </h3>
                <p className="leading-relaxed" style={{ color: "#64748B" }}>
                  Kendarakan kendaraan kami sendiri dengan kebebasan penuh mengatur jadwal dan
                  rute perjalanan. Cocok untuk perjalanan mandiri dalam kota maupun antar kota,
                  dengan syarat dan ketentuan yang berlaku dari perusahaan.
                </p>
                <Link
                  href="/katalog?method=lepas-kunci"
                  className="mt-auto inline-flex items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-semibold transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2"
                  style={{ borderColor: "#155EEF", color: "#155EEF", minHeight: 44 }}
                >
                  Lihat Pilihan Lepas Kunci
                </Link>
              </div>
              <div
                className="flex flex-col gap-4 rounded-2xl p-8 text-white"
                style={{ background: "linear-gradient(135deg, #102A56 0%, #155EEF 100%)" }}
              >
                <h3 className="text-xl font-bold">👨‍✈️ Dengan Driver</h3>
                <p className="leading-relaxed" style={{ color: "#c8daf0" }}>
                  Nikmati perjalanan santai dengan pengemudi profesional kami. Ideal untuk
                  perjalanan bisnis, kunjungan keluarga, atau acara formal yang membutuhkan
                  ketepatan waktu dan ketenangan selama perjalanan.
                </p>
                <Link
                  href="/katalog?method=dengan-driver"
                  className="mt-auto inline-flex items-center justify-center rounded-lg border border-white/60 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  style={{ minHeight: 44 }}
                >
                  Lihat Pilihan dengan Driver
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Informasi Kontak */}
        <section
          className="py-16 sm:py-20"
          style={{ backgroundColor: "#F7F9FC" }}
          aria-labelledby="kontak-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <SectionHeading
                title="Hubungi Kami"
                subtitle="Ada pertanyaan? Tim kami siap membantu Anda melalui WhatsApp."
                centered
              />
              <div className="mt-8 flex flex-col items-center gap-4 text-sm" style={{ color: "#64748B" }}>
                <p>
                  <span className="font-medium" style={{ color: "#172B4D" }}>Jam Operasional: </span>
                  {config.operatingHours}
                </p>
                {config.address && !config.address.startsWith("[") && (
                  <p>
                    <span className="font-medium" style={{ color: "#172B4D" }}>Alamat: </span>
                    {config.address}
                  </p>
                )}
                <p>
                  <span className="font-medium" style={{ color: "#172B4D" }}>Telepon: </span>
                  {config.phoneNumber}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-base font-semibold text-white transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
                  style={{ backgroundColor: "#25D366", minHeight: 48 }}
                >
                  <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Hubungi via WhatsApp
                </a>
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center rounded-lg border px-7 py-3.5 text-base font-semibold transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2"
                  style={{ borderColor: "#155EEF", color: "#155EEF", minHeight: 48 }}
                >
                  Lihat Peta & Kontak
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const commitments = [
  {
    title: "Kendaraan Terawat",
    description:
      "Setiap kendaraan dirawat secara rutin untuk memastikan kondisi prima dan keselamatan perjalanan Anda.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Pengemudi Profesional",
    description:
      "Driver kami terlatih, berpengalaman, dan memahami rute terbaik untuk kenyamanan perjalanan Anda.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Layanan Responsif",
    description:
      "Tim kami siap merespons pertanyaan dan kebutuhan Anda dengan cepat melalui WhatsApp.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Harga Transparan",
    description:
      "Tidak ada biaya tersembunyi. Informasi harga disampaikan secara jelas sebelum Anda memutuskan.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Armada Beragam",
    description:
      "Pilihan kendaraan dari MPV keluarga hingga sedan premium untuk berbagai kebutuhan perjalanan.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Kepuasan Pelanggan",
    description:
      "Kepuasan Anda adalah prioritas utama kami. Setiap pengalaman perjalanan dirancang untuk melampaui ekspektasi.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const vehicleTypes = [
  {
    name: "MPV",
    emoji: "🚐",
    description: "Minibus dan MPV untuk perjalanan keluarga atau rombongan kecil.",
  },
  {
    name: "SUV",
    emoji: "🚙",
    description: "SUV tangguh untuk medan beragam, perjalanan jauh, dan kenyamanan ekstra.",
  },
  {
    name: "Sedan",
    emoji: "🚗",
    description: "Sedan elegan untuk perjalanan bisnis, formal, dan representasi.",
  },
  {
    name: "Premium",
    emoji: "✨",
    description: "Kendaraan premium untuk acara khusus, pernikahan, dan tamu VIP.",
  },
];
