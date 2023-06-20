import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
  { rejectValue: string }
>('login/loginByUsername', async (authData, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:8000/login', authData);
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Wrong username or password');
  }
});
