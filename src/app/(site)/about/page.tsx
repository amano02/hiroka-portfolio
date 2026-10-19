import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutKeywords, aboutTimeline } from "@/data/about";
import { site } from "@/lib/design";

export const metadata: Metadata = {
  title: "ABOUT",
};

export default function AboutPage() {
  return (
    <div className="page-enter px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="ABOUT" as="h1" className="mb-12" />
        <p className="font-display text-3xl text-text-primary sm:text-4xl">{site.name}</p>
        <p className="font-ui mt-4 whitespace-pre-line text-sm tracking-[0.18em] text-text-muted">
          {site.tagline}
        </p>

        <section className="mt-16 border-t border-black-muted/70 pt-12">
          <h2 className="font-ui text-xs tracking-[0.24em] text-text-muted">TIMELINE</h2>
          <ul className="mt-8 space-y-8">
            {aboutTimeline.map((entry) => (
              <li
                key={entry.period}
                className="grid gap-2 border-b border-black-muted/40 pb-8 last:border-b-0 last:pb-0 sm:grid-cols-[5.5rem_1fr] sm:gap-x-8"
              >
                <p className="font-ui text-xs tracking-[0.2em] text-text-muted">{entry.period}</p>
                <p className="text-base leading-relaxed text-text-secondary">{entry.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 border-t border-black-muted/70 pt-12">
          <h2 className="font-ui text-xs tracking-[0.24em] text-text-muted">KEYWORDS</h2>
          <ul className="font-ui mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm tracking-[0.12em] text-text-secondary">
            {aboutKeywords.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4">
          <ArrowLink href="/works">View Works</ArrowLink>
          <ArrowLink href="/contact">Contact</ArrowLink>
        </div>
      </div>
    </div>
  );
}
