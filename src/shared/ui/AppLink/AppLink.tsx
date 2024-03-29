import { FC, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface IAppLink extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLink> = memo(({
  className,
  children,
  to,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}) => (
  <Link
    to={to}
    className={classNames(styles.AppLink, {}, [className, styles[theme]])}
    {...otherProps}
  >
    {children}
  </Link>
));

AppLink.displayName = 'AppLink';
