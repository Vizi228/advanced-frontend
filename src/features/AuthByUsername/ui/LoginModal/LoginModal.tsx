import { FC } from 'react';

import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';

import LoginForm from '../LoginForm/LoginForm';

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
    <LoginForm />
  </Modal>
);

export default LoginModal;
