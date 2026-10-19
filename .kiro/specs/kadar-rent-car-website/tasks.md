# Implementation Plan: Kadar Rent Car Website

## Overview

Implementasi website Kadar Rent Car secara inkremental: mulai dari fondasi (config, data, design system), lalu komponen global (Navbar, Footer, WhatsApp), kemudian halaman per halaman, dan diakhiri dengan pengujian serta SEO. Setiap langkah membangun di atas langkah sebelumnya dan langsung dapat diverifikasi.

Stack: Next.js 16.4.2 App Router · TypeScript 5 strict · React 19 · Tailwind CSS v4 · Tidak ada backend.

---

## Tasks

- [x] 1. Fondasi: Config, Data, Utilitas, dan Design System
  - Buat `lib/config.ts` dengan tipe `Config` yang di-export dan nilai default bertanda placeholder untuk semua field yang belum diketahui (whatsappNumber, address, googleMapsUrl, dll.)
  - Buat `lib/utils.ts` dengan fungsi `buildWhatsAppUrl(phone, message)`, `formatPrice(price?)`, dan `formatRentalMethod(method)` yang di-export
  - Buat `data/cars.ts` dengan tipe `Car`, `RentalMethod`, `VehicleCategory`, `Transmission`, dan array `cars` berisi minimal 6 kendaraan sampel (2 City Car/MPV, 2 SUV, 2 Sedan/Premium) dengan 3+ di antaranya memiliki `isFeatured: true`
  - Perbarui `app/globals.css` untuk mendefinisikan CSS custom properties: `--color-primary`, `--color-navy`, `--color-light-blue`, `--color-bg`, `--color-text-primary`, `--color-text-secondary`, warna WhatsApp green; pertahankan import `@import "tailwindcss"` yang sudah ada
  - Buat file placeholder `/public/images/cars/placeholder.jpg` (bisa berupa gambar solid berwarna abu-abu sederhana)
  - _Requirements: 1.1, 1.2, 1.3, 1.8, 1.9_

  - [ ]* 1.1 Tulis unit tests untuk fungsi utilitas
    - Test `buildWhatsAppUrl` dengan contoh: nomor valid, pesan dengan spasi, pesan kosong
    - Test `formatPrice` dengan: undefined → "Hubungi untuk harga", angka positif → string mengandung "Rp"
    - Test `formatRentalMethod` dengan ketiga nilai enum
    - _Requirements: 4.4, 8.3, 8.5_

  - [ ]* 1.2 Tulis property test untuk `buildWhatsAppUrl` (Property 3 & 4)
    - **Property 3: URL WhatsApp selalu valid dan menggunakan nomor dari Config**
    - **Property 4: Serialisasi pesan WhatsApp mempertahankan nama kendaraan**
    - **Validates: Requirements 4.4, 8.5, 11.3**
    - Gunakan fast-check: generate nomor WhatsApp acak (string digit) dan pesan acak (termasuk karakter Unicode, spasi, simbol Indonesia)
    - Verifikasi: URL dimulai `https://wa.me/`, mengandung nomor, `decodeURIComponent(encodeURIComponent(msg)) === msg`

- [x] 2. Komponen Global: Navbar
  - Buat `components/Navbar.tsx` sebagai Client Component (`"use client"`)
  - Implementasikan markup dengan `<nav>` semantik, logo teks "Kadar Rent Car" di kiri, dan 5 tautan navigasi: Home (`/`), Katalog Mobil (`/katalog`), Profil Perusahaan (`/profil`), Syarat & Ketentuan (`/syarat-ketentuan`), Lokasi & Kontak (`/kontak`)
  - Gunakan `usePathname()` dari `next/navigation` untuk highlight item navigasi aktif
  - Implementasikan hamburger button dan state `isMenuOpen` untuk menu mobile (tampil pada lebar < `md`)
  - Tambahkan `useEffect` untuk menutup menu dengan Escape key
  - Terapkan styling: `sticky top-0 z-50`, background putih, shadow bawah, warna primary blue untuk item aktif
  - Pastikan semua tautan dan tombol hamburger dapat diakses dengan keyboard (tabIndex, aria-expanded, aria-label)
  - Integrasikan `<Navbar>` ke `app/layout.tsx`
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10_

  - [ ]* 2.1 Tulis unit tests untuk Navbar
    - Test hamburger toggle: klik hamburger → menu terbuka; klik lagi → menu tertutup
    - Test menu menutup saat item diklik
    - Test Escape key menutup menu (simulasi keydown event)
    - _Requirements: 2.6, 2.7, 2.8_

- [x] 3. Komponen Global: Footer dan WhatsAppButton
  - Buat `components/Footer.tsx` sebagai Client Component (memerlukan useState untuk copyright year agar kompatibel dengan Next.js 16.4.2 prerender)
  - Implementasikan footer dengan: nama perusahaan, deskripsi singkat, tautan navigasi sekunder ke semua halaman, nomor WhatsApp (klik-untuk-chat), dan copyright dinamis
  - Terapkan background `#102A56` (dark navy) dengan teks putih
  - Buat `components/WhatsAppButton.tsx` sebagai Server Component (tag `<a>` murni)
  - Implementasikan tombol: `fixed bottom-6 right-6 z-40`, warna `#25D366`, bentuk melingkar, ikon WhatsApp SVG inline, `aria-label="Hubungi Kadar Rent Car via WhatsApp"`, ukuran minimal 48×48px, target `_blank` dengan `rel="noopener noreferrer"`
  - Gunakan `buildWhatsAppUrl` dari `lib/utils.ts` dengan `config.whatsappNumber` dan pesan default
  - Integrasikan `<Footer>` (dibungkus `<Suspense>`) dan `<WhatsAppButton>` ke `app/layout.tsx`
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8_

- [x] 4. Komponen Bersama: SectionHeading dan HeroSection
  - Buat `components/SectionHeading.tsx` sebagai Server Component
  - Props: `title: string`, `subtitle?: string`, `centered?: boolean`
  - Merender `<h2>` dengan styling konsisten (ukuran font, warna `#172B4D`, berat font)
  - Buat `components/HeroSection.tsx` sebagai Server Component
  - Props: `title`, `subtitle`, `primaryCta: {label, href}`, `secondaryCta: {label, href}`
  - Layout dua kolom di desktop (teks kiri, ilustrasi SVG kanan), satu kolom di mobile (teks atas, gambar bawah)
  - Tombol CTA primer menggunakan background `#155EEF`; tombol sekunder menggunakan border
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7_

- [x] 5. Komponen Kartu: CarCard
  - Buat `components/CarCard.tsx` sebagai Client Component (memerlukan useState untuk image error fallback)
  - Props: `car: Car`, `onDetailClick?: (car: Car) => void`
  - Render: `<img>` dengan `object-cover` dan rasio aspek konsisten, nama, badge kategori, badge kapasitas penumpang, badge transmisi, badge metode sewa (dari `formatRentalMethod`), tampilan harga dari `formatPrice`
  - Tombol "Lihat Detail" memanggil `onDetailClick` jika ada
  - Tombol "Tanya via WhatsApp": buat URL dengan `buildWhatsAppUrl` menggunakan pesan "Halo Kadar Rent Car, saya ingin bertanya tentang ketersediaan {car.name}."
  - Terapkan card styling: rounded corners, shadow halus, hover transition
  - _Requirements: 8.2, 8.3, 8.4, 8.5_

- [x] 6. Checkpoint — Verifikasi fondasi dan komponen global
  - ✓ `next build` bersih, tidak ada TypeScript errors
  - ✓ `npx eslint .` tidak ada peringatan atau error
  - ✓ Navbar, Footer, WhatsAppButton terintegrasi di `app/layout.tsx`
  - ✓ Footer dibungkus `<Suspense>` untuk kompatibilitas prerender Next.js 16.4.2

- [x] 7. Halaman Home (`app/page.tsx`)
  - Ganti konten boilerplate di `app/page.tsx` dengan halaman Home lengkap sebagai Server Component
  - **Hero Section**: Gunakan `<HeroSection>` dengan headline "Perjalanan Nyaman Dimulai Bersama Kadar Rent Car", deskripsi pendukung, CTA primer ke `/katalog`, CTA sekunder ke WhatsApp
  - **Seksi Keunggulan Layanan**: Grid 4 kartu fitur dengan ikon SVG inline dan deskripsi: "Pilihan Mobil Beragam", "Pilihan Sewa Fleksibel", "Layanan dengan Driver", "Pemesanan Mudah via WhatsApp"
  - **Seksi Metode Sewa**: Dua kartu "Lepas Kunci" dan "Dengan Driver" dengan deskripsi dan tombol CTA ke halaman katalog dengan query param filter yang relevan
  - **Featured Cars**: Import `cars` dari `data/cars.ts`, filter `isFeatured: true`, render dengan `<CarCard>`; gunakan `<SectionHeading>` untuk judul seksi
  - **Closing CTA**: Seksi dengan teks ajakan dan tombol WhatsApp
  - Pastikan layout responsif: mobile, tablet, desktop
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.7, 6.1, 6.2, 6.3, 6.4, 7.1, 7.2, 7.3, 7.4, 7.5, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 9.1, 9.2, 9.3_

  - [ ]* 7.1 Tulis property test untuk featured cars (Property 5)
  - [ ]* 7.2 Tulis property test untuk konsistensi harga (Property 6)

- [x] 8. Komponen Filter dan Modal: CarFilters dan VehicleDetailModal
  - Buat `components/VehicleDetailModal.tsx` sebagai Client Component
  - Implementasikan overlay `fixed inset-0 z-50`, panel modal centered, body scroll lock
  - Tambahkan Escape key listener dan klik-di-luar untuk menutup modal
  - Konten: gambar kendaraan via `CarImage` sub-komponen (key-based reset saat car berubah), nama, kategori, kapasitas, transmisi, metode sewa, harga, deskripsi, tombol WhatsApp
  - Buat `components/CarFilters.tsx` sebagai Client Component
  - State: `searchQuery`, `selectedCategory`, `selectedMethod`, `selectedCar`
  - Logika filter: derive `filteredCars` dari cars berdasarkan semua filter aktif menggunakan `useMemo`
  - Render UI filter: input pencarian, buttons kategori (dari data dinamis), toggle metode sewa, tombol "Hapus Filter"
  - Render grid `CarCard` untuk `filteredCars`, dengan empty state jika tidak ada hasil
  - _Requirements: 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7_

  - [ ]* 8.1 Tulis property test untuk logika filter (Property 1)
  - [ ]* 8.2 Tulis property test untuk reset filter (Property 2)

- [x] 9. Halaman Katalog (`app/katalog/page.tsx`)
  - Buat `app/katalog/page.tsx` sebagai Server Component
  - Import `cars` dari `data/cars.ts` dan teruskan ke `<CarFilters cars={cars} />`
  - Tambahkan `<SectionHeading>` dengan judul "Katalog Mobil" dan teks pengantar singkat
  - Terapkan layout responsif dengan `<CarFilters>` di atas grid kendaraan
  - Pastikan filter, pencarian, dan modal berfungsi penuh
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9_

- [x] 10. Checkpoint — Verifikasi halaman Home dan Katalog
  - ✓ `next build` bersih
  - ✓ `npx eslint .` bersih
  - ✓ Featured cars tampil di Home, filter berfungsi di Katalog
  - ✓ Modal detail terimplementasi

- [x] 11. Halaman Profil Perusahaan (`app/profil/page.tsx`)
  - Buat `app/profil/page.tsx` sebagai Server Component
  - Implementasikan konten: pengenalan perusahaan, fokus layanan, komitmen layanan (6 kartu), jenis kendaraan (4 kategori), dan dua metode sewa
  - Gunakan `config.companyName`, `config.address`, `config.phoneNumber` dari `lib/config.ts`
  - Tandai informasi yang belum dikonfirmasi dengan callout berwarna kuning
  - Terapkan layout profesional dengan kombinasi teks dan ilustrasi SVG
  - Responsif: satu kolom di mobile, multi-kolom di desktop
  - Metadata SEO: title "Profil Perusahaan", OpenGraph id_ID
  - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 12.6_

- [x] 12. Halaman Syarat & Ketentuan (`app/syarat-ketentuan/page.tsx`)
  - Buat `app/syarat-ketentuan/page.tsx` sebagai Server Component
  - Implementasikan semua 9 bagian berlabel dengan heading hierarchy h2
  - Banner draf disclaimer menonjol di bagian atas dengan ikon peringatan
  - Tidak menampilkan jumlah deposit, denda, atau biaya pembatalan spesifik
  - Menggunakan placeholder jelas untuk informasi yang belum dikonfirmasi pemilik bisnis
  - Metadata SEO: title "Syarat & Ketentuan", OpenGraph id_ID
  - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5_

- [x] 13. Halaman Lokasi & Kontak (`app/kontak/page.tsx`)
  - Buat `app/kontak/page.tsx` sebagai Server Component
  - Implementasikan: alamat dari `config.address`, jam operasional dari `config.operatingHours`, nomor telepon dari `config.phoneNumber`, tombol "Hubungi via WhatsApp" menggunakan `buildWhatsAppUrl`
  - Tampilkan tautan Google Maps dari `config.googleMapsUrl` BESERTA teks placeholder deskriptif (keduanya muncul sekaligus)
  - Jika `config.address` masih placeholder, tampilkan teks placeholder yang jelas dan terlihat
  - Seksi FAQ dengan 4 pertanyaan umum
  - Layout responsif: dua kolom di desktop, satu kolom di mobile
  - Metadata SEO: title "Lokasi & Kontak", OpenGraph id_ID
  - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 14.6_

- [x] 14. SEO Metadata untuk Semua Halaman
  - `app/layout.tsx`: metadata default dengan `title` template "%s — Kadar Rent Car", `description` dengan kata kunci, OpenGraph locale id_ID, `lang="id"`
  - `app/page.tsx`: title "Kadar Rent Car — Sewa Mobil Nyaman & Terpercaya", OpenGraph lengkap
  - `app/katalog/page.tsx`: title "Katalog Mobil", OpenGraph lengkap
  - `app/profil/page.tsx`: title "Profil Perusahaan", OpenGraph lengkap
  - `app/syarat-ketentuan/page.tsx`: title "Syarat & Ketentuan", OpenGraph lengkap
  - `app/kontak/page.tsx`: title "Lokasi & Kontak", OpenGraph lengkap
  - _Requirements: 16.1, 16.2, 16.3, 16.4, 16.5, 1.5_

- [x] 15. Responsivitas, Aksesibilitas, dan Polish
  - ✓ Semua halaman menggunakan HTML semantik (nav, main, section, article, header, footer)
  - ✓ Hierarki heading logis h1 → h2 → h3 di setiap halaman
  - ✓ Semua tombol dan tautan memiliki ukuran sentuh minimal 44px di mobile
  - ✓ Semua elemen interaktif memiliki focus-visible ring yang terlihat
  - ✓ Semua gambar memiliki atribut alt deskriptif dalam bahasa Indonesia
  - ✓ Layout responsif di semua breakpoint (sm, md, lg, xl)
  - ✓ `next build` bersih, tidak ada TypeScript errors
  - ✓ `npx eslint .` bersih, tidak ada warnings atau errors
  - _Requirements: 15.1, 15.2, 15.3, 15.4, 15.5, 15.6, 15.7, 15.8_

- [x] 16. Final Checkpoint — Build dan Verifikasi Menyeluruh
  - ✓ `next build` exit code 0 — semua 6 routes (/, /_not-found, /katalog, /kontak, /profil, /syarat-ketentuan) di-generate sebagai static
  - ✓ `npx eslint .` exit code 0 — tidak ada errors atau warnings
  - ✓ TypeScript: tidak ada errors di semua file yang diperiksa dengan get_diagnostics
  - ✓ Semua 5 halaman utama dapat diakses melalui navigasi Navbar
  - ✓ WhatsApp button ada di semua halaman (fixed bottom-right)
  - ✓ Footer dengan copyright dinamis di semua halaman

---

## Catatan Implementasi

### Kompatibilitas Next.js 16.4.2

- `new Date()` TIDAK boleh dipanggil di Server Component atau langsung di Client Component saat prerender. Gunakan salah satu pendekatan:
  - Bungkus Client Component yang menggunakan `new Date()` dalam `<Suspense>` di layout
  - Gunakan `useEffect` dengan `setDate` — tapi perhatikan aturan `react-hooks/set-state-in-effect` dari ESLint yang memblokir setState langsung di effect body
  - Hindari `useState(() => new Date())` — juga diblokir saat prerender

- `LayoutProps<"/">` adalah helper yang di-generate oleh `next dev`/`next build` dan tersedia secara global. Ini valid di Next.js 16.4.2.

- Footer menggunakan `useState<number>()` dengan `useEffect` diblokir oleh ESLint. Solusi akhir: Footer dibungkus `<Suspense fallback={null}>` di `app/layout.tsx`, dan `new Date().getFullYear()` diakses via `useState` lazy initializer (`() => new Date().getFullYear()`). Namun ini masih diblokir. **Solusi akhir yang berhasil**: Footer `"use client"` + `useState<number>()` + dibungkus `<Suspense>` di layout. ESLint tidak mempermasalahkan `useState` lazy init, hanya setState di dalam effect body.

  **Catatan**: Solusi yang bekerja adalah `useState<number>(() => new Date().getFullYear())` + `<Suspense>` wrapper. Ini menghasilkan build sukses DAN ESLint bersih.

---

## Task Dependency Graph

```json
{
  "waves": [
    { "wave": 1, "tasks": ["1"] },
    { "wave": 2, "tasks": ["2", "3", "4", "5"] },
    { "wave": 3, "tasks": ["6"] },
    { "wave": 4, "tasks": ["7", "8"] },
    { "wave": 5, "tasks": ["9"] },
    { "wave": 6, "tasks": ["10"] },
    { "wave": 7, "tasks": ["11", "12", "13"] },
    { "wave": 8, "tasks": ["14", "15"] },
    { "wave": 9, "tasks": ["16"] }
  ]
}
```

---

## Notes

- Tasks bertanda `*` adalah opsional dan dapat dilewati untuk pengembangan MVP yang lebih cepat
- Data kendaraan (`data/cars.ts`) dan konfigurasi (`lib/config.ts`) menggunakan placeholder yang harus diperbarui pemilik bisnis sebelum deployment produksi
- Tidak ada kecerdasan buatan, tidak ada backend, tidak ada autentikasi — website ini sepenuhnya statis dari sisi server
