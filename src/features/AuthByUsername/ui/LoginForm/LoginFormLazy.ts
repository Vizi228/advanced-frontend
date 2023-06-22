import { FC, lazy } from 'react';
import { ILoginForm } from './LoginForm';

export const LoginFormLazy = lazy <FC<ILoginForm>>(() => import('./LoginForm'));
