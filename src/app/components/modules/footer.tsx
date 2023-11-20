import styles from '../../styles/components/footer.module.scss';
import RenderLink from '../elements/link';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <h3>Hacker News</h3>
      </div>
      <div className={styles.footer_links}>
        <RenderLink href="/" label="latest" styles={styles} /> |{' '}
        <RenderLink href="/starred" label="starred" styles={styles} />
      </div>
    </div>
  );
};

export default Footer;
