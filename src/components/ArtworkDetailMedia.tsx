import Image from "next/image";
import { ArtMediaPlaceholder } from "@/components/ArtMediaPlaceholder";
import { ArtworkVideo } from "@/components/ArtworkVideo";
import { artworkDetailMedia } from "@/data/artworks";
import type { Artwork } from "@/types/artwork";

interface ArtworkDetailMediaProps {
  artwork: Artwork;
}

export function ArtworkDetailMedia({ artwork }: ArtworkDetailMediaProps) {
  const display = artworkDetailMedia(artwork);

  if (!display) {
    return <ArtMediaPlaceholder label="MEDIA SOON" className="absolute inset-0 min-h-0" />;
  }

  if (display.type === "video") {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black-base">
        <ArtworkVideo
          src={display.src}
          preload="metadata"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    );
  }

  if (display.type === "audio") {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <audio src={display.src} controls preload="metadata" className="w-full max-w-md" />
      </div>
    );
  }

  return (
    <Image
      src={display.src}
      alt=""
      fill
      className="object-contain object-center"
      priority
      sizes="(max-width: 1024px) 100vw, 896px"
    />
  );
}
