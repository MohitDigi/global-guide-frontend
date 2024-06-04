import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

import http from "../../libs/http";

// Default State
const initialState = {
  isLoading: false,
  // isAuthenticated: null,
  isAuthenticated: true,
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
export const loginUser = createAsyncThunk(
  "application/loginUser",
  async (payload, thunkAPI) => {
    console.log("slice ==", payload);
    try {
      const response = await http.post("/user/login", payload);
      console.log(response);
      // Handle API errors
      if (!response.data.success)
        return thunkAPI.rejectWithValue(response.data?.message);
      notification.success({
        message: "Login successfully",
      });

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      notification.error({
        message: "Invaild Creds",
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
        state.isAuthenticated = true;
      })
      .addCase(checkUserAuth.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      // login user
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = null;
      })
      .addCase(loginUser.fulfilled, (state, payload) => {
        state.isLoading = false;
        state.isAuthenticated = payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      // Logout User
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      });
  },
});

export default authSlice.reducer;
