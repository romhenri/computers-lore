import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '../../providers/ThemeProvider';

test('ThemeProvider render', () => {
  render(
    <ThemeProvider>
      <div>Test</div>
    </ThemeProvider>
  );

  const text = screen.getByText('Test');
  expect(text).toBeInTheDocument();
});
