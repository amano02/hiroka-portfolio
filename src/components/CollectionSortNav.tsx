import Link from "next/link";
import {
  type CollectionSort,
  collectionSortOptions,
} from "@/lib/collection-sort";

interface CollectionSortNavProps {
  activeSort: CollectionSort;
  buildHref: (sort: CollectionSort) => string;
}

export function CollectionSortNav({ activeSort, buildHref }: CollectionSortNavProps) {
  return (
    <div className="mt-8 border-t border-black-muted/50 pt-8">
      <p className="font-ui mb-4 text-[0.625rem] tracking-[0.24em] text-text-muted sm:text-xs">
        SORT
      </p>
      <nav className="font-ui flex flex-wrap gap-x-5 gap-y-3 text-[0.6875rem] tracking-[0.18em] sm:gap-x-6 sm:text-xs">
        {collectionSortOptions.map((option) => {
          const isActive = activeSort === option.value;
          return (
            <Link
              key={option.value}
              href={buildHref(option.value)}
              className={`motion-safe-transition border-b pb-1 transition-colors duration-300 ${
                isActive
                  ? "border-text-primary text-text-primary"
                  : "border-transparent text-text-muted hover:border-text-muted hover:text-text-secondary"
              }`}
            >
              {option.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
