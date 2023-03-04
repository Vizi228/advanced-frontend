import { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";

const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {},  [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О нас</Link>
      <AppRouter />
    </div>
  );
};

export default App