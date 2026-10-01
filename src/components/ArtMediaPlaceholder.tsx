interface ArtMediaPlaceholderProps {
  label?: string;
  className?: string;
}

export function ArtMediaPlaceholder({
  label = "PREVIEW",
  className = "",
}: ArtMediaPlaceholderProps) {
  return (
    <div
      className={`flex h-full min-h-[12rem] w-full flex-col items-center justify-center border border-black-muted/70 bg-red-darker/25 ${className}`}
      aria-hidden
    >
      <span className="font-ui text-[0.625rem] tracking-[0.28em] text-text-muted">{label}</span>
    </div>
  );
}
