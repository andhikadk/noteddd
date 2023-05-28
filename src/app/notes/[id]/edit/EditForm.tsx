'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FaSave, FaSpinner } from 'react-icons/fa';

import Button from '@/components/common/Button';
import { Note } from '@prisma/client';

const EditForm = ({ note }: { note: Note }) => {
  const [title, setTitle] = React.useState(note.title);
  const [content, setContent] = React.useState(note.content);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const resizeTextarea = () => {
    const textarea = document.getElementById('title')! as HTMLTextAreaElement;
    if (textarea.value.trim() === '') {
      textarea.style.height = '55px';
      return;
    }
    if (textarea.value.length < title.length) {
      textarea.style.height = textarea.scrollHeight + 'px';
      return;
    }
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (title.trim() === '' || content?.trim() === '') return;
      setLoading(true);
      await axios.patch(`/api/notes/${note.id}`, { title, content });
      setLoading(false);
      toast.success('Note updated successfully!');
      router.push(`/notes/${note.id}`);
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col flex-1 gap-4'>
      <label htmlFor='title' className='sr-only'>
        Name
      </label>
      <textarea
        id='title'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          resizeTextarea();
        }}
        className='w-full h-[55px] overflow-hidden font-sans text-5xl font-bold tracking-wide transition-none border-none shadow-none outline-none resize-none'
        placeholder='Note Title'
        autoFocus
        required
      />
      <label htmlFor='content' className='sr-only'>
        Content
      </label>
      <textarea
        id='content'
        value={content!}
        onChange={(e) => setContent(e.target.value)}
        className='flex-1 w-full font-sans text-xl font-medium transition-none border-none shadow-none outline-none resize-none'
        placeholder='Write your note here...'
        required
      />
      <div className='sticky flex justify-end gap-4 bottom-12'>
        <Button
          type='button'
          className='w-fit bg-gray text-dark hover:bg-dark hover:text-light'
          onClick={() => router.back()}>
          Back
        </Button>
        <Button
          type='submit'
          className='w-fit bg-primary text-light hover:bg-dark'
          disabled={loading}>
          {loading ? (
            <div className='flex items-center justify-center'>
              <FaSpinner className='mr-2 animate-spin' />
              <span>Updating...</span>
            </div>
          ) : (
            <div className='flex items-center'>
              <FaSave className='mr-2' />
              <span>Update</span>
            </div>
          )}
        </Button>
      </div>
    </form>
  );
};

export default EditForm;
