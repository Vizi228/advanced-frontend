import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import styles from './PageError.module.scss';

interface IPageError {
  className?: string;
}

export const PageError: FC<IPageError> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <p>{t('Something went wrong')}</p>
      <Button onClick={reloadPage}>
        {t('Reload Page')}
      </Button>
    </div>
  );
};
