"use client";

import { useState, useMemo } from "react";
import type { Car, RentalMethod, VehicleCategory } from "@/data/cars";
import CarCard from "@/components/CarCard";
import VehicleDetailModal from "@/components/VehicleDetailModal";

interface CarFiltersProps {
  cars: Car[];
}

const RENTAL_METHOD_LABELS: Record<string, string> = {
  "": "Semua Metode",
  "lepas-kunci": "Lepas Kunci",
  "dengan-driver": "Dengan Driver",
};

export default function CarFilters({ cars }: CarFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory | "">("");
  const [selectedMethod, setSelectedMethod] = useState<RentalMethod | "">("");
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  // Derive unique categories dynamically from data
  const categories = useMemo(() => {
    const cats = Array.from(new Set(cars.map((c) => c.category)));
    return cats.sort();
  }, [cars]);

  // Filtered cars derived from state
  const filteredCars = useMemo(() => {
    try {
      return cars.filter((car) => {
        const matchesSearch =
          searchQuery.trim() === "" ||
          car.name.toLowerCase().includes(searchQuery.trim().toLowerCase());

        const matchesCategory =
          selectedCategory === "" || car.category === selectedCategory;

        const matchesMethod =
          selectedMethod === "" ||
          car.rentalMethods === selectedMethod ||
          car.rentalMethods === "keduanya";

        return matchesSearch && matchesCategory && matchesMethod;
      });
    } catch {
      // Fallback: return all cars if filtering throws
      return cars;
    }
  }, [cars, searchQuery, selectedCategory, selectedMethod]);

  const hasActiveFilters = searchQuery !== "" || selectedCategory !== "" || selectedMethod !== "";

  function clearFilters() {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedMethod("");
  }

  return (
    <div>
      {/* Filter controls */}
      <div className="mb-8 flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm sm:p-5" style={{ borderColor: "#e8edf5" }}>
        {/* Search */}
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kendaraan..."
            aria-label="Cari kendaraan berdasarkan nama"
            className="w-full rounded-lg border py-2.5 pl-9 pr-4 text-sm transition focus:outline-none focus:ring-2"
            style={{
              borderColor: "#CBD5E1",
              color: "#172B4D",
              minHeight: 44,
            }}
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory("")}
              className="rounded-full border px-3 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2"
              style={{
                borderColor: selectedCategory === "" ? "#155EEF" : "#CBD5E1",
                backgroundColor: selectedCategory === "" ? "#EAF2FF" : "white",
                color: selectedCategory === "" ? "#155EEF" : "#64748B",
                minHeight: 36,
              }}
              aria-pressed={selectedCategory === ""}
            >
              Semua
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat === selectedCategory ? "" : cat)}
                className="rounded-full border px-3 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2"
                style={{
                  borderColor: selectedCategory === cat ? "#155EEF" : "#CBD5E1",
                  backgroundColor: selectedCategory === cat ? "#EAF2FF" : "white",
                  color: selectedCategory === cat ? "#155EEF" : "#64748B",
                  minHeight: 36,
                }}
                aria-pressed={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Rental method filter */}
        <div className="flex flex-wrap gap-2">
          {(Object.keys(RENTAL_METHOD_LABELS) as Array<RentalMethod | "">).map((method) => (
            <button
              key={method}
              type="button"
              onClick={() => setSelectedMethod(method === selectedMethod ? "" : method)}
              className="rounded-full border px-3 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2"
              style={{
                borderColor: selectedMethod === method ? "#155EEF" : "#CBD5E1",
                backgroundColor: selectedMethod === method ? "#EAF2FF" : "white",
                color: selectedMethod === method ? "#155EEF" : "#64748B",
                minHeight: 36,
              }}
              aria-pressed={selectedMethod === method}
            >
              {RENTAL_METHOD_LABELS[method]}
            </button>
          ))}
        </div>

        {/* Clear filters */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between border-t pt-3" style={{ borderColor: "#F1F5F9" }}>
            <span className="text-sm" style={{ color: "#64748B" }}>
              {filteredCars.length} kendaraan ditemukan
            </span>
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm font-medium underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2"
              style={{ color: "#155EEF" }}
            >
              Hapus Semua Filter
            </button>
          </div>
        )}
      </div>

      {/* Car grid */}
      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onDetailClick={setSelectedCar}
            />
          ))}
        </div>
      ) : (
        /* Empty state */
        <div className="flex flex-col items-center justify-center rounded-xl border bg-white py-16 text-center" style={{ borderColor: "#e8edf5" }}>
          <svg className="mb-4 h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mb-2 text-lg font-semibold" style={{ color: "#172B4D" }}>
            Kendaraan Tidak Ditemukan
          </h3>
          <p className="mb-6 max-w-sm text-sm" style={{ color: "#64748B" }}>
            Tidak ada kendaraan yang sesuai dengan filter Anda. Coba ubah atau hapus filter.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="rounded-lg border px-5 py-2.5 text-sm font-semibold transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2"
            style={{ borderColor: "#155EEF", color: "#155EEF" }}
          >
            Hapus Semua Filter
          </button>
        </div>
      )}

      {/* Vehicle detail modal */}
      <VehicleDetailModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </div>
  );
}
