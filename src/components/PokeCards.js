/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchPokemonData from '../redux/actions/pokeActions';
import {
  selectCards,
  selectLoading,
  selectError,
} from '../redux/selectors/pokeSelectors';

const PokeCards = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchPokemonData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  const filteredCards = cards.filter((card) => card.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <div>
        Total Pokemons:
        {' '}
        {filteredCards.length}
      </div>
      <input
        type="text"
        placeholder="Find your favorite..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredCards.map((card) => (
          <div key={card.url}>
            <Link to={`/details/${card.name}`}>
              <button type="button">Details</button>
            </Link>
            {card.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokeCards;
