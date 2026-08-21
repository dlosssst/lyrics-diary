"use client";

import { songList } from "@/src/data/songs";

export default function Home() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 24px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "36px", fontSize: "26px" }}>
        Song List
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {songList.map((song) => (
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