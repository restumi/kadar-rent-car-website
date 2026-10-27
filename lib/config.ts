export const config = {
  companyName: "Kadar Rent Car",
  tagline: "Perjalanan Nyaman, Terpercaya, dan Profesional",
  /**
   * URL production tanpa trailing slash.
   * Ganti dengan domain production setelah deploy (misal: "https://kadarrentcar.com").
   * JANGAN menggunakan localhost atau URL preview Vercel sebagai nilai default.
   * Baca dari env var NEXT_PUBLIC_SITE_URL jika tersedia.
   */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kadar-jaya-trans.vercel.app",
  whatsappNumber: "6285866661108",
  phoneNumber: "+62 858-6666-1108",
  address: "Jl. Cumi-Cumi Raya, RT.01/RW.08, Bandarharjo, Kec. Semarang Utara, Kota Semarang, Jawa Tengah 50175",
  googleMapsUrl: "https://maps.app.goo.gl/RCyL7WVcSCSmARfv9",
  operatingHours: "setiap hari: 24 jam",
  email: "info@kadarrentcar.com",
  socialMedia: {
    instagram: "",
    facebook: "", 
  },
} as const;

export type Config = typeof config;
