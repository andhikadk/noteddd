'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';

import Button from './common/Button';

const DeleteNoteButton = ({ id }: { id: string }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const confirm = window.confirm('Are you sure?');
      if (!confirm) return;
      await fetch(`/api/notes/${id}`, { method: 'DELETE' });
      toast.success('Note deleted successfully!');
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      document.getElementById('delete-note-button')!.style.display = 'block';
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Button
      id='delete-note-button'
      onClick={handleDelete}
      className='hidden bg-red-400 w-fit text-light hover:bg-red-600'>
      <FaTrash />
    </Button>
  );
};

export default DeleteNoteButton;
