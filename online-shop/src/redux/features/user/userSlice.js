import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
    // دیگر اکشن‌ها مربوط به ثبت نام و مدیریت کاربران
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  // اکشن‌های مربوط به ثبت نام و مدیریت کاربران
} = authSlice.actions;

export default authSlice.reducer;
