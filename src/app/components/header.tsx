import Image from 'next/image';
import styles from '../page.module.css';
import hackerNewsLogo from '../images/hacker-news-logo.svg';

const TabLink: React.FC<{ href: string; label: string }> = ({
  href,
  label
}) => {
  return (
    <a href={href} className={styles.tabLink}>
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
