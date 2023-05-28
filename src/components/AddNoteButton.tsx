'use client';
import { useRouter } from 'next/navigation';
import { FaPlus } from 'react-icons/fa';

import Button from './common/Button';

const AddNoteButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push('/notes/add')}
      className='w-fit bg-primary text-light hover:bg-dark'>
      <FaPlus />
      Create Note
    </Button>
  );
};

export default AddNoteButton;
