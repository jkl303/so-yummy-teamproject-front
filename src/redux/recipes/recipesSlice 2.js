import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {} from './operations';

const recipesInitialState = {};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: recipesInitialState,
  extraReducers: builder => {
    builder.addCase();
  },
});

export const recipesReducer = recipesSlice.reducer;
