import { Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import Navbar from '@/components/Navbar';

import './globals.css';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={poppins.className}>
      <body>
        <Toaster />
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
