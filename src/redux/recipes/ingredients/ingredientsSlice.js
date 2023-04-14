import { createSlice } from '@reduxjs/toolkit';
import { fetchIngredients } from './operations';

const initialState = {
  ingredients: [],
  isLoading: false,
  error: null,
};

const ingredientsSlice = createSlice({
  name: 'recipes',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchIngredients.pending, state => {state.isLoading = true})
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ingredients = action.payload;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
export const ingredientsReducer = ingredientsSlice.reducer;
