import Link from "next/link";
import { navLinks } from "@/lib/constants";
import { site } from "@/lib/design";

export function Footer() {
  return (
    <footer className="relative border-t border-black-muted/80 bg-black-base px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <p className="font-display text-2xl tracking-wide text-text-primary sm:text-3xl">
          {site.name}
        </p>
        <nav className="font-ui flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-[0.2em] sm:text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="motion-safe-transition text-text-muted transition-colors duration-300 hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="font-ui mx-auto mt-12 max-w-7xl text-xs tracking-[0.12em] text-text-muted">
        {site.copyright}
      </p>
    </footer>
  );
}
