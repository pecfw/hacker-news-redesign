import { FC } from 'react';
import Image from 'next/image';
import darkToggle from '../../images/dark-toggle.svg';
import lightToggle from '../../images/light-toggle.svg';

const ToggleDarkMode: FC<{
  isDarkMode: boolean;
  setIsDarkMode: () => void;
  styles: any;
}> = ({ isDarkMode, setIsDarkMode, styles }) => (
  <Image
    onClick={setIsDarkMode}
    className={isDarkMode ? styles.light_toggle : styles.dark_toggle}
    src={isDarkMode ? lightToggle : darkToggle}
    alt="dark mode toggle"
    priority
  />
);

export default ToggleDarkMode;
