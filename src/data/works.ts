import type { Work } from "@/types/work";

export const works: Work[] = [
  {
    slug: "hla-website",
    title: "Human Love Aid Website",
    category: "web",
    subCategory: "Web",
    year: 2026,
    type: "Client Work",
    description: "Human Love AidのWebサイト全面リニューアル。",
    image: "/works/hla-website.svg",
    featured: true,
    technologies: ["Next.js", "React", "Tailwind CSS", "GitHub"],
    overview:
      "一般社団法人 Human Love Aid の公式Webサイトを、活動内容が伝わる構成とビジュアルで再設計・実装しました。",
    role: "Web Design / Development",
  },
  {
    slug: "terakoya",
    title: "TERAKOYA",
    category: "sns",
    subCategory: "SNS / Marketing",
    year: 2026,
    type: "Client Work",
    description: "学習塾TERAKOYAのSNS運用・短尺動画制作。",
    image: "/works/terakoya.svg",
    featured: true,
    overview: "学習塾のブランドに合わせたSNSコンテンツの企画・制作・運用を担当しています。",
    role: "SNS Direction / Video Production",
  },
  {
    slug: "slack-github-pr",
    title: "Slack × GitHub PR Management App",
    category: "dx",
    subCategory: "App / DX",
    type: "App / DX",
    description: "Slack上でGitHub Pull Requestを管理するアプリ。",
    image: "/works/slack-github-pr.svg",
    featured: true,
    technologies: ["Slack API", "GitHub API"],
    overview:
      "開発チームのPR確認フローをSlack上に集約し、レビュー漏れを減らすためのDXツールです。",
    role: "Planning / Development",
  },
  {
    slug: "shiro",
    title: "shiro",
    category: "3d",
    subCategory: "3D / Team Project",
    type: "Team Project",
    description: "学校でのチーム開発による3Dプロジェクト。",
    image: "/works/shiro.svg",
    featured: true,
    overview: "チームで3D作品を企画・制作した学校プロジェクトです。",
    role: "Team Member",
  },
  {
    slug: "ai-partner",
    title: "AI Partner",
    category: "ai",
    subCategory: "AI / Experiment",
    type: "Experiment",
    description: "人生を成長しながら一緒に楽しむAIパートナー構想。",
    image: "/works/ai-partner.svg",
    featured: true,
    overview: "日常の学びや創作を伴走するAIパートナーの体験設計を検証中です。",
    role: "Concept / Prototype",
  },
  {
    slug: "illustration",
    title: "Illustration",
    category: "art",
    subCategory: "Art",
    type: "Personal Work",
    description: "過去に制作してきたイラスト作品。",
    image: "/works/illustration.svg",
    featured: false,
    comingSoon: true,
    overview: "イラスト作品集は現在準備中です。",
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}

export function getFeaturedWorks(): Work[] {
  return works.filter((work) => work.featured);
}

export function getWorksByCategory(category: string | null | undefined): Work[] {
  if (!category || category === "all") {
    return works;
  }
  return works.filter((work) => work.category === category);
}
