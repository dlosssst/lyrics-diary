"use client";
import Link from "next/link";
import { songList } from "./songs";

export default function Home() {
  return (
    <main className="max-w‑3xl mx-auto px‑5 py‑12 min‑h‑screen bg‑white">
      <h1 className="text‑4xl font‑bold mb‑2">Lyrics Diary</h1>
      <p className="text‑gray‑500 mb‑10">Collection of multilingual song lyrics</p>
      <h2 className="text‑2xl font‑semibold mb‑6 border‑b pb‑2">Song Collection</h2>

      <div className="grid gap‑4">
        {songList.map((song) => (
          <Link
            key={song.id}
            href={`/song/${song.id}`}
            className="block border border‑gray‑200 rounded‑xl p‑6 hover:bg‑slate‑50 hover:shadow‑sm transition‑all"
          >
            <h3 className="text‑xl font‑semibold">{song.title}</h3>
            <p className="text‑gray‑400 mt‑1">{song.artist}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}