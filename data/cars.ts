export type RentalMethod = "lepas-kunci" | "dengan-driver" | "keduanya";
export type VehicleCategory = "City Car" | "MPV" | "SUV" | "Sedan" | "Premium";
export type Transmission = "Manual" | "Otomatis";

export interface Car {
  /** URL-safe slug, unik di seluruh katalog */
  id: string;
  /** Nama kendaraan lengkap */
  name: string;
  /** Kategori kendaraan untuk keperluan filter */
  category: VehicleCategory;
  /** Metode sewa yang didukung kendaraan ini */
  rentalMethods: RentalMethod;
  /** Kapasitas penumpang (termasuk pengemudi) */
  passengerCapacity: number;
  /** Jenis transmisi */
  transmission: Transmission;
  /** Harga sewa per hari dalam IDR. undefined = "Hubungi untuk harga" */
  pricePerDay?: number;
  /** Array path gambar relatif dari /public atau URL eksternal. Indeks 0 adalah gambar utama. */
  images: string[];
  /** Deskripsi singkat kendaraan */
  description: string;
  /** Spesifikasi opsional tambahan (mesin, cc, dll.) */
  specifications?: Record<string, string>;
  /** Apakah kendaraan ditampilkan di seksi unggulan halaman Home */
  isFeatured: boolean;
}

/**
 * Data kendaraan terpusat — ganti dengan data armada aktual sebelum deployment produksi.
 * Minimal 6 kendaraan: 2 City Car/MPV, 2 SUV, 2 Sedan/Premium.
 */
export const cars: Car[] = [
  // ── City Car / MPV ──────────────────────────────────────────────────────────

  {
    id: "toyota-avanza",
    name: "Toyota Avanza",
    category: "MPV",
    rentalMethods: "keduanya",
    passengerCapacity: 7,
    transmission: "Manual",
    pricePerDay: undefined, // [PLACEHOLDER — Isi harga aktual]
    images: ["/images/cars/placeholder.svg"],
    description:
      "MPV serbaguna yang nyaman untuk perjalanan keluarga maupun bisnis. Kabin luas dan irit bahan bakar menjadikannya pilihan populer.",
    specifications: {
      Mesin: "1.3L / 1.5L",
      Transmisi: "Manual 5-percepatan",
      "Kapasitas BBM": "45 liter",
    },
    isFeatured: true,
  },
  {
    id: "daihatsu-xenia",
    name: "Daihatsu Xenia",
    category: "MPV",
    rentalMethods: "keduanya",
    passengerCapacity: 7,
    transmission: "Manual",
    pricePerDay: undefined, // [PLACEHOLDER — Isi harga aktual]
    images: ["/images/cars/placeholder.svg"],
    description:
      "MPV tangguh dan ekonomis, cocok untuk perjalanan dalam kota maupun luar kota bersama keluarga.",
    specifications: {
      Mesin: "1.3L",
      Transmisi: "Manual 5-percepatan",
      "Kapasitas BBM": "45 liter",
    },
    isFeatured: true,
  },

  // ── SUV ─────────────────────────────────────────────────────────────────────

  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner",
    category: "SUV",
    rentalMethods: "keduanya",
    passengerCapacity: 7,
    transmission: "Otomatis",
    pricePerDay: undefined, // [PLACEHOLDER — Isi harga aktual]
    images: ["/images/cars/placeholder.svg"],
    description:
      "SUV premium dengan ground clearance tinggi, ideal untuk perjalanan lintas kota maupun medan yang lebih menantang.",
    specifications: {
      Mesin: "2.4L Diesel",
      Transmisi: "Otomatis 6-percepatan",
      Penggerak: "4x2 / 4x4",
    },
    isFeatured: true,
  },
  {
    id: "mitsubishi-pajero",
    name: "Mitsubishi Pajero Sport",
    category: "SUV",
    rentalMethods: "dengan-driver",
    passengerCapacity: 7,
    transmission: "Otomatis",
    pricePerDay: undefined, // [PLACEHOLDER — Isi harga aktual]
    images: ["/images/cars/placeholder.svg"],
    description:
      "SUV bertenaga besar dengan interior mewah dan teknologi keselamatan terkini, cocok untuk perjalanan bisnis dan wisata premium.",
    specifications: {
      Mesin: "2.4L Diesel",
      Transmisi: "Otomatis 8-percepatan",
      Penggerak: "4x2",
    },
    isFeatured: false,
  },

  // ── Sedan / Premium ──────────────────────────────────────────────────────────

  {
    id: "toyota-camry",
    name: "Toyota Camry",
    category: "Sedan",
    rentalMethods: "dengan-driver",
    passengerCapacity: 5,
    transmission: "Otomatis",
    pricePerDay: undefined, // [PLACEHOLDER — Isi harga aktual]
    images: ["/images/cars/placeholder.svg"],
    description:
      "Sedan premium dengan kabin yang senyap dan nyaman, pilihan sempurna untuk perjalanan bisnis dan acara formal.",
    specifications: {
      Mesin: "2.5L Hybrid",
      Transmisi: "CVT Otomatis",
      Fitur: "Dual Zone AC, Leather Seat",
    },
    isFeatured: true,
  },
  {
    id: "honda-accord",
    name: "Honda Accord",
    category: "Sedan",
    rentalMethods: "dengan-driver",
    passengerCapacity: 5,
    transmission: "Otomatis",
    pricePerDay: undefined, // [PLACEHOLDER — Isi harga aktual]
    images: ["/images/cars/placeholder.svg"],
    description:
      "Sedan elegan dengan handling responsif dan interior berkelas. Pilihan ideal untuk representasi dan perjalanan eksekutif.",
    specifications: {
      Mesin: "1.5L Turbo",
      Transmisi: "CVT Otomatis",
      Fitur: "Apple CarPlay, Android Auto",
    },
    isFeatured: false,
  },
];
