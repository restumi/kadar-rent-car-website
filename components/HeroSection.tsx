import Link from "next/link";

interface CtaButton {
  label: string;
  href: string;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCta: CtaButton;
  secondaryCta: CtaButton;
}

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function HeroSection({ title, subtitle, primaryCta, secondaryCta }: HeroSectionProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #102A56 0%, #155EEF 100%)" }}
      aria-label="Hero"
    >
      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-10"
        style={{ backgroundColor: "#EAF2FF" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full opacity-10"
        style={{ backgroundColor: "#EAF2FF" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* Text content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#c8daf0" }}>
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              {/* Primary CTA */}
              {isExternal(primaryCta.href) ? (
                <a
                  href={primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2"
                  style={{ backgroundColor: "#155EEF", minHeight: 48 }}
                >
                  {primaryCta.label}
                </a>
              ) : (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2"
                  style={{ backgroundColor: "#155EEF", minHeight: 48 }}
                >
                  {primaryCta.label}
                </Link>
              )}

              {/* Secondary CTA */}
              {isExternal(secondaryCta.href) ? (
                <a
                  href={secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-blue-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2"
                  style={{ minHeight: 48 }}
                >
                  {secondaryCta.label}
                </a>
              ) : (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-blue-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2"
                  style={{ minHeight: 48 }}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>

          {/* Car illustration */}
          <div className="flex justify-center md:justify-end" aria-hidden="true">
            <svg
              viewBox="0 0 520 320"
              className="w-full max-w-sm md:max-w-lg"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Road */}
              <ellipse cx="260" cy="290" rx="220" ry="18" fill="rgba(255,255,255,0.08)" />
              {/* Car body */}
              <rect x="80" y="170" width="360" height="90" rx="16" fill="rgba(255,255,255,0.18)" />
              {/* Cabin */}
              <path d="M155 170 L185 110 L335 110 L365 170 Z" fill="rgba(255,255,255,0.22)" />
              {/* Windows */}
              <path d="M195 120 L210 168 H260 V120 Z" fill="rgba(234,242,255,0.4)" />
              <path d="M265 120 V168 H315 L325 120 Z" fill="rgba(234,242,255,0.4)" />
              {/* Left wheel */}
              <circle cx="165" cy="262" r="36" fill="rgba(16,42,86,0.7)" />
              <circle cx="165" cy="262" r="22" fill="rgba(255,255,255,0.15)" />
              <circle cx="165" cy="262" r="8" fill="rgba(255,255,255,0.3)" />
              {/* Right wheel */}
              <circle cx="355" cy="262" r="36" fill="rgba(16,42,86,0.7)" />
              <circle cx="355" cy="262" r="22" fill="rgba(255,255,255,0.15)" />
              <circle cx="355" cy="262" r="8" fill="rgba(255,255,255,0.3)" />
              {/* Headlight */}
              <rect x="80" y="195" width="28" height="16" rx="4" fill="rgba(255,235,100,0.7)" />
              {/* Taillight */}
              <rect x="412" y="195" width="28" height="16" rx="4" fill="rgba(255,80,80,0.6)" />
              {/* Door line */}
              <line x1="260" y1="172" x2="260" y2="258" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
              {/* Stars */}
              <circle cx="420" cy="60" r="3" fill="rgba(255,255,255,0.4)" />
              <circle cx="100" cy="50" r="2" fill="rgba(255,255,255,0.3)" />
              <circle cx="460" cy="110" r="2" fill="rgba(255,255,255,0.25)" />
              <circle cx="60" cy="130" r="1.5" fill="rgba(255,255,255,0.3)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
