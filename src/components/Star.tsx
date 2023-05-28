'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Star = ({ id, starred }: { id: string; starred: boolean }) => {
  const [isStarred, setIsStarred] = React.useState(starred);
  const router = useRouter();

  const handleStar = async () => {
    try {
      setIsStarred(!isStarred);
      await axios.patch(`/api/notes/${id}`, { starred: !isStarred });
      router.refresh();
    } catch (error) {
      console.error(error);
      setIsStarred(!isStarred);
    }
  };

  return (
    <button className='flex items-center justify-center' onClick={handleStar}>
      {isStarred ? <AiFillStar size={20} /> : <AiOutlineStar size={20} />}
    </button>
  );
};

export default Star;
