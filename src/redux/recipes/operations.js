import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://soyummy-qk5m.onrender.com/api';

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('recipes/ingredients/list');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
