import { ReactFragment } from 'react';

import { ReducerList } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';

const defaultAsyncReducers: ReducerList = {
  login: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
  asyncReducers?: ReducerList,
) => function StoreDecorator(story: () => ReactFragment) {
  return (
    <StoreProvider
      initialState={initialState}
      asyncReducers={{ ...asyncReducers, ...defaultAsyncReducers }}
    >
      {story()}
    </StoreProvider>
  );
};
