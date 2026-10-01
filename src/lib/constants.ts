export const navLinks = [
  { href: "/works", label: "WORKS" },
  { href: "/activity", label: "ACTIVITY" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
] as const;

export const heroCategories = [
  { label: "Web", slug: "web" },
  { label: "DX", slug: "dx" },
  { label: "SNS", slug: "sns" },
  { label: "Art", slug: "art" },
  { label: "3D", slug: "3d" },
  { label: "AI", slug: "ai" },
] as const;

export const workCategoryFilters = [
  { label: "ALL", slug: null },
  { label: "WEB", slug: "web" },
  { label: "DX", slug: "dx" },
  { label: "SNS", slug: "sns" },
  { label: "ART", slug: "art" },
  { label: "3D", slug: "3d" },
  { label: "AI", slug: "ai" },
] as const;

export const socialLinks = {
  email: "mailto:hello@example.com",
  github: "https://github.com/",
  instagram: "https://instagram.com/",
} as const;

export type WorkCategorySlug = (typeof heroCategories)[number]["slug"];
