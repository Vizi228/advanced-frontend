import { configureStore } from '@reduxjs/toolkit';

import { counterReducer, CounterSchema } from 'entities/Counter';
import { userReducer, UserSchema } from 'entities/User';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
}

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
      user: userReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
