"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { songList } from "../../songs";

type WishItem = {
  id: number;
  visitor_name: string;
  message: string;
  created_at: string;
};

export default function SongPage({ params }: { params: { id: string } }) {
  const song = songList.find((s) => s.id === params.id);
  if (!song) notFound();

  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [wishes, setWishes] = useState<WishItem[]>([]);

  // 读取当前歌曲的留言
  const fetchWishes = async () => {
    try {
      const res = await fetch(`/api/wish?songId=${song.id}`);
      const data = await res.json();
      if (res.ok) setWishes(data.list);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, [song.id]);

  const handleSubmit = async () => {
    setLoading(true);
    setMsg("");
    try {
      const res = await fetch("/api/wish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          songId: song.id,
          songTitle: song.title,
          name,
          wish
        })
      });
      const data = await res.json();
      if (res.ok) {
        setMsg("✅ Wish submitted!");
        setName("");
        setWish("");
        fetchWishes(); // 提交成功刷新留言列表
      } else {
        setMsg(`❌ ${data.error}`);
      }
    } catch {
      setMsg("❌ Network error");
    }
    setLoading(false);
  };

  return (
    <main className="max-w-3xl mx-auto px-5 py-12">
      <Link href="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
        ← Back to Song List
      </Link>

      <h1 className="text-4xl font-bold mt-2">{song.title}</h1>
      <p className="text-gray-500 mb-10">{song.artist}</p>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-semibold mb-3">中文歌词</h2>
          <pre className="whitespace-pre-line text-lg leading-loose text-gray-800">{song.zh}</pre>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">English Lyrics</h2>
          <pre className="whitespace-pre-line text-lg leading-loose text-gray-800">{song.en}</pre>
        </section>
      </div>

      <hr className="my-12 border-gray-200" />

      {/* 已有的留言展示区 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Messages</h2>
        {wishes.length === 0 ? (
          <p className="text-gray-400">No messages yet for this song.</p>
        ) : (
          <div className="space-y-4">
            {wishes.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                <div className="font-semibold text-gray-700">{item.visitor_name}</div>
                <div className="text-gray-600 mt-1">{item.message}</div>
                <div className="text-xs text-gray-400 mt-2">{new Date(item.created_at).toLocaleString()}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 提交留言表单 */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Leave your wish</h2>
        <p className="text-gray-400 text-sm mb-6">Messages are only visible to site admin</p>

        <div className="space-y-4 max-w-xl">
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-3 min-h-32 outline-none focus:border-blue-500"
            placeholder="Write your wish"
            value={wish}
            onChange={(e) => setWish(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Wish"}
          </button>
          {msg && <div className="mt-2">{msg}</div>}
        </div>
      </div>
    </main>
  );
}