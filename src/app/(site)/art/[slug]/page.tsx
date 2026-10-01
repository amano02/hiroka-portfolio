import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLink } from "@/components/ArrowLink";
import { ArtworkDetailMedia } from "@/components/ArtworkDetailMedia";
import { SectionHeading } from "@/components/SectionHeading";
import { artworkMediaReady, artworks, getArtworkBySlug } from "@/data/artworks";
import { formatArtworkTagLabel } from "@/lib/art-tags";

interface ArtDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return artworks.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: ArtDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);
  if (!artwork) {
    return { title: "Artwork Not Found" };
  }
  return {
    title: artwork.title,
    description: artwork.description ?? `${artwork.title} — Creative Archive`,
  };
}

export default async function ArtDetailPage({ params }: ArtDetailPageProps) {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);

  if (!artwork) {
    notFound();
  }

  const mediaReady = artworkMediaReady(artwork);

  return (
    <div className="page-enter bg-black-base px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/art"
          className="font-ui text-xs tracking-[0.2em] text-text-muted hover:text-text-primary"
        >
          ← ART
        </Link>

        <header className="mt-8">
          <SectionHeading title={artwork.title} as="h1" />
          {artwork.year ? (
            <p className="font-ui mt-5 text-sm tracking-[0.16em] text-text-muted">{artwork.year}</p>
          ) : null}
        </header>

        <div className="relative mt-12 aspect-[16/10] overflow-hidden bg-black-muted/30 lg:mt-16">
          <ArtworkDetailMedia artwork={artwork} />
        </div>

        <div className="mt-16 space-y-10 border-t border-black-muted/70 pt-10">
          <div>
            <p className="font-ui mb-3 text-xs tracking-[0.22em] text-text-muted">MEDIA</p>
            <p className="font-ui text-sm uppercase tracking-[0.16em] text-text-secondary">
              {artwork.mediaType}
              {!mediaReady ? (
                <span className="ml-2 text-text-muted">— file pending</span>
              ) : null}
            </p>
          </div>

          <div>
            <p className="font-ui mb-3 text-xs tracking-[0.22em] text-text-muted">TAGS</p>
            <ul className="font-ui flex flex-wrap gap-x-4 gap-y-2 text-sm tracking-[0.14em] text-text-secondary">
              {artwork.tags.map((tag) => (
                <li key={tag}>{formatArtworkTagLabel(tag)}</li>
              ))}
            </ul>
          </div>

          {artwork.tools && artwork.tools.length > 0 ? (
            <div>
              <p className="font-ui mb-3 text-xs tracking-[0.22em] text-text-muted">TOOLS</p>
              <ul className="font-ui flex flex-wrap gap-x-4 gap-y-2 text-sm tracking-wide text-text-secondary">
                {artwork.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {artwork.description ? (
            <div>
              <p className="font-ui mb-3 text-xs tracking-[0.22em] text-text-muted">DESCRIPTION</p>
              <p className="text-base leading-relaxed text-text-secondary">{artwork.description}</p>
            </div>
          ) : null}
        </div>

        <div className="mt-16 border-t border-black-muted/70 pt-10">
          <ArrowLink href="/art">Back to Art</ArrowLink>
        </div>
      </div>
    </div>
  );
}
