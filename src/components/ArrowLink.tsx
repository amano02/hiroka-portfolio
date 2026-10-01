import Link from "next/link";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function ArrowLink({ href, children, className = "", external }: ArrowLinkProps) {
  const classes = `font-ui group inline-flex items-center gap-2 text-sm tracking-[0.18em] text-text-secondary transition-colors duration-300 hover:text-text-primary ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        <span>{children}</span>
        <span
          className="motion-safe-transition translate-x-0 transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden
        >
          ↗
        </span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      <span>{children}</span>
      <span
        className="motion-safe-transition translate-x-0 opacity-70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
        aria-hidden
      >
        ↗
      </span>
    </Link>
  );
}
