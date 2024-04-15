import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUserRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loadUserSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
      state.user = null;
    },
    registerUserRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerUserSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
    },
    registerUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
      state.user = null;
    },
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
      state.user = null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
      state.error = null;
    },
    deleteUser: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
      state.error = null;
    },
  },
});
export const {
  loadUserRequest,
  loadUserSuccess,
  loadUserFail,
  registerUserRequest,
  registerUserSuccess,
  registerUserFail,
  loginRequest,
  loginSuccess,
  loginFail,
  logout,
  deleteUser,
} = authSlice.actions;
export default authSlice.reducer;
