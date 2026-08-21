"use client";

import { useState } from "react";
import { songList } from "@/src/data/songs";

export default function Home() {
  const [query, setQuery] = useState("");

  // 根据关键词过滤歌曲
  const filteredSongs = songList.filter((song) => {
    const q = query.toLowerCase();
    return (
      song.title.toLowerCase().includes(q) ||
      (song.singer && song.singer.toLowerCase().includes(q))
    );
  });

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 24px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "36px", fontSize: "26px" }}>
        Song List
      </h1>

      {/* ===== 搜索框（新增）===== */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "28px" }}>
        <input
          type="text"
          placeholder="Search song / singer..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            flex: 1,
            padding: "12px 16px",
            border: "1px solid #e5e7eb",
            borderRadius: "10px",
            fontSize: "16px",
          }}
        />
        <button
          style={{
            padding: "12px 20px",
            backgroundColor: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {filteredSongs.map((song) => (
          <a
            key={song.id}
            href={`/song/${song.id}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "14px 18px",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              textDecoration: "none",
              color: "inherit",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f9fafb";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            {/* 左侧：videoPoster 缩略图 */}
            {song.videoPoster ? (
              <img
                src={song.videoPoster}
                alt={song.title}
                style={{
                  width: 80,
                  height: 56,
                  objectFit: "cover",
                  borderRadius: "6px",
                  flexShrink: 0,
                }}
              />
            ) : (
              // 如果没有封面，占位空白框
              <div
                style={{
                  width: 80,
                  height: 56,
                  borderRadius: "6px",
                  backgroundColor: "#f3f4f6",
                  flexShrink: 0,
                }}
              />
            )}

            {/* 右侧：标题 + 歌手 */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#2563eb",
                  marginBottom: "4px",
                }}
              >
                {song.title}
              </div>
              {song.singer && (
                <p style={{ margin: 0, color: "#6b7280", fontSize: "15px" }}>
                  Singer：{song.singer}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
