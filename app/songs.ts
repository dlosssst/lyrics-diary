export type SongItem = {
  id: string;
  title: string;
  artist: string;
  zh: string;
  en: string;
};

export const songList: SongItem[] = [
  {
    id: "1",
    title: "晚风",
    artist: "Lyrics Diary",
    zh: `晚风轻划过窗台
心事藏进音符之中
夜色慢慢将城市相拥
旋律代替所有言语诉说`,
    en: `The wind brushes the window quietly
All feelings stay inside the melody
Night embraces the city gently
Melody speaks all my silent words`
  },
  {
    id: "2",
    title: "远方",
    artist: "Lyrics Diary",
    zh: `踏上去往远方的旅途
告别昨日所有的酸楚
沿着星光前行不驻足
期待和美好在下一处相遇`,
    en: `I start my journey to the distant land
Leave all the pain of yesterday behind
Walk along the starlight without pause
Waiting for beauty to meet me ahead`
  }
];