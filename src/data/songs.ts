import { Lang } from "./language";

export interface SongItem {
  id: number;
  title: string;
  singer?: string;
  dramaName?: string;
  videoUrl?: string;
  videoPoster?: string;
  photoList: string[];
  lyric: Record<Lang, string>;
}

// ========== 把 https://pub‑xxxx.r2.dev 替换成你自己R2的Public域名 ==========
const R2_CDN = "https://pub-88c1444853ee4488a95dec807aedcd62.r2.dev";

export const songList: SongItem[] = [
  {
    id: 1,
    title: "I am a Fish (我是一只鱼)",
    singer: "Zi Yu (梓渝)",
    dramaName: "大唐迷雾",
    videoUrl: `${R2_CDN}/videos/ziyu-iamafish.mp4`,
    videoPoster: `${R2_CDN}/images/ziyu-iamafish-photo.jpg`,
    photoList: [
      `${R2_CDN}/images/photo1.jpg`,
      `${R2_CDN}/images/photo2.jpg`,
      `${R2_CDN}/images/photo3.jpg`,
    ],
    lyric: {
      zh: "中文歌词……\n第一行\n第二行",
      pinyin: "zhōng wén gē cí……\ndì yī háng\ndì èr háng",
      en: "English lyric……\nLine 1\nLine 2",
    },
  },
];