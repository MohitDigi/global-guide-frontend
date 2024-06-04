import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

import http from "../../libs/http";

// Default State
const initialState = {
  isLoading: false,
  isAuthenticated: null,
};

// Redux Actions
export const checkUserAuth = createAsyncThunk(
  "application/checkUserAuth",
  async (_, thunkAPI) => {
    try {
      const isCookiePresent = getCookie("accessToken");
      if (!isCookiePresent) return thunkAPI.rejectWithValue(null);

      return thunkAPI.fulfillWithValue(true);
    } catch (error) {
      notification.error({
        message: error.message,
      });

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "application/logoutUser",
  async (_, thunkAPI) => {
    deleteCookie("accessToken");

    return thunkAPI.fulfillWithValue(false);
  }
);

// Redux Slice
const authSlice = createSlice({
  name: "authentication",
  initialState,
  extraReducers: (builder) => {
    builder
      // check user auth
      .addCase(checkUserAuth.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = null;
      })
      .addCase(checkUserAuth.fulfilled, (state, payload) => {
        state.isLoading = false;
        state.isAuthenticated = payload;
      })
      .addCase(checkUserAuth.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      })

      // Logout User
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.otpLogin = false;
      });
  },
});

export default authSlice.reducer;
