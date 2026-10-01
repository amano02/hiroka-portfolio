import type { Character } from "@/types/character";

/** works.ts の slug と対応するコレクション型プロジェクト */
export const CHARACTER_WORKS_SLUG = "3d-character-works" as const;

export const characters: Character[] = [
  {
    slug: "girl-1",
    title: "女の子1",
    image: "/characters/girl-1.jpg",
    vroidUrl:
      "https://hub.vroid.com/characters/1409275386327176221/models/5496158445391054256",
  },
  {
    slug: "girl-2",
    title: "女の子2",
    image: "/characters/girl-2.jpg",
    vroidUrl:
      "https://hub.vroid.com/characters/5157356390312447247/models/2462258714836241971",
  },
];

export function getCharacters(): Character[] {
  return characters;
}

export function getCharacterBySlug(slug: string): Character | undefined {
  return characters.find((character) => character.slug === slug);
}

/** 将来: works の characterSlugs から Character を解決 */
export function getCharactersBySlugs(slugs: string[]): Character[] {
  const set = new Set(slugs);
  return characters.filter((character) => set.has(character.slug));
}
