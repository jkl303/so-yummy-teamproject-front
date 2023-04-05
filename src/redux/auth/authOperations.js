import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL; //https://soyummy-qk5m.onrender.com

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = token => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk();
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/users/register', credentials);
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }

export const logIn = createAsyncThunk();
//   'auth/signin', //в ТЗ по FRONT'у указано так
//   async (credentials, thunkAPI) => {
//     try {
//   const res = await axios.post('/users/login', credentials); //у нас сделано на login (заменим)
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  //   try {
  //     await axios.post('/users/logout');
  //     clearAuthHeader();
  //   } catch (e) {
  //     return thunkAPI.rejectWithValue(e.message);
  //   }
});

export const refreshUser = createAsyncThunk();
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }
//     try {
//       setAuthHeader(persistedToken);
//       const res = await axios.get('/users/current');
//       return res.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
