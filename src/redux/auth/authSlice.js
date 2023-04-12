import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, refreshUser } from './authOperations';
import {
  signUpFulfilledReducer,
  logInFulfilledReducer,
  logOutFulfilledReducer,
  refreshUserPendingReducer,
  refreshUserFulfilledReducer,
  refreshUserRejectedReducer,
  anyPendingReducer,
  anyFulfilledReducer,
  anyRejectedReducer,
} from './authSliceRedusers';

const extraOperations = [signUp, logIn, logOut, refreshUser];

const getOperations = type =>
  isAnyOf(...extraOperations.map(operation => operation[type]));

export const authInitialState = {
  user: { id: null, name: null, email: null, avatarURL: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = {
        id: payload.id,
        name: payload.name,
        email: payload.email,
        avatarURL: payload.avatarURL,
      };
      state.token = payload.token;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, signUpFulfilledReducer)
      .addCase(logIn.fulfilled, logInFulfilledReducer)
      .addCase(logOut.fulfilled, logOutFulfilledReducer)
      .addCase(refreshUser.pending, refreshUserPendingReducer)
      .addCase(refreshUser.fulfilled, refreshUserFulfilledReducer)
      .addCase(refreshUser.rejected, refreshUserRejectedReducer)
      .addMatcher(getOperations('pending'), anyPendingReducer)
      .addMatcher(getOperations('fulfilled'), anyFulfilledReducer)
      .addMatcher(getOperations('rejected'), anyRejectedReducer);
  },
});

export const { setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
