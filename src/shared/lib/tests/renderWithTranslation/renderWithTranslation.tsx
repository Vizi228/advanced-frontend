import { ReactNode } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import i18nForTests from 'shared/config/i18n/i18nForTests';

export const renderWithTranslation = (children: ReactNode): RenderResult => (
  render(<I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>)
);
