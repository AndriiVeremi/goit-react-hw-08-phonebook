import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
	baseURL: 'https://connections-api.herokuapp.com',
})

const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
  instance.defaults.headers.common.Authorization = '';
};


export const register = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {   
      const response = await instance.post('/users/signup', data);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const logIn = createAsyncThunk(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      const response = await instance.post('/users/login', data);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await instance.post('/users/logout');
    clearToken();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});


export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setToken(persistedToken);
      const response = await instance.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const clearAuthError = () => ({
  type: 'auth/clearError',
});





