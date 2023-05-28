import { Suspense } from 'react';

import DeleteNoteButton from '@/components/DeleteNoteButton';
import EditNoteButton from '@/components/EditNoteButton';
import NoteDetails from '@/components/NoteDetails';

const NoteDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <section className='flex flex-col min-h-[calc(100vh-4rem)] gap-4 p-8'>
      <div className='flex-1'>
        <Suspense
          fallback={
            <article>
              <h2>Loading...</h2>
            </article>
          }>
          {/* @ts-expect-error Server Component */}
          <NoteDetails id={params.id} />
        </Suspense>
      </div>
      <div className='sticky flex justify-end gap-4 bottom-12'>
        <DeleteNoteButton id={params.id} />
        <EditNoteButton id={params.id} />
      </div>
    </section>
  );
};

export default NoteDetailsPage;
