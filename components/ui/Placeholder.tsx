type Variant = "portrait" | "landscape" | "square" | "tall" | "wide" | "free";

const ratios: Record<Variant, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[16/9]",
  square: "aspect-square",
  tall: "aspect-[9/16]",
  wide: "aspect-[21/9]",
  free: "",
};

export default function Placeholder({
  variant = "portrait",
  caption,
  tone = "light",
  className = "",
}: {
  variant?: Variant;
  caption?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <div
      role="img"
      aria-label={caption ?? "image placeholder"}
      className={`relative overflow-hidden ${ratios[variant]} ${className}`}
      style={{
        background: isDark
          ? "linear-gradient(135deg, #1A1918 0%, #2A2826 60%, #3A3530 100%)"
          : "linear-gradient(135deg, #EDE6D9 0%, #D9CFBC 55%, #B5A687 100%)",
      }}
    >
      {/* hairline gold frame */}
      <div className="pointer-events-none absolute inset-3 border border-gold/40" />
      {/* tiny diagonal corner ticks */}
      <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-gold" />
      <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-gold" />
      <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-gold" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold" />
      {caption ? (
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <span
            className={`font-body text-[10px] uppercase tracking-eyebrow ${isDark ? "text-cream/60" : "text-charcoal/55"}`}
          >
            {caption}
          </span>
        </div>
      ) : null}
    </div>
  );
}
