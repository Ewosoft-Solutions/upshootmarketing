import { NextResponse } from 'next/server';
import { getStartedFormSchema } from '@/lib/validation/form-schemas';

export async function POST(request: Request) {
  const payload = await request.json();
  const parsedPayload = getStartedFormSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return NextResponse.json(
      {
        success: false,
        message: 'Invalid request payload.',
      },
      { status: 400 },
    );
  }

  console.info('[forms/get-started] received payload', parsedPayload.data);

  return NextResponse.json({ success: true });
}
