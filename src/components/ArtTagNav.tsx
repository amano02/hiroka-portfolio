import Link from "next/link";
import { artTagFilters } from "@/lib/art-tags";

interface ArtTagNavProps {
  activeTag: string | null;
}

export function ArtTagNav({ activeTag }: ArtTagNavProps) {
  return (
    <nav className="font-ui flex flex-wrap gap-x-5 gap-y-3 text-[0.6875rem] tracking-[0.2em] sm:gap-x-6 sm:text-xs">
      {artTagFilters.map((item) => {
        const isActive =
          item.slug === null ? !activeTag || activeTag === "all" : activeTag === item.slug;
        const href = item.slug ? `/art?tag=${item.slug}` : "/art";

        return (
          <Link
            key={item.label}
            href={href}
            className={`motion-safe-transition border-b pb-1 transition-colors duration-300 ${
              isActive
                ? "border-text-primary text-text-primary"
                : "border-transparent text-text-muted hover:border-text-muted hover:text-text-secondary"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
