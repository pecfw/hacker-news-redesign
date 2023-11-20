'use client';
import { ReactNode, FC } from 'react';
import { ThemeProvider } from './providers/themeProvider';
import { StarredProvider } from './providers/starredProvider';
import AppLayout from './appLayout';

const Providers: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider>
    <StarredProvider>
      <AppLayout>{children}</AppLayout>
    </StarredProvider>
  </ThemeProvider>
);

export default Providers;
