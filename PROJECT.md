# Task: Perbaiki dan Buat Halaman 404 Not Found — Kadar Rent Car

Saya ingin memperbaiki penanganan URL yang tidak ditemukan pada project Kadar Rent Car.

**PENTING:**
- Jangan membuat ulang project dari awal.
- Jangan mengulang implementasi task yang sudah selesai.
- Jangan mengubah desain dan fungsionalitas halaman yang sudah ada, kecuali jika memang diperlukan untuk memperbaiki routing 404.
- Periksa struktur project dan kode yang sudah ada terlebih dahulu sebelum melakukan perubahan.
- Gunakan struktur dan design system yang sudah ada di project.

## 1. Masalah Saat Ini

Ketika aplikasi dijalankan di `http://localhost:3000`, kemudian pengguna membuka URL yang tidak memiliki route, misalnya:

- `http://localhost:3000/apa-aja`
- `http://localhost:3000/halaman-tidak-ada`
- `http://localhost:3000/random-url`

Saat ini yang tampil adalah halaman putih kosong dengan Navbar dan Footer, bukan halaman 404 Not Found yang semestinya.

## 2. Tujuan

Buat halaman 404 Not Found yang berfungsi dengan benar dan konsisten dengan desain website Kadar Rent Car.

Ketika pengguna membuka URL yang tidak terdaftar, aplikasi harus menampilkan halaman 404 yang informatif, bukan halaman kosong.

## 3. Pemeriksaan Routing

Sebelum melakukan perubahan:

1. Periksa struktur direktori `app/` sesuai Next.js App Router.
2. Periksa apakah `app/not-found.tsx` sudah ada dan apakah implementasinya benar.
3. Periksa `app/layout.tsx`, nested layout, middleware, `proxy.ts` jika ada, serta konfigurasi routing lain yang mungkin memengaruhi penanganan URL tidak dikenal.
4. Cari penyebab sebenarnya mengapa URL yang tidak cocok dengan route justru menampilkan halaman kosong.
5. Jangan hanya membuat komponen baru tanpa memastikan halaman tersebut benar-benar digunakan oleh Next.js.

Gunakan mekanisme 404 bawaan Next.js App Router. Untuk URL yang tidak cocok dengan route mana pun, pastikan halaman global `app/not-found.tsx` ditampilkan dengan benar. Gunakan `notFound()` hanya jika memang diperlukan untuk menangani kasus halaman atau resource yang tidak ditemukan di dalam route tertentu.

## 4. Desain Halaman 404

Buat halaman 404 yang modern, profesional, minimalis, dan sesuai dengan identitas visual Kadar Rent Car.

Ketentuan desain:

- Gunakan tema biru yang sudah menjadi warna utama website.
- Pertahankan font, warna, spacing, border radius, dan gaya komponen yang sudah digunakan.
- Pertahankan Navbar dan Footer global yang sudah ada.
- Area konten utama harus menampilkan halaman 404 yang jelas dan tidak kosong.
- Tampilkan angka **404** dengan ukuran besar dan hierarki visual yang kuat.
- Tambahkan judul **"Halaman Tidak Ditemukan"**.
- Tambahkan deskripsi singkat: "Maaf, halaman yang kamu cari tidak ditemukan atau mungkin sudah dipindahkan."
- Tambahkan tombol utama **"Kembali ke Beranda"** yang mengarah ke `/`.
- Tambahkan tombol atau tautan sekunder **"Lihat Katalog Mobil"** yang mengarah ke `/katalog`.
- Jika sesuai dengan design system yang sudah ada, tambahkan ilustrasi atau ikon sederhana bertema mobil, perjalanan, atau pencarian halaman.
- Pastikan konten berada di tengah secara visual, memiliki jarak yang proporsional, dan terlihat profesional.
- Jangan membuat halaman terlalu ramai atau menggunakan animasi berlebihan.

## 5. Responsivitas dan Aksesibilitas

Pastikan halaman berfungsi dengan baik pada:

- Mobile mulai dari lebar 320px.
- Tablet.
- Laptop dan desktop.

Pastikan:
- Tidak ada horizontal overflow.
- Tombol mudah digunakan pada layar sentuh.
- Kontras warna teks dan tombol memadai.
- Semua tombol dan tautan dapat diakses menggunakan keyboard.
- Gunakan elemen semantik yang tepat.
- Jangan menambahkan `"use client"` jika tidak diperlukan.

## 6. Ketentuan Implementasi

- Gunakan TypeScript sesuai pola project.
- Gunakan Tailwind CSS dan komponen yang sudah tersedia di project.
- Gunakan `next/link` untuk navigasi internal.
- Jangan menambahkan dependency baru jika tidak diperlukan.
- Jangan menduplikasi Navbar dan Footer di dalam halaman 404 jika keduanya sudah disediakan oleh root layout.
- Jangan mengubah halaman Home, Katalog, Profil, Syarat & Ketentuan, dan Kontak.
- Jangan mengubah route yang sudah valid.
- Jangan menutupi masalah routing dengan middleware atau redirect yang tidak diperlukan.

## 7. Verifikasi Wajib

Setelah implementasi:

1. Jalankan pemeriksaan TypeScript, ESLint, dan production build menggunakan script yang tersedia di `package.json`.
2. Perbaiki error yang disebabkan oleh perubahan ini.
3. Jalankan aplikasi dan uji URL berikut:
   - `/` harus menampilkan Home.
   - `/katalog` harus menampilkan Katalog.
   - `/profil` harus menampilkan Profil.
   - `/syarat-ketentuan` harus menampilkan Syarat & Ketentuan.
   - `/kontak` harus menampilkan Kontak.
   - `/apa-aja` harus menampilkan halaman 404.
   - `/halaman-tidak-ada` harus menampilkan halaman 404.
4. Pastikan URL tidak dikenal tidak menghasilkan konten kosong.
5. Pastikan Navbar dan Footer tetap berfungsi dan tampil normal.
6. Periksa bahwa tombol "Kembali ke Beranda" dan "Lihat Katalog Mobil" menuju ke halaman yang benar.

Jangan menyatakan pengujian browser berhasil jika hanya menjalankan build. Jika browser automation tidak tersedia, jelaskan pengujian yang sudah dilakukan dan berikan langkah pengujian manual.

## 8. Laporan Akhir

Setelah selesai, laporkan:

- Penyebab utama masalah 404.
- File yang dibuat atau diubah.
- Perbaikan yang dilakukan.
- Hasil TypeScript, ESLint, dan production build.
- Hasil verifikasi route yang valid dan URL yang tidak dikenal.
- Apakah pengujian browser dilakukan atau masih perlu diuji secara manual.

Kerjakan task ini pada project yang sudah ada dan pertahankan semua implementasi sebelumnya.