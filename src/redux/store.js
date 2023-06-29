import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './reducers/pokeSlice';

export default configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
});
