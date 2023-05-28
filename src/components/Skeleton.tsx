const Skeleton = ({ limit }: { limit: number }) => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {Array.from({ length: limit }).map((_, i) => (
        <div
          key={i}
          className='flex flex-col w-full col-span-1 gap-2 p-4 rounded-md bg-gray animate-pulse'>
          <div className='w-1/3 h-3 mb-2 rounded-lg opacity-30 bg-dark animate-pulse'></div>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className='w-full h-2 rounded-lg opacity-50 bg-light animate-pulse'></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
