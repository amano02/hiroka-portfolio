import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLink } from "@/components/ArrowLink";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { SectionHeading } from "@/components/SectionHeading";
import { getEmailAddress, getMailtoHref } from "@/lib/email";

export const metadata: Metadata = {
  title: "Email",
  description: "Hiroka Amanoへのメール連絡ページ",
};

export default function EmailPage() {
  const email = getEmailAddress();

  return (
    <div className="page-enter bg-black-base px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/contact"
          className="font-ui text-xs tracking-[0.2em] text-text-muted hover:text-text-primary"
        >
          ← CONTACT
        </Link>

        <header className="mt-8 max-w-2xl">
          <SectionHeading title="EMAIL" as="h1" />
          <p className="font-ui mt-4 text-xs tracking-[0.24em] text-text-muted sm:text-sm">
            GET IN TOUCH.
          </p>
          <p className="mt-10 text-base leading-relaxed text-text-secondary sm:text-lg">
            メールでのご連絡はこちらから。
            <br />
            仕事、制作、活動についてのご相談など、
            <br />
            お気軽にご連絡ください。
          </p>
        </header>

        <div className="mt-14 border-t border-black-muted/70 pt-12 sm:mt-16 sm:pt-14">
          <p className="font-display break-all text-[clamp(1.35rem,5vw,2.25rem)] leading-snug tracking-tight text-text-primary">
            {email}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <ArrowLink href={getMailtoHref()} external>
              Send Email
            </ArrowLink>
            <CopyEmailButton email={email} />
          </div>
        </div>
      </div>
    </div>
  );
}
