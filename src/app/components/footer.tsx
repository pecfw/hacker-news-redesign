import styles from '../styles/components/footer.module.scss';

const renderLink = (href: string, label: string) => (
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
        {renderLink('/', 'latest')} | {renderLink('/starred', 'starred')}
      </div>
    </div>
  );
};

export default Footer;
