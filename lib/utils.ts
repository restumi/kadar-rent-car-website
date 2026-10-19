import type { RentalMethod } from "@/data/cars";

/**
 * Builds a WhatsApp deep-link URL with a pre-filled message.
 *
 * @param phoneNumber - WhatsApp number in international format without '+' (e.g. "628123456789")
 * @param message     - Plain-text message to pre-fill in the chat
 * @returns Fully-formed wa.me URL with the message URL-encoded
 */
export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Formats a rental method enum value into a human-readable Indonesian label.
 */
export function formatRentalMethod(method: RentalMethod): string {
  const labels: Record<RentalMethod, string> = {
    "lepas-kunci": "Lepas Kunci",
    "dengan-driver": "Dengan Driver",
    keduanya: "Lepas Kunci & Dengan Driver",
  };
  return labels[method];
}

/**
 * Formats a price in IDR.
 * Returns "Hubungi untuk harga" when `price` is undefined or 0.
 */
export function formatPrice(price?: number): string {
  if (!price) return "Hubungi untuk harga";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}
