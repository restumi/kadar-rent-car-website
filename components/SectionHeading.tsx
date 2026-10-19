interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2
        className="text-3xl font-bold tracking-tight sm:text-4xl"
        style={{ color: "#172B4D" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-3 text-lg leading-relaxed"
          style={{ color: "#64748B" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
