"use client";
import Link from "next/link";
import { songList } from "./songs";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Lyrics Diary</h1>
      <h2 className="text-xl text-gray-600 mb-6">Song Collection</h2>

      <div className="space-y-4">
        {songList.map((song) => (
          <Link
            key={song.id}
            href={`/song/${song.id}`}
            className="block border rounded-lg p-5 hover:bg-gray-50 transition-all duration-200"
          >
            <h3 className="text-xl font-semibold">{song.title}</h3>
            <p className="text-gray-500 mt-1">{song.artist}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}