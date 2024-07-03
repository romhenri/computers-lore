import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from './page';

test('Binary Page render', () => {
  render(<Page />);

  const text = screen.getByText('Valores em Binário');
  expect(text).toBeInTheDocument();
});