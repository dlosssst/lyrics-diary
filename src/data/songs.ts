import { Lang } from "./language";

// ✅ 在接口增加 lyricsLines 类型定义
export interface LyricLine {
  cn: string;
  pinyin: string;
  en: string;
}

export interface SongItem {
  id: number;
  title: string;
  singer?: string;
  dramaName?: string;
  videoUrl?: string;
  videoPoster?: string;
  photoList: string[];
  lyric: Record<Lang, string>;
  lyricsLines: LyricLine[]; // 新增
}

// ========== 把 https://pub‑xxxx.r2.dev 替换成你自己R2的Public域名 ==========
const R2_CDN = "https://pub-88c1444853ee4488a95dec807aedcd62.r2.dev";

export const songList: SongItem[] = [
  {
    id: 1,
    title: "I am a Fish (我是一只鱼)",
    singer: "Zi Yu (梓渝)",
    videoUrl: `${R2_CDN}/videos/ziyu‑iamafish.mp4`,
    videoPoster: `${R2_CDN}/images/ziyu‑iamafish‑photo.jpg`,
    photoList: [
      `${R2_CDN}/images/photo1.jpg`,
    ],
    lyric: { // 保留旧多语言字段，兼容旧代码，你可以填占位文本
      zh: "",
      en: ""
    },
    lyricsLines: [
      {
        cn: "于是乎 我准备对自己守护",
        pinyin: "yú shì hū wǒ zhǔn bèi duì zì jǐ shǒu hù",
        en: "So I am ready to protect myself"
      },
      {
        cn: "故事你不在乎 越是陪伴越是孤独",
        pinyin: "gù shì nǐ bù zài hū yuè shì péi bàn yuè shì gū dú",
        en: "You do not care about the story and the more we stay together the lonelier I become"
      },
      {
        cn: "不需要被祝福",
        pinyin: "bù xū yào bèi zhù fú",
        en: "I do not need to be blessed"
      },
      {
        cn: "我想把界限划清楚",
        pinyin: "wǒ xiǎng bǎ jiè xiàn huá qīng chǔ",
        en: "I want to make our boundaries clear"
      },
      {
        cn: "我 这次不会闪躲",
        pinyin: "wǒ zhè cì bú huì shǎn duǒ",
        en: "This time I will not hide away"
      },
      {
        cn: "哪怕没有结果",
        pinyin: "nǎ pà méi yǒu jié guǒ",
        en: "Even if there is no result"
      }
    ]
  }
]
