import { FC } from 'react';

const RenderLink: FC<{ href: string; label: string; styles: any }> = ({
  href,
  label,
  styles
}) => (
  <a
    href={href}
    className={styles.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {label}
  </a>
);

export default RenderLink;
