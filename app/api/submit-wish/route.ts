import { NextResponse } from 'next/server';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, message } = body;

    const supabase = createClientComponentClient({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    });

    await supabase.from('wishes').insert([
      { visitor_name: name, message: message }
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Submit failed' }, { status: 500 });
  }
}
