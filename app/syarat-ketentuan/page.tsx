import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Baca syarat dan ketentuan sewa kendaraan Kadar Rent Car sebelum melakukan pemesanan.",
  openGraph: {
    title: "Syarat & Ketentuan — Kadar Rent Car",
    description: "Syarat dan ketentuan sewa kendaraan Kadar Rent Car.",
    locale: "id_ID",
    type: "website",
  },
};

export default function SyaratKetentuanPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F9FC" }}>
      {/* Page header */}
      <header
        className="border-b py-12"
        style={{ backgroundColor: "white", borderColor: "#e8edf5" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Syarat & Ketentuan"
            subtitle="Harap membaca dan memahami ketentuan berikut sebelum melakukan pemesanan kendaraan."
          />
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Draft disclaimer banner */}
          <div
            className="mb-10 flex gap-4 rounded-xl border p-5"
            role="alert"
            style={{ borderColor: "#F59E0B", backgroundColor: "#FFFBEB" }}
          >
            <svg
              className="mt-0.5 h-5 w-5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#D97706"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <div>
              <p className="font-semibold" style={{ color: "#92400E" }}>
                Dokumen Draf — Belum Final
              </p>
              <p className="mt-1 text-sm" style={{ color: "#78350F" }}>
                Dokumen ini merupakan <strong>draf awal</strong> yang dibuat sebagai kerangka
                kerja. Seluruh konten syarat dan ketentuan ini <strong>harus ditinjau,
                diverifikasi, dan disetujui oleh pemilik bisnis</strong> sebelum dipublikasikan
                kepada publik. Angka biaya, denda, dan persyaratan spesifik belum dikonfirmasi.
              </p>
            </div>
          </div>

          {/* Terms content */}
          <article className="flex flex-col gap-12">
            {/* 1. Ketentuan Umum */}
            <section aria-labelledby="ketentuan-umum">
              <h2 id="ketentuan-umum" className="mb-4 text-xl font-bold" style={{ color: "#172B4D" }}>
                1. Ketentuan Umum
              </h2>
              <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "#475569" }}>
                <p>
                  Dengan menyewa kendaraan dari Kadar Rent Car, penyewa dianggap telah membaca,
                  memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku.
                </p>
                <p>
                  Kadar Rent Car berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan
                  akan diberitahukan kepada penyewa sebelum transaksi dilakukan.
                </p>
                <p>
                  Pemesanan dianggap sah setelah adanya konfirmasi tertulis dari pihak Kadar Rent Car
                  melalui WhatsApp atau media komunikasi resmi lainnya.
                </p>
              </div>
            </section>

            <hr style={{ borderColor: "#e8edf5" }} />

            {/* 2. Persyaratan Sewa Lepas Kunci */}
            <section aria-labelledby="persyaratan-lepas-kunci">
              <h2 id="persyaratan-lepas-kunci" className="mb-4 text-xl font-bold" style={{ color: "#172B4D" }}>
                2. Persyaratan Sewa Lepas Kunci
              </h2>
              <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "#475569" }}>
                <p>
                  Penyewa wajib memiliki Surat Izin Mengemudi (SIM) yang masih berlaku dan sesuai
                  dengan jenis kendaraan yang disewa.
                </p>
                <p>
                  Penyewa wajib menyerahkan dokumen identitas yang sah (KTP/Paspor) sebagai jaminan
                  selama masa sewa berlangsung.
                </p>
                <p>
                  Dokumen tambahan yang diperlukan, persyaratan usia pengemudi, dan ketentuan
                  jaminan lainnya akan dikonfirmasi oleh tim Kadar Rent Car saat pemesanan.
                </p>
                <div
                  className="rounded-lg border-l-4 p-3 text-xs italic"
                  style={{ borderColor: "#CBD5E1", backgroundColor: "#F8FAFC", color: "#64748B" }}
                >
                  {/* [PLACEHOLDER — Persyaratan detail termasuk usia minimum, jenis SIM, dan dokumen jaminan perlu dikonfirmasi pemilik bisnis] */}
                  Detail persyaratan (usia minimum, jenis SIM yang diterima, dan dokumen jaminan)
                  akan ditentukan dan dikonfirmasi oleh pemilik bisnis.
                </div>
              </div>
            </section>

            <hr style={{ borderColor: "#e8edf5" }} />

            {/* 3. Ketentuan Sewa Dengan Driver */}
            <section aria-labelledby="ketentuan-dengan-driver">
              <h2 id="ketentuan-dengan-driver" className="mb-4 text-xl font-bold" style={{ color: "#172B4D" }}>
                3. Ketentuan Sewa Dengan Driver
              </h2>
              <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "#475569" }}>
                <p>
                  Layanan sewa dengan driver mencakup jasa pengemudi profesional yang disediakan
                  oleh Kadar Rent Car. Pengemudi akan memandu perjalanan sesuai rute yang disepakati.
                </p>
                <p>
                  Penyewa wajib memberikan informasi rute atau tujuan perjalanan yang jelas
                  sebelum keberangkatan.
                </p>
                <p>
                  Ketersediaan driver untuk rute tertentu, jam operasional, dan ketentuan menginap
                  driver (jika diperlukan) akan dikonfirmasi saat pemesanan.
                </p>
                <div
                  className="rounded-lg border-l-4 p-3 text-xs italic"
                  style={{ borderColor: "#CBD5E1", backgroundColor: "#F8FAFC", color: "#64748B" }}
                >
                  {/* [PLACEHOLDER — Ketentuan biaya tambahan untuk driver menginap dan area jangkauan layanan perlu dikonfirmasi pemilik bisnis] */}
                  Ketentuan biaya tambahan driver dan area jangkauan layanan akan ditentukan
                  oleh pemilik bisnis.
                </div>
              </div>
            </section>

            <hr style={{ borderColor: "#e8edf5" }} />

            {/* 4. Durasi dan Perpanjangan Sewa */}
            <section aria-labelledby="durasi-sewa">
              <h2 id="durasi-sewa" className="mb-4 text-xl font-bold" style={{ color: "#172B4D" }}>
                4. Durasi dan Perpanjangan Sewa
              </h2>
              <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "#475569" }}>
                <p>
                  Durasi sewa minimal dan maksimal, serta kebijakan perpanjangan sewa, akan
                  dikomunikasikan oleh tim Kadar Rent Car saat proses pemesanan.
                </p>
                <p>
                  Penyewa yang ingin memperpanjang masa sewa wajib menghubungi Kadar Rent Car
                  sebelum masa sewa berakhir untuk konfirmasi ketersediaan.
                </p>
                <p>
                  Pengembalian kendaraan harus dilakukan sesuai waktu yang telah disepakati.
                  Keterlambatan pengembalian akan dikenakan biaya tambahan sesuai ketentuan
                  yang berlaku.
                </p>
              </div>
            </section>

            <hr style={{ borderColor: "#e8edf5" }} />

            {/* 5. Pembayaran dan Biaya Tambahan */}
            <section aria-labelledby="pembayaran">
              <h2 id="pembayaran" className="mb-4 text-xl font-bold" style={{ color: "#172B4D" }}>
                5. Pembayaran dan Biaya Tambahan
              </h2>
              <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "#475569" }}>
                <p>
                  Informasi harga sewa, metode pembayaran yang diterima, dan ketentuan uang muka
                  akan disampaikan oleh tim Kadar Rent Car saat proses pemesanan.
                </p>
                <p>
                  Biaya bahan bakar selama masa sewa menjadi tanggung jawab penyewa kecuali
                  disepakati lain.
                </p>
                <p>
                  Biaya tol, parkir, dan biaya perjalanan lainnya yang timbul selama masa sewa
                  menjadi tanggung jawab penyewa.
                </p>
                <div
                  className="rounded-lg border-l-4 p-3 text-xs italic"
                  style={{ borderColor: "#CBD5E1", backgroundColor: "#F8FAFC", color: "#64748B" }}
                >
                  {/* [PLACEHOLDER — Jumlah deposit, denda keterlambatan, dan biaya tambahan spesifik belum ditetapkan dan perlu dikonfirmasi pemilik bisnis] */}
                  Jumlah deposit jaminan, denda keterlambatan, dan biaya-biaya spesifik lainnya
                  belum ditetapkan dan akan dikonfirmasi oleh pemilik bisnis sebelum dokumen ini
                  dipublikasikan.
                </div>
              </div>
            </section>

            <hr style={{ borderColor: "#e8edf5" }} />

            {/* 6. Pembatalan dan Perubahan Jadwal */}
            <section aria-labelledby="pembatalan">
              <h2 id="pembatalan" className="mb-4 text-xl font-bold" style={{ color: "#172B4D" }}>
                6. Pembatalan dan Perubahan Jadwal
              </h2>
              <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "#475569" }}>
                <p>
                  Pembatalan pemesanan wajib dilakukan melalui WhatsApp atau saluran komunikasi
                  resmi Kadar Rent Car.
                </p>
                <p>
                  Kebijakan pembatalan, termasuk batas waktu pembatalan tanpa biaya dan ketentuan
                  pengembalian uang muka, akan dikomunikasikan saat proses pemesanan.
                </p>
                <p>
                  Perubahan jadwal dapat dilakukan berdasarkan ketersediaan kendaraan dan wajib
                  dikonfirmasi oleh pihak Kadar Rent Car.
                </p>
                <div
                  className="rounded-lg border-l-4 p-3 text-xs italic"
                  style={{ borderColor: "#CBD5E1", backgroundColor: "#F8FAFC", color: "#64748B" }}
                >
                  {/* [PLACEHOLDER — Persentase atau jumlah biaya pembatalan belum ditetapkan dan perlu dikonfirmasi pemilik bisnis] */}
                  Persentase biaya pembatalan berdasarkan waktu pembatalan belum ditetapkan dan
                  akan dikonfirmasi oleh pemilik bisnis.
                </div>
              </div>
            </section>

            <hr style={{ borderColor: "#e8edf5" }} />

            {/* 7. Tanggung Jawab Penyewa */}
            <section aria-labelledby="tanggung-jawab">
              <h2 id="tanggung-jawab" className="mb-4 text-xl font-bold" style={{ color: "#172B4D" }}>
                7. Tanggung Jawab Penyewa
              </h2>
              <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "#475569" }}>
                <p>
                  Penyewa bertanggung jawab penuh atas keselamatan penggunaan kendaraan selama
                  masa sewa berlangsung.
                </p>
                <p>
                  Penyewa wajib mengoperasikan kendaraan sesuai peraturan lalu lintas yang berlaku
                  dan bertanggung jawab atas tilang atau pelanggaran yang terjadi selama masa sewa.
                </p>
                <p>
                  Penyewa tidak diperkenankan mengalihkan atau menyewakan kembali kendaraan kepada
                  pihak ketiga tanpa izin tertulis dari Kadar Rent Car.
                </p>
                <p>
                  Penyewa bertanggung jawab atas kerusakan kendaraan yang terjadi akibat kelalaian
                  atau penggunaan yang tidak sesuai ketentuan selama masa sewa.
                </p>
              </div>
            </section>

            <hr style={{ borderColor: "#e8edf5" }} />

            {/* 8. Penggunaan dan Pengembalian Kendaraan */}
            <section aria-labelledby="pengembalian">
              <h2 id="pengembalian" className="mb-4 text-xl font-bold" style={{ color: "#172B4D" }}>
                8. Penggunaan dan Pengembalian Kendaraan
              </h2>
              <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "#475569" }}>
                <p>
                  Kendaraan wajib dikembalikan dalam kondisi yang sama seperti saat diterima,
                  termasuk kebersihan interior dan eksterior.
                </p>
                <p>
                  Penyewa wajib melaporkan segera kepada Kadar Rent Car jika terjadi kerusakan,
                  kecelakaan, atau insiden apa pun yang melibatkan kendaraan selama masa sewa.
                </p>
                <p>
                  Lokasi pengambilan dan pengembalian kendaraan akan disepakati antara penyewa
                  dan Kadar Rent Car saat proses pemesanan.
                </p>
                <p>
                  Kendaraan tidak boleh digunakan untuk kegiatan ilegal, balapan, atau aktivitas
                  yang dapat merusak kendaraan.
                </p>
              </div>
            </section>

            <hr style={{ borderColor: "#e8edf5" }} />

            {/* 9. Ketentuan Lain */}
            <section aria-labelledby="ketentuan-lain">
              <h2 id="ketentuan-lain" className="mb-4 text-xl font-bold" style={{ color: "#172B4D" }}>
                9. Ketentuan Lain
              </h2>
              <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "#475569" }}>
                <p>
                  Syarat dan ketentuan ini tunduk pada hukum yang berlaku di Republik Indonesia.
                </p>
                <p>
                  Segala sengketa yang timbul dari perjanjian sewa ini akan diselesaikan secara
                  musyawarah. Jika tidak tercapai kesepakatan, penyelesaian akan dilakukan melalui
                  jalur hukum yang berlaku.
                </p>
                <p>
                  Untuk pertanyaan mengenai syarat dan ketentuan ini, penyewa dapat menghubungi
                  Kadar Rent Car melalui WhatsApp atau saluran komunikasi resmi lainnya.
                </p>
              </div>
            </section>

            {/* Last updated note */}
            <div
              className="rounded-lg border p-4 text-sm"
              style={{ borderColor: "#e8edf5", backgroundColor: "white", color: "#94A3B8" }}
            >
              <p>
                <em>
                  Dokumen ini adalah kerangka awal yang perlu ditinjau dan disesuaikan oleh
                  pemilik bisnis sebelum dipublikasikan. Tanggal berlaku akan ditetapkan setelah
                  finalisasi dokumen.
                </em>
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
