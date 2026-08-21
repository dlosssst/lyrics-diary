"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { songList } from "@/src/data/songs";

export default function SongDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const song = songList.find((s) => s.id === Number(id));

  // 广告脚本
  useEffect(() => {
    if ((window as any).__monetag_inpage_11621332) return;
    (window as any).__monetag_inpage_11621332 = true;
    const script = document.createElement("script");
    script.dataset.zone = "11621332";
    script.src = "https://nap5k.com/tag.min.js";
    document.body.appendChild(script);
  }, []);

  if (!song) {
    return (
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "24px" }}>
        <p>Song not found</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "24px" }}>
      <a href="/" style={{ color: "#2563eb", fontSize: "16px" }}>← Back to Song List</a>

      {/* ========== 重点修改：增加 flexWrap:wrap，手机自动换行 ========== */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          margin: "24px 0",
          alignItems: "flex-start",
        }}
      >
        {/* 视频播放器 */}
        <div
          style={{
            width: "100%",
            maxWidth: 280,
            flexShrink: 0,
            borderRadius: "12px",
            overflow: "hidden",
            background: "#000",
          }}
        >
          <video
            controls
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            poster={song.videoPoster || ""}
            style={{ width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover" }}
          >
            <source src={song.videoUrl || ""} type="video/mp4" />
          </video>
        </div>

        {/* 歌曲信息：视频下面，不再挤侧边 */}
        <div style={{ flex: 1, minWidth: 220 }}>
          <h1 style={{ margin: "8px 0", fontSize: "24px", wordBreak: "break-word" }}>{song.title}</h1>
          {song.singer && (
            <p style={{ margin: "4px 0", color: "#6b7280", fontSize: "16px" }}>Singer:{song.singer}</p>
          )}
          {song.dramaName && (
            <p style={{ margin: "4px 0", color: "#6b7280", fontSize: "16px" }}>Drama:{song.dramaName}</p>
          )}
        </div>
      </div>

      {/* Gallery剧照区域 */}
      <div style={{ margin: "32px 0" }}>
        <h2 style={{ fontSize: 20, marginBottom: 16 }}>Gallery</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px,1fr))", gap: "12px" }}>
          {song.photoList.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`photo-${idx}`}
              style={{
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          ))}
        </div>
      </div>

      {/* 歌词区域 */}
      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "16px",
          padding: "24px",
          background: "#fffef7",
          boxShadow: "0 4px 14px rgba(0,0,0,.06)",
          marginTop: "32px",
        }}
      >
        <h2 style={{ margin: "0 0 20px 0", fontSize: "20px" }}>Lyrics</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          {song.lyricsLines.map((line, idx) => (
            <div key={idx}>
              <div style={{ fontSize: "17px", marginBottom: "4px" }}>{line.cn}</div>
              <div style={{ fontSize: "14px", color: "#444", marginBottom: "4px" }}>{line.pinyin}</div>
              <div style={{ fontSize: "14px", color: "#666" }}>{line.en}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Messages留言区 */}
      <div style={{ marginTop: "32px" }}>
        <h2 style={{fontSize:20}}>Messages</h2>
      </div>
    </div>
  );
}

