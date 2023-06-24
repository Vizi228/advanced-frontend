import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/types';

interface IStoreProvider {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

const StoreProvider: FC<IStoreProvider> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const navigate = useNavigate();
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate,
  );
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
