import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";

import styles from "./LanguageSwitcher.module.scss";

interface ILanguageSwitcher {
  className?: string;
}

export const LanguageSwitcher: FC<ILanguageSwitcher> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk')
  }

  return (
    <Button onClick={toggleLanguage} theme={ThemeButton.CLEAR} className={classNames(styles.ThemeSwitcher, {}, [className])}>
      {t('Language')}
    </Button>
  );
};
