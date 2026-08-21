"use client";

import { songList } from "@/src/data/songs";

export default function Home() {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "24px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "32px" }}>Song List</h1>

      <div>
        {songList.map((song) => (
          <div
            key={song.id}
            style={{
              padding: "14px 16px",
              marginBottom: "12px",
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
            }}
          >
            <a
              href={`/song/${song.id}`}
              style={{
                fontSize: "18px",
                fontWeight: 500,
                color: "#2563eb",
                textDecoration: "none",
              }}
            >
              {song.title}
            </a>
            {song.singer && (
              <p style={{ margin: "6px 0 0 0", color: "#666" }}>
                {song.singer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}