<div
  key={song.id}
  onClick={() => router.push(`/song/${song.id}`)}
  style={{
    display: "flex",
    gap: "12px",
    padding: "12px",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    marginBottom: "12px",
    cursor: "pointer",
    background: "#fff",
  }}
>
  <img
    src={song.videoPoster || "/images/default-poster.jpg"}
    alt={song.title}
    style={{
      width: 120,
      height: 68,
      objectFit: "cover",
      borderRadius: "8px",
    }}
  />
  <div>
    <h3 style={{ margin: 0, fontSize: "16px" }}>{song.title}</h3>
    <p style={{ margin: "4px 0 0 0", color: "#6b7280", fontSize: "14px" }}>
      {song.singer}
    </p>
  </div>
</div>