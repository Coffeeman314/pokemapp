import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import pokemonsAPI from '../services/pokemons';

const initialState = {
  loading: false,
  count: null,
  next: '',
  previous: '',
  results: [],
  error: null,
};

export const getPokemons = createAsyncThunk(
  'pokemons/getPokemons',
  async ({ offset, limit }, { rejectWithValue }) => {
    try {
      const { data } = await pokemonsAPI.getPokemons(offset, limit);

      // console.log(primaryRender);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response);
    }
  }
);

export const pokemons = createSlice({
  name: 'pokemons',
  initialState,
  extraReducers: {
    [getPokemons.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getPokemons.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.count = payload.count;
      state.next = payload.next;
      state.previous = payload.previous;
      state.results = payload.results;
      state.error = null;
    },
    [getPokemons.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
    },
  },
});

export default pokemons.reducer;
