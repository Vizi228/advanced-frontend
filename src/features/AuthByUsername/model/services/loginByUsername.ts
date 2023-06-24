import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User, userActions } from 'entities/User';

interface ILoginByUsername {
  username: string;
  password: string;
}

enum LoginError {

}

export const loginByUsername = createAsyncThunk<
  User,
  ILoginByUsername,
  ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkAPI) => {
  const { extra: { api }, rejectWithValue, dispatch } = thunkAPI;
  try {
    const response = await api.post<User>('login', authData);
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (error) {
    return rejectWithValue('Wrong username or password');
  }
});
