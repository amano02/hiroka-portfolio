import { socialLinks } from "@/lib/constants";

interface ContactLinksProps {
  layout?: "stack" | "row";
  variant?: "full" | "social";
}

export function ContactLinks({ layout = "stack", variant = "full" }: ContactLinksProps) {
  const allItems = [
    { label: "Email", href: socialLinks.email },
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
          <a
            href={item.href}
            className="motion-safe-transition text-text-secondary transition-colors duration-300 hover:text-text-primary"
            {...(item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {item.label}
            {item.external ? " ↗" : ""}
          </a>
        </li>
      ))}
    </ul>
  );
}
