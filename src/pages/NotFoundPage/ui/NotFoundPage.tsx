import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import styles from './NotFoundPage.module.scss';

interface INotFoundPage {}

const NotFoundPage: FC<INotFoundPage> = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.NotFoundPage)}>{t('Page not found')}</div>
  );
};

export default NotFoundPage;
