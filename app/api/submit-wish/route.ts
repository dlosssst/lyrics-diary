import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // 暂时只返回成功，不写入数据库
    console.log('Visitor wish:', body);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Submit failed' }, { status: 500 });
  }
}