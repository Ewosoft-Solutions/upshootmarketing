import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.json();

  console.info('[forms/contact] received payload', payload);

  return NextResponse.json({ success: true });
}
