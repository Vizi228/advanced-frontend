import {
  FC, useEffect, useMemo, useState,
} from 'react';

import { THEME_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

import { Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
