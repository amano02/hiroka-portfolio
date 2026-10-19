import Link from "next/link";
import { socialLinks } from "@/lib/constants";

interface ContactLinksProps {
  layout?: "stack" | "row";
  variant?: "full" | "social";
}

export function ContactLinks({ layout = "stack", variant = "full" }: ContactLinksProps) {
  const allItems: Array<
    | { label: string; href: string; external: true }
    | { label: string; href: string; external: false }
  > = [
    { label: "Email", href: "/email", external: false },
    { label: "GitHub", href: socialLinks.github, external: true },
    { label: "Instagram", href: socialLinks.instagram, external: true },
  ];
  const items =
    variant === "social"
      ? allItems.filter((item) => item.label !== "Email")
      : allItems;

  return (
    <ul
      className={
        layout === "row"
          ? "font-ui flex flex-wrap gap-x-8 gap-y-3 text-sm tracking-[0.14em]"
          : "font-ui space-y-4 text-sm tracking-[0.14em]"
      }
    >
      {items.map((item) => (
        <li key={item.label}>
          {item.external ? (
            <a
              href={item.href}
              className="motion-safe-transition text-text-secondary transition-colors duration-300 hover:text-text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label} ↗
            </a>
          ) : (
            <Link
              href={item.href}
              className="motion-safe-transition text-text-secondary transition-colors duration-300 hover:text-text-primary"
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
