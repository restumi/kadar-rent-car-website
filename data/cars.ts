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
 * Data kendaraan terpusat — sesuai armada aktual Kadar Rent Car.
 * Perbarui pricePerDay dengan harga aktual sebelum deployment produksi.
 */
export const cars: Car[] = [
  // ── City Car ────────────────────────────────────────────────────────────────

  {
    id: "honda-brio",
    name: "Honda Brio",
    category: "City Car",
    rentalMethods: "lepas-kunci",
    passengerCapacity: 4,
    transmission: "Manual",
    pricePerDay: undefined, // [PLACEHOLDER — Isi harga aktual]
    images: ["/images/cars/brio.png"],
    description:
      "City car kompak dan lincah, ideal untuk mobilitas harian di dalam kota. Irit bahan bakar dan mudah diparkir.",
    specifications: {
      Mesin: "1.2L",
      Transmisi: "Manual 5-percepatan",
    },
    isFeatured: false,
  },
  {
    id: "daihatsu-ayla",
    name: "Daihatsu Ayla",
    category: "City Car",
    rentalMethods: "lepas-kunci",
    passengerCapacity: 4,
    transmission: "Manual",
    pricePerDay: undefined, // [PLACEHOLDER — Isi harga aktual]
    images: ["/images/cars/ayla.png"],
    description:
      "City car ekonomis dengan konsumsi bahan bakar yang efisien. Cocok untuk perjalanan singkat dalam kota.",
    specifications: {
      Mesin: "1.0L",
      Transmisi: "Manual 5-percepatan",
    },
    isFeatured: false,
  },

  // ── MPV ─────────────────────────────────────────────────────────────────────

  {
    id: "toyota-avanza",
    name: "Toyota Avanza",
    category: "MPV",
    rentalMethods: "keduanya",
    passengerCapacity: 7,
    transmission: "Manual",
    pricePerDay: undefined, // [PLACEHOLDER — Isi harga aktual]
    images: ["/images/cars/avanza.png"],
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
    id: "toyota-avanza-veloz",
    name: "Toyota Avanza Veloz",
    category: "MPV",
    rentalMethods: "keduanya",
    passengerCapacity: 7,
    transmission: "Otomatis",
    pricePerDay: undefined, // [PLACEHOLDER — Isi harga aktual]
    images: ["/images/cars/avanza-veloz.png"],
    description:
      "Versi sporty dari Avanza dengan transmisi otomatis. Kabin luas dan nyaman untuk perjalanan keluarga jarak jauh.",
    specifications: {
      Mesin: "1.5L",
      Transmisi: "CVT Otomatis",
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
    images: ["/images/cars/xenia.png"],
    description:
      "MPV tangguh dan ekonomis, cocok untuk perjalanan dalam kota maupun luar kota bersama keluarga.",
    specifications: {
      Mesin: "1.3L",
      Transmisi: "Manual 5-percepatan",
      "Kapasitas BBM": "45 liter",
    },
    isFeatured: true,
  },
  {
    id: "toyota-innova-reborn",
    name: "Toyota Innova Reborn",
    category: "MPV",
    rentalMethods: "keduanya",
    passengerCapacity: 7,
    transmission: "Manual",
    pricePerDay: undefined, // [PLACEHOLDER — Isi harga aktual]
    images: ["/images/cars/inova-reborn.png"],
    description:
      "MPV premium dengan mesin diesel bertenaga. Kabin luas dan nyaman, cocok untuk perjalanan keluarga dan bisnis jarak jauh.",
    specifications: {
      Mesin: "2.4L Diesel",
      Transmisi: "Manual 6-percepatan",
      "Kapasitas BBM": "55 liter",
    },
    isFeatured: true,
  },
  {
    id: "toyota-innova-zenix",
    name: "Toyota Innova Zenix",
    category: "MPV",
    rentalMethods: "keduanya",
    passengerCapacity: 7,
    transmission: "Otomatis",
    pricePerDay: undefined, // [PLACEHOLDER — Isi harga aktual]
    images: ["/images/cars/inova-zenix.png"],
    description:
      "Generasi terbaru Innova dengan desain modern dan kabin premium. Tersedia transmisi otomatis untuk kenyamanan berkendara maksimal.",
    specifications: {
      Mesin: "2.0L Hybrid / 2.0L Bensin",
      Transmisi: "CVT Otomatis",
      "Kapasitas BBM": "50 liter",
    },
    isFeatured: true,
  },
  {
    id: "toyota-hiace",
    name: "Toyota HiAce",
    category: "MPV",
    rentalMethods: "dengan-driver",
    passengerCapacity: 14,
    transmission: "Manual",
    pricePerDay: undefined, // [PLACEHOLDER — Isi harga aktual]
    images: ["/images/cars/hiace.png"],
    description:
      "Minibus kapasitas besar, ideal untuk perjalanan rombongan, wisata kelompok, dan kebutuhan transportasi korporat.",
    specifications: {
      Mesin: "2.7L Bensin",
      Transmisi: "Manual 5-percepatan",
      "Kapasitas BBM": "70 liter",
    },
    isFeatured: false,
  },

  // ── Pickup ───────────────────────────────────────────────────────────────────

  {
    id: "pickup",
    name: "Pickup",
    category: "MPV",
    rentalMethods: "lepas-kunci",
    passengerCapacity: 3,
    transmission: "Manual",
    pricePerDay: undefined, // [PLACEHOLDER — Isi harga aktual]
    images: ["/images/cars/pickup.png"],
    description:
      "Kendaraan pickup untuk kebutuhan angkutan barang dan logistik. Tenaga kuat dan bak terbuka untuk berbagai kebutuhan.",
    specifications: {
      Transmisi: "Manual",
    },
    isFeatured: false,
  },
];
