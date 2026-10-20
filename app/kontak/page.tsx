import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { config } from "@/lib/config";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Lokasi & Kontak",
  description:
    "Hubungi Kadar Rent Car untuk rental mobil di Semarang dan Ungaran. Tersedia via WhatsApp. Cakupan layanan Semarang dan Ungaran.",
  keywords: [
    "kontak Kadar Rent Car",
    "Kadar Rent Car Semarang",
    "rental mobil Semarang",
    "rental mobil Ungaran",
    "informasi layanan rental",
  ],
  alternates: {
    canonical: "/kontak",
  },
  openGraph: {
    title: "Lokasi & Kontak — Kadar Rent Car",
    description:
      "Hubungi Kadar Rent Car untuk rental mobil di Semarang dan Ungaran. Jam operasional, WhatsApp, dan informasi layanan.",
    locale: "id_ID",
    type: "website",
  },
};

const waUrl = buildWhatsAppUrl(
  config.whatsappNumber,
  "Halo Kadar Rent Car, saya ingin bertanya tentang layanan rental mobil."
);

const isAddressPlaceholder = config.address.startsWith("[");
const isMapsPlaceholder = config.googleMapsUrl.includes("[");

export default function KontakPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F9FC" }}>
      {/* Page header */}
      <header
        className="border-b py-12"
        style={{ backgroundColor: "white", borderColor: "#e8edf5" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Lokasi & Kontak"
            subtitle="Kami siap membantu Anda. Hubungi kami melalui WhatsApp atau kunjungi lokasi kami."
          />
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Info Card */}
            <div className="flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm" style={{ borderColor: "#e8edf5" }}>
              <h2 className="text-xl font-bold" style={{ color: "#172B4D" }}>
                Informasi Kontak
              </h2>

              <dl className="flex flex-col gap-5">
                {/* WhatsApp */}
                <div className="flex gap-4">
                  <dt>
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "#EAF2FF" }}
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#155EEF" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </span>
                  </dt>
                  <dd>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#94A3B8" }}>WhatsApp</p>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 text-sm font-medium transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2"
                      style={{ color: "#155EEF" }}
                    >
                      {config.phoneNumber}
                    </a>
                  </dd>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <dt>
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "#EAF2FF" }}
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#155EEF" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                  </dt>
                  <dd>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#94A3B8" }}>Telepon</p>
                    <a
                      href={`tel:${config.phoneNumber.replace(/\s|-/g, "")}`}
                      className="mt-0.5 text-sm font-medium transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2"
                      style={{ color: "#172B4D" }}
                    >
                      {config.phoneNumber}
                    </a>
                  </dd>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <dt>
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "#EAF2FF" }}
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#155EEF" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </dt>
                  <dd>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#94A3B8" }}>Email</p>
                    <a
                      href={`mailto:${config.email}`}
                      className="mt-0.5 text-sm font-medium transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2"
                      style={{ color: "#172B4D" }}
                    >
                      {config.email}
                    </a>
                  </dd>
                </div>

                {/* Operating Hours */}
                <div className="flex gap-4">
                  <dt>
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "#EAF2FF" }}
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#155EEF" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </dt>
                  <dd>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#94A3B8" }}>Jam Operasional</p>
                    <p className="mt-0.5 text-sm font-medium" style={{ color: "#172B4D" }}>
                      {config.operatingHours}
                    </p>
                  </dd>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <dt>
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "#EAF2FF" }}
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#155EEF" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                  </dt>
                  <dd>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#94A3B8" }}>Alamat</p>
                    {isAddressPlaceholder ? (
                      <p className="mt-0.5 text-sm italic" style={{ color: "#94A3B8" }}>
                        Alamat belum dikonfigurasi — harap diperbarui oleh pemilik bisnis
                      </p>
                    ) : (
                      <p className="mt-0.5 text-sm font-medium" style={{ color: "#172B4D" }}>
                        {config.address}
                      </p>
                    )}
                  </dd>
                </div>
              </dl>

              {/* WhatsApp CTA */}
              <div className="mt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-white transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
                  style={{ backgroundColor: "#25D366", minHeight: 48 }}
                >
                  <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Hubungi via WhatsApp
                </a>
              </div>
            </div>

            {/* Map / Location Card */}
            <div className="flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold" style={{ color: "#172B4D" }}>
                Lokasi Kami
              </h2>

              {/* Map placeholder */}
              <div
                className="flex min-h-48 flex-1 flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 text-center"
                style={{ borderColor: "#CBD5E1", backgroundColor: "#F8FAFC" }}
              >
                <svg className="mb-3 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#94A3B8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-sm font-medium" style={{ color: "#64748B" }}>
                  Peta Google Maps
                </p>
                {isAddressPlaceholder ? (
                  <p className="mt-1 text-xs italic" style={{ color: "#94A3B8" }}>
                    Lokasi belum dikonfigurasi — harap perbarui alamat dan koordinat di{" "}
                    <code className="font-mono">lib/config.ts</code>
                  </p>
                ) : (
                  <p className="mt-1 text-xs" style={{ color: "#94A3B8" }}>
                    {config.address}
                  </p>
                )}
              </div>

              {/* Google Maps link — shown regardless of placeholder status per requirement 14.3 */}
              <div className="flex flex-col gap-3">
                <p className="text-sm" style={{ color: "#64748B" }}>
                  {isMapsPlaceholder ? (
                    <>
                      Tautan Google Maps belum dikonfigurasi.{" "}
                      <span className="italic">
                        Perbarui <code className="font-mono text-xs">googleMapsUrl</code> di{" "}
                        <code className="font-mono text-xs">lib/config.ts</code> dengan koordinat lokasi aktual.
                      </span>
                    </>
                  ) : (
                    "Klik tombol di bawah untuk membuka lokasi di Google Maps."
                  )}
                </p>
                <a
                  href={config.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2"
                  style={{ borderColor: "#155EEF", color: "#155EEF", minHeight: 44 }}
                >
                  <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {isMapsPlaceholder ? "Buka Google Maps (Belum Dikonfigurasi)" : "Buka di Google Maps"}
                </a>
              </div>

              {/* Quick contact summary */}
              <div
                className="rounded-xl p-5"
                style={{ backgroundColor: "#F7F9FC" }}
              >
                <h3 className="mb-3 text-sm font-semibold" style={{ color: "#172B4D" }}>
                  Cara Menghubungi Kami
                </h3>
                <ol className="flex flex-col gap-2 text-sm" style={{ color: "#64748B" }}>
                  <li className="flex items-start gap-2">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: "#155EEF" }}
                      aria-hidden="true"
                    >
                      1
                    </span>
                    Klik tombol &ldquo;Hubungi via WhatsApp&rdquo; di atas
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: "#155EEF" }}
                      aria-hidden="true"
                    >
                      2
                    </span>
                    Sampaikan kebutuhan perjalanan Anda
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: "#155EEF" }}
                      aria-hidden="true"
                    >
                      3
                    </span>
                    Tim kami akan merespons dan mengkonfirmasi ketersediaan
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* FAQ-style section */}
          <section className="mt-12" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="mb-6 text-2xl font-bold"
              style={{ color: "#172B4D" }}
            >
              Pertanyaan Umum
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-xl bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-2 font-semibold" style={{ color: "#172B4D" }}>
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Service area note */}
          <div
            className="mt-10 rounded-2xl p-6 text-center"
            style={{ backgroundColor: "#EAF2FF" }}
          >
            <h2 className="text-lg font-bold" style={{ color: "#172B4D" }}>
              Cakupan Layanan
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "#64748B" }}>
              Kadar Rent Car melayani kebutuhan rental mobil di <strong>Semarang</strong> dan{" "}
              <strong>Ungaran</strong>. Pengantaran atau penjemputan dapat dilakukan sesuai
              kesepakatan. Hubungi kami untuk konfirmasi ketersediaan di area Anda.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Bagaimana cara memesan kendaraan?",
    a: "Hubungi kami melalui WhatsApp dengan menyebutkan kendaraan yang diinginkan, tanggal sewa, durasi, dan metode sewa yang dipilih. Tim kami akan membantu proses pemesanan.",
  },
  {
    q: "Apakah melayani area Ungaran?",
    a: "Ya, Kadar Rent Car melayani pelanggan di Semarang dan Ungaran. Pengantaran atau penjemputan dapat diatur sesuai kesepakatan — hubungi kami untuk konfirmasi ketersediaan.",
  },
  {
    q: "Apakah tersedia layanan antar-jemput kendaraan?",
    a: "Pengantaran mobil ke lokasi pelanggan atau penjemputan dapat diatur sesuai kesepakatan. Hubungi kami untuk informasi lebih lanjut mengenai area dan ketentuan layanan.",
  },
  {
    q: "Berapa lama waktu minimum penyewaan?",
    a: "Informasi mengenai durasi sewa minimum dapat dikonfirmasi langsung kepada tim kami saat pemesanan.",
  },
  {
    q: "Apakah harga sudah termasuk bahan bakar?",
    a: "Umumnya bahan bakar ditanggung oleh penyewa. Detail kebijakan bahan bakar akan dijelaskan saat proses pemesanan.",
  },
];
