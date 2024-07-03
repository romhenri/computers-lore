import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from './page';

test('About Page render', () => {
  render(<Page />);

  const text = screen.getByText('Grupo Desblocados');
  expect(text).toBeInTheDocument();
});