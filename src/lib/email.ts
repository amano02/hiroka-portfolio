import { socialLinks } from "@/lib/constants";

export function getEmailAddress(): string {
  return socialLinks.email.replace(/^mailto:/i, "").trim();
}

export function getMailtoHref(): string {
  return `mailto:${getEmailAddress()}`;
}
