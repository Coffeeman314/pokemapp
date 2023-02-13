import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import detailsAPI from '../services/details';

const initialState = {
  loading: false,
  name: '',
  sprites: '',
  abilities: [],
  types: [],
  error: null,
};

export const getDetails = createAsyncThunk(
  'details/getDetails',
  async ({ pokemonNumber }, { rejectWithValue }) => {
    try {
      console.log(pokemonNumber);
      const { data } = await detailsAPI.getDetails(pokemonNumber);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response);
    }
  }
);

export const details = createSlice({
  name: 'details',
  initialState,
  extraReducers: {
    [getDetails.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.name = payload.name;
      state.sprites = payload.sprites.front_default;
      state.abilities = payload.abilities;
      state.types = payload.types;
      state.error = null;
    },
    [getDetails.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
    },
  },
});

export default details.reducer;
