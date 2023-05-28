import { prisma } from '@/lib/prisma';

import Star from './Star';

const getNote = async (id: string) => {
  try {
    const note = await prisma.note.findUnique({
      where: {
        id,
      },
    });
    if (!note) return;
    return note;
  } catch (error) {
    console.error(error);
  }
};

const NoteDetails = async ({ id }: { id: string }) => {
  const note = await getNote(id);

  if (!note)
    return (
      <article>
        <h2>Note not found</h2>
      </article>
    );

  return (
    <article className='flex flex-col gap-4'>
      <h2 className='font-sans text-5xl font-bold tracking-wide'>
        {note.title}
      </h2>
      {/* <Star id={note.id} starred={note.starred} /> */}
      <p className='font-sans text-xl font-medium'>{note.content}</p>
    </article>
  );
};

export default NoteDetails;
