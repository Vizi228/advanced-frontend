import { User, userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/config/tests/testAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

describe('LoginByUsernameTest', () => {
  let loginByUsernameTest:TestAsyncThunk<
    User,
    { username: string; password: string },
    string
  >;

  beforeEach(() => {
    loginByUsernameTest = new TestAsyncThunk(loginByUsername);
  });

  test('loginByUsername action', async () => {
    const userValue = { username: 'user', id: 1 };
    loginByUsernameTest.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const result = await loginByUsernameTest.callThunk({ username: 'user', password: '123' });

    expect(loginByUsernameTest.api.post).toHaveBeenCalled();
    expect(loginByUsernameTest.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(loginByUsernameTest.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('failed status', async () => {
    loginByUsernameTest.api.post.mockReturnValue(Promise.reject({ status: 403 }));
    const result = await loginByUsernameTest.callThunk({ username: 'user', password: '123' });

    expect(loginByUsernameTest.api.post).toHaveBeenCalled();
    expect(loginByUsernameTest.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Wrong username or password');
  });
});
