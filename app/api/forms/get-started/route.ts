import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.json();

  console.info('[forms/get-started] received payload', payload);

  return NextResponse.json({ success: true });
}
