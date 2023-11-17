import styles from '../page.module.css';

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
      Hacker News
      <div className={styles.links}>
        {renderLink('/', 'latest')} | {renderLink('/starred', 'starred')}
      </div>
    </div>
  );
};

export default Footer;
