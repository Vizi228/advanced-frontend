import { configureStore } from '@reduxjs/toolkit';

import { counterReducer, CounterSchema } from 'entities/Counter';
import { userReducer, UserSchema } from 'entities/User';
import { loginReducer, LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  login?: LoginSchema
}

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
      user: userReducer,
      login: loginReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
