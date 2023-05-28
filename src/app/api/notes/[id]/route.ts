import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

export const PATCH = async (
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) => {
  try {
    const note = await prisma.note.update({
      where: {
        id: params.id,
      },
      data: await req.json(),
    });
    return NextResponse.json(note, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Something went wrong.' },
      { status: 500 }
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) => {
  try {
    await prisma.note.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(
      { message: 'Note deleted successfully.' },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Something went wrong.' },
      { status: 500 }
    );
  }
};
