import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((theme: Theme) => {
      const changedTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, changedTheme);
      return changedTheme;
    });
  };

  return { theme, toggleTheme };
}
