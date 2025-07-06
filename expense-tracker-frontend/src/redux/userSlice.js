// src/redux/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch logged-in user's profile
export const fetchUser = createAsyncThunk('user/fetchUser', async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      return thunkAPI.rejectWithValue('No token found in localStorage');
    }

    const res = await axios.get('http://localhost:5000/api/user/profile', {
      headers: {
        Authorization: token  // ✅ not Bearer <token>
      }
    });

    return res.data; // should return user object
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || error.message || 'Failed to fetch user'
    );
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {
    logoutUser: (state) => {
      state.data = null;
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;

