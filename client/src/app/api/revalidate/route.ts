// src/app/api/revalidate/route.ts

import { NextRequest, NextResponse } from 'next/server';

// This handler receives the webhook request from Sanity and triggers ISR.
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  const path = searchParams.get('path');

  // Validate the secret token for security
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    // Trigger revalidation of the specified path
    await fetch(
      `${process.env.VERCEL_URL}/api/revalidate?path=${path}`,
      { method: 'POST' }
    );
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(
        { message: 'Error revalidating', error: err.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { message: 'Error revalidating', error: 'An unknown error occurred' },
        { status: 500 }
      );
    }
  }
}
