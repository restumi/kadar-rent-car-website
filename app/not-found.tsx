import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Halaman Tidak Ditemukan",
  description: "Halaman yang kamu cari tidak ditemukan atau mungkin sudah dipindahkan.",
};

export default function NotFound() {
  return (
    <section
      className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:py-28"
      style={{ backgroundColor: "#F7F9FC" }}
      aria-labelledby="not-found-heading"
    >
      {/* Large 404 numeral */}
      <div
        className="select-none text-8xl font-extrabold leading-none tracking-tight sm:text-9xl"
        style={{ color: "#EAF2FF" }}
        aria-hidden="true"
      >
        404
      </div>

      {/* Car illustration */}
      <div className="my-6" aria-hidden="true">
        <svg
          viewBox="0 0 200 120"
          className="mx-auto w-40 sm:w-48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Road */}
          <ellipse cx="100" cy="108" rx="90" ry="8" fill="#E2E8F0" />
          {/* Car body */}
          <rect x="30" y="62" width="140" height="36" rx="8" fill="#155EEF" opacity="0.15" />
          {/* Cabin */}
          <path d="M55 62 L68 38 L132 38 L145 62 Z" fill="#155EEF" opacity="0.2" />
          {/* Windows */}
          <path d="M72 44 L78 62 H100 V44 Z" fill="#EAF2FF" opacity="0.6" />
          <path d="M104 44 V62 H122 L128 44 Z" fill="#EAF2FF" opacity="0.6" />
          {/* Left wheel */}
          <circle cx="63" cy="100" r="14" fill="#102A56" opacity="0.6" />
          <circle cx="63" cy="100" r="8" fill="#EAF2FF" opacity="0.4" />
          {/* Right wheel */}
          <circle cx="137" cy="100" r="14" fill="#102A56" opacity="0.6" />
          <circle cx="137" cy="100" r="8" fill="#EAF2FF" opacity="0.4" />
          {/* Headlight */}
          <rect x="30" y="72" width="10" height="7" rx="2" fill="#FCD34D" opacity="0.7" />
          {/* Taillight */}
          <rect x="160" y="72" width="10" height="7" rx="2" fill="#F87171" opacity="0.6" />
          {/* Question mark above car */}
          <text
            x="100"
            y="28"
            textAnchor="middle"
            fontSize="20"
            fontWeight="bold"
            fill="#155EEF"
            opacity="0.4"
          >
            ?
          </text>
        </svg>
      </div>

      {/* Heading & description */}
      <h1
        id="not-found-heading"
        className="text-2xl font-bold tracking-tight sm:text-3xl"
        style={{ color: "#172B4D" }}
      >
        Halaman Tidak Ditemukan
      </h1>
      <p
        className="mx-auto mt-3 max-w-md text-base leading-relaxed"
        style={{ color: "#64748B" }}
      >
        Maaf, halaman yang kamu cari tidak ditemukan atau mungkin sudah dipindahkan.
      </p>

      {/* CTA buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
          style={{ backgroundColor: "#155EEF", minHeight: 44 }}
        >
          Kembali ke Beranda
        </Link>
        <Link
          href="/katalog"
          className="inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-semibold transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
          style={{ borderColor: "#155EEF", color: "#155EEF", minHeight: 44 }}
        >
          Lihat Katalog Mobil
        </Link>
      </div>
    </section>
  );
}
