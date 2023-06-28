import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './reducers/pokeSlice';

export default configureStore({
  reducer: {
    cards: cardsReducer,
  },
});
