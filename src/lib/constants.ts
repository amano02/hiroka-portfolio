export const navLinks = [
  { href: "/works", label: "WORKS" },
  { href: "/art", label: "ART" },
  { href: "/activity", label: "ACTIVITY" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
] as const;

export const heroCategoryLinks = [
  { label: "Web", href: "/works?category=web" },
  { label: "DX", href: "/works?category=dx" },
  { label: "SNS", href: "/works?category=sns" },
  { label: "Art", href: "/art" },
  { label: "3D", href: "/works?category=3d" },
  { label: "AI", href: "/works?category=ai" },
] as const;

/** @deprecated Use heroCategoryLinks — kept for type compatibility */
export const heroCategories = [
  { label: "Web", slug: "web" },
  { label: "DX", slug: "dx" },
  { label: "SNS", slug: "sns" },
  { label: "3D", slug: "3d" },
  { label: "AI", slug: "ai" },
] as const;

export const workCategoryFilters = [
  { label: "ALL", slug: null },
  { label: "WEB", slug: "web" },
  { label: "DX", slug: "dx" },
  { label: "SNS", slug: "sns" },
  { label: "3D", slug: "3d" },
  { label: "AI", slug: "ai" },
] as const;

export const socialLinks = {
  email: "amanohiroka0227@gmail.com",
  github: "https://github.com/amano02",
  instagram: "https://www.instagram.com/hiroka_227/",
} as const;

export const vroidHub = {
  profileUrl: "https://hub.vroid.com/users/124741810",
} as const;

export type WorkCategorySlug = (typeof heroCategories)[number]["slug"];
