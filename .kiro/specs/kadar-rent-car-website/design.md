# Design Document — Kadar Rent Car Website

## Overview

Kadar Rent Car adalah website katalog dan lead-generation untuk layanan rental mobil profesional. Website ini dibangun di atas Next.js 16.4.2 dengan App Router, React 19.3.0, TypeScript 5 strict mode, dan Tailwind CSS v4. Arsitekturnya sepenuhnya statis dari sisi server (tidak ada backend, tidak ada autentikasi, tidak ada pembayaran) dengan interaktivitas sisi klien yang terbatas pada filter katalog, modal detail kendaraan, dan navigasi mobile.

Website terdiri dari 5 halaman utama, 8 komponen yang dapat digunakan ulang, satu sumber data kendaraan terpusat (`data/cars.ts`), dan satu file konfigurasi perusahaan (`lib/config.ts`). WhatsApp adalah satu-satunya saluran kontak/konversi.

---

## Architecture

### Pola Rendering

- **Server Components (default)**: Semua halaman dan komponen yang tidak membutuhkan state atau event browser dirender di server untuk performa dan SEO optimal.
- **Client Components (`"use client"`)**: Hanya komponen yang memerlukan state atau interaksi browser: `Navbar` (state hamburger menu), `CarFilters` (state filter), `VehicleDetailModal` (state buka/tutup), dan `WhatsAppButton` (opsional, bisa menjadi Server Component murni karena hanya tautan).

### Struktur Direktori

```
kadar-rent-car/
├── app/
│   ├── layout.tsx                  # Root layout: Navbar + Footer + WhatsAppButton
│   ├── globals.css                 # Tailwind v4 import + CSS variables design token
│   ├── page.tsx                    # Home (/)
│   ├── katalog/
│   │   └── page.tsx                # Catalog (/katalog)
│   ├── profil/
│   │   └── page.tsx                # Company Profile (/profil)
│   ├── syarat-ketentuan/
│   │   └── page.tsx                # Terms & Conditions (/syarat-ketentuan)
│   └── kontak/
│       └── page.tsx                # Location & Contact (/kontak)
├── components/
│   ├── Navbar.tsx                  # "use client" — sticky nav, hamburger
│   ├── Footer.tsx                  # Server Component
│   ├── WhatsAppButton.tsx          # Server Component (pure anchor)
│   ├── HeroSection.tsx             # Server Component
│   ├── CarCard.tsx                 # Server Component
│   ├── CarFilters.tsx              # "use client" — filter state
│   ├── VehicleDetailModal.tsx      # "use client" — modal state
│   └── SectionHeading.tsx          # Server Component
├── data/
│   └── cars.ts                     # Centralized vehicle catalog data
├── lib/
│   └── config.ts                   # Company configuration
└── public/
    └── images/
        └── cars/                   # Local vehicle images
```

### Aliran Data

```
lib/config.ts ──────────────────────────────────────► Navbar, Footer, WhatsAppButton,
                                                       HeroSection, kontak/page.tsx
data/cars.ts ───────────────────────────────────────► page.tsx (featured),
                                                       katalog/page.tsx (all),
                                                       CarCard, VehicleDetailModal
```

Tidak ada API calls, tidak ada database, tidak ada server actions. Semua data diimpor secara langsung sebagai modul TypeScript.

---

## Components and Interfaces

### 1. `lib/config.ts`

```typescript
export const config = {
  companyName: "Kadar Rent Car",
  tagline: "Perjalanan Nyaman, Terpercaya, dan Profesional",
  whatsappNumber: "6281234567890", // Ganti dengan nomor aktual
  phoneNumber: "+62 812-3456-7890",  // Ganti dengan nomor aktual
  address: "[Alamat Perusahaan — Harap dikonfigurasi oleh pemilik bisnis]",
  googleMapsUrl: "https://maps.google.com/?q=[Koordinat+Lokasi]", // Ganti dengan URL aktual
  operatingHours: "Senin – Sabtu: 08.00–17.00 WIB",
  email: "info@kadarrentcar.com", // Ganti dengan email aktual
  socialMedia: {
    instagram: "", // Isi jika tersedia
    facebook: "",  // Isi jika tersedia
  },
} as const;

export type Config = typeof config;
```

### 2. `data/cars.ts`

```typescript
export type RentalMethod = "lepas-kunci" | "dengan-driver" | "keduanya";
export type VehicleCategory = "City Car" | "MPV" | "SUV" | "Sedan" | "Premium";
export type Transmission = "Manual" | "Otomatis";

export interface Car {
  id: string;
  name: string;
  category: VehicleCategory;
  rentalMethods: RentalMethod;
  passengerCapacity: number;
  transmission: Transmission;
  pricePerDay?: number;         // undefined = "Hubungi untuk harga"
  images: string[];             // Array path relatif dari /public atau URL eksternal
  description: string;
  specifications?: Record<string, string>; // Spesifikasi tambahan opsional
  isFeatured: boolean;
}

export const cars: Car[] = [
  // Data kendaraan sampel — ganti dengan data armada aktual
  {
    id: "toyota-avanza",
    name: "Toyota Avanza",
    category: "MPV",
    rentalMethods: "keduanya",
    passengerCapacity: 7,
    transmission: "Manual",
    pricePerDay: undefined,
    images: ["/images/cars/avanza.jpg"],
    description: "MPV serbaguna yang nyaman untuk perjalanan keluarga maupun bisnis.",
    isFeatured: true,
  },
  // ... kendaraan lainnya
];
```

### 3. `components/Navbar.tsx` (Client Component)

**Props**: Tidak ada (mengambil `config.companyName` secara langsung)

**State**:
- `isMenuOpen: boolean` — kontrol visibilitas menu mobile

**Perilaku**:
- Gunakan `usePathname()` dari `next/navigation` untuk mendeteksi rute aktif dan menerapkan styling item aktif.
- Tombol hamburger toggle `isMenuOpen`.
- Menutup menu saat item diklik (`onClick` → `setIsMenuOpen(false)`).
- `useEffect` menambahkan listener `keydown` untuk Escape key → menutup menu.
- `sticky top-0 z-50` dengan background putih dan shadow bawah.

### 4. `components/Footer.tsx` (Server Component)

**Props**: Tidak ada (mengambil dari `config` langsung)

**Konten**: Nama perusahaan, deskripsi singkat, tautan navigasi sekunder, nomor WhatsApp (klik-untuk-chat), hak cipta dinamis dengan `new Date().getFullYear()`.

### 5. `components/WhatsAppButton.tsx` (Server Component)

**Props**: `message?: string` — pesan terpraisi opsional

**Implementasi**: Tag `<a>` murni dengan `href="https://wa.me/{config.whatsappNumber}?text={encodeURIComponent(message)}"`, `target="_blank"`, `rel="noopener noreferrer"`, `aria-label="Hubungi Kadar Rent Car via WhatsApp"`. Posisi `fixed bottom-6 right-6 z-40`.

### 6. `components/HeroSection.tsx` (Server Component)

**Props**:
```typescript
interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
}
```

### 7. `components/SectionHeading.tsx` (Server Component)

**Props**:
```typescript
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}
```

Merender `<h2>` dengan styling konsisten.

### 8. `components/CarCard.tsx` (Server Component)

**Props**:
```typescript
interface CarCardProps {
  car: Car;
  onDetailClick?: never; // Ditangani melalui Client Component wrapper di katalog
}
```

Di halaman Home (featured), `CarCard` dirender dalam konteks Server Component. Di halaman `/katalog`, `CarCard` dirender dalam `CarFilters` (Client Component) sehingga event handler dapat diteruskan.

**Konten kartu**: `next/image` dengan `object-cover`, nama, kategori, badge kapasitas, badge transmisi, badge metode sewa, tampilan harga (atau "Hubungi untuk harga"), dua tombol: "Lihat Detail" dan "Tanya via WhatsApp".

### 9. `components/CarFilters.tsx` (Client Component)

**Props**:
```typescript
interface CarFiltersProps {
  cars: Car[];
}
```

**State**:
- `searchQuery: string`
- `selectedCategory: string` — "" berarti semua kategori
- `selectedMethod: string` — "" berarti semua metode

**Logika filter**: Deriving `filteredCars` dari cars berdasarkan state yang aktif. Kategori dan metode dihasilkan secara dinamis dari data `cars`.

**Komponen anak**: Merender `CarCard` untuk setiap item `filteredCars`, dan `VehicleDetailModal` saat satu kendaraan dipilih.

**Fallback error**: Dibungkus dengan `try/catch` atau error boundary. Jika error terjadi, state filter direset dan `window.location.reload()` dipanggil sebagai fallback.

### 10. `components/VehicleDetailModal.tsx` (Client Component)

**Props**:
```typescript
interface VehicleDetailModalProps {
  car: Car | null;
  onClose: () => void;
}
```

**Perilaku**:
- Ketika `car !== null`: tampilkan overlay `fixed inset-0 z-50 bg-black/50` dengan panel modal di tengah.
- `useEffect` untuk body scroll lock: tambahkan `overflow-hidden` ke `document.body` saat terbuka, hapus saat ditutup.
- `useEffect` untuk keyboard listener: Escape key memanggil `onClose()`.
- Klik di luar area modal (`onClick` pada overlay) memanggil `onClose()`.
- Fokus terjebak di dalam modal menggunakan `tabIndex` dan `useRef` untuk kontrol pertama dan terakhir.
- Tombol WhatsApp menghasilkan URL dengan nama kendaraan dan metode sewa terpraisi.

---

## Data Models

### Tipe Kendaraan Lengkap

```typescript
export type RentalMethod = "lepas-kunci" | "dengan-driver" | "keduanya";
export type VehicleCategory = "City Car" | "MPV" | "SUV" | "Sedan" | "Premium";
export type Transmission = "Manual" | "Otomatis";

export interface Car {
  id: string;                          // URL-safe slug, unik
  name: string;                        // Nama kendaraan lengkap
  category: VehicleCategory;           // Untuk filter
  rentalMethods: RentalMethod;         // Metode sewa yang didukung
  passengerCapacity: number;           // Kapasitas penumpang
  transmission: Transmission;         // Jenis transmisi
  pricePerDay?: number;                // undefined jika harga tidak dipublikasikan
  images: string[];                    // Minimal satu gambar; [0] adalah gambar utama
  description: string;                 // Deskripsi pendek kendaraan
  specifications?: Record<string, string>; // Spek opsional: mesin, cc, dll.
  isFeatured: boolean;                 // Tampil di halaman Home
}
```

### Struktur Config

```typescript
export const config = {
  companyName: string;
  tagline: string;
  whatsappNumber: string;   // Format internasional tanpa +: "628xxx"
  phoneNumber: string;
  address: string;
  googleMapsUrl: string;
  operatingHours: string;
  email: string;
  socialMedia: {
    instagram: string;
    facebook: string;
  };
}
```

### Helper Utility

```typescript
// lib/utils.ts
export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function formatRentalMethod(method: RentalMethod): string {
  const labels: Record<RentalMethod, string> = {
    "lepas-kunci": "Lepas Kunci",
    "dengan-driver": "Dengan Driver",
    "keduanya": "Lepas Kunci & Dengan Driver",
  };
  return labels[method];
}

export function formatPrice(price?: number): string {
  if (!price) return "Hubungi untuk harga";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}
```

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Filter katalog hanya mengembalikan kendaraan yang cocok

*Untuk setiap* kombinasi filter (kategori, metode sewa, query pencarian) yang diterapkan pada daftar kendaraan, semua kendaraan yang dikembalikan oleh `CarFilters` HARUS memenuhi SEMUA kondisi filter yang aktif sekaligus (tidak ada kendaraan yang lolos filter yang tidak seharusnya).

**Validates: Requirements 10.2, 10.3, 10.4, 10.5**

### Property 2: Filter "Hapus Filter" mengembalikan seluruh katalog

*Untuk setiap* kondisi filter yang aktif, setelah aksi "Hapus Filter" dipanggil, daftar kendaraan yang ditampilkan HARUS identik dengan seluruh daftar kendaraan di `CarsData` (semua kendaraan kembali terlihat).

**Validates: Requirements 10.6**

### Property 3: URL WhatsApp selalu valid dan menggunakan nomor dari Config

*Untuk setiap* tombol atau tautan WhatsApp yang dirender di manapun di website, URL yang dihasilkan HARUS selalu dimulai dengan `https://wa.me/`, menggunakan `whatsappNumber` dari `Config`, dan teks pesan HARUS di-URL-encode dengan benar sehingga tidak ada karakter tak valid di URL.

**Validates: Requirements 4.4, 5.4, 8.5, 11.3, 14.5**

### Property 4: Serialisasi pesan WhatsApp mempertahankan nama kendaraan

*Untuk setiap* kendaraan dalam `CarsData`, pesan WhatsApp yang dihasilkan untuk kendaraan tersebut HARUS mengandung nama kendaraan (`car.name`) yang tepat tanpa terpotong, ter-encode, atau terdistorsi setelah `encodeURIComponent` dan `decodeURIComponent` diterapkan (round-trip property).

**Validates: Requirements 8.5, 11.3**

### Property 5: Kendaraan dengan `isFeatured: true` selalu tampil di halaman Home

*Untuk setiap* kendaraan di `CarsData` dengan `isFeatured: true`, kendaraan tersebut HARUS muncul di seksi "Kendaraan Unggulan" halaman Home; dan *untuk setiap* kendaraan dengan `isFeatured: false`, kendaraan tersebut TIDAK BOLEH muncul di seksi tersebut.

**Validates: Requirements 8.1**

### Property 6: Harga ditampilkan secara konsisten di semua tampilan

*Untuk setiap* kendaraan dalam `CarsData`, jika `pricePerDay` tidak terdefinisi (`undefined`), maka string "Hubungi untuk harga" HARUS muncul di SEMUA titik tampilan harga (CarCard di Home, CarCard di Katalog, VehicleDetailModal). Jika `pricePerDay` terdefinisi, nilai numerik yang diformat dalam Rupiah HARUS konsisten di semua titik tampilan tersebut.

**Validates: Requirements 8.3, 11.2**

---

## Error Handling

### Gambar Kendaraan Tidak Tersedia
- Semua `<Image>` kendaraan HARUS memiliki prop `onError` atau menggunakan strategi fallback gambar placeholder.
- Jika `car.images[0]` tidak dapat dimuat, tampilkan gambar placeholder berteks "Foto Segera Hadir".
- Strategi: Set `src` ke placeholder lokal di `/public/images/cars/placeholder.jpg` sebagai default.

### Config Tidak Lengkap
- Semua nilai `Config` yang diperlukan HARUS memiliki nilai default string yang bermakna (bukan `undefined` atau string kosong) sehingga komponen tidak pernah merender string kosong yang tidak informatif.
- Jika `whatsappNumber` adalah placeholder, tautan WhatsApp tetap ter-render namun mungkin tidak berfungsi — ini adalah kondisi yang dapat diterima karena config harus diperbarui sebelum deployment produksi.

### Filter Sisi Klien Gagal
- `CarFilters` dibungkus dalam try/catch di handler perubahan state.
- Jika terjadi exception, `filteredCars` direset ke `cars` (seluruh katalog) dan `window.location.reload()` dipanggil setelah 100ms delay untuk memberi waktu render terakhir.

### Kendaraan Tidak Ditemukan di Filter
- Tampilkan komponen empty state dengan pesan: "Tidak ada kendaraan yang sesuai dengan filter Anda. Coba ubah atau hapus filter."
- Sertakan tombol "Hapus Semua Filter" di empty state untuk kemudahan.

### Modal Detail: Kendaraan Null
- Jika `VehicleDetailModal` menerima `car: null`, komponen merender `null` (tidak menampilkan apa pun) dan tidak melempar error.

---

## Testing Strategy

### Pendekatan Pengujian Ganda

Website ini adalah aplikasi frontend katalog statis dengan beberapa fitur interaktif (filter, modal, navigasi). Strategi pengujian mencakup:

1. **Unit/Example Tests**: Menguji fungsi utilitas murni (`buildWhatsAppUrl`, `formatPrice`, `formatRentalMethod`), logika filter, dan rendering komponen dengan contoh spesifik.
2. **Property-Based Tests**: Menguji properti universal yang harus berlaku untuk semua input — terutama logika filter dan pembuatan URL WhatsApp.

### Library Property-Based Testing

Gunakan **[fast-check](https://github.com/dubzzz/fast-check)** sebagai library PBT untuk TypeScript/JavaScript. fast-check dipilih karena:
- Kompatibel penuh dengan TypeScript.
- Terintegrasi dengan baik dengan Vitest (test runner yang direkomendasikan untuk proyek Next.js).
- Mendukung arbitrary generators untuk string, number, array, dan tipe custom.
- Aktif dipelihara dengan dukungan komunitas yang kuat.

### Konfigurasi Test Runner

Gunakan **Vitest** dengan konfigurasi minimal:

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
export default defineConfig({
  test: {
    environment: 'jsdom',
  },
});
```

### Unit Tests (Example-Based)

Fokus pada:
- `buildWhatsAppUrl()`: contoh input spesifik memverifikasi format URL yang benar.
- `formatPrice()`: harga terdefinisi dan tidak terdefinisi menghasilkan output yang benar.
- `formatRentalMethod()`: ketiga nilai enum menghasilkan string label Indonesia yang benar.
- `CarFilters`: rendering komponen dengan data mock mengverifikasi kartu kendaraan muncul.
- `VehicleDetailModal`: terbuka/tertutup dengan props yang benar; Escape key menutup modal.
- `Navbar`: hamburger menu toggle; menu menutup saat item diklik.

### Property-Based Tests

Setiap properti dalam dokumen ini diimplementasikan sebagai SATU property-based test dengan minimum **100 iterasi**.

Setiap test diberi tag komentar dengan format:
`// Feature: kadar-rent-car-website, Property N: [deskripsi properti]`

**Test Property 1** — Filter katalog mengembalikan hanya yang cocok:
- Arbitrary: daftar `Car[]` dengan ukuran bervariasi, filter kategori acak, filter metode acak, query pencarian acak.
- Assertion: Setiap item dalam hasil filter memenuhi SEMUA kondisi filter aktif.

**Test Property 2** — Reset filter mengembalikan seluruh katalog:
- Arbitrary: daftar `Car[]` bervariasi, filter awal acak.
- Terapkan filter, lalu reset ke state awal, assertion: hasil identik dengan input `cars` asli.

**Test Property 3** — URL WhatsApp valid dan menggunakan nomor dari Config:
- Arbitrary: string nomor WhatsApp bervariasi, string pesan acak (termasuk karakter Unicode).
- Assertion: URL dimulai dengan `https://wa.me/`, mengandung nomor, dan query string terdecode dengan benar.

**Test Property 4** — Round-trip encode/decode nama kendaraan:
- Arbitrary: nama kendaraan acak (termasuk karakter spesial, spasi, Unicode).
- Assertion: `decodeURIComponent(encodeURIComponent(name)) === name` untuk semua input valid.

**Test Property 5** — `isFeatured` filter konsisten:
- Arbitrary: daftar `Car[]` dengan campuran `isFeatured: true/false` acak.
- Assertion: filter `cars.filter(c => c.isFeatured)` menghasilkan tepat kendaraan dengan `isFeatured: true`.

**Test Property 6** — Konsistensi tampilan harga:
- Arbitrary: nilai `pricePerDay` acak (number atau undefined).
- Assertion: `formatPrice(undefined)` selalu mengembalikan "Hubungi untuk harga"; `formatPrice(n)` untuk `n > 0` selalu mengembalikan string yang mengandung "Rp".

### Konfigurasi Property Tests

```typescript
// Setiap property test menggunakan:
fc.assert(fc.property(...), { numRuns: 100 });
```

### Integration Tests

Tidak diperlukan karena tidak ada backend atau layanan eksternal. Verifikasi end-to-end dilakukan melalui:
- `next build` — memastikan tidak ada error TypeScript atau build.
- `next lint` — memastikan kode sesuai aturan ESLint.
- Manual smoke test di browser untuk verifikasi visual.
