import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginState } from './getLoginState';

describe('GetLoginStateTest', () => {
  let state: DeepPartial<StateSchema>;

  beforeEach(() => {
    state = {
      login: {
        password: 'password',
        username: 'username',
        isLoading: false,
        error: 'error',
      },
    };
  });

  test('should return full state', () => {
    expect(getLoginState(state as StateSchema)).toEqual({
      password: 'password',
      username: 'username',
      isLoading: false,
      error: 'error',
    });
  });
  test('should return false', () => {
    expect(getLoginState(state as StateSchema).isLoading).toBeFalsy();
  });
  test('should return username', () => {
    expect(getLoginState(state as StateSchema).username).toBe('username');
  });
  test('should return empty object', () => {
    expect(getLoginState({} as StateSchema)).toEqual({});
  });
});
