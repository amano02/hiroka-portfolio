import Link from "next/link";
import { ArrowLink } from "@/components/ArrowLink";
import { AtmosphericBackground } from "@/components/AtmosphericBackground";
import { ContactLinks } from "@/components/ContactLinks";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkCard } from "@/components/WorkCard";
import { heroCategoryLinks } from "@/lib/constants";
import { getFeaturedWorks } from "@/data/works";
import { site } from "@/lib/design";

export default function HomePage() {
  const featuredWorks = getFeaturedWorks();

  return (
    <div className="page-enter">
      <section className="relative flex min-h-[80svh] flex-col justify-start overflow-hidden bg-red-deep px-5 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-10 lg:px-12 lg:pt-12">
        <AtmosphericBackground variant="hero" />
        <div className="relative mx-auto w-full max-w-7xl">
          <h1 className="font-display text-[clamp(2.75rem,11vw,6.25rem)] leading-[0.92] tracking-tight text-text-primary">
            {site.name}
          </h1>
          <p className="mt-10 max-w-md whitespace-pre-line text-base leading-relaxed text-text-secondary sm:mt-12 sm:text-lg">
            {site.tagline}
          </p>
          <ul className="font-ui mt-12 flex flex-wrap gap-x-5 gap-y-3 text-sm tracking-[0.14em] sm:mt-14 sm:gap-x-6">
            {heroCategoryLinks.map((cat) => (
              <li key={cat.href}>
                <Link
                  href={cat.href}
                  className="motion-safe-transition inline-flex items-center gap-1 text-text-muted transition-colors duration-300 hover:text-text-primary"
                >
                  {cat.label}
                  <span aria-hidden>↗</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 sm:mt-16">
            <ArrowLink href="/works">All Works</ArrowLink>
            <ArrowLink href="/about">About</ArrowLink>
          </div>
        </div>
      </section>

      <section className="bg-black-base px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="SELECTED WORKS" className="mb-14 sm:mb-20" />
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-20 lg:gap-x-14">
            {featuredWorks.map((work) => (
              <WorkCard key={work.slug} work={work} />
            ))}
          </div>
          <div className="mt-16 sm:mt-20">
            <ArrowLink href="/works">View All Works</ArrowLink>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-red-deep px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <AtmosphericBackground />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading title="ACTIVITY" className="mb-8" />
          <h3 className="font-display text-3xl text-text-primary sm:text-4xl">
            HLA × ZEN University
          </h3>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            いじめ問題について
            <br />
            「知る・考える・行動する」ための
            <br />
            大学内での活動。
          </p>
          <div className="mt-10">
            <ArrowLink href="/activity">View Activity</ArrowLink>
          </div>
        </div>
      </section>

      <section className="bg-black-base px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="LET&apos;S CONNECT." className="mb-6" />
          <p className="max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            仕事、制作、活動についてのご相談や、一緒に何かできそうなことがあればお気軽にご連絡ください。
          </p>
          <div className="mt-10">
            <ContactLinks />
          </div>
        </div>
      </section>
    </div>
  );
}
