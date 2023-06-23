import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { getUserAuthData } from './getUserAuthData';

describe('GetUserAuthDataTest', () => {
  let state: DeepPartial<StateSchema>;

  beforeEach(() => {
    state = {
      user: {
        authData: {
          id: 1,
          username: 'user',
        },
      },
    };
  });

  test('should return full state', () => {
    expect(getUserAuthData(state as StateSchema)).toEqual({
      id: 1,
      username: 'user',
    });
  });
  test('check username', () => {
    expect(getUserAuthData(state as StateSchema).username).not.toBe('user1');
  });
  test('should return id', () => {
    expect(getUserAuthData(state as StateSchema).id).toBe(1);
  });
  test('should return undefined', () => {
    expect(getUserAuthData({} as StateSchema)).toEqual(undefined);
  });
});
