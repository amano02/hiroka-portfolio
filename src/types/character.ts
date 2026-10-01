/** VRoid Hub 等で公開する3Dキャラクター（works データとは別管理） */
export interface Character {
  slug: string;
  title: string;
  year?: number;
  image: string;
  description?: string;
  tools?: string[];
  vroidUrl: string;
}
