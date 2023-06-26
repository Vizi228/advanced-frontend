import { ReactFragment } from 'react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => function ThemeStory(
  story: () => ReactFragment,
) {
  return <div className={`app ${theme}`}>{story()}</div>;
};
