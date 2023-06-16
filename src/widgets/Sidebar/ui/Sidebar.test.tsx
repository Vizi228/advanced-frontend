import { fireEvent, screen } from '@testing-library/react';

import { renderComponent } from 'shared/config/tests/renderComponent';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('check', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    renderComponent(<Sidebar />);
    const toggleButton = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
