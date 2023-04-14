import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './operations';

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchCategories.pending, state => {state.isLoading = true})
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
export const categoriesReducer = categoriesSlice.reducer;
