export const collectionSortOptions = [
  { label: "作成 · 新しい順", value: "created-desc" },
  { label: "作成 · 古い順", value: "created-asc" },
  { label: "更新 · 新しい順", value: "updated-desc" },
  { label: "更新 · 古い順", value: "updated-asc" },
] as const;

export type CollectionSort = (typeof collectionSortOptions)[number]["value"];

export const defaultCollectionSort: CollectionSort = "updated-desc";

export function parseCollectionSort(value: string | null | undefined): CollectionSort {
  const found = collectionSortOptions.find((option) => option.value === value);
  return found?.value ?? defaultCollectionSort;
}

export interface CollectionDated {
  createdAt: string;
  updatedAt: string;
}

export function sortCollectionItems<T extends CollectionDated>(
  items: T[],
  sort: CollectionSort,
): T[] {
  const copy = [...items];
  const asc = sort.endsWith("-asc");
  const field = sort.startsWith("created") ? "createdAt" : "updatedAt";

  copy.sort((a, b) => {
    const diff = a[field].localeCompare(b[field]);
    return asc ? diff : -diff;
  });

  return copy;
}

export function worksListHref(category: string | null, sort: CollectionSort): string {
  const params = new URLSearchParams();
  if (category) {
    params.set("category", category);
  }
  params.set("sort", sort);
  const query = params.toString();
  return query ? `/works?${query}` : "/works";
}

export function artListHref(tag: string | null, sort: CollectionSort): string {
  const params = new URLSearchParams();
  if (tag) {
    params.set("tag", tag);
  }
  params.set("sort", sort);
  const query = params.toString();
  return query ? `/art?${query}` : "/art";
}
