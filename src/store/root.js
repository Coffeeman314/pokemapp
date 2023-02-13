import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from './details.reducer';
import pokemonsReducer from './pokemons.reducer';

export const store = configureStore({
  reducer: { pokemons: pokemonsReducer, details: detailsReducer },
});
