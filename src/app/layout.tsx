import { ReactNode, FC } from 'react';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import styles from './styles/global.module.scss';
import Providers from './providers';

const openSans = Open_Sans({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hacker News Redesign',
  description: 'Get the latest news in a new format'
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <body className={openSans.className}>
      <hr className={styles.header__hr} />
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
