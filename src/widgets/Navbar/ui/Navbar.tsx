import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Navbar.module.scss';

interface INavbar {
  className?: string;
}

export const Navbar: FC<INavbar> = ({ className }) => (
  <div className={classNames(styles.Navbar, {}, [className])}>
    <div className={styles.links} />
  </div>
);
