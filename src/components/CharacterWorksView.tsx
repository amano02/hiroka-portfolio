import Link from "next/link";
import { ArrowLink } from "@/components/ArrowLink";
import { CharacterCard } from "@/components/CharacterCard";
import { CharacterCollectionPreview } from "@/components/CharacterCollectionPreview";
import { SectionHeading } from "@/components/SectionHeading";
import { getCharacters } from "@/data/characters";
import type { Work } from "@/types/work";
import { vroidHub } from "@/lib/constants";

interface CharacterWorksViewProps {
  work: Work;
}

export function CharacterWorksView({ work }: CharacterWorksViewProps) {
  const characterList = getCharacters();
  const metaLine = [work.subCategory, work.type].filter(Boolean).join(" · ");

  return (
    <div className="page-enter px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/works?category=3d"
          className="font-ui text-xs tracking-[0.2em] text-text-muted hover:text-text-primary"
        >
          ← WORKS
        </Link>

        <header className="mt-8">
          <SectionHeading title={work.title} as="h1" />
          <p className="font-ui mt-5 text-sm tracking-[0.16em] text-text-muted">{metaLine}</p>
          <div className="mt-6">
            <ArrowLink href={vroidHub.profileUrl} external>
              View VRoid Hub Profile
            </ArrowLink>
          </div>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {work.overview ?? work.description}
          </p>
        </header>

        <CharacterCollectionPreview
          className="relative mt-12 aspect-[16/10] overflow-hidden bg-black-base lg:mt-16"
          priority
        />

        <section className="mt-16 lg:mt-24" aria-labelledby="character-collection-heading">
          <h2
            id="character-collection-heading"
            className="font-ui mb-10 text-xs tracking-[0.22em] text-text-muted sm:mb-14"
          >
            CHARACTERS
          </h2>
          {characterList.length > 0 ? (
            <div className="space-y-14 sm:space-y-16">
              {characterList.map((character) => (
                <CharacterCard key={character.slug} character={character} />
              ))}
            </div>
          ) : (
            <p className="text-text-secondary">キャラクターは準備中です。</p>
          )}
        </section>

        <div className="mt-16 border-t border-black-muted/70 pt-10">
          <ArrowLink href="/works">Back to Works</ArrowLink>
        </div>
      </div>
    </div>
  );
}
