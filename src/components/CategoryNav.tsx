import Link from "next/link";
import { workCategoryFilters } from "@/lib/constants";

interface CategoryNavProps {
  activeCategory: string | null;
}

export function CategoryNav({ activeCategory }: CategoryNavProps) {
  return (
    <nav className="font-ui flex flex-wrap gap-x-6 gap-y-3 text-xs tracking-[0.22em] sm:text-sm">
      {workCategoryFilters.map((item) => {
        const isActive =
          item.slug === null
            ? !activeCategory || activeCategory === "all"
            : activeCategory === item.slug;
        const href = item.slug ? `/works?category=${item.slug}` : "/works";

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
