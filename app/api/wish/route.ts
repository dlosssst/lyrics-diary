import { createClient } from "@/src/lib/r2";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { songId, songTitle, name, wish } = await req.json();
    const supabase = createClient();

    const { error } = await supabase.from("wishes").insert([
      {
        song_id: songId,
        song_title: songTitle,
        visitor_name: name,
        message: wish,
      }
    ]);

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const songId = searchParams.get("songId");
  const supabase = createClient();

  const { data, error } = await supabase
    .from("wishes")
    .select("id,visitor_name,message,created_at")
    .eq("song_id", songId)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
  return NextResponse.json({ list: data });
}