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
import PokeSearch from './PokeSearch';

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

  const pokeList = cards.filter((card) => card.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="pokemon-list">
      <div className="pokemon-list__total">
        Total Pokemons:
        {' '}
        {pokeList.length}
      </div>
      <PokeSearch searchTerm={searchTerm} onSearch={setSearchTerm} />
      <div className="pokemon-list__cards">
        {pokeList.map((card) => (
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
