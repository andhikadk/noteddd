import { Suspense } from 'react';

import AddNoteButton from '@/components/AddNoteButton';
import Notes from '@/components/Notes';
import Skeleton from '@/components/Skeleton';

const StarredPage = async () => {
  return (
    <section className='flex flex-col min-h-[calc(100vh-4rem)] gap-4 p-8'>
      <div className='flex-1'>
        <Suspense fallback={<Skeleton limit={6} />}>
          {/* @ts-expect-error Server Component */}
          <Notes starred />
        </Suspense>
      </div>
      <div className='sticky flex justify-end bottom-12'>
        <AddNoteButton />
      </div>
    </section>
  );
};

export default StarredPage;

export const dynamic = 'force-dynamic';
