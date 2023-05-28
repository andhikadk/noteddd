'use client';
import { useRouter } from 'next/navigation';
import { FaRegEdit } from 'react-icons/fa';

import Button from './common/Button';

const EditNoteButton = ({ id }: { id: string }) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(`/notes/${id}/edit`)}
      className='w-fit bg-primary text-light hover:bg-dark'>
      <FaRegEdit />
      Edit Note
    </Button>
  );
};

export default EditNoteButton;
