"use client";
import { useContext } from "react";
import Image from "next/image";
import styles from "../styles/components/header.module.scss";
import hackerNewsLogo from "../images/hacker-news-logo.svg";
import { usePathname } from "next/navigation";
import darkToggle from "../images/dark-toggle.svg";
import lightToggle from "../images/light-toggle.svg";
import { ThemeContext } from "../themeProvider";

const TabLink: React.FC<{ href: string; label: string }> = ({
  href,
  label,
}) => {
  const activeTab = usePathname() === href ? `${styles.active_tab}` : "";

  return (
    <a href={href} className={activeTab}>
      {label}
    </a>
  );
};

const ToggleImage: React.FC<{
  isDarkmode: boolean;
  setIsDarkmode: () => void;
}> = ({ isDarkmode, setIsDarkmode }) => {
  return (
    <Image
      onClick={setIsDarkmode}
      className={isDarkmode ? styles.light_toggle : styles.dark_toggle}
      src={isDarkmode ? lightToggle : darkToggle}
      alt="dark mode toggle"
      priority
    />
  );
};



export default function Header() {
  const { isDarkmode,  toggleTheme} = useContext(ThemeContext);
  return (
    <div className={styles.header}>
      <Image
        className={styles.logo}
        src={hackerNewsLogo}
        alt="Hacker News"
        priority
      />
      <div className={styles.tabs}>
        <TabLink href="/" label="latest" /> |{" "}
        <TabLink href="/starred" label="starred" />
      </div>
      <ToggleImage isDarkmode={isDarkmode} setIsDarkmode={toggleTheme} />
    </div>
  );
}
