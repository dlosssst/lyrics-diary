import { getSupabaseClient } from "@/src/lib/r2";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const r2Client = getSupabaseClient();
    const { songId, songTitle, name, wish } = await req.json();
    const { data, error } = await r2Client
      .from("wishes")
      .insert([
        {
          song_id: songId,
          song_title: songTitle,
          visitor_name: name,
          message: wish,
        },
      ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: String(err.message) }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const r2Client = getSupabaseClient();
    const { searchParams } = new URL(req.url);
    const songId = searchParams.get("songId");
    const { data, error } = await r2Client
      .from("wishes")
      .select("id,visitor_name,message,created_at")
      .eq("song_id", songId)
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ list: data ?? [] });
  } catch (err: any) {
    return NextResponse.json({ list: [], error: String(err.message) }, { status: 500 });
  }
}