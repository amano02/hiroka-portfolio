import type { Work } from "@/types/work";
import {
  defaultCollectionSort,
  parseCollectionSort,
  sortCollectionItems,
} from "@/lib/collection-sort";

export const works: Work[] = [
  {
    slug: "hla-website",
    title: "Human Love Aid Website",
    category: "web",
    subCategory: "Web",
    year: 2026,
    createdAt: "2026-06-01",
    updatedAt: "2026-10-01",
    type: "Client Work",
    description: "Human Love AidのWebサイト全面リニューアル。",
    image: "/works/hla-website.jpg",
    featured: true,
    technologies: ["Next.js", "React", "Tailwind CSS", "GitHub"],
    overview:
      "一般社団法人 Human Love Aid の公式Webサイトを、活動内容が伝わる構成とビジュアルで再設計・実装しました。",
    role: "Web Design / Development",
    externalUrl: "https://humanloveaid.com/",
  },
  {
    slug: "slack-github-pr",
    title: "Slack × GitHub PR Management App",
    category: "dx",
    subCategory: "App / DX",
    createdAt: "2025-11-01",
    updatedAt: "2026-03-15",
    type: "App / DX",
    description: "Slack上でGitHub Pull Requestを管理するアプリ。",
    image: "/works/slack-github-pr.jpg",
    featured: true,
    technologies: ["Slack API", "GitHub API"],
    overview:
      "開発チームのPR確認フローをSlack上に集約し、レビュー漏れを減らすためのDXツールです。",
    role: "Planning / Development",
  },
  {
    slug: "3d-character-works",
    title: "3D Character Works",
    category: "3d",
    subCategory: "3D / Character",
    createdAt: "2025-08-01",
    updatedAt: "2026-10-15",
    type: "Ongoing Project",
    description:
      "VRoid Studio などで制作した3Dキャラクターの継続的なコレクション。映像・ゲーム・MV等の制作ベースとして育てています。",
    image: "/works/3d-character-works.svg",
    featured: true,
    overview:
      "キャラクターごとにモデル・設定を蓄積し、別プロジェクト（映像・ゲーム・MVなど）へ展開するための母集団です。キャラクターは characters.ts で管理し、このページに自動反映されます。",
    role: "Character Design / 3D Modeling",
    characterCollection: true,
  },
  {
    slug: "shiro",
    title: "shiro",
    category: "3d",
    subCategory: "3D / Team Project",
    createdAt: "2025-10-01",
    updatedAt: "2026-01-20",
    type: "Team Project",
    description: "学校でのチーム開発による3Dプロジェクト。",
    image: "/works/shiro.jpg",
    featured: true,
    overview: "チームで3D作品を企画・制作した学校プロジェクトです。",
    role: "Team Member",
  },
  {
    slug: "ai-partner",
    title: "AI Partner",
    category: "ai",
    subCategory: "AI / Experiment",
    createdAt: "2026-01-15",
    updatedAt: "2026-09-20",
    type: "Experiment",
    description: "人生を成長しながら一緒に楽しむAIパートナー構想。",
    image: "/works/ai-partner.jpg",
    featured: true,
    overview: "日常の学びや創作を伴走するAIパートナーの体験設計を検証中です。",
    role: "Concept / Prototype",
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}

export function getFeaturedWorks(): Work[] {
  return sortCollectionItems(
    works.filter((work) => work.featured),
    defaultCollectionSort,
  );
}

export function getWorksByCategory(category: string | null | undefined): Work[] {
  if (!category || category === "all") {
    return works;
  }
  return works.filter((work) => work.category === category);
}

export function queryWorks(
  category: string | null | undefined,
  sort: string | null | undefined,
): Work[] {
  const filtered = getWorksByCategory(category);
  return sortCollectionItems(filtered, parseCollectionSort(sort));
}
