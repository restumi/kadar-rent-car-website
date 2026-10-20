import type { MetadataRoute } from "next";
import { config } from "@/lib/config";

/**
 * robots.txt dinamis menggunakan Next.js App Router convention.
 * Mengizinkan semua bot merayapi seluruh website dan mengarahkan ke sitemap.
 * Pastikan NEXT_PUBLIC_SITE_URL sudah diisi dengan domain production sebelum deploy.
 */
export default function robots(): MetadataRoute.Robots {
  const base = config.siteUrl.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Tidak ada disallow — semua halaman publik boleh dirayapi.
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
