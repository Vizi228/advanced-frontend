import StoreProvider from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import {
  StateSchema, StateSchemaKey, ReduxStoreWithManager, ThunkConfig,
} from './config/types';

export {
  StoreProvider,
  createReduxStore,
  AppDispatch,
  StateSchema,
  StateSchemaKey,
  ReduxStoreWithManager,
  ThunkConfig,
};
