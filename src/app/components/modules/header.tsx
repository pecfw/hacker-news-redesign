'use client';
import { useContext } from 'react';
import Image from 'next/image';
import hackerNewsLogo from '../../images/hacker-news-logo.svg';
import hackerNewsLogoDark from '../../images/hacker-news-logo-dark.svg';
import { ThemeContext } from '../../context/themeProvider';
import styles from '../../styles/components/header.module.scss';
import TabLink from '../elements/tabLink';
import ToggleDarkMode from '../elements/toggleDarkMode';

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styles.header}>
      <Image
        className={styles.logo}
        src={isDarkMode ? hackerNewsLogoDark : hackerNewsLogo}
        alt="Hacker News"
        priority
      />
      <div className={styles.tabs}>
        <TabLink href="/" label="latest" styles={styles} /> |{' '}
        <TabLink href="/starred" label="starred" styles={styles} />
      </div>
      <ToggleDarkMode
        isDarkMode={isDarkMode}
        setIsDarkMode={toggleTheme}
        styles={styles}
      />
    </div>
  );
};

export default Header;
