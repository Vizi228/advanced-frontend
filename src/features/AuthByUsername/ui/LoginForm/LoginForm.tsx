import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import Input from 'shared/ui/Input/Input';

import styles from './LoginForm.module.scss';

interface ILoginForm {}

const LoginForm: FC<ILoginForm> = () => {
  const { t } = useTranslation();

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <div className={classNames(styles.LoginForm, {}, [])}>
      <Input
        className={styles.input}
        placeholder={t('Username')}
        value={username}
        onChange={setUsername}
        autoFocus
      />
      <Input
        className={styles.input}
        placeholder={t('Password')}
        value={password}
        onChange={setPassword}
      />
      <Button className={styles.loginBtn}>{t('Log in')}</Button>
    </div>
  );
};

export default LoginForm;
