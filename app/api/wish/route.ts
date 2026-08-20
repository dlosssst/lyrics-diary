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