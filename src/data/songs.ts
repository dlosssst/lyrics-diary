import { Lang } from "./language";

export interface SongItem {
  id: number;
  title: string;
  singer?: string;
  dramaName?: string;
  videoUrl?: string;
  videoPoster?: string;
  // 新增多张剧照数组
  photoList: string[];
  lyric: Record<Lang, string>;
}

export const songList: SongItem[] = [
  {
    id: 1,
    title: "晚风",
    singer: "小时姑娘",
    dramaName: "大唐迷雾",
    videoUrl: "/videos/晚风.mp4",
    videoPoster: "/images/poster.jpg",
    photoList: [
      "/images/photo1.jpg",
      "/images/photo2.jpg",
      "/images/photo3.jpg",
    ],
    lyric: {
      zh: "中文歌词……\n第一行\n第二行",
      pinyin: "zhōng wén gē cí……\ndì yī háng\ndì èr háng",
      en: "English lyric……\nLine 1\nLine 2",
    },
  },
];