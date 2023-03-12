import { FC } from "react";

import { Button, ThemeButton } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";

import DarkIcon from "shared/assets/theme-dark.svg";
import LightIcon from "shared/assets/theme-light.svg";

interface IThemeSwitcher {
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcher> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme} theme={ThemeButton.CLEAR} className={classNames(styles.ThemeSwitcher, {}, [className])}>
      { theme === Theme.DARK ? <DarkIcon/> : <LightIcon/> }
    </Button>
  );
};