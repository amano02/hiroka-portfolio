import Link from "next/link";
import { ArtworkListMedia } from "@/components/ArtworkListMedia";
import { artworkListMedia } from "@/data/artworks";
import { formatArtworkTagLabel } from "@/lib/art-tags";
import type { Artwork } from "@/types/artwork";

interface ArtworkCardProps {
  artwork: Artwork;
}

export function ArtworkCard({ artwork }: ArtworkCardProps) {
  const href = `/art/${artwork.slug}`;
  const display = artworkListMedia(artwork);
  const isVideo = display?.type === "video";

  return (
    <article className="group">
      <div className="relative aspect-[4/3] overflow-hidden bg-black-base">
        <ArtworkListMedia artwork={artwork} />
        {isVideo ? (
          <span className="font-ui pointer-events-none absolute top-3 right-3 border border-black-muted/80 bg-black-base/80 px-2 py-1 text-[0.625rem] tracking-[0.22em] text-text-muted">
            VIDEO
          </span>
        ) : null}
      </div>
      <Link href={href} className="mt-5 block border-t border-black-muted/60 pt-5">
        <h2 className="font-display text-[clamp(1.5rem,3.5vw,2rem)] leading-tight text-text-primary transition-colors duration-300 group-hover:text-text-secondary">
          {artwork.title}
        </h2>
        <ul className="font-ui mt-3 flex flex-wrap gap-x-3 gap-y-2 text-[0.625rem] tracking-[0.18em] text-text-muted sm:text-[0.6875rem]">
          {artwork.tags.map((tag) => (
            <li key={tag}>{formatArtworkTagLabel(tag)}</li>
          ))}
        </ul>
      </Link>
    </article>
  );
}
