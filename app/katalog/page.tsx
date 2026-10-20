import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CarFilters from "@/components/CarFilters";
import { cars } from "@/data/cars";

export const metadata: Metadata = {
  title: "Katalog Mobil Rental Semarang",
  description:
    "Pilihan mobil rental di Semarang dan Ungaran: MPV, SUV, Sedan. Tersedia sewa lepas kunci dan dengan driver. Cari dan filter armada Kadar Rent Car.",
  keywords: [
    "katalog mobil rental Semarang",
    "pilihan mobil rental Semarang",
    "sewa MPV Semarang",
    "sewa SUV Semarang",
    "rental mobil lepas kunci Semarang",
    "rental mobil dengan driver Semarang",
  ],
  alternates: {
    canonical: "/katalog",
  },
  openGraph: {
    title: "Katalog Mobil Rental Semarang — Kadar Rent Car",
    description: "Temukan mobil yang tepat untuk perjalanan Anda di Semarang dan Ungaran.",
    locale: "id_ID",
    type: "website",
  },
};

export default function KatalogPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F9FC" }}>
      {/* Page header */}
      <div
        className="border-b py-12"
        style={{ backgroundColor: "white", borderColor: "#e8edf5" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Katalog Mobil"
            subtitle="Temukan kendaraan yang sesuai kebutuhan perjalanan Anda. Tersedia berbagai pilihan dengan metode sewa yang fleksibel."
          />
        </div>
      </div>

      {/* Catalog content */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <CarFilters cars={cars} />
      </div>
    </div>
  );
}
