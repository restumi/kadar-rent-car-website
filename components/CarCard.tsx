"use client";

import { useState } from "react";
import type { Car } from "@/data/cars";
import { buildWhatsAppUrl, formatPrice, formatRentalMethod } from "@/lib/utils";
import { config } from "@/lib/config";

interface CarCardProps {
  car: Car;
  onDetailClick?: (car: Car) => void;
}

export default function CarCard({ car, onDetailClick }: CarCardProps) {
  const [imgSrc, setImgSrc] = useState(car.images[0] ?? "/images/cars/placeholder.svg");

  const waMessage = `Halo Kadar Rent Car, saya ingin bertanya tentang ketersediaan ${car.name}.`;
  const waUrl = buildWhatsAppUrl(config.whatsappNumber, waMessage);

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md" style={{ borderColor: "#e8edf5" }}>
      {/* Car image */}
      <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: "16/9" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt={`Foto ${car.name}`}
          className="h-full w-full object-cover"
          onError={() => setImgSrc("/images/cars/placeholder.svg")}
        />
        {/* Category badge overlay */}
        <span
          className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold"
          style={{ backgroundColor: "#EAF2FF", color: "#155EEF" }}
        >
          {car.category}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-lg font-bold leading-snug" style={{ color: "#172B4D" }}>
          {car.name}
        </h3>

        {/* Spec badges */}
        <div className="flex flex-wrap gap-2">
          {/* Passengers */}
          <span
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium"
            style={{ backgroundColor: "#F1F5F9", color: "#475569" }}
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {car.passengerCapacity} penumpang
          </span>

          {/* Transmission */}
          <span
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium"
            style={{ backgroundColor: "#F1F5F9", color: "#475569" }}
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {car.transmission}
          </span>

          {/* Rental method */}
          <span
            className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium"
            style={{ backgroundColor: "#EAF2FF", color: "#155EEF" }}
          >
            {formatRentalMethod(car.rentalMethods)}
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto pt-1">
          {car.pricePerDay ? (
            <p className="text-lg font-bold" style={{ color: "#155EEF" }}>
              {formatPrice(car.pricePerDay)}
              <span className="text-sm font-normal" style={{ color: "#64748B" }}> / hari</span>
            </p>
          ) : (
            <p className="text-sm italic" style={{ color: "#94A3B8" }}>
              Hubungi untuk harga
            </p>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 pt-1">
          {onDetailClick && (
            <button
              type="button"
              onClick={() => onDetailClick(car)}
              className="flex-1 rounded-lg border px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
              style={{ borderColor: "#155EEF", color: "#155EEF", minHeight: 44 }}
            >
              Lihat Detail
            </button>
          )}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
            style={{ backgroundColor: "#25D366", minHeight: 44 }}
          >
            <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
