import type { Metadata } from "next";
import { ContactLinks } from "@/components/ContactLinks";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "CONTACT",
};

export default function ContactPage() {
  return (
    <div className="page-enter px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="CONTACT" as="h1" className="mb-6" />
        <SectionHeading title="LET&apos;S CONNECT." className="mb-10 text-[clamp(2rem,6vw,3.5rem)]" />
        <p className="max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          仕事、制作、活動についてのご相談や、一緒に何かできそうなことがあればお気軽にご連絡ください。
        </p>
        <div className="mt-12">
          <ContactLinks />
        </div>
      </div>
    </div>
  );
}
