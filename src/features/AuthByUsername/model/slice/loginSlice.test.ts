import { DeepPartial } from '@reduxjs/toolkit';

import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from './loginSlice';

describe('LoginSliceTest', () => {
  let state: DeepPartial<LoginSchema>;

  beforeEach(() => {
    state = {
      password: 'password',
      username: 'username',
      isLoading: false,
      error: 'error',
    };
  });

  test('test set username', () => {
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('user')).username).toBe(
      'user',
    );
  });
  test('test set password', () => {
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('1234')).password).toBe(
      '1234',
    );
  });
});
