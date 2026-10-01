import Image from "next/image";
import { getCharacters } from "@/data/characters";

interface CharacterCollectionPreviewProps {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function CharacterCollectionPreview({
  className = "relative aspect-[16/10] overflow-hidden bg-black-base",
  imageClassName = "object-cover object-top",
  priority = false,
}: CharacterCollectionPreviewProps) {
  const characterList = getCharacters();

  if (characterList.length === 0) {
    return <div className={`${className} bg-black-muted/40`} aria-hidden />;
  }

  return (
    <div className={className}>
      <div className="absolute inset-0 grid grid-cols-2">
        {characterList.map((character) => (
          <div
            key={character.slug}
            className="relative h-full border-r border-black-base last:border-r-0"
          >
            <Image
              src={character.image}
              alt=""
              fill
              className={imageClassName}
              priority={priority}
              sizes="(max-width: 768px) 50vw, 448px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
