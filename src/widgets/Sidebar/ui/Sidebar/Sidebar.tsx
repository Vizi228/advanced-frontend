import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
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
    <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <button type="button" onClick={onToggle}>{t('Toggle')}</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.language} />
      </div>
    </div>
  );
};
