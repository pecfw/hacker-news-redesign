import { FC } from 'react';
import { usePathname } from 'next/navigation';

const TabLink: FC<{ href: string; label: string; styles: any }> = ({
  href,
  label,
  styles
}) => {
  const isActiveTab = usePathname() === href;
  const activeTabClass = isActiveTab ? styles.active_tab : '';

  return (
    <a href={href} className={activeTabClass}>
      {label}
    </a>
  );
};

export default TabLink;
