import {
  configureStore,
  ReducersMapObject,
} from '@reduxjs/toolkit';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

import { createReducerManager } from './reducerManager';
import { ReduxStoreWithManager, StateSchema } from './types';

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
  }) as ReduxStoreWithManager;

  store.reducerManager = manager;
  return store;
}
