# Requirements Document

## Introduction

Kadar Rent Car adalah website rental mobil profesional yang berfungsi sebagai katalog kendaraan dan platform penghasil prospek (lead-generation). Website ini memungkinkan calon penyewa untuk menelusuri kendaraan yang tersedia, memahami metode sewa, dan menghubungi perusahaan melalui WhatsApp untuk reservasi dan pertanyaan. Website dibangun menggunakan Next.js 16.4.2 dengan App Router, TypeScript strict mode, React 19, dan Tailwind CSS v4, tanpa backend, autentikasi, atau sistem pembayaran.

## Glossary

- **Website**: Aplikasi web Kadar Rent Car yang diimplementasikan dengan Next.js App Router.
- **Navbar**: Komponen navigasi global yang tampil di seluruh halaman.
- **Footer**: Komponen footer global yang tampil di bagian bawah seluruh halaman.
- **CarCard**: Komponen kartu kendaraan yang menampilkan ringkasan informasi kendaraan dalam katalog.
- **CarFilters**: Komponen filter sisi klien untuk menyaring kendaraan berdasarkan kategori, metode sewa, dan nama.
- **HeroSection**: Komponen bagian utama halaman Home dengan headline, deskripsi, dan tombol CTA.
- **WhatsAppButton**: Komponen tombol mengambang tetap di pojok kanan bawah untuk menghubungi via WhatsApp.
- **SectionHeading**: Komponen judul seksi yang konsisten di seluruh halaman.
- **VehicleDetailModal**: Tampilan detail kendaraan berupa modal atau halaman rute tersendiri.
- **CTA**: Call-to-action — tombol atau tautan yang mengajak pengguna melakukan tindakan tertentu.
- **Lepas Kunci**: Metode sewa di mana penyewa mengemudikan kendaraan sendiri.
- **Dengan Driver**: Metode sewa di mana kendaraan disewakan beserta pengemudi profesional.
- **Config**: File `lib/config.ts` yang menyimpan konfigurasi perusahaan seperti nomor WhatsApp, alamat, dan jam operasional.
- **CarsData**: File `data/cars.ts` yang berisi data kendaraan terpusat dalam TypeScript.

---

## Requirements

### Requirement 1: Infrastruktur Proyek dan Design System

**User Story:** Sebagai developer, saya ingin memiliki fondasi proyek yang solid dengan design system yang konsisten, sehingga seluruh halaman website memiliki tampilan dan nuansa yang seragam.

#### Acceptance Criteria

1. THE Website SHALL menggunakan palet warna brand dengan primary blue `#155EEF`, dark navy `#102A56`, light blue `#EAF2FF`, background `#F7F9FC`, primary text `#172B4D`, dan secondary text `#64748B`.
2. THE Website SHALL menyimpan seluruh konfigurasi perusahaan (nomor WhatsApp, alamat, jam operasional, tautan media sosial) dalam file `lib/config.ts` sebagai satu-satunya sumber kebenaran konfigurasi.
3. THE Website SHALL menyimpan seluruh data kendaraan dalam file `data/cars.ts` sebagai satu-satunya sumber kebenaran katalog kendaraan, dengan struktur TypeScript yang terdefinisi secara eksplisit.
4. THE Website SHALL menggunakan bahasa Indonesia sebagai bahasa utama untuk semua konten yang terlihat oleh pengguna.
5. THE Website SHALL mengatur atribut `lang="id"` pada elemen HTML root untuk SEO dan aksesibilitas.
6. WHEN halaman dimuat, THE Website SHALL menerapkan tipografi menggunakan font Geist Sans yang sudah dikonfigurasi dalam proyek.
7. THE Website SHALL menggunakan komponen `next/image` untuk semua gambar agar mendapat optimasi otomatis dari Next.js.
8. THE CarsData SHALL mendefinisikan antarmuka TypeScript `Car` yang mencakup minimal: `id`, `name`, `category`, `rentalMethods`, `passengerCapacity`, `transmission`, `pricePerDay` (opsional), `images`, `description`, dan `isFeatured`.
9. THE Config SHALL mengekspos nilai konfigurasi bertipe: `whatsappNumber` (string), `companyName` (string), `address` (string), `operatingHours` (string), `googleMapsUrl` (string), dan `phoneNumber` (string).

---

### Requirement 2: Komponen Global — Navbar

**User Story:** Sebagai pengunjung website, saya ingin navigasi yang jelas dan mudah diakses di semua halaman, sehingga saya dapat berpindah antar halaman dengan mudah di perangkat apa pun.

#### Acceptance Criteria

1. THE Navbar SHALL menampilkan nama perusahaan "Kadar Rent Car" sebagai logo teks atau logo berbasis SVG di sisi kiri.
2. THE Navbar SHALL menyertakan tautan navigasi: "Home" (`/`), "Katalog Mobil" (`/katalog`), "Profil Perusahaan" (`/profil`), "Syarat & Ketentuan" (`/syarat-ketentuan`), dan "Lokasi & Kontak" (`/kontak`).
3. WHEN pengguna berada di halaman aktif, THE Navbar SHALL menandai item navigasi yang sesuai dengan indikator visual yang jelas (misalnya: warna berbeda atau underline).
4. THE Navbar SHALL bersifat sticky di bagian atas viewport sehingga selalu terlihat saat pengguna menggulir halaman.
5. WHEN lebar viewport kurang dari breakpoint `md` (768px), THE Navbar SHALL menyembunyikan tautan navigasi dan menampilkan tombol hamburger menu.
6. WHEN tombol hamburger diklik, THE Navbar SHALL menampilkan menu mobile yang berisi semua tautan navigasi.
7. WHEN tautan di menu mobile diklik, THE Navbar SHALL menutup menu mobile secara otomatis.
8. WHEN pengguna menekan tombol Escape saat menu mobile terbuka, THE Navbar SHALL menutup menu mobile.
9. THE Navbar SHALL memiliki kontras warna yang cukup antara teks, background, dan tautan untuk memenuhi WCAG AA.
10. THE Navbar SHALL dapat diakses melalui keyboard dengan urutan fokus yang logis.

---

### Requirement 3: Komponen Global — Footer

**User Story:** Sebagai pengunjung website, saya ingin footer yang informatif di bagian bawah setiap halaman, sehingga saya dapat menemukan informasi kontak dan tautan penting dengan cepat.

#### Acceptance Criteria

1. THE Footer SHALL menampilkan nama perusahaan, deskripsi singkat, dan informasi kontak utama.
2. THE Footer SHALL menyertakan tautan navigasi sekunder ke semua halaman utama.
3. THE Footer SHALL menampilkan nomor WhatsApp dan tautan klik-untuk-WhatsApp dari nilai konfigurasi di `Config`.
4. THE Footer SHALL menampilkan teks hak cipta dengan tahun berjalan secara dinamis.
5. WHEN lebar viewport kurang dari breakpoint `md` (768px), THE Footer SHALL menampilkan konten dalam susunan vertikal satu kolom yang mudah dibaca.
6. THE Footer SHALL menggunakan warna dark navy `#102A56` sebagai background untuk kontras dengan area konten utama.

---

### Requirement 4: Komponen Global — WhatsAppButton

**User Story:** Sebagai pengunjung website, saya ingin tombol WhatsApp yang selalu terlihat, sehingga saya dapat menghubungi perusahaan kapan saja tanpa harus mencari informasi kontak.

#### Acceptance Criteria

1. THE WhatsAppButton SHALL tampil di sudut kanan bawah viewport dengan posisi `fixed` dan selalu terlihat saat pengguna menggulir halaman.
2. THE WhatsAppButton SHALL menggunakan warna WhatsApp green `#25D366` dengan desain melingkar dan bayangan halus.
3. THE WhatsAppButton SHALL menampilkan ikon WhatsApp yang dikenali (SVG inline).
4. WHEN WhatsAppButton diklik, THE WhatsAppButton SHALL membuka tautan `https://wa.me/{whatsappNumber}?text={encodedMessage}` di tab baru dengan pesan terpraisi "Halo Kadar Rent Car, saya ingin bertanya tentang layanan rental mobil."
5. THE WhatsAppButton SHALL memiliki atribut `aria-label` dengan teks deskriptif "Hubungi Kadar Rent Car via WhatsApp".
6. THE WhatsAppButton SHALL memiliki ukuran sentuh minimal 48×48px untuk kemudahan penggunaan di perangkat mobile.
7. THE WhatsAppButton SHALL tidak menutupi konten penting, tombol lain, atau navigasi bawah pada perangkat mobile.
8. THE WhatsAppButton SHALL membaca nomor WhatsApp dari `Config`, bukan dari nilai hard-coded.

---

### Requirement 5: Halaman Home — Hero Section

**User Story:** Sebagai pengunjung baru, saya ingin halaman utama yang menarik dan langsung menjelaskan layanan rental, sehingga saya memahami apa yang ditawarkan dan terdorong untuk melihat katalog.

#### Acceptance Criteria

1. THE HeroSection SHALL menampilkan headline utama "Perjalanan Nyaman Dimulai Bersama Kadar Rent Car" dalam tipografi besar dan menonjol.
2. THE HeroSection SHALL menampilkan deskripsi pendukung singkat tentang layanan rental yang nyaman dan terpercaya.
3. THE HeroSection SHALL menampilkan tombol CTA primer "Lihat Katalog Mobil" yang mengarahkan pengguna ke halaman `/katalog`.
4. THE HeroSection SHALL menampilkan tombol CTA sekunder "Hubungi Kami" yang membuka WhatsApp dengan pesan terpraisi menggunakan `whatsappNumber` dari `Config`.
5. THE HeroSection SHALL menampilkan gambar atau visual otomotif yang relevan.
6. THE HeroSection SHALL menggunakan background bertema biru dengan kontras teks yang memadai.
7. WHEN lebar viewport kurang dari breakpoint `md` (768px), THE HeroSection SHALL menyusun konten teks di atas dan gambar di bawah dalam layout vertikal.

---

### Requirement 6: Halaman Home — Seksi Keunggulan Layanan

**User Story:** Sebagai pengunjung, saya ingin melihat keunggulan layanan Kadar Rent Car secara ringkas, sehingga saya yakin dengan kualitas layanan sebelum menghubungi.

#### Acceptance Criteria

1. THE Website SHALL menampilkan seksi keunggulan layanan dengan minimal empat kartu fitur: "Pilihan Mobil Beragam", "Pilihan Sewa Fleksibel", "Layanan dengan Driver", dan "Pemesanan Mudah via WhatsApp".
2. WHEN seksi keunggulan ditampilkan, THE Website SHALL menyertakan ikon SVG yang relevan dan deskripsi singkat untuk setiap kartu fitur.
3. THE Website SHALL menampilkan fitur-fitur tersebut dalam grid responsif: satu kolom di mobile, dua kolom di tablet, empat kolom di desktop.
4. THE Website SHALL hanya menampilkan klaim yang dapat diverifikasi secara wajar tanpa mengarang statistik, testimoni, atau penghargaan.

---

### Requirement 7: Halaman Home — Seksi Metode Sewa

**User Story:** Sebagai calon penyewa, saya ingin memahami pilihan metode sewa yang tersedia, sehingga saya dapat memilih opsi yang sesuai dengan kebutuhan perjalanan saya.

#### Acceptance Criteria

1. THE Website SHALL menampilkan dua kartu metode sewa: "Lepas Kunci" dan "Dengan Driver" dengan deskripsi yang jelas.
2. THE Website SHALL menjelaskan bahwa metode "Lepas Kunci" memungkinkan penyewa mengemudikan kendaraan sendiri, dengan ketentuan yang berlaku dari perusahaan.
3. THE Website SHALL menjelaskan bahwa metode "Dengan Driver" menyertakan pengemudi profesional, dengan ketersediaan layanan sesuai ketentuan perusahaan.
4. WHEN kartu metode sewa ditampilkan, THE Website SHALL menyertakan tombol CTA yang mengarah ke halaman katalog dengan filter metode sewa yang relevan.
5. WHEN lebar viewport kurang dari breakpoint `md` (768px), THE Website SHALL menampilkan kedua kartu metode sewa dalam layout vertikal satu kolom.

---

### Requirement 8: Halaman Home — Featured Cars

**User Story:** Sebagai pengunjung, saya ingin melihat beberapa kendaraan unggulan di halaman utama, sehingga saya dapat langsung mengetahui pilihan yang tersedia tanpa harus ke halaman katalog.

#### Acceptance Criteria

1. THE Website SHALL menampilkan seksi "Kendaraan Unggulan" yang memuat kendaraan dengan flag `isFeatured: true` dari `CarsData`.
2. WHEN kendaraan unggulan ditampilkan, THE CarCard SHALL menampilkan: gambar kendaraan, nama, kategori, kapasitas penumpang, transmisi, dan metode sewa yang tersedia.
3. THE CarCard SHALL menampilkan harga per hari jika `pricePerDay` dikonfigurasi dalam `CarsData`, atau menampilkan "Hubungi untuk harga" jika tidak dikonfigurasi.
4. THE CarCard SHALL menyertakan tombol "Lihat Detail" yang membuka detail kendaraan, dan tombol "Tanya via WhatsApp" yang membuka WhatsApp dengan pesan terpraisi menyebutkan nama kendaraan.
5. WHEN tombol "Tanya via WhatsApp" diklik, THE WhatsAppButton SHALL membuka `https://wa.me/{whatsappNumber}?text={encodedMessage}` dengan pesan "Halo Kadar Rent Car, saya ingin bertanya tentang ketersediaan {namaKendaraan}."
6. THE Website SHALL menampilkan kartu unggulan dalam grid responsif: satu kolom di mobile, dua kolom di tablet, tiga kolom di desktop.

---

### Requirement 9: Halaman Home — Closing CTA

**User Story:** Sebagai pengunjung yang sudah menjelajahi konten halaman utama, saya ingin ajakan yang jelas untuk menghubungi perusahaan, sehingga saya terdorong untuk segera memulai proses penyewaan.

#### Acceptance Criteria

1. THE Website SHALL menampilkan seksi CTA penutup di bagian bawah halaman Home sebelum footer.
2. THE Website SHALL menampilkan teks ajakan yang mendorong pengunjung menghubungi Kadar Rent Car melalui WhatsApp.
3. THE Website SHALL menyertakan tombol yang membuka WhatsApp dengan pesan terpraisi menggunakan `whatsappNumber` dari `Config`.

---

### Requirement 10: Halaman Katalog (`/katalog`)

**User Story:** Sebagai calon penyewa, saya ingin menelusuri semua kendaraan yang tersedia dengan mudah dan menyaring berdasarkan kebutuhan, sehingga saya dapat menemukan kendaraan yang sesuai dengan cepat.

#### Acceptance Criteria

1. THE Website SHALL menampilkan semua kendaraan dari `CarsData` dalam grid responsif: satu kolom di mobile, dua kolom di tablet, tiga atau empat kolom di desktop.
2. THE CarFilters SHALL menyediakan filter kategori kendaraan (misalnya: City Car, MPV, SUV, Sedan, Premium) yang diambil secara dinamis dari data `CarsData`.
3. THE CarFilters SHALL menyediakan filter metode sewa dengan pilihan: "Semua", "Lepas Kunci", dan "Dengan Driver".
4. THE CarFilters SHALL menyediakan input pencarian teks yang memfilter kendaraan berdasarkan nama secara real-time.
5. WHEN filter atau pencarian diterapkan, THE CarFilters SHALL memfilter daftar kendaraan di sisi klien tanpa me-reload halaman; IF pemfilteran sisi klien gagal karena error script atau state, THEN THE Website SHALL melakukan reload halaman penuh agar grid kendaraan tetap mencerminkan filter yang aktif.
6. THE CarFilters SHALL menyediakan tombol atau aksi "Hapus Filter" yang mereset semua filter aktif sekaligus.
7. WHEN tidak ada kendaraan yang cocok dengan filter yang diterapkan, THE Website SHALL menampilkan pesan empty state yang informatif dan mudah dipahami.
8. THE CarFilters SHALL memiliki kontrol yang ramah sentuh dengan ukuran target minimal 44px di perangkat mobile.
9. WHEN halaman katalog dimuat, THE Website SHALL menampilkan heading halaman, teks pengantar singkat, dan komponen `CarFilters` di atas grid kendaraan.

---

### Requirement 11: Detail Kendaraan

**User Story:** Sebagai calon penyewa, saya ingin melihat informasi lengkap tentang kendaraan tertentu, sehingga saya dapat membuat keputusan sebelum menghubungi perusahaan.

#### Acceptance Criteria

1. WHEN pengguna mengklik "Lihat Detail" pada `CarCard`, THE VehicleDetailModal SHALL menampilkan informasi lengkap kendaraan.
2. THE VehicleDetailModal SHALL menampilkan: gambar kendaraan berukuran lebih besar, nama, kategori, kapasitas penumpang, transmisi, metode sewa yang didukung, harga (jika dikonfigurasi), dan deskripsi kendaraan.
3. THE VehicleDetailModal SHALL menyertakan tombol "Tanya via WhatsApp" yang menghasilkan pesan terpraisi: "Halo Kadar Rent Car, saya ingin bertanya tentang ketersediaan {namaKendaraan} dengan metode sewa {metode}."
4. WHEN VehicleDetailModal terbuka, THE VehicleDetailModal SHALL dapat ditutup melalui: tombol tutup (×), klik di luar area modal, atau tombol Escape pada keyboard.
5. WHEN VehicleDetailModal terbuka, THE Website SHALL mencegah scroll pada halaman latar belakang (body scroll lock).
6. THE VehicleDetailModal SHALL dapat diakses dengan keyboard dengan fokus yang terjebak di dalam modal saat terbuka.
7. THE VehicleDetailModal SHALL responsif dan berfungsi dengan baik pada lebar viewport 320px hingga 1280px ke atas.

---

### Requirement 12: Halaman Profil Perusahaan (`/profil`)

**User Story:** Sebagai pengunjung, saya ingin mengetahui tentang Kadar Rent Car sebagai perusahaan, sehingga saya yakin bahwa ini adalah penyedia layanan yang terpercaya.

#### Acceptance Criteria

1. THE Website SHALL menampilkan halaman profil perusahaan di rute `/profil` dengan konten yang diorganisasi secara profesional.
2. THE Website SHALL menampilkan pengenalan perusahaan, fokus layanan, komitmen terhadap transportasi yang nyaman dan terpercaya, jenis kendaraan yang ditawarkan, dan dua metode sewa.
3. THE Website SHALL menampilkan informasi kontak perusahaan dari nilai konfigurasi `Config`.
4. IF informasi tertentu (seperti tahun berdiri, jumlah armada, atau riwayat kantor) belum disediakan, THEN THE Website SHALL menggunakan placeholder yang jelas dan mudah diedit, bukan informasi yang dikarang.
5. THE Website SHALL menampilkan konten dengan kombinasi teks, visual otomotif yang relevan, dan sorotan visual.
6. WHEN lebar viewport kurang dari breakpoint `md` (768px), THE Website SHALL menampilkan konten halaman profil dalam layout vertikal satu kolom yang mudah dibaca.

---

### Requirement 13: Halaman Syarat & Ketentuan (`/syarat-ketentuan`)

**User Story:** Sebagai calon penyewa, saya ingin membaca syarat dan ketentuan sewa dengan jelas, sehingga saya memahami kewajiban dan hak saya sebelum menyewa kendaraan.

#### Acceptance Criteria

1. THE Website SHALL menampilkan halaman syarat dan ketentuan di rute `/syarat-ketentuan` dengan konten dalam bahasa Indonesia.
2. THE Website SHALL mengorganisasi konten ke dalam bagian berlabel: Ketentuan Umum, Persyaratan Sewa Lepas Kunci, Ketentuan Sewa Dengan Driver, Durasi dan Perpanjangan Sewa, Pembayaran dan Biaya Tambahan, Pembatalan dan Perubahan Jadwal, Tanggung Jawab Penyewa, Penggunaan dan Pengembalian Kendaraan, dan Ketentuan Lain.
3. THE Website SHALL menyertakan catatan yang jelas bahwa konten syarat dan ketentuan merupakan draf awal dan harus ditinjau serta disetujui oleh pemilik bisnis sebelum dipublikasikan.
4. THE Website SHALL TIDAK menampilkan jumlah deposit, denda, persyaratan identifikasi, atau biaya pembatalan yang spesifik sebagai kebijakan yang sudah ditetapkan, karena informasi tersebut belum dikonfirmasi oleh pemilik bisnis.
5. THE Website SHALL menyajikan konten syarat dan ketentuan dalam format yang mudah dibaca dengan hierarki heading yang jelas dan jarak antar bagian yang memadai.

---

### Requirement 14: Halaman Lokasi & Kontak (`/kontak`)

**User Story:** Sebagai calon penyewa, saya ingin mengetahui lokasi dan cara menghubungi Kadar Rent Car, sehingga saya dapat dengan mudah datang ke lokasi atau memulai komunikasi.

#### Acceptance Criteria

1. THE Website SHALL selalu menampilkan halaman lokasi dan kontak di rute `/kontak`, menggunakan placeholder yang jelas untuk informasi yang belum dikonfigurasi dalam `Config`.
2. THE Website SHALL menampilkan alamat perusahaan, tombol kontak WhatsApp, nomor telepon (jika dikonfigurasi), dan jam operasional (jika dikonfigurasi).
3. THE Website SHALL menampilkan tautan ke Google Maps menggunakan `googleMapsUrl` dari `Config` beserta placeholder deskriptif secara bersamaan, terlepas dari apakah `googleMapsUrl` sudah dikonfigurasi atau belum.
4. IF alamat atau koordinat aktual belum tersedia, THEN THE Website SHALL menampilkan placeholder yang jelas dan mudah dikonfigurasi tanpa mengarang alamat atau koordinat.
5. THE Website SHALL menampilkan tombol "Hubungi via WhatsApp" yang membuka `https://wa.me/{whatsappNumber}` dengan pesan terpraisi.
6. WHEN lebar viewport kurang dari breakpoint `md` (768px), THE Website SHALL menampilkan konten halaman kontak dalam layout vertikal satu kolom.

---

### Requirement 15: Responsivitas dan Aksesibilitas

**User Story:** Sebagai pengunjung yang menggunakan berbagai perangkat dan kebutuhan aksesibilitas, saya ingin website yang berfungsi dengan baik di semua ukuran layar dan dapat diakses dengan berbagai cara, sehingga pengalaman saya tetap nyaman dan tidak ada hambatan.

#### Acceptance Criteria

1. THE Website SHALL tidak memiliki overflow horizontal pada lebar viewport 320px hingga 1280px ke atas.
2. THE Website SHALL menggunakan breakpoint Tailwind CSS untuk layout responsif: `sm` (640px), `md` (768px), `lg` (1024px), dan `xl` (1280px).
3. THE Website SHALL memastikan semua tombol dan tautan memiliki ukuran sentuh minimal 44×44px di perangkat mobile.
4. THE Website SHALL memiliki hierarki heading yang logis (`h1` → `h2` → `h3`) di setiap halaman.
5. THE Website SHALL menggunakan atribut `alt` yang deskriptif pada semua gambar.
6. THE Website SHALL memastikan semua elemen interaktif dapat diakses melalui keyboard dengan indikator fokus yang terlihat.
7. THE Website SHALL memiliki rasio kontras warna yang memenuhi WCAG AA (minimal 4.5:1 untuk teks normal, 3:1 untuk teks besar).
8. THE Website SHALL menggunakan HTML semantik dengan elemen yang tepat (`nav`, `main`, `section`, `article`, `footer`, `header`).

---

### Requirement 16: SEO Metadata

**User Story:** Sebagai pemilik bisnis, saya ingin website yang dioptimasi untuk mesin pencari dengan metadata dalam bahasa Indonesia, sehingga calon pelanggan dapat menemukan Kadar Rent Car melalui pencarian online.

#### Acceptance Criteria

1. THE Website SHALL mendefinisikan metadata `title` dan `description` yang unik dan relevan untuk setiap halaman menggunakan Next.js Metadata API.
2. THE Website SHALL menggunakan bahasa Indonesia untuk semua metadata yang terlihat di hasil pencarian.
3. THE Website SHALL menyertakan metadata Open Graph yang relevan untuk setiap halaman agar tampilannya menarik saat dibagikan di media sosial.
4. THE Website SHALL mendefinisikan metadata `title` default di `app/layout.tsx` yang digunakan sebagai fallback untuk semua halaman.
5. THE Website SHALL mendefinisikan metadata `description` halaman Home yang mengandung kata kunci relevan: "rental mobil", "sewa mobil", "Kadar Rent Car", "lepas kunci", dan "dengan driver".
