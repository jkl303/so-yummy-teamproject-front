import { authInitialState } from "./authSlice";

export const signUpFulfilledReducer = (state, { payload }) => {
  state.user = payload.user;
};

export const logInFulfilledReducer = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const logOutFulfilledReducer = state => {
  state.user = authInitialState.user;
  state.token = null;
  state.isLoggedIn = false;
};

export const refreshUserPendingReducer = state => {
  state.isRefreshing = true;
};

export const refreshUserFulfilledReducer = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const refreshUserRejectedReducer = state => {
  state.isRefreshing = false;
};

export const anyPendingReducer = state => {
  state.isLoading = true;
  state.error = null;
};

export const anyFulfilledReducer = state => {
  state.isLoading = false;
};

export const anyRejectedReducer = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};
