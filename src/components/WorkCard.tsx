import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/ArrowLink";
import { CharacterCollectionPreview } from "@/components/CharacterCollectionPreview";
import { WorkGalleryPreview } from "@/components/WorkGalleryPreview";
import { getWorkGalleryImages } from "@/lib/work-images";
import type { Work } from "@/types/work";

interface WorkCardProps {
  work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
  const detailHref = `/works/${work.slug}`;
  const meta = [work.subCategory, work.year?.toString()].filter(Boolean).join(" · ");

  return (
    <article className="group block">
      <Link href={detailHref} className="block">
        <div className="relative mb-6 aspect-[3/2] overflow-hidden shadow-[0_28px_90px_-32px_rgba(0,0,0,0.75)] sm:mb-8">
          {work.characterCollection ? (
            <CharacterCollectionPreview
              className="absolute inset-0 overflow-hidden bg-black-base"
              imageClassName="motion-safe-transition object-cover object-top transition-transform duration-300 group-hover:scale-[1.015]"
            />
          ) : getWorkGalleryImages(work).length > 1 ? (
            <WorkGalleryPreview
              images={getWorkGalleryImages(work)}
              className="absolute inset-0 overflow-hidden bg-black-base"
              imageClassName="motion-safe-transition object-cover object-center transition-transform duration-300 group-hover:scale-[1.015]"
              sizes="(max-width: 768px) 33vw, 180px"
            />
          ) : (
            <Image
              src={work.image}
              alt=""
              fill
              className="motion-safe-transition object-cover transition-transform duration-300 group-hover:scale-[1.015]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>
      </Link>
      <div className="font-ui flex items-start justify-between gap-4 text-[0.6875rem] tracking-[0.18em] sm:text-xs">
        <div>
          <Link href={detailHref} className="block">
            <h3 className="font-display motion-safe-transition mb-2.5 text-[clamp(1.75rem,4vw,2.25rem)] leading-tight tracking-normal text-text-primary transition-colors duration-300 hover:text-text-secondary">
              {work.title}
            </h3>
          </Link>
          <p className="text-text-muted">{meta}</p>
          {work.externalUrl ? (
            <ArrowLink
              href={work.externalUrl}
              external
              className="mt-4 text-[0.6875rem] tracking-[0.18em] sm:text-xs"
            >
              Live Site
            </ArrowLink>
          ) : null}
        </div>
        <span
          className="motion-safe-transition mt-1 shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        >
          ↗
        </span>
      </div>
    </article>
  );
}
