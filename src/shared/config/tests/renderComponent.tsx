import { ReactNode } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import i18nForTests from 'shared/config/i18n/i18nForTests';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export interface RenderComponentOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const renderComponent = (
  children: ReactNode,
  options: RenderComponentOptions = {},
): RenderResult => {
  const { route = '/', initialState } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
