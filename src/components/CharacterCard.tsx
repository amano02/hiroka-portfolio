import Image from "next/image";
import { ArrowLink } from "@/components/ArrowLink";
import type { Character } from "@/types/character";

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <article
      id={character.slug}
      className="scroll-mt-24 border-t border-black-muted/70 pt-10 first:border-t-0 first:pt-0 sm:pt-12"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="relative aspect-[4/5] overflow-hidden bg-black-muted/40 shadow-[0_28px_90px_-32px_rgba(0,0,0,0.75)] lg:col-span-5">
          <Image
            src={character.image}
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 420px"
          />
        </div>
        <div className="flex flex-col justify-center lg:col-span-7 lg:pt-2">
          <h2 className="font-display text-[clamp(2rem,5vw,2.75rem)] leading-tight text-text-primary">
            {character.title}
          </h2>
          <div className="mt-8">
            <ArrowLink href={character.vroidUrl} external>
              View on VRoid Hub
            </ArrowLink>
          </div>
        </div>
      </div>
    </article>
  );
}
