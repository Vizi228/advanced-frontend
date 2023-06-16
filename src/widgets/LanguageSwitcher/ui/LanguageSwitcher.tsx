import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ILanguageSwitcher {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher: FC<ILanguageSwitcher> = ({ className, short }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk');
  };

  return (
    <Button
      onClick={toggleLanguage}
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
    >
      {short ? t('Lan') : t('Language')}
    </Button>
  );
};
