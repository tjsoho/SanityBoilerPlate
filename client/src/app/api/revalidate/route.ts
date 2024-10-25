// src/app/api/revalidate/route.ts

import { NextRequest, NextResponse } from 'next/server';

// This handler receives the webhook request from Sanity and triggers ISR.
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  const path = searchParams.get('path'); // Get the path to revalidate

  // Validate the secret token for security
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  if (!path) {
    return NextResponse.json({ message: 'Path is required' }, { status: 400 });
  }

  try {
    // Use Next.js built-in revalidate function
    await revalidatePath(path);
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(
        { message: 'Error revalidating', error: err.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { message: 'Error revalidating', error: 'Unknown error occurred' },
      { status: 500 }
    );
  }
}

// Helper function for revalidating a path using the production URL
async function revalidatePath(path: string) {
    const baseUrl = process.env.VERCEL_URL || 'http://localhost:3000'; // Use Vercel URL in production
    await fetch(`${baseUrl}${path}`, {
      method: 'GET',
    });
  }
