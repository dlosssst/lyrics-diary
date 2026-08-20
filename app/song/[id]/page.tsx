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
        fetchWishes();
      } else {
        setMsg(`❌ ${data.error}`);
      }
    } catch {
      setMsg("❌ Network error");
    }
    setLoading(false);
  };

  return (
    <main style={{maxWidth:"48rem", margin:"0 auto", padding:"3rem 1.25rem"}}>
      <Link href="/" style={{color:"#2563eb", display:"inline-block", marginBottom:"2rem"}}>
        ← Back to Song List
      </Link>

      <h1 style={{fontSize:"2.5rem", fontWeight:"bold", marginTop:"0.5rem"}}>{song.title}</h1>
      <p style={{color:"#6b7280", marginBottom:"2.5rem"}}>{song.artist}</p>

      <div style={{display:"grid", gap:"2.5rem"}}>
        <section>
          <h2 style={{fontSize:"1.25rem", fontWeight:"600", marginBottom:"0.75rem"}}>中文歌词</h2>
          <pre style={{whiteSpace:"pre-line", fontSize:"1.125rem", lineHeight:"1.75", color:"#1f2937"}}>{song.zh}</pre>
        </section>
        <section>
          <h2 style={{fontSize:"1.25rem", fontWeight:"600", marginBottom:"0.75rem"}}>English Lyrics</h2>
          <pre style={{whiteSpace:"pre-line", fontSize:"1.125rem", lineHeight:"1.75", color:"#1f2937"}}>{song.en}</pre>
        </section>
      </div>

      <hr style={{margin:"3rem 0", borderColor:"#e5e7eb"}} />

      {/* Messages List */}
      <div style={{marginBottom:"2.5rem"}}>
        <h2 style={{fontSize:"1.5rem", fontWeight:"600", marginBottom:"1rem"}}>Messages</h2>
        {wishes.length === 0 ? (
          <p style={{color:"#9ca3af"}}>No messages yet for this song.</p>
        ) : (
          <div style={{display:"grid", gap:"1rem"}}>
            {wishes.map((item) => (
              <div key={item.id} style={{border:"1px solid #e5e7eb", borderRadius:"0.5rem", padding:"1rem"}}>
                <div style={{fontWeight:"600", color:"#374151"}}>{item.visitor_name}</div>
                <div style={{color:"#4b5563", marginTop:"0.25rem"}}>{item.message}</div>
                <div style={{fontSize:"0.75rem", color:"#9ca3af", marginTop:"0.5rem"}}>{new Date(item.created_at).toLocaleString()}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Wish Form */}
      <div>
        <h2 style={{fontSize:"1.5rem", fontWeight:"600", marginBottom:"0.5rem"}}>Leave your wish</h2>
        <p style={{color:"#9ca3af", fontSize:"0.875rem", marginBottom:"1.5rem"}}>Messages are only visible to site admin</p>

        <div style={{display:"grid", gap:"1rem", maxWidth:"40rem"}}>
          <input
            style={{border:"1px solid #d1d5db", borderRadius:"0.5rem", padding:"0.75rem 1rem", fontSize:"1rem"}}
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            style={{border:"1px solid #d1d5db", borderRadius:"0.5rem", padding:"0.75rem 1rem", minHeight:"8rem", fontSize:"1rem"}}
            placeholder="Write your wish"
            value={wish}
            onChange={(e) => setWish(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              backgroundColor:"#2563eb",
              color:"white",
              border:"none",
              borderRadius:"0.5rem",
              padding:"0.75rem 1.5rem",
              fontSize:"1rem",
              cursor:"pointer"
            }}
          >
            {loading ? "Submitting..." : "Submit Wish"}
          </button>
          {msg && <div>{msg}</div>}
        </div>
      </div>
    </main>
  );
}