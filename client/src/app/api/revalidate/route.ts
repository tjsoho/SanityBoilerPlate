// src/app/api/revalidate/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

// Handle POST request to trigger ISR revalidation
export async function POST(req: NextRequest) {
  const { secret, path } = await req.json(); // Extract from the request body

  // Validate the secret token
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  if (!path) {
    return NextResponse.json({ message: 'Path is required' }, { status: 400 });
  }

  try {
    // Revalidate the specified path
    const result = handleRevalidation(path);
    if (result == true) {
      return NextResponse.json({ revalidated: true });
    } else {
      return NextResponse.json(
        { message: `Could not revalidate ${path}` },
        { status: 400 }
      );
    }
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

function handleRevalidation(documentType: string) {
  switch (documentType) {
    case "homePage":
      revalidatePath("/");
      return true;

    case "aboutPage":
      revalidatePath("/about");
      return true;

    default: {
      console.error(`Invalid _type: ${documentType}`);
      return true;
    }
  }
}

