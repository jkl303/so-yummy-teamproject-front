import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchResipes =
  createAsyncThunk();
  //   'recipes/fetchAll',
  //   async (_, thunkAPI) => {
  //     try {
  //       const response = await axios.get('/resipes');
  //       return response.data;
  //     } catch (e) {
  //       return thunkAPI.rejectWithValue(e.message);
  //     }
  //   }
