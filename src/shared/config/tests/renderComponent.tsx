import { ReactNode } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import i18nForTests from 'shared/config/i18n/i18nForTests';

export interface RenderComponentOptions {
  route: string;
}

export const renderComponent = (
  children: ReactNode,
  options: RenderComponentOptions = { route: '/' },
): RenderResult => render(
  <MemoryRouter initialEntries={[options.route]}>
    <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
  </MemoryRouter>,
);
