import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PokeCards from '../components/PokeCards';

jest.mock('react-router-dom', () => ({
  Link: jest.fn(({ to, children }) => <a href={to}>{children}</a>),
}));

const mockStore = configureStore([thunk]);

describe('PokeCards', () => {
  let store;
  const initialState = {
    cards: {
      cards: [],
      loading: false,
      error: null,
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  it('displays loading message when loading is true', () => {
    const loadingState = {
      ...initialState,
      cards: {
        ...initialState.cards,
        loading: true,
      },
    };
    store = mockStore(loadingState);

    render(
      <Provider store={store}>
        <PokeCards />
      </Provider>,
    );

    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  });

  it('displays total number of cards and search input when not loading', () => {
    const cards = [
      { name: 'Card 1', url: '/details/card1' },
      { name: 'Card 2', url: '/details/card2' },
      { name: 'Card 3', url: '/details/card3' },
    ];
    const loadedState = {
      ...initialState,
      cards: {
        ...initialState.cards,
        cards,
      },
    };
    store = mockStore(loadedState);

    render(
      <Provider store={store}>
        <PokeCards />
      </Provider>,
    );

    const totalCards = screen.getByText(`Total Pokemons: ${cards.length}`);
    const searchInput = screen.getByPlaceholderText('Find your favorite...');

    expect(totalCards).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });
});
