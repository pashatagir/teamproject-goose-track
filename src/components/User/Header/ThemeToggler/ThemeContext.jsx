import { createContext, useState, useEffect, useContext } from 'react';
import { themes, dark } from 'styles/themes';

export const ThemeContext = createContext();
export const useThemeColors = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const [type, setType] = useState(
    () => window.localStorage.getItem('theme') ?? 'light'
  );
  const [theme, setTheme] = useState(themes);

  useEffect(() => {
    window.localStorage.theme = type;
    if (type === 'light') {
      setTheme(themes);
    } else if (type === 'dark') {
      setTheme(dark);
    }
  }, [type]);

  const changeTheme = () => {
    if (type === 'light') {
      setType('dark');
    } else if (type === 'dark') {
      setType('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, type, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
