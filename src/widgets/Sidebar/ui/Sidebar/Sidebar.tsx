import { FC, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';

import { SidebarItemsList } from '../../model/items';
import SidebarItem from '../SidebarItem/SidebarItem';

import styles from './Sidebar.module.scss';

interface ISidebar {
  className?: string;
}

export const Sidebar: FC<ISidebar> = ({ className }) => {
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
        {SidebarItemsList.map((item) => (
          <SidebarItem key={item.to} collapsed={collapsed} item={item} />
        ))}
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
