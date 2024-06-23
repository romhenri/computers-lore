// import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from './page';

test('HomePage render', () => {
  render(<Page />);

  const text = screen.getByText('Aprendizado dinâmico e interativo!');
  expect(text).toBeInTheDocument();
});