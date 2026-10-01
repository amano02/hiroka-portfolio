import type { Work } from "@/types/work";

export function getWorkGalleryImages(work: Work): string[] {
  if (work.galleryImages && work.galleryImages.length > 0) {
    return work.galleryImages;
  }
  return [work.image];
}
