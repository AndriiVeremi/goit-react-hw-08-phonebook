// import { createSlice } from '@reduxjs/toolkit';
// import {
//   register,
//   logIn,
//   logOut,
//   refreshUser,
//   // clearAuthError,
// } from './auth-operation';

// const handlePending = state => {
//   state.error = null;
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// export const initialState = {
//     user: { name: null, email: null },
//     token: null,
//     isLoggedIn: false,
//     isRefreshing: false,
//     isLoading: false,
//     error: null,
//   };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [register.pending]: handlePending,
//     [register.rejected]: handleRejected,
//     [register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//       state.isLoading = false;
//       state.error = null;
//     },
//     [logIn.pending]: handlePending,
//     [logIn.rejected]: handleRejected,
//     [logIn.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//       state.isLoading = false;
//       state.error = null;
//     },
//     [logOut.pending]: handlePending,
//     [logOut.rejected]: handleRejected,
//     [logOut.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//       state.isLoading = false;
//       state.error = null;
//     },
//     [refreshUser.pending](state) {
//       state.isRefreshing = true;
//     },
//     [refreshUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.isRefreshing = false;
//       state.isLoading = false;
//       state.error = null;
//     },
//     [refreshUser.rejected](state) {
//       state.isRefreshing = false;
//     },
//   },
//   reducers: {
//     clearError: state => {
//       state.error = null;
//     },
//   },
// });
// // export const { clearError } = authSlice.actions;

// export const authReducer = authSlice.reducer;

//--------------------------------------------------------

import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import {
  register,
  logIn,
  logOut,
  refreshUser,
} from './auth-operation';

import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const customArrThunks = [register, logIn];

const status = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const fn = status => customArrThunks.map(el => el[status]);

const handlePending = state => {
  return state;
};

const handlePendingCurrentUser = state => {
  state.isRefreshing = true;
};

const handleRejected = state => {
  return state;
};

const handleRejectedCurrentUser = state => {
  state.isRefreshing = false;
};

const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleFulfilledLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleFulfilledCurrentUser = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    const { pending, fulfilled, rejected } = status;
    builder
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, handleFulfilledLogOut)
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, handlePendingCurrentUser)
      .addCase(refreshUser.fulfilled, handleFulfilledCurrentUser)
      .addCase(refreshUser.rejected, handleRejectedCurrentUser)
      .addMatcher(isAnyOf(...fn(pending)), handlePending)
      .addMatcher(isAnyOf(...fn(fulfilled)), handleFulfilled)
      .addMatcher(isAnyOf(...fn(rejected)), handleRejected);
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const authReducer = authSlice.reducer;
export default persistedAuthReducer;