/** ART ページ上部の Skill Tag Filter */
export const artTagFilters = [
  { label: "ALL", slug: null },
  { label: "ILLUSTRATION", slug: "illustration" },
  { label: "ANIMATION", slug: "animation" },
  { label: "VIDEO EDITING", slug: "video-editing" },
  { label: "MOTION", slug: "motion" },
  { label: "CG", slug: "cg" },
  { label: "3D", slug: "3d" },
  { label: "VOCAL", slug: "vocal" },
  { label: "MUSIC", slug: "music" },
  { label: "GRAPHIC", slug: "graphic" },
  { label: "PHOTOGRAPHY", slug: "photography" },
] as const;

const tagLabelMap: Record<string, string> = {
  illustration: "ILLUSTRATION",
  animation: "ANIMATION",
  "video-editing": "VIDEO EDITING",
  motion: "MOTION",
  cg: "CG",
  "3d": "3D",
  vocal: "VOCAL",
  music: "MUSIC",
  graphic: "GRAPHIC",
  photography: "PHOTOGRAPHY",
  lighting: "LIGHTING",
  rendering: "RENDERING",
  "material-study": "MATERIAL STUDY",
  "visual-design": "VISUAL DESIGN",
};

export function formatArtworkTagLabel(tag: string): string {
  if (tagLabelMap[tag]) {
    return tagLabelMap[tag];
  }
  return tag.replace(/-/g, " ").toUpperCase();
}
