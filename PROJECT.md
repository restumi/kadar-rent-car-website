Tolong audit dan optimalkan identitas website Kadar Rent Car yang tampil di hasil pencarian Google.

Project:
`D:\PROGRAMING\next-js\kadar-rent-car`

Production URL:
`https://kadar-jaya-trans.vercel.app/`

Tujuan:
Agar Google lebih memahami nama website sebagai "Kadar Rent Car", bukan "Vercel".

Tugas:
1. Periksa `app/layout.tsx`, konfigurasi metadata, dan semua structured data yang sudah ada.
2. Pastikan metadata `applicationName`, judul halaman, dan Open Graph `siteName` konsisten menggunakan nama brand "Kadar Rent Car", tanpa merusak metadata SEO yang sudah ada.
3. Periksa structured data `WebSite` di halaman utama. Jika belum ada, tambahkan JSON-LD yang valid dengan:
   - `@type`: `WebSite`
   - `name`: `Kadar Rent Car`
   - `alternateName`: `Kadar Jaya Trans`
   - `url`: `https://kadar-jaya-trans.vercel.app/`
4. Jika structured data `WebSite` sudah ada, perbarui node yang sama. Jangan membuat duplikat.
5. Jangan mengubah URL produksi, token Google Search Console, atau data bisnis lainnya.
6. Jangan mengarang informasi bisnis dan jangan menjanjikan Google pasti menampilkan nama tertentu.
7. Jalankan pemeriksaan build dan TypeScript, lalu laporkan file yang diubah dan hasil validasinya.

Jangan membangun ulang proyek dari awal. Pertahankan seluruh fitur dan tampilan website yang sudah ada.