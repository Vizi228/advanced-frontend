import { FC, Suspense } from 'react';

import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';

import { LoginFormLazy } from '../LoginForm/LoginFormLazy';

import styles from './LoginModal.module.scss';

interface ILoginModal {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: FC<ILoginModal> = ({ className, isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    className={classNames(styles.LoginModal, {}, [className])}
    lazy
  >
    <Suspense fallback={<Loader />}>
      <LoginFormLazy />
    </Suspense>
  </Modal>
);

export default LoginModal;
