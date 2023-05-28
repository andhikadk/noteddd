import { prisma } from '@/lib/prisma';

import EditForm from './EditForm';

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

const EditNotePage = async ({ params }: { params: { id: string } }) => {
  const note = await getNote(params.id);

  if (!note)
    return (
      <article>
        <h2>Note not found</h2>
      </article>
    );

  return (
    <section className='flex flex-col min-h-[calc(100vh-4rem)] gap-4 p-8'>
      <EditForm note={note} />
    </section>
  );
};

export default EditNotePage;
