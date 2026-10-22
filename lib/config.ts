export const config = {
  companyName: "Kadar Rent Car",
  tagline: "Perjalanan Nyaman, Terpercaya, dan Profesional",
  /**
   * URL production tanpa trailing slash.
   * Ganti dengan domain production setelah deploy (misal: "https://kadarrentcar.com").
   * JANGAN menggunakan localhost atau URL preview Vercel sebagai nilai default.
   * Baca dari env var NEXT_PUBLIC_SITE_URL jika tersedia.
   */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kadar-jaya-trans.vercel.app/",
  whatsappNumber: "6281234567890", // [PLACEHOLDER — Ganti dengan nomor WhatsApp aktual sebelum deployment]
  phoneNumber: "+62 812-3456-7890", // [PLACEHOLDER — Ganti dengan nomor telepon aktual]
  address: "[Alamat Perusahaan — Harap dikonfigurasi oleh pemilik bisnis]",
  googleMapsUrl: "https://maps.google.com/?q=[Koordinat+Lokasi]", // [PLACEHOLDER — Ganti dengan URL Google Maps aktual]
  operatingHours: "Senin – Sabtu: 08.00–17.00 WIB",
  email: "info@kadarrentcar.com", // [PLACEHOLDER — Ganti dengan email aktual]
  socialMedia: {
    instagram: "", // [PLACEHOLDER — Isi dengan username Instagram jika tersedia]
    facebook: "",  // [PLACEHOLDER — Isi dengan URL Facebook jika tersedia]
  },
} as const;

export type Config = typeof config;
