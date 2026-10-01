import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/design";

export const metadata: Metadata = {
  title: "ABOUT",
};

const currently = [
  "Webサイト制作 / 運用",
  "SNS運用 / 動画制作",
  "Webアプリ / DX",
  "AIを使った制作・実験",
  "3D / Art",
];

const interests = [
  "Web",
  "Technology",
  "AI",
  "Art",
  "Design",
  "Culture",
  "People",
  "Ideas",
];

export default function AboutPage() {
  return (
    <div className="page-enter px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="ABOUT" as="h1" className="mb-12" />
        <p className="font-display text-3xl text-text-primary sm:text-4xl">{site.name}</p>
        <p className="font-ui mt-4 text-sm tracking-[0.18em] text-text-muted">
          Web / DX / SNS / Art / 3D / AI
        </p>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-text-secondary sm:text-lg">
          <p>興味を持ったことを、実際につくりながら学んでいます。</p>
          <p>
            現在はWeb制作、SNS運用、アプリ開発、AI活用などを中心に、仕事・学習・創作を横断しながら活動しています。
          </p>
        </div>

        <section className="mt-16 border-t border-black-muted/70 pt-12">
          <h2 className="font-ui text-xs tracking-[0.24em] text-text-muted">CURRENTLY</h2>
          <ul className="mt-6 space-y-3 text-text-secondary">
            {currently.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-14 border-t border-black-muted/70 pt-12">
          <h2 className="font-ui text-xs tracking-[0.24em] text-text-muted">INTERESTS</h2>
          <ul className="font-ui mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm tracking-[0.12em] text-text-secondary">
            {interests.map((item) => (
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
