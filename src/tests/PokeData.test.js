import React from 'react';
import { render, screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import PokeData from '../components/PokeData';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

describe('PokeData', () => {
  beforeEach(() => {
    useParams.mockReturnValue({ pokeName: 'pikachu' });
  });

  it('displays loading message when data is not yet fetched', () => {
    render(<PokeData />);

    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  });

  it('displays pokemon details after data is fetched', async () => {
    const mockPokemon = {
      name: 'Pikachu',
      sprites: {
        front_default: 'pikachu.png',
      },
      types: [
        {
          type: {
            url: 'https://pokeapi.co/api/v2/type/13/',
          },
        },
      ],
    };

    const mockTypeDetails = {
      name: 'Electric',
      damage_relations: {
        double_damage_from: [],
        double_damage_to: [],
        half_damage_from: [],
        half_damage_to: [],
      },
    };

    global.fetch = jest.fn()
      .mockResolvedValueOnce({
        json: async () => mockPokemon,
      })
      .mockResolvedValueOnce({
        json: async () => mockTypeDetails,
      });

    render(<PokeData />);

    await screen.findByText('Pikachu');
    await screen.findByAltText('Pikachu');
    await screen.findByText('Type: Electric');

    const pokeName = screen.getByText('Pikachu');
    const pokemonImage = screen.getByAltText('Pikachu');
    const typeHeading = screen.getByText('Type: Electric');

    expect(pokeName).toBeInTheDocument();
    expect(pokemonImage).toBeInTheDocument();
    expect(typeHeading).toBeInTheDocument();
  });
});
