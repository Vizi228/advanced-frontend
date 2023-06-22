import {
  CombinedState, EnhancedStore, PayloadAction, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  login?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (
    state: StateSchema,
    action: PayloadAction<unknown>
  ) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore {
  reducerManager: IReducerManager
}
