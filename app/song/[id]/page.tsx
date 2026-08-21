"use client";

import { useParams, useRouter } from "next/navigation";
// 临时注释语言切换，解决模块找不到报错
// import { useLang } from "../../LangContext";
// import LangSwitch from "../../LangSwitch";
import { songList } from "@/src/data/songs";

export default function SongDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  // const { lang } = useLang();

  const song = songList.find((s) => s.id === Number(id));

  if (!song) {
    return (
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "24px" }}>
        <p>Song not found</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "24px" }}>
      <a href="/" style={{color:"#2563eb"}}>← Back to Song List</a>

      {/* 顶部：视频 + 歌曲信息 */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          margin: "24px 0",
          alignItems: "flex-start",
        }}
      >
        {/* 左侧视频播放器 */}
        <div
          style={{
            width: 280,
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
            style={{ width: "100%", height: 158, objectFit: "cover" }}
          >
            <source src={song.videoUrl || ""} type="video/mp4" />
          </video>
        </div>

        {/* 右侧歌曲信息 */}
        <div style={{ flex:1, minWidth:0 }}>
          {/* <LangSwitch /> */}
          <h1 style={{ margin:"8px 0", fontSize:"24px" }}>{song.title}</h1>
          {song.singer && <p style={{ color:"#666", margin:"4px 0" }}>Singer：{song.singer}</p>}
          {song.dramaName && <p style={{ color:"#666", margin:"4px 0" }}>Drama：{song.dramaName}</p>}
        </div>
      </div>

      {/* 剧照图片区域 */}
      <div style={{margin:"32px 0"}}>
        <h2 style={{fontSize:18, marginBottom:16}}>Gallery</h2>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px"}}>
          {song.photoList.map((imgSrc, idx)=> (
            <img
              key={idx}
              src={imgSrc}
              alt={`photo-${idx}`}
              style={{
                width:"100%",
                borderRadius:"10px",
                objectFit:"cover",
              }}
            />
          ))}
        </div>
      </div>

      {/* 歌词区块暂时注释，以后要恢复直接取消注释即可
      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "16px",
          padding: "24px",
          background: "#fffef7",
          boxShadow: "0 4px 14px rgba(0,0,0,.06)",
        }}
      >
        <h2 style={{ margin: "0 0 16px 0", fontSize: "18px" }}>Lyrics</h2>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            fontSize: "16px",
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          {song.lyric[lang]}
        </pre>
      </div>
      */}

      {/* Messages留言区保留不动 */}
      <div style={{marginTop:"32px"}}>
        <h2>Messages</h2>
        {/* 你的留言表单、留言渲染代码全部放这里 */}
      </div>
    </div>
  );

        {/* ========== In‑Page Push Banner zone:11621332 仅歌词详情页加载 ========== */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(s){s.dataset.zone='11621332',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`
        }}
      />
}