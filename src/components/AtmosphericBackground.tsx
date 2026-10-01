type Variant = "hero" | "subtle";

interface AtmosphericBackgroundProps {
  variant?: Variant;
}

export function AtmosphericBackground({ variant = "subtle" }: AtmosphericBackgroundProps) {
  const intensity = variant === "hero" ? "opacity-100" : "opacity-90";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${intensity}`}
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 95% 75% at 50% -12%, #75020F 0%, transparent 58%),
            radial-gradient(ellipse 70% 55% at 92% 35%, #51080D 0%, transparent 52%),
            radial-gradient(ellipse 65% 50% at 8% 88%, #2B0307 0%, transparent 48%),
            linear-gradient(165deg, #51080D 0%, #2B0307 62%, #0B0B0D 100%)
          `,
        }}
      />
      <div className="absolute -left-1/4 top-0 h-[55vh] w-[70vw] rounded-full bg-[#75020F]/40 blur-[100px]" />
      <div className="absolute -right-1/4 top-1/3 h-[45vh] w-[60vw] rounded-full bg-[#51080D]/55 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[40vh] w-[50vw] rounded-full bg-[#2B0307]/70 blur-[90px]" />
      <div
        className="absolute inset-0 shadow-[inset_0_-80px_120px_-40px_rgba(11,11,13,0.45)]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(117, 2, 15, 0.45), transparent 55%)",
        }}
      />
    </div>
  );
}
