'use client';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, signupAPI } from "@/Api/authAPI";


export const loginStart = createAsyncThunk(
  "auth/loginStart",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await loginAPI(credentials);
     
      return response.data;
    } catch (error) {
     
      return rejectWithValue(error.response.data);
    }
  }
);


export const signupStart = createAsyncThunk(
  "auth/signupStart",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await signupAPI(userData);
      
    } catch (error) {
      
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null, 
    isLoading: false, 
    error: null, 
  },
  reducers: {
    
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    
    builder.addMatcher(
      (action) =>
        action.type.endsWith("/pending") && action.type.includes("auth"),
      (state) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    
    builder.addMatcher(
      (action) =>
        action.type.endsWith("/fulfilled") && action.type.includes("auth"),
      (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      }
    );
    
    builder.addMatcher(
      (action) =>
        action.type.endsWith("/rejected") && action.type.includes("auth"),
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
