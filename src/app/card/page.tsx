import type { Metadata } from "next";
import Link from "next/link";
import { AtmosphericBackground } from "@/components/AtmosphericBackground";
import { ContactLinks } from "@/components/ContactLinks";
import { site } from "@/lib/design";

export const metadata: Metadata = {
  title: "Digital Card",
  description: "NFC digital business card — HIROKA AMANO",
};

const cardLinks = [
  { href: "/", label: "Portfolio" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function CardPage() {
  return (
    <div className="page-enter relative min-h-[100dvh] overflow-hidden bg-red-deep px-6 pb-10 pt-14 sm:px-8 sm:pt-16">
      <AtmosphericBackground variant="hero" />
      <div className="relative mx-auto flex max-w-md flex-col">
        <div>
          <p className="font-display text-[clamp(2rem,9vw,3rem)] leading-tight text-text-primary">
            {site.name}
          </p>
          <p className="mt-8 whitespace-pre-line text-base leading-relaxed text-text-secondary">
            {site.tagline}
          </p>
          <p className="font-ui mt-10 text-sm tracking-[0.12em] text-text-muted">
            Web / DX / SNS / Art / 3D / AI
          </p>
        </div>

        <nav className="mt-12 space-y-4 sm:mt-14">
          {cardLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-ui flex items-center justify-between border-b border-black-muted/60 py-3 text-sm tracking-[0.18em] text-text-secondary transition-colors duration-300 hover:text-text-primary"
            >
              <span>{link.label}</span>
              <span aria-hidden>↗</span>
            </Link>
          ))}
        </nav>

        <div className="mt-12 sm:mt-14">
          <ContactLinks layout="row" variant="social" />
        </div>
      </div>
    </div>
  );
}
