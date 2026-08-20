"use client";
import { useState } from "react";
import GlobalProtect from "./GlobalProtect";

export default function Home(){
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [tip, setTip] = useState('');

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
      <GlobalProtect />
      <h1 className="text-2xl font-bold mb-6">Lyrics Diary</h1>

      <div className="my-8 whitespace-pre-line leading-relaxed text-lg">
        <h3 className="font-bold mt-4">中文歌词</h3>
        <p>晚风轻划过窗台
心事藏进音符之中</p>

        <h3 className="font-bold mt-6">English Lyrics</h3>
        <p>The wind brushes the window quietly
All feelings stay inside the melody</p>

        <h3 className="font-bold mt-6">Tiếng Việt</h3>
        <p>Gió nhẹ vuốt ve ô cửa sổ
Nỗi lòng giấu trong từng nốt nhạc</p>
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