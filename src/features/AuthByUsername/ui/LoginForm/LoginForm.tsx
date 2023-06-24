import {
  FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import styles from './LoginForm.module.scss';

export interface ILoginForm {
  onSuccess: () => void;
}

const LoginForm: FC<ILoginForm> = memo(({ onSuccess }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (username: string) => {
      dispatch(loginActions.setUsername(username));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (password: string) => {
      dispatch(loginActions.setPassword(password));
    },
    [dispatch],
  );

  const onLoginButton = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [username, password, dispatch, onSuccess]);

  useDynamicModuleLoad({ login: loginReducer });
  return (
    <div className={classNames(styles.LoginForm, {}, [])}>
      <Text title={t('Login')} />
      <Input
        className={styles.input}
        placeholder={t('Username')}
        value={username}
        onChange={onChangeUsername}
        autoFocus
      />
      <Input
        className={styles.input}
        placeholder={t('Password')}
        value={password}
        onChange={onChangePassword}
      />
      {error && <Text title={t(error)} theme={TextTheme.ERROR} />}
      <Button
        disabled={isLoading}
        theme={ButtonTheme.OUTLINE}
        className={styles.loginBtn}
        onClick={onLoginButton}
      >
        {t('Log in')}
      </Button>
    </div>
  );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
