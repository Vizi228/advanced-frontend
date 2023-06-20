import { Story } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => function StoreDecorator(story: () => Story) {
  return <StoreProvider initialState={initialState}>{story()}</StoreProvider>;
};
