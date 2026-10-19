"use client";

import { useEffect, useRef, useState } from "react";
import type { Car } from "@/data/cars";
import { buildWhatsAppUrl, formatPrice, formatRentalMethod } from "@/lib/utils";
import { config } from "@/lib/config";

interface VehicleDetailModalProps {
  car: Car | null;
  onClose: () => void;
}

export default function VehicleDetailModal({ car, onClose }: VehicleDetailModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Body scroll lock + focus management
  useEffect(() => {
    if (!car) return;
    document.body.style.overflow = "hidden";
    // Focus the close button when modal opens
    const timer = setTimeout(() => closeButtonRef.current?.focus(), 10);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [car]);

  // Escape key listener
  useEffect(() => {
    if (!car) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [car, onClose]);

  if (!car) return null;

  const waMessage = `Halo Kadar Rent Car, saya ingin bertanya tentang ketersediaan ${car.name} dengan metode sewa ${formatRentalMethod(car.rentalMethods)}.`;
  const waUrl = buildWhatsAppUrl(config.whatsappNumber, waMessage);

  return (
    /* Overlay */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`Detail kendaraan: ${car.name}`}
    >
      {/* Panel */}
      <div
        className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-gray-600 shadow backdrop-blur-sm transition hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Tutup detail kendaraan"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto">
          {/* Image — uses key so CarImage resets when car changes */}
          <CarImage key={car.id} src={car.images[0]} alt={`Foto ${car.name}`} />
          {/* Category badge */}
          <div className="relative">
            <span
              className="absolute -top-8 left-4 rounded-full px-3 py-1 text-sm font-semibold"
              style={{ backgroundColor: "#EAF2FF", color: "#155EEF" }}
            >
              {car.category}
            </span>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-4 p-6">
            <h2 className="text-2xl font-bold" style={{ color: "#172B4D" }}>
              {car.name}
            </h2>

            {/* Spec grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <SpecItem label="Kapasitas" value={`${car.passengerCapacity} penumpang`} />
              <SpecItem label="Transmisi" value={car.transmission} />
              <SpecItem label="Metode Sewa" value={formatRentalMethod(car.rentalMethods)} />
              {car.specifications &&
                Object.entries(car.specifications).map(([key, value]) => (
                  <SpecItem key={key} label={key} value={value} />
                ))}
            </div>

            {/* Price */}
            <div className="rounded-lg p-4" style={{ backgroundColor: "#F7F9FC" }}>
              {car.pricePerDay ? (
                <p className="text-xl font-bold" style={{ color: "#155EEF" }}>
                  {formatPrice(car.pricePerDay)}
                  <span className="text-sm font-normal" style={{ color: "#64748B" }}> / hari</span>
                </p>
              ) : (
                <p className="text-sm" style={{ color: "#64748B" }}>
                  Harga tidak ditampilkan. Hubungi kami untuk informasi harga.
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
              {car.description}
            </p>

            {/* CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold text-white transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Tanya via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Isolated image component so its error state resets via key when car changes */
function CarImage({ src, alt }: { src: string | undefined; alt: string }) {
  const [hasError, setHasError] = useState(false);
  const imgSrc = hasError || !src ? "/images/cars/placeholder.svg" : src;

  return (
    <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: "16/9" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgSrc}
        alt={alt}
        className="h-full w-full object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg p-3" style={{ backgroundColor: "#F7F9FC" }}>
      <dt className="text-xs font-medium uppercase tracking-wide" style={{ color: "#94A3B8" }}>
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold" style={{ color: "#172B4D" }}>
        {value}
      </dd>
    </div>
  );
}
