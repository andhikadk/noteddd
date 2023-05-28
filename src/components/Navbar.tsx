import Link from 'next/link';

const navLinks = [
  {
    left: [
      {
        title: 'Noteddd',
        url: '/',
      },
      {
        title: 'Starred',
        url: '/starred',
      },
    ],
  },
  {
    right: [
      {
        title: 'Profile',
        url: '/profile',
      },
    ],
  },
];

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-10 flex flex-row items-center justify-between h-16 gap-4 px-4 font-semibold bg-dark'>
      {navLinks.map((link, i) => (
        // <Link
        //   key={link.title}
        //   href={link.url}
        //   className='px-4 py-2 text-white rounded-md hover:bg-primary'>
        //   {link.title}
        // </Link>
        <div
          key={i}
          className='flex flex-row items-center justify-between h-16 gap-4 px-4 font-semibold bg-dark'>
          {link.left?.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              className='px-4 py-2 text-white rounded-md hover:bg-primary'>
              {link.title}
            </Link>
          ))}
          {link.right?.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              className='px-4 py-2 text-white rounded-md hover:bg-primary'>
              {link.title}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
