import { FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import styles from "./Navbar.module.scss";

interface INavbar {
  className?: string;
}

export const Navbar: FC<INavbar> = ({ className }) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink to='/' theme={AppLinkTheme.INVERTED} className={styles.mainLink}>Главная</AppLink>
        <AppLink to='/about' theme={AppLinkTheme.INVERTED}>О нас</AppLink>
      </div>
    </div>
  );
};