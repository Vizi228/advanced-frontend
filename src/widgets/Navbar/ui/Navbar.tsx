import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';

import styles from './Navbar.module.scss';

interface INavbar {
  className?: string;
}

export const Navbar: FC<INavbar> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(styles.Navbar, {}, [className])}>
        <div className={styles.links} />
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          size={ButtonSize.M}
          className={styles.links}
          onClick={onLogout}
        >
          {t('Log out')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links} />
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        size={ButtonSize.M}
        className={styles.links}
        onClick={onOpenModal}
      >
        {t('Log in')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
