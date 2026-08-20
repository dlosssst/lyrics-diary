"use client";
import Link from "next/link";
import { useState } from "react";
import { songList } from "./songs";

export default function Home() {
  const [searchText, setSearchText] = useState("");

  const filteredSongs = songList.filter((song) =>
    song.title.toLowerCase().includes(searchText.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main className="max-w-3xl mx-auto px-5 py-12 min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-2">Lyrics Diary</h1>
      <p className="text-gray-500 mb-6">Collection of multilingual song lyrics</p>

      {/* 搜索框 */}
      <div className="mb-10">
        <input
          type="text"
          placeholder="Search song / artist..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-5 py-3 text-lg outline-none focus:border-blue-500"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Song Collection ({filteredSongs.length})</h2>

      <div className="grid gap-4">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => (
            <Link
              key={song.id}
              href={`/song/${song.id}`}
              className="block border border-gray-200 rounded-xl p-6 hover:bg-slate-50 hover:shadow-sm transition-all"
            >
              <h3 className="text-xl font-semibold">{song.title}</h3>
              <p className="text-gray-400 mt-1">{song.artist}</p>
            </Link>
          ))
        ) : (
          <p className="text-gray-400 text-center py-10">No matching songs found.</p>
        )}
      </div>
    </main>
  );
}