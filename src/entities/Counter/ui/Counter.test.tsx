import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';

import { renderComponent } from 'shared/config/tests/renderComponent';
import Counter from './Counter';

describe('Counter', () => {
  beforeEach(() => {
    renderComponent(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
  });

  test('check', () => {
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', () => {
    userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', () => {
    userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
