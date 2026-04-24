export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
        <span className="text-gradient-gold">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
      <div className={`gold-divider mt-6 w-24 ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
