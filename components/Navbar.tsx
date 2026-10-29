"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Katalog Mobil", href: "/katalog" },
  { label: "Profil Perusahaan", href: "/profil" },
  { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
  { label: "Lokasi & Kontak", href: "/kontak" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on Escape key (Requirement 2.8)
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    // Requirement 2.4: sticky top-0 z-50; white background; bottom shadow
    <nav
      className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100"
      aria-label="Navigasi utama"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo — Requirement 2.1 */}
          <Link
            href="/"
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded"
            aria-label="Kadar Rent Car — Halaman Utama"
          >
            <Image
              src="/images/logo-navbar.png"
              alt="Kadar Rent Car"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="h-7 w-auto"
            />
          </Link>

          {/* Desktop navigation — hidden below md (Requirement 2.5) */}
          <ul
            className="hidden lg:flex lg:items-center lg:gap-1"
            role="list"
          >
            {navLinks.map(({ label, href }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={[
                      "relative px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                      isActive
                        ? "font-semibold"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                    ].join(" ")}
                    style={
                      isActive
                        ? { color: "#155EEF" }
                        : undefined
                    }
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                    {/* Active underline indicator — Requirement 2.3 */}
                    {isActive && (
                      <span
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full"
                        style={{ backgroundColor: "#155EEF" }}
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hamburger button — visible below md (Requirement 2.5, 2.6, 2.10) */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset lg:hidden"
            style={{ minWidth: 44, minHeight: 44 }}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            tabIndex={0}
          >
            <span className="sr-only">
              {isMenuOpen ? "Tutup menu" : "Buka menu"}
            </span>
            {isMenuOpen ? (
              // X icon
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu — Requirement 2.6, 2.7 */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-gray-100 bg-white md:hidden"
        >
          <ul
            className="flex flex-col px-4 py-3 gap-1"
            role="list"
          >
            {navLinks.map(({ label, href }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={[
                      "block rounded-md px-3 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                      isActive
                        ? "font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    ].join(" ")}
                    style={
                      isActive
                        ? { color: "#155EEF", backgroundColor: "#EAF2FF" }
                        : undefined
                    }
                    aria-current={isActive ? "page" : undefined}
                    // Requirement 2.7: close mobile menu when a link is clicked
                    onClick={() => setIsMenuOpen(false)}
                    tabIndex={0}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
