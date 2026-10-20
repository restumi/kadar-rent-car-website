import type { MetadataRoute } from "next";
import { config } from "@/lib/config";

/**
 * Sitemap dinamis menggunakan Next.js App Router convention.
 * URL diambil dari config.siteUrl yang dibaca dari env var NEXT_PUBLIC_SITE_URL.
 * Pastikan NEXT_PUBLIC_SITE_URL sudah diisi dengan domain production sebelum deploy.
 *
 * Halaman yang disertakan: hanya halaman publik yang benar-benar tersedia.
 * Halaman yang tidak disertakan: /not-found (404), route internal, URL preview.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = config.siteUrl.replace(/\/$/, ""); // pastikan tidak ada trailing slash

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      priority: 1.0,
      changeFrequency: "weekly",
    },
    {
      url: `${base}/katalog`,
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${base}/profil`,
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/kontak`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/syarat-ketentuan`,
      priority: 0.4,
      changeFrequency: "monthly",
    },
  ];

  return routes;
}
