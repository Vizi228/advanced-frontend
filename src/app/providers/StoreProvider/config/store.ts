import {
  configureStore,
  ReducersMapObject,
} from '@reduxjs/toolkit';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

import { createReducerManager } from './reducerManager';
import { IReducerManager, StateSchema } from './types';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?:ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const manager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: manager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  (store as typeof store & { reducerManager: IReducerManager }).reducerManager = manager;
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
