import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

import Header from './components/header';
import Footer from './components/footer';

const ubuntuMono = Open_Sans({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hacker News Redesign',
  description: 'Get the latest news in a new format'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntuMono.className}>
        {children}
        <hr />
        <Footer />
      </body>
    </html>
  );
}
