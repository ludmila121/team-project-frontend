import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://team-project-backend-881k.onrender.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async (credential, thunkAPI) => {
  console.log('credential:', credential);
  try {
    const { data } = await axios.post('/api/auth/register', credential);
    token.set(data.token);
    return data;
  } catch (error) {
    const message = [409, 401, 400].includes(error?.response?.status)
      ? error?.response?.data?.message
      : `Request was failed with code ${error?.response?.status}`;

    Notify.failure(`Registration is not completed. ${message}`, {
      timeout: 5000,
    });
    return thunkAPI.rejectWithValue({
      message: error?.response?.data?.message,
      status: error?.response?.status,
    });
  }
});

export const login = createAsyncThunk('auth/login', async (credential, thunkAPI) => {
  try {
    const { data } = await axios.post('/api/auth/login', credential);
    token.set(data.token);
    return data;
  } catch (error) {
    const message = [409, 401, 400].includes(error?.response?.status)
      ? error?.response?.data?.message
      : `Request was failed with code ${error?.response?.status}`;

    Notify.failure(`Registration is not completed. ${message}`, {
      timeout: 5000,
    });
    return thunkAPI.rejectWithValue({
      message: error?.response?.data?.message,
      status: error?.response?.status,
    });
  }

});

export const logOut = createAsyncThunk('auth/logOut', async (credential, thunkAPI) => {
  try {
    const { data } = await axios.post('/api/auth/logout', credential);
    token.unset();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/api/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk('auth/update', async (credentials, thunkAPI) => {
    try {
      const {data} = await axios.patch('api/auth/updateProfile', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        Notify.failure('An error occurred while trying to update the data.')
      );
    }
  });
