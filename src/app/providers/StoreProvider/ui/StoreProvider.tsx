import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';

import { createReduxStore, StateSchema } from '../config/store';

interface IStoreProvider {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

const StoreProvider: FC<IStoreProvider> = ({ children, initialState }) => {
  const store = createReduxStore(initialState as StateSchema);
  return (
    <Provider store={store}>{children}</Provider>
  );
};

export default StoreProvider;
