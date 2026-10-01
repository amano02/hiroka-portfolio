import Image from "next/image";
import Link from "next/link";
import type { Work } from "@/types/work";

interface WorkCardProps {
  work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
  const meta = [work.subCategory, work.year?.toString()].filter(Boolean).join(" · ");

  return (
    <Link href={`/works/${work.slug}`} className="group block">
      <div className="relative mb-6 aspect-[3/2] overflow-hidden shadow-[0_28px_90px_-32px_rgba(0,0,0,0.75)] sm:mb-8">
        <Image
          src={work.image}
          alt=""
          fill
          className="motion-safe-transition object-cover transition-transform duration-300 group-hover:scale-[1.015]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="font-ui flex items-start justify-between gap-4 text-[0.6875rem] tracking-[0.18em] sm:text-xs">
        <div>
          <h3 className="font-display motion-safe-transition mb-2.5 text-[clamp(1.75rem,4vw,2.25rem)] leading-tight tracking-normal text-text-primary transition-colors duration-300 group-hover:text-text-secondary">
            {work.title}
          </h3>
          <p className="text-text-muted">{meta}</p>
        </div>
        <span
          className="motion-safe-transition mt-1 shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        >
          ↗
        </span>
      </div>
    </Link>
  );
}
