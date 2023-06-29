import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchPokemonData = createAsyncThunk('cards/fetchPokemonData', async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await res.json();
  return data.results;
});

export default fetchPokemonData;
