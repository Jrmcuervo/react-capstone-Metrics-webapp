import React from 'react';
import { render, screen } from '@testing-library/react';
import PokeData from '../components/PokeData';

it('displays loading message when data is not yet fetched', () => {
  render(<PokeData />);

  const loadingMessage = screen.getByText('Loading...');
  expect(loadingMessage).toBeInTheDocument();
});
