'use client';
import Image from 'next/image';
import styles from '../styles/components/header.module.scss';
import hackerNewsLogo from '../images/hacker-news-logo.svg';
import { usePathname } from 'next/navigation';

const TabLink: React.FC<{ href: string; label: string }> = ({
  href,
  label
}) => {
 const activeTab = usePathname() === href ? `${styles.active_tab}` : '';

  return (
    <a href={href} className={activeTab}>
      {label}
    </a>
  );
};

export default function Header() {
  return (
    <div className={styles.header}>
      <Image
        className={styles.logo}
        src={hackerNewsLogo}
        alt="Hacker News"
        priority
      />
      <div className={styles.tabs}>
        <TabLink href="/" label="latest" /> |{' '}
        <TabLink href="/starred" label="starred" />
      </div>
    </div>
  );
}
