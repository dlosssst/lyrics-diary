"use client";
import { useState } from "react";

const songs = [
  {
    id:1,
    title:"Demo Song",
    artist:"Diary Lyrics",
    zh:"中文歌词第一行\n中文歌词第二行",
    en:"English line 1\nEnglish line 2",
    vi:"Tiếng Việt dòng 1\nTiếng Việt dòng 2"
  }
];

type Song = typeof songs[0];

export default function Home(){
  const [currentSong] = useState<Song>(songs[0]);
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [tip, setTip] = useState('');

  // 移除所有接口请求，只做前端提示
  const submitWish = () => {
    if (!name || !msg) {
      setTip('Please fill in all fields / 请填写完整信息');
      return;
    }
    setTip('Submitted successfully! / 提交成功！');
    setName('');
    setMsg('');
  };

  return (
    <main className="max-w-4xl mx-auto p-4 select-none">
      <h1 className="text-2xl font-bold mb-6">Lyrics Diary</h1>

      <div className="my-8 whitespace-pre-line leading-relaxed text-lg">
        <h3 className="font-bold mt-4">中文歌词</h3>
        {currentSong.zh}

        <h3 className="font-bold mt-6">English Lyrics</h3>
        {currentSong.en}

        <h3 className="font-bold mt-6">Tiếng Việt</h3>
        {currentSong.vi}
      </div>

      <div className="mt-12 border-t pt-6">
        <h3 className="text-xl font-semibold mb-2">Leave your wish</h3>
        <p className="text-gray-500 mb-4">留言仅站长可见</p>

        <div className="space-y-4 max-w-md">
          <input
            className="w-full border p-3 rounded outline-none"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <textarea
            className="w-full border p-3 rounded outline-none h-24"
            placeholder="Write your wish"
            value={msg}
            onChange={e => setMsg(e.target.value)}
          ></textarea>
          <button
            onClick={submitWish}
            className="bg-indigo-600 text-white px-6 py-3 rounded"
          >
            Submit Wish
          </button>
          {tip && <p className="text-green-600">{tip}</p>}
        </div>
      </div>
    </main>
  );
}