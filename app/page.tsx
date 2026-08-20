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
    <main style={{maxWidth:"48rem", margin:"0 auto", padding:"3rem 1.25rem"}}>
      <h1 style={{fontSize:"2.5rem", fontWeight:"bold", marginBottom:"0.5rem"}}>Lyrics Diary</h1>
      <p style={{color:"#6b7280", marginBottom:"1.5rem"}}>Collection of multilingual song lyrics</p>

      {/* Search Box */}
      <div style={{marginBottom:"2.5rem"}}>
        <input
          type="text"
          placeholder="Search song / artist..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            width:"100%",
            border:"1px solid #d1d5db",
            borderRadius:"0.75rem",
            padding:"0.75rem 1.25rem",
            fontSize:"1.125rem"
          }}
        />
      </div>

      <h2 style={{fontSize:"1.5rem", fontWeight:"600", paddingBottom:"0.5rem", borderBottom:"1px solid #e5e7eb", marginBottom:"1.5rem"}}>
        Song Collection ({filteredSongs.length})
      </h2>

      <div style={{display:"grid", gap:"1rem"}}>
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => (
            <Link
              key={song.id}
              href={`/song/${song.id}`}
              style={{
                display:"block",
                border:"1px solid #d1d5db",
                borderRadius:"0.75rem",
                padding:"1.5rem",
                textDecoration:"none",
                color:"inherit"
              }}
            >
              <h3 style={{fontSize:"1.25rem", fontWeight:"600", margin:"0"}}>{song.title}</h3>
              <p style={{color:"#9ca3af", marginTop:"0.25rem", margin:"0"}}>{song.artist}</p>
            </Link>
          ))
        ) : (
          <p style={{textAlign:"center", color:"#9ca3af", padding:"2.5rem 0"}}>No matching songs found.</p>
        )}
      </div>
    </main>
  );
}