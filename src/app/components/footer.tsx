import { FC } from 'react';
import styles from '../styles/components/footer.module.scss';

const RenderLink: FC<{ href: string; label: string }> = ({ href, label }) => (
  <a
    href={href}
    className={styles.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {label}
  </a>
);

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_header}>Hacker News</div>
      <div className={styles.footer_links}>
        <RenderLink href="/" label="latest" /> |{' '}
        <RenderLink href="/starred" label="starred" />
      </div>
    </div>
  );
};

export default Footer;
