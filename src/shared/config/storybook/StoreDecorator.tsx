import { Story } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';

const defaultAsyncReducers = {
  login: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => function StoreDecorator(story: () => Story) {
  return (
    <StoreProvider
      initialState={initialState}
      asyncReducers={{ ...asyncReducers, ...defaultAsyncReducers }}
    >
      {story()}
    </StoreProvider>
  );
};
