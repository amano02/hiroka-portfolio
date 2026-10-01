import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLink } from "@/components/ArrowLink";
import { SectionHeading } from "@/components/SectionHeading";
import { getWorkBySlug, works } from "@/data/works";

interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) {
    return { title: "Work Not Found" };
  }
  return {
    title: work.title,
    description: work.description,
  };
}

function DetailBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-black-muted/70 py-8 first:border-t-0 first:pt-0">
      <p className="font-ui mb-4 text-xs tracking-[0.22em] text-text-muted">{label}</p>
      <div className="text-base leading-relaxed text-text-secondary">{children}</div>
    </div>
  );
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  const metaLine = [work.subCategory, work.year?.toString(), work.type]
    .filter(Boolean)
    .join(" · ");

  if (work.comingSoon) {
    return (
      <div className="page-enter px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/works?category=art"
            className="font-ui text-xs tracking-[0.2em] text-text-muted hover:text-text-primary"
          >
            ← WORKS
          </Link>
          <SectionHeading title={work.title} as="h1" className="mt-8" />
          <p className="font-ui mt-4 text-sm tracking-[0.16em] text-text-muted">{metaLine}</p>
          <p className="mt-12 text-lg text-text-secondary">Coming Soon — 作品集は準備中です。</p>
          <div className="mt-12">
            <ArrowLink href="/works">Back to Works</ArrowLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-enter px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/works"
          className="font-ui text-xs tracking-[0.2em] text-text-muted hover:text-text-primary"
        >
          ← WORKS
        </Link>

        <header className="mt-8 lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <SectionHeading title={work.title} as="h1" />
            <p className="font-ui mt-5 text-sm tracking-[0.16em] text-text-muted">{metaLine}</p>
          </div>
        </header>

        <div className="relative mt-12 aspect-[16/10] overflow-hidden bg-black-base lg:mt-16">
          <Image
            src={work.image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>

        <div className="mt-16 lg:mt-20">
          <DetailBlock label="OVERVIEW">
            <p>{work.overview ?? work.description}</p>
          </DetailBlock>

          <DetailBlock label="ROLE">
            <p>{work.role ?? "—（準備中）"}</p>
          </DetailBlock>

          <DetailBlock label="TECHNOLOGY">
            {work.technologies && work.technologies.length > 0 ? (
              <ul className="font-ui flex flex-wrap gap-x-4 gap-y-2 text-sm tracking-wide">
                {work.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            ) : (
              <p>—（準備中）</p>
            )}
          </DetailBlock>

          <DetailBlock label="DESCRIPTION">
            <p>{work.description}</p>
          </DetailBlock>

          <DetailBlock label="IMAGES">
            <div className="grid gap-6 sm:grid-cols-2">
              {[1, 2].map((n) => (
                <div
                  key={n}
                  className="flex aspect-[4/3] items-center justify-center border border-black-muted/80 bg-red-darker/50 text-sm text-text-muted"
                >
                  Image placeholder {n}
                </div>
              ))}
            </div>
          </DetailBlock>
        </div>

        <div className="mt-16 border-t border-black-muted/70 pt-10">
          <ArrowLink href="/works">Back to Works</ArrowLink>
        </div>
      </div>
    </div>
  );
}
