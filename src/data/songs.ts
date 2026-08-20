import { Lang } from "./language";

export interface SongItem {
  id: number;
  title: string;
  singer?: string;
  dramaName?: string;
  videoUrl?: string;
  videoPoster?: string;
  lyric: Record<Lang, string>;
}

export const songList: SongItem[] = [
  {
    id: 1,
    title: "晚风",
    singer: "小时姑娘",
    dramaName: "大唐迷雾",
    videoUrl: "/videos/晚风.mp4",
    videoPoster: "/images/晚风-poster.jpg",
    lyric: {
      zh: "中文歌词……\n第一行\n第二行",
      pinyin: "zhōng wén gē cí……\ndì yī háng\ndì èr háng",
      en: "English lyric……\nLine 1\nLine 2",
    },
  },
  {
    id: 2,
    title: "星河",
    singer: "示例歌手",
    dramaName: "示例剧集",
    videoUrl: "",
    videoPoster: "",
    lyric: {
      zh: "星河中文歌词",
      pinyin: "xīng hé zhōng wén gē cí",
      en: "Star river english lyric",
    },
  },
];