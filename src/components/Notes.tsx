import Link from 'next/link';
import clsx from 'clsx';

import { prisma } from '@/lib/prisma';
import type { Note } from '@prisma/client';

import Star from './Star';

const getNotes = async (starred?: boolean) => {
  try {
    const notes: Note[] = await prisma.note.findMany({
      where: {
        deletedAt: null,
        starred,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return notes;
  } catch (error) {
    console.error(error);
  }
};

const Notes = async ({ starred }: { starred?: boolean }) => {
  const notes = await getNotes(starred);

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {!notes?.length && (
        <div className='flex flex-col w-full col-span-3 gap-2 p-4 text-center rounded-md text-dark bg-gray'>
          <h2 className='font-semibold'>
            {starred ? 'No starred notes' : 'Create a note to get started'}
          </h2>
        </div>
      )}
      {notes?.map((note) => (
        <div
          key={note.id}
          className={clsx(
            'flex flex-col w-full col-span-1 gap-2 p-4 rounded-md text-dark',
            'bg-gray'
          )}>
          <div className='flex flex-row justify-between'>
            <Link href={`/notes/${note.id}`} prefetch={false}>
              <h2 className='text-xl font-semibold'>{note.title}</h2>
            </Link>
            <Star id={note.id} starred={note.starred} />
          </div>
          <p className='flex-1'>
            {note.content?.slice(0, 90)}
            {note.content?.length! > 90 ? '...' : ''}
          </p>
          <p className='self-end text-sm'>
            {new Date(note.createdAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Notes;
