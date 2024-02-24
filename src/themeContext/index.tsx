import React, { createContext, ReactNode, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type ThemeContextProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

type ThemeProviderProps = {
  children: ReactNode;
};
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const localTheme = window.localStorage.getItem('theme');
  const [theme, setTheme] = useState<Theme>((localTheme as Theme) || 'light');

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
