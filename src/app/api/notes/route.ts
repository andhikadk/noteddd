import { NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

export const POST = async (req: Request) => {
  try {
    const { title, content } = await req.json();
    const slug = title.toLowerCase().replace(/\s/g, '-');
    const note = await prisma.note.create({
      data: {
        title,
        slug,
        content,
      },
    });
    return NextResponse.json(note, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Something went wrong.' },
      { status: 500 }
    );
  }
};
