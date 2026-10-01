import type { WorkCategorySlug } from "@/lib/constants";

export type WorkCategory = WorkCategorySlug;

export interface Work {
  slug: string;
  title: string;
  category: WorkCategory;
  subCategory: string;
  year?: number;
  type: string;
  description: string;
  image: string;
  /** カード・ヒーロー等で横並び表示する追加画像（image と合わせて利用可） */
  galleryImages?: string[];
  featured: boolean;
  technologies?: string[];
  overview?: string;
  role?: string;
  comingSoon?: boolean;
  externalUrl?: string;
  /** コレクション型プロジェクト（例: 3D Character Works）の works slug */
  characterCollection?: boolean;
  /** 将来: この作品で使用した Character の slug（characters.ts） */
  characterSlugs?: string[];
}
