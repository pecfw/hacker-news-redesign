import { createContext, useState } from "react";

interface ThemeContextType {
    isDarkmode: boolean,
    toggleTheme: () => void,
}

export const ThemeContext = createContext<ThemeContextType>({isDarkmode: false, toggleTheme: () => {}});

export const ThemeProvider = ({ children } : { children: React.ReactNode }) => {
  const [isDarkmode, setIsDarkmode] = useState(false);

  const toggleTheme = () => {
    setIsDarkmode(!isDarkmode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkmode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
