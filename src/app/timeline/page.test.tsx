import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from './page';

test('TimeLine Page render', () => {
  render(<Page />);

  const text = screen.getByText('Capítulos da História');
  expect(text).toBeInTheDocument();
});