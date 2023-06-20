import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  login: { username: 'user', password: '1234', isLoading: false },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  StoreDecorator({
    login: { username: 'user', password: '1234', isLoading: false },
  }),
  ThemeDecorator(Theme.DARK),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  login: { username: 'user', password: '1234', isLoading: true },
})];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [StoreDecorator({
  login: {
    username: 'user', password: '1234', isLoading: false, error: 'Error',
  },
})];
