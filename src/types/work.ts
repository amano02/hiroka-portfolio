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
  featured: boolean;
  technologies?: string[];
  overview?: string;
  role?: string;
  comingSoon?: boolean;
}
