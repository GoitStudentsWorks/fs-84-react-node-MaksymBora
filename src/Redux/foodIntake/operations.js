import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFoodIntake = createAsyncThunk(
  'foodIntake/get',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistToken = state.auth.token;
      if (!persistToken) {
        return thunkAPI.rejectWithValue('No token');
      }

      const response = await axios.post('api/user/food-intake');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postFoodIntake = createAsyncThunk(
  'foodIntake/post',
  async (credentials, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistToken = state.auth.token;
      if (!persistToken) {
        return thunkAPI.rejectWithValue('No token');
      }

      const response = await axios.post('api/user/food-intake', credentials);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateFoodIntake = createAsyncThunk(
  'foodIntake/update',

  async ({ ident, type, product }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistToken = state.auth.token;
      if (!persistToken) {
        return thunkAPI.rejectWithValue('No token');
      }

      const response = await axios.put(`api/user/food-intake/${ident}`, {
        type,
        product,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
