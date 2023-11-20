import { ReactNode, FC } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Hacker News Redesign',
  description: 'Get the latest news in a new format'
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <Providers>{children}</Providers>
  </html>
);

export default RootLayout;
