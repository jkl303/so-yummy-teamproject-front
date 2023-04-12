import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../auth/authOperations';

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('recipes/ingredients/list');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
