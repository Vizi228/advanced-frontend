import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

import styles from './Navbar.module.scss';

interface INavbar {
  className?: string;
}

export const Navbar: FC<INavbar> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links} />
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        size={ButtonSize.M}
        className={styles.links}
        onClick={onToggleModal}
      >
        {t('Log in')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {t('Loremispire asdasdasdddddddd ADSSDASD adsaddasads AD SDSADS')}
      </Modal>
    </div>
  );
};
