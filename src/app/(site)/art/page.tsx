import type { Metadata } from "next";
import { ArtTagNav } from "@/components/ArtTagNav";
import { ArtworkCard } from "@/components/ArtworkCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getArtworksByTag } from "@/data/artworks";

export const metadata: Metadata = {
  title: "ART",
  description:
    "絵、映像、音、CG。媒体を限定せず、これまで作ってきたもの。An archive of visual, moving, and sound-based experiments.",
};

interface ArtPageProps {
  searchParams: Promise<{ tag?: string }>;
}

export default async function ArtPage({ searchParams }: ArtPageProps) {
  const params = await searchParams;
  const tag = params.tag ?? null;
  const filtered = getArtworksByTag(tag);

  return (
    <div className="page-enter bg-black-base px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 max-w-3xl sm:mb-16">
          <SectionHeading title="ART" as="h1" />
          <p className="font-ui mt-4 text-xs tracking-[0.24em] text-text-muted sm:text-sm">
            CREATIVE ARCHIVE
          </p>
          <p className="mt-8 text-base leading-relaxed text-text-secondary sm:text-lg">
            絵、映像、音、CG。
            <br />
            媒体を限定せず、これまで作ってきたもの。
          </p>
          <p className="font-ui mt-4 text-sm leading-relaxed tracking-wide text-text-muted">
            An archive of visual, moving, and sound-based experiments.
          </p>
        </header>

        <ArtTagNav activeTag={tag} />

        <div className="mt-14 grid grid-cols-1 gap-12 sm:gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-16 lg:mt-20 lg:gap-x-14">
          {filtered.map((artwork) => (
            <ArtworkCard key={artwork.slug} artwork={artwork} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-text-muted">該当する作品はありません。</p>
        ) : null}
      </div>
    </div>
  );
}
