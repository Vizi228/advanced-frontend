import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => function ThemeStory(story: () => Story) {
  return (
    <div className={`app ${theme}`}>
      {story()}
    </div>
  );
};
