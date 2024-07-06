import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChapCard from '../../components/struct/ChapCard';

test('ChapCard Component render', () => {
  render(
    <ChapCard
      name="Nitro 5"
      desc="Notebook Gamer"
      pathPage="/machines" 
    />
  );

  const text = screen.getByText('Notebook Gamer');
  expect(text).toBeInTheDocument();
});