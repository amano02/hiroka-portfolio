"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/constants";
import { site } from "@/lib/design";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black-muted/60 bg-black-base/92 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:h-16 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-display text-lg tracking-wide text-text-primary sm:text-xl"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="font-ui hidden items-center gap-8 text-xs tracking-[0.22em] md:flex md:text-sm">
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

        <button
          type="button"
          className="font-ui text-xs tracking-[0.28em] text-text-primary md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="font-ui border-t border-black-muted/60 px-5 py-6 md:hidden"
        >
          <ul className="space-y-5 text-sm tracking-[0.22em]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-1 text-text-secondary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
