import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../auth/authOperations';

export const fetchCategories = createAsyncThunk(
  'categories/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('recipes/category-list');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
