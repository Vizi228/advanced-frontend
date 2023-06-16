import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import HomeIcon from 'shared/assets/Vector.svg';
import AboutIcon from 'shared/assets/clarity_list-outline-badged.svg';

import styles from './Sidebar.module.scss';

interface ISidebar {
  className?: string;
}

export const Sidebar: FC<ISidebar> = ({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testId="sidebar"
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={styles.items}>
        <AppLink
          to={RoutePath.main}
          theme={AppLinkTheme.PRIMARY}
          className={styles.item}
        >
          <HomeIcon className={styles.icon} />
          <span className={styles.link}>
            {t('Main')}
          </span>
        </AppLink>
        <AppLink
          to={RoutePath.about}
          theme={AppLinkTheme.PRIMARY}
          className={styles.item}
        >
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>
            {t('About us')}
          </span>
        </AppLink>
      </div>
      <Button
        className={styles.collapseBtn}
        data-testId="sidebar-toggle"
        type="button"
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.language} short={collapsed} />
      </div>
    </div>
  );
};
