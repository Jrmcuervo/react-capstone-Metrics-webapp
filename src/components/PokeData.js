import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PokeData = () => {
  const [pokemon, setPokemon] = useState(null);
  const [typeDetails, setTypeDetails] = useState(null);

  const { pokemonName } = useParams();

  useEffect(() => {
    const pokemonDetails = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
      setPokemon(data);

      const typeId = data.types[0].type.url.split('/').slice(-2, -1)[0];
      const typeResponse = await fetch(`https://pokeapi.co/api/v2/type/${typeId}`);
      const typeData = await typeResponse.json();
      setTypeDetails(typeData);
    };

    pokemonDetails();
  }, [pokemonName]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      {typeDetails && (
        <div>
          <h3>
            Type:
            {' '}
            {typeDetails.name}
          </h3>
          <p>
            Vulnerable to:
            {' '}
            {typeDetails.damage_relations.double_damage_from.map((type) => type.name).join(', ')}
          </p>
          <p>
            Efficient against:
            {' '}
            {typeDetails.damage_relations.double_damage_to.map((type) => type.name).join(', ')}
          </p>
          <p>
            Resistant to:
            {' '}
            {typeDetails.damage_relations.half_damage_from.map((type) => type.name).join(', ')}
          </p>
        </div>
      )}
    </div>
  );
};

export default PokeData;
