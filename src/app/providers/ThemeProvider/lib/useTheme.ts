import { useContext } from 'react';

import { THEME_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((theme: Theme) => {
      const changedTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      localStorage.setItem(THEME_LOCALSTORAGE_KEY, changedTheme);
      return changedTheme;
    });
  };

  return { theme, toggleTheme };
}
