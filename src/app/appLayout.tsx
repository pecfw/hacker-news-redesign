'use client';
import React, { useContext, FC, ReactNode } from 'react';
import './globals.css';
import styles from './styles/global.module.scss';
import typography from './styles/typography.module.scss';
import state_theme from './styles/state.themes.module.scss';
import { Open_Sans } from 'next/font/google';
import Header from './components/modules/header';
import Footer from './components/modules/footer';
import { ThemeContext } from './context/themeProvider';

const openSans = Open_Sans({ weight: '400', subsets: ['latin'] });

const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <body
      className={`${openSans.className}  ${
        isDarkMode ? state_theme.dark_theme : state_theme.light_theme
      }`}
    >
      <hr className={styles.header__hr} />
      <main
        className={`${styles.main} ${typography.typography}   ${
          isDarkMode ? state_theme.dark_theme : state_theme.light_theme
        }`}
      >
        <Header />
        {children}
        <hr />
        <Footer />
      </main>
    </body>
  );
};

export default AppLayout;
