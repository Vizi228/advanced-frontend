import { FC, useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import styles from './Sidebar.module.scss'

import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";

interface ISidebar {
  className?: string;
}

export const Sidebar: FC<ISidebar> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.language} />
      </div>
    </div>
  );
};