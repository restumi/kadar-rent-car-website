# TASK: Implementasi SEO Lokal Semarang dan Ungaran — Kadar Rent Car

## Konteks Project

Project: Kadar Rent Car  
Framework: Next.js 16.4.2 App Router  
Bahasa: TypeScript  
Styling: Tailwind CSS  
Deployment: Vercel, sementara menggunakan subdomain `vercel.app`

Website yang sudah tersedia:
- Home `/`
- Katalog `/katalog`
- Profil `/profil`
- Syarat & Ketentuan `/syarat-ketentuan`
- Kontak `/kontak`
- Global 404 Not Found

Website memiliki tema biru dan mendukung layanan:
- Rental mobil lepas kunci.
- Rental mobil dengan driver.
- Pilihan armada beragam, termasuk kategori city car, MPV, dan kategori lain jika memang tersedia.
- Pengantaran mobil atau penjemputan pelanggan sesuai kesepakatan.

Wilayah layanan yang dikonfirmasi:
- Semarang.
- Ungaran.

Tujuan task ini adalah memperkuat SEO lokal agar website lebih mudah dipahami mesin pencari dan relevan untuk calon pelanggan di kedua wilayah tersebut.

**Jangan membuat ulang project, jangan mengubah desain secara besar-besaran, dan jangan menghapus fitur yang sudah selesai. Audit kode terlebih dahulu.**

## 1. Audit Implementasi yang Ada

Periksa:
- `app/layout.tsx`
- Seluruh `app/**/page.tsx`
- `app/not-found.tsx`
- `config.ts`
- `cars.ts` atau lokasi data kendaraan yang sebenarnya
- `app/sitemap.ts` dan `app/robots.ts` jika sudah ada
- `next.config.ts`
- `package.json`
- Komponen Navbar, Footer, Hero, katalog, dan kontak.

Identifikasi metadata, sitemap, robots, canonical, Open Graph, dan structured data yang sudah ada.

Jangan menduplikasi fitur yang sudah benar. Jangan mengubah routing yang sudah berfungsi.

## 2. Strategi Keyword

Gunakan pemetaan berikut sebagai arahan konten, bukan sebagai klaim volume pencarian.

### Keyword prioritas awal

Beranda `/`:
- rental mobil Semarang
- sewa mobil Semarang
- Kadar Rent Car Semarang
- rental mobil lepas kunci Semarang
- rental mobil dengan driver Semarang

Katalog `/katalog`:
- katalog mobil rental Semarang
- pilihan mobil rental Semarang
- sewa mobil Semarang
- rental city car Semarang jika city car tersedia
- rental MPV Semarang jika MPV tersedia

Kontak `/kontak`:
- kontak Kadar Rent Car
- Kadar Rent Car Semarang
- informasi layanan rental mobil Semarang dan Ungaran

Profil `/profil`:
- profil Kadar Rent Car
- layanan Kadar Rent Car di Semarang dan Ungaran

### Keyword kandidat untuk validasi

- rental mobil Ungaran
- sewa mobil Ungaran
- rental mobil lepas kunci Ungaran
- rental mobil dengan driver Ungaran
- rental mobil harian Semarang
- rental mobil keluarga Semarang
- rental mobil antar ke lokasi Semarang
- rental mobil luar kota dari Semarang

Gunakan keyword kandidat hanya jika sesuai dengan layanan yang tersedia. Jangan mengklaim data volume pencarian, tingkat kesulitan keyword, atau potensi ranking jika belum ada data pendukung.

Jangan memasukkan seluruh keyword ke semua halaman. Tetapkan satu topik utama untuk setiap halaman dan gunakan variasi keyword secara natural.

## 3. Metadata SEO

Gunakan Metadata API resmi Next.js App Router.

Pastikan:
- `metadataBase` menggunakan URL production yang benar.
- Title dan meta description unik untuk setiap halaman.
- Judul halaman akurat, ringkas, dan tidak diisi keyword berulang.
- Beranda menargetkan rental mobil Semarang.
- Katalog fokus pada pilihan armada.
- Profil fokus pada informasi perusahaan yang nyata.
- Kontak fokus pada kontak dan cakupan layanan yang terkonfirmasi.
- Halaman Syarat & Ketentuan mempunyai metadata yang relevan dengan isinya.
- Open Graph dan metadata sosial sesuai dengan identitas Kadar Rent Car.
- Canonical URL benar untuk setiap halaman.
- Jangan menetapkan localhost atau URL deployment preview sebagai canonical production.
- Jangan menambahkan `noindex` ke halaman publik yang memang ingin ditampilkan di Google.

Gunakan environment variable `NEXT_PUBLIC_SITE_URL` jika sesuai dengan pola project.

Tambahkan contoh konfigurasi ke `.env.example` jika project menggunakannya. Dokumentasikan bahwa nilainya harus berupa URL HTTPS production yang stabil, tanpa trailing slash jika implementasinya mengharapkan format tersebut.

Jika URL production belum diketahui, jangan mengarang URL final. Sediakan fallback development yang aman dan pastikan canonical production tidak mengarah ke localhost.

## 4. Konten SEO Beranda

Perbaiki konten yang sudah ada tanpa menghilangkan desain atau komponen sebelumnya.

Pastikan halaman menjelaskan secara natural:
- Kadar Rent Car menyediakan layanan rental mobil di Semarang.
- Cakupan layanan juga mencakup Ungaran.
- Pilihan rental lepas kunci dan dengan driver.
- Variasi armada sesuai data kendaraan yang benar-benar tersedia.
- Proses menghubungi dan memesan mobil.
- Pengantaran mobil atau penjemputan pelanggan sesuai kesepakatan, dengan batasan layanan yang sebenarnya.

Buat H1 yang jelas, misalnya:
"Rental Mobil Semarang – Kadar Rent Car"

Gunakan H2 dan H3 yang logis. Hindari pengulangan keyword yang terasa dipaksakan.

Jangan mengarang harga, diskon, nomor telepon, alamat, pengalaman bisnis, testimoni, rating, jam operasional, atau jaminan layanan.

## 5. Konten Katalog dan Data Kendaraan

Periksa apakah data mobil berasal dari file data terpusat.

Jika memungkinkan, gunakan data yang sudah ada sebagai sumber informasi kendaraan.

Pastikan:
- Nama kendaraan dan kategori konsisten.
- Alt text gambar menggambarkan mobil yang benar.
- Foto placeholder tidak diberi alt text yang seolah-olah menunjukkan model mobil tertentu.
- Informasi ketersediaan, harga, dan metode rental tidak dikarang.
- Filter katalog tetap berfungsi.
- Jika detail mobil hanya ditampilkan melalui modal, jangan membuat canonical atau sitemap untuk URL detail kendaraan yang tidak benar-benar tersedia.

Jangan membuat route detail kendaraan baru sebagai bagian dari task ini kecuali ada kebutuhan nyata dan implementasi tersebut dapat diselesaikan tanpa merusak katalog.

## 6. Informasi Area Layanan

Tambahkan bagian ringkas tentang cakupan layanan Semarang dan Ungaran pada halaman yang relevan.

Jelaskan bahwa pengantaran mobil atau penjemputan pelanggan dapat dilakukan sesuai kesepakatan, tanpa mengklaim seluruh titik di kedua wilayah pasti terlayani.

Jangan mengarang:
- Alamat kantor.
- Koordinat bisnis.
- Radius layanan.
- Titik penjemputan.
- Biaya antar atau penjemputan.
- Waktu tempuh atau janji layanan.

Untuk task awal ini, jangan membuat banyak halaman kota baru secara otomatis.

Buat halaman `/area-layanan/ungaran` hanya jika setelah audit terdapat cukup informasi nyata untuk menghasilkan halaman yang unik dan bermanfaat. Jika data belum cukup, pertahankan informasi Ungaran pada halaman yang sudah ada dan jelaskan rekomendasi konten tambahan dalam laporan.

## 7. Sitemap dan Robots

Audit `app/sitemap.ts` dan `app/robots.ts`.

Jika belum ada, buat menggunakan konvensi Next.js App Router.

Sitemap harus:
- Berisi URL production absolut yang benar.
- Mencakup halaman publik yang benar-benar ada.
- Tidak memasukkan localhost, URL preview, halaman 404, atau URL yang tidak tersedia.
- Tidak mengklaim `lastModified` yang tidak dapat dibuktikan.
- Tidak memasukkan halaman yang memang tidak boleh diindeks.

Robots:
- Jangan memblokir seluruh website production.
- Cantumkan sitemap production yang benar.
- Jangan menganggap robots.txt sebagai pengganti directive `noindex`.

## 8. Structured Data

Evaluasi kebutuhan structured data.

Jika informasi bisnis yang diperlukan sudah tersedia, pertimbangkan `AutoRental` atau tipe Schema.org lain yang benar-benar sesuai untuk bisnis rental kendaraan.

Gunakan hanya fakta yang dikonfirmasi dan sesuai dengan konten halaman.

Jangan mengarang alamat, koordinat, jam operasional, harga, rating, ulasan, dan profil media sosial.

Pastikan JSON-LD valid dan tidak bertentangan dengan metadata atau informasi yang terlihat pada halaman.

Jangan menjanjikan rich results atau ranking tertentu hanya karena structured data ditambahkan.

## 9. Performa, Aksesibilitas, dan Internal Linking

- Pertahankan desain responsif yang sudah ada.
- Periksa penggunaan Next.js Image dan alt text.
- Pastikan link internal dapat dirayapi dan menuju URL yang valid.
- Pastikan halaman penting dapat dijangkau melalui navigasi website.
- Jangan menambahkan teks tersembunyi atau keyword stuffing.
- Jangan menambahkan dependency baru jika tidak diperlukan.
- Jangan menghapus tombol WhatsApp atau mengubah fungsionalitas pemesanan.

## 10. Verifikasi

Jalankan script yang tersedia pada `package.json` untuk:
- Production build.
- ESLint.
- TypeScript.

Jika browser tersedia, periksa:
- `/`
- `/katalog`
- `/profil`
- `/syarat-ketentuan`
- `/kontak`
- `/sitemap.xml`
- `/robots.txt`
- `/apa-aja` untuk memastikan 404 tetap benar.

Periksa metadata HTML dan canonical pada halaman production jika deployment tersedia.

Jangan mengklaim URL sudah terindeks atau ranking meningkat hanya berdasarkan build lokal.

## 11. Laporan Akhir

Laporkan:
1. Hasil audit SEO awal.
2. Keyword prioritas yang dipetakan ke setiap halaman.
3. File yang dibuat dan diubah.
4. Metadata, canonical, sitemap, robots, dan structured data yang diperbaiki.
5. Data bisnis yang masih perlu dilengkapi oleh pemilik.
6. Hasil build, lint, TypeScript, dan pengujian browser.
7. Langkah selanjutnya untuk Google Search Console dan validasi keyword.

Implementasikan perubahan pada project yang sudah ada. Jangan berhenti hanya dengan memberikan saran.