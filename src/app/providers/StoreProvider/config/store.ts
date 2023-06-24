import {
  configureStore,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { api } from 'shared/api/api';

import { createReducerManager } from './reducerManager';
import { IReducerManager, StateSchema } from './types';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?:ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const manager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: manager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api,
          navigate,
        },
      },
    }),
  });

  (store as typeof store & { reducerManager: IReducerManager }).reducerManager = manager;
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
