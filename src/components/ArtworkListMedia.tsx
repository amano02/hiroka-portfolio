import Image from "next/image";
import { ArtMediaPlaceholder } from "@/components/ArtMediaPlaceholder";
import { ArtworkVideo } from "@/components/ArtworkVideo";
import { artworkListMedia } from "@/data/artworks";
import type { Artwork } from "@/types/artwork";

interface ArtworkListMediaProps {
  artwork: Artwork;
}

export function ArtworkListMedia({ artwork }: ArtworkListMediaProps) {
  const display = artworkListMedia(artwork);

  if (!display) {
    return <ArtMediaPlaceholder label="MEDIA SOON" className="absolute inset-0 min-h-0" />;
  }

  if (display.type === "video") {
    return (
      <ArtworkVideo
        src={display.src}
        showPosterFrame
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    );
  }

  return (
    <Image
      src={display.src}
      alt=""
      fill
      className="object-cover object-center"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}
