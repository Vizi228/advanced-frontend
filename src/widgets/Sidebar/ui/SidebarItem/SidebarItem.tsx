import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';

import { ISidebarItem } from '../../model/items';

import styles from './SidebarItem.module.scss';

type SidebarItemProps = { item: ISidebarItem; collapsed: boolean };

const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {
  const { t } = useTranslation();

  return (
    <AppLink
      to={item.to}
      theme={AppLinkTheme.PRIMARY}
      className={classNames(
        styles.SidebarItem,
        { [styles.collapsed]: collapsed },
        [],
      )}
    >
      <item.icon className={styles.icon} />
      <span className={styles.link}>{t(item.name)}</span>
    </AppLink>
  );
});

SidebarItem.displayName = 'SidebarItem';

export default SidebarItem;
