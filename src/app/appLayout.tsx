'use client';
import React, { useContext, FC, ReactNode } from 'react';
import './globals.css';
import styles from './styles/global.module.scss';
import typography from './styles/typography.module.scss';
import state_theme from './styles/state.themes.module.scss';

import Header from './components/header';
import Footer from './components/footer';
import { ThemeContext } from './providers/themeProvider';

const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { isDarkmode } = useContext(ThemeContext);

  return (
    <main
      className={`${styles.main} ${typography.typography} ${
        isDarkmode ? state_theme.dark_theme : state_theme.light_theme
      }`}
    >
      <Header />
      {children}
      <hr />
      <Footer />
    </main>
  );
};

export default AppLayout;
