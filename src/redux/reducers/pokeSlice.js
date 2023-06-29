import { createSlice } from '@reduxjs/toolkit';
import fetchPokemonData from '../actions/pokeActions';

const pokeSlice = createSlice({
  name: 'pokemons',
  initialState: {
    cards: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonData.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload;
      })
      .addCase(fetchPokemonData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default pokeSlice.reducer;
