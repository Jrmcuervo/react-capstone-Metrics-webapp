import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchPokemonData = createAsyncThunk('cards/fetchPokemonData', async () => {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  return res.data.results;
});

export default fetchPokemonData;
