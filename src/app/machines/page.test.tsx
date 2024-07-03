import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from './page';

test('Machines Page render', () => {
  render(<Page />);

  const text = screen.getByText('Princípais Máquinas');
  expect(text).toBeInTheDocument();
});