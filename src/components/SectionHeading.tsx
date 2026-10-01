interface SectionHeadingProps {
  title: string;
  className?: string;
  as?: "h1" | "h2";
}

export function SectionHeading({ title, className = "", as = "h2" }: SectionHeadingProps) {
  const Tag = as;
  return (
    <Tag
      className={`font-display text-[clamp(2.5rem,8vw,5rem)] leading-[0.95] tracking-tight text-text-primary ${className}`}
    >
      {title}
    </Tag>
  );
}
