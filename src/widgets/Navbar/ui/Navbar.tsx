import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import styles from './Navbar.module.scss';

interface INavbar {
  className?: string;
}

export const Navbar: FC<INavbar> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink
          to="/"
          theme={AppLinkTheme.PRIMARY}
          className={styles.mainLink}
        >
          {t('Main')}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.PRIMARY}>
          {t('About us')}
        </AppLink>
      </div>
    </div>
  );
};
