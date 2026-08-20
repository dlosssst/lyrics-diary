"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { songList } from "../../songs";

export default function SongPage({ params }: { params: { id: string } }) {
  const song = songList.find((s) => s.id === params.id);
  if (!song) notFound();

  return (
    <main className="max‑w‑3xl mx‑auto px‑5 py‑12">
      <Link href="/" className="text‑blue‑600 hover:text‑blue‑800 mb‑8 inline‑block">
        ← Back to Song List
      </Link>

      <h1 className="text‑4xl font‑bold mt‑2">{song.title}</h1>
      <p className="text‑gray‑500 mb‑10">{song.artist}</p>

      <div className="space‑y‑10">
        <section>
          <h2 className="text‑xl font‑semibold mb‑3">中文歌词</h2>
          <pre className="whitespace‑pre‑line text‑lg leading‑loose text‑gray‑800">{song.zh}</pre>
        </section>

        <section>
          <h2 className="text‑xl font‑semibold mb‑3">English Lyrics</h2>
          <pre className="whitespace‑pre‑line text‑lg leading‑loose text‑gray‑800">{song.en}</pre>
        </section>
      </div>
    </main>
  );
}