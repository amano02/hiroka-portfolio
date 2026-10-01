import type { Artwork } from "@/types/artwork";
import { publicAssetExists } from "@/lib/media";

export const artworks: Artwork[] = [
  {
    slug: "piano-cg",
    title: "Piano",
    mediaType: "image",
    media: "/art/piano-cg.jpg",
    tags: ["cg", "3d", "lighting", "rendering"],
    active: true,
  },
  {
    slug: "water-cat",
    title: "Water Cat",
    mediaType: "image",
    media: "/art/water-cat.jpg",
    tags: ["cg", "3d", "material-study"],
    active: true,
  },
  {
    slug: "logo-motion",
    title: "Logo Motion",
    mediaType: "video",
    media: "/art/ロゴモーション.mp4",
    tags: ["motion", "video-editing", "graphic"],
    active: true,
  },
  {
    slug: "imawanokiwa",
    title: "IMAWANOKIWA",
    mediaType: "video",
    media: "/art/IMAWANOKIWA.mp4",
    tags: ["animation", "illustration", "video-editing"],
    active: true,
  },
  {
    slug: "hana-ga-ochita-node",
    title: "花が落ちたので",
    mediaType: "video",
    media: "/art/花が落ちたので.mp4",
    tags: ["animation", "illustration", "video-editing"],
    active: true,
  },
  {
    slug: "koninron",
    title: "婚姻論",
    mediaType: "video",
    media: "/art/婚姻論.mp4",
    tags: ["animation", "illustration", "video-editing"],
    active: true,
  },
  {
    slug: "loading-visual",
    title: "Loading Visual",
    mediaType: "image",
    media: "/art/loading-visual.jpg",
    tags: ["graphic", "photography", "visual-design"],
    active: true,
  },
];

export function getArtworks(): Artwork[] {
  return artworks.filter((item) => item.active !== false);
}

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return getArtworks().find((item) => item.slug === slug);
}

export function getArtworksByTag(tag: string | null | undefined): Artwork[] {
  const list = getArtworks();
  if (!tag || tag === "all") {
    return list;
  }
  return list.filter((item) => item.tags.includes(tag));
}

export type ArtworkDisplayMedia =
  | { type: "image"; src: string }
  | { type: "video"; src: string }
  | { type: "audio"; src: string };

/** 一覧：thumbnail → image media → video/audio media（サムネ未設定時も動画を表示） */
export function artworkListMedia(artwork: Artwork): ArtworkDisplayMedia | null {
  if (artwork.thumbnail && publicAssetExists(artwork.thumbnail)) {
    return { type: "image", src: artwork.thumbnail };
  }
  if (artwork.mediaType === "image" && publicAssetExists(artwork.media)) {
    return { type: "image", src: artwork.media };
  }
  if (artwork.mediaType === "video" && publicAssetExists(artwork.media)) {
    return { type: "video", src: artwork.media };
  }
  if (artwork.mediaType === "audio" && publicAssetExists(artwork.media)) {
    return { type: "audio", src: artwork.media };
  }
  return null;
}

/** 詳細：動画・音声は本体ファイルを優先 */
export function artworkDetailMedia(artwork: Artwork): ArtworkDisplayMedia | null {
  if (artwork.mediaType === "video" && publicAssetExists(artwork.media)) {
    return { type: "video", src: artwork.media };
  }
  if (artwork.mediaType === "audio" && publicAssetExists(artwork.media)) {
    return { type: "audio", src: artwork.media };
  }
  if (artwork.thumbnail && publicAssetExists(artwork.thumbnail)) {
    return { type: "image", src: artwork.thumbnail };
  }
  if (artwork.mediaType === "image" && publicAssetExists(artwork.media)) {
    return { type: "image", src: artwork.media };
  }
  return null;
}

/** @deprecated artworkListMedia / artworkDetailMedia を使用 */
export function artworkPreviewSource(artwork: Artwork): string | null {
  const display = artworkListMedia(artwork);
  return display?.type === "image" ? display.src : null;
}

export function artworkMediaReady(artwork: Artwork): boolean {
  if (artwork.mediaType === "image") {
    return publicAssetExists(artwork.media);
  }
  if (artwork.mediaType === "video") {
    return (
      (artwork.thumbnail && publicAssetExists(artwork.thumbnail)) ||
      publicAssetExists(artwork.media)
    );
  }
  if (artwork.mediaType === "audio") {
    return publicAssetExists(artwork.media);
  }
  return false;
}
