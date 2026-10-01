import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "ACTIVITY",
};

const whatIDo = [
  "学生コミュニティの運営",
  "HLAとの連携",
  "イベント / 企画",
  "SNS / Web / 広報",
  "法改正支援に関する活動",
];

export default function ActivityPage() {
  return (
    <div className="page-enter px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="ACTIVITY" as="h1" className="mb-12" />

        <h2 className="font-display text-3xl text-text-primary sm:text-4xl">
          HLA × ZEN University
        </h2>
        <p className="mt-8 text-base leading-relaxed text-text-secondary sm:text-lg">
          いじめ問題について、
          <br />
          「知る・考える・行動する」ための
          <br />
          大学内での活動。
        </p>

        <section className="mt-16 border-t border-black-muted/70 pt-12">
          <h3 className="font-ui text-xs tracking-[0.24em] text-text-muted">ABOUT</h3>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            一般社団法人 Human Love Aid と連携しながら、ZEN大学内で学生がいじめ問題について学び、考え、実際のアクションにつなげる活動。
          </p>
        </section>

        <section className="mt-14 border-t border-black-muted/70 pt-12">
          <h3 className="font-ui text-xs tracking-[0.24em] text-text-muted">WHAT I DO</h3>
          <ul className="mt-6 space-y-3 text-text-secondary">
            {whatIDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <div className="mt-16">
          <ArrowLink href="/works/hla-website">HLA Website Project</ArrowLink>
        </div>
      </div>
    </div>
  );
}
