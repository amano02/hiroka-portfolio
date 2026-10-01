import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CategoryNav } from "@/components/CategoryNav";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkCard } from "@/components/WorkCard";
import { getWorksByCategory } from "@/data/works";

export const metadata: Metadata = {
  title: "WORKS",
};

interface WorksPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function WorksPage({ searchParams }: WorksPageProps) {
  const params = await searchParams;
  const category = params.category ?? null;

  if (category === "art") {
    redirect("/art");
  }

  const filteredWorks = getWorksByCategory(category);

  return (
    <div className="page-enter px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="WORKS" as="h1" className="mb-10 sm:mb-14" />
        <CategoryNav activeCategory={category} />
        <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-20 lg:mt-20 lg:gap-x-14">
          {filteredWorks.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
        {filteredWorks.length === 0 ? (
          <p className="mt-16 text-text-muted">該当する作品はありません。</p>
        ) : null}
      </div>
    </div>
  );
}
