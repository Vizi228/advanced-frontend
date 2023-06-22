import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from 'app/providers/StoreProvider';

type ReducerList = Partial<Record<StateSchemaKey, Reducer>>;

export function useDynamicModuleLoad(
  reducers: ReducerList,
  removeAfterUnmount = true,
): void {
  const store = useStore() as ReduxStoreWithManager;
  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]) => {
      store.reducerManager.add(key as StateSchemaKey, reducer);
    });

    return () => {
      if (removeAfterUnmount) {
        Object.keys(reducers).forEach((key) => {
          store.reducerManager.remove(key as StateSchemaKey);
        });
      }
    };
    // eslint-disable-next-line
  }, []);
}
