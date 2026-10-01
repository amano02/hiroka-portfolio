export type ArtworkMediaType = "image" | "video" | "audio";

/** フィルター用タグ slug（必要に応じて artworks / artTagFilters に追加） */
export type ArtworkTag = string;

export interface Artwork {
  slug: string;
  title: string;
  year?: number | string;
  mediaType: ArtworkMediaType;
  media: string;
  thumbnail?: string;
  tags: ArtworkTag[];
  tools?: string[];
  description?: string;
  featured?: boolean;
  /** true のときメディア未配置でも一覧に表示（プレースホルダー） */
  active?: boolean;
}
