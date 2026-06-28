export type Project = {
  name: string;
  description: string;
  url: string;
  image: string;
  category: string;
};

export const projects: Project[] = [
  {
    name: "Chance Vault",
    description:
      "チャンスやアイデア、将来の計画を一か所で管理できるサービスです。",
    url: "https://chance-vault-q8bx.vercel.app/",
    image: "/logos/chance-vault.png",
    category: "AI・ツール",
  },
  {
    name: "Campus Tasks",
    description:
      "大学生活の課題や予定を効率よく管理できる学生向けタスク管理サービスです。",
    url: "https://campus-task-b9x1.onrender.com",
    image: "/logos/campus-tasks.png",
    category: "学生向け",
  },
  {
    name: "Wed-mini",
    description:
      "結婚式を挙げなくても、特別な思い出を残せる新しいウェディングサービスです。",
    url: "https://wed-mini.onrender.com",
    image: "/logos/wed-mini.png",
    category: "ブライダル",
  },
  {
    name: "Nail Fit Studio",
    description:
      "自分にぴったりのネイルデザインを見つけるためのネイル提案サービスです。",
    url: "https://nail-fit-studio.onrender.com",
    image: "/logos/nail-fit-studio.png",
    category: "美容",
  },
  {
    name: "Leftover Table",
    description:
      "余った食材を有効活用し、食品ロスの削減を目指すサービスです。",
    url: "https://leftover-table.onrender.com",
    image: "/logos/leftover-table.png",
    category: "ライフスタイル",
  },
  {
    name: "アンケート",
    description: "サービス改善のためのアンケートです。ぜひご協力ください。",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdkvEwbQrD7_BE2kMLUxN4xdT-FKprY0dAOphUvMWupBd5z8g/viewform?usp=header",
    image: "/logos/survey.png",
    category: "その他",
  },
  {
    name: "Wed Skin Plan",
    description:
      "結婚式当日に向けて、美しい肌づくりをサポートするスキンケア計画サービスです。",
    url: "https://wed-skin-plan.onrender.com",
    image: "/logos/wed-skin-plan.png",
    category: "ブライダル",
  },
  {
    name: "ラク服コンパス",
    description:
      "自分に似合う服を簡単に見つけられるファッション提案サービスです。",
    url: "https://rakufu-konpasu.onrender.com",
    image: "/logos/rakufuku-compass.png",
    category: "ファッション",
  },
  {
    name: "VocaLift",
    description:
      "女声を出せるようになりたい人のための、声の練習をサポートするサービスです。",
    url: "https://vocalift-lt2g.onrender.com",
    image: "/logos/vocalift.png",
    category: "音声トレーニング",
  },
];
