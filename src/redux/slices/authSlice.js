import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

import { http, adminHttp } from "../../libs/http";

// Default State
const initialState = {
  isLoading: false,
  isAuthenticated: null,
  profileData: null,
  companyList: null,
  collapsed: false,
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
      console.log(response.status);
      if (response.status === 200) {
        notification.success({
          message: "Login successfully",
        });
      }
      const accessToken = response.data.token;
      console.log("token", !!response.data.token);
      setCookie("accessToken", accessToken);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      notification.error({
        message: "Invaild Creds",
      });
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getCompanyList = createAsyncThunk(
  "application/getCompanyList",
  async (payload, thunkAPI) => {
    console.log("slice ==", payload);
    try {
      const response = await adminHttp.get("/company", payload);
      console.log(response.status);
      // if (response.status === 200) {
      //   notification.success({
      //     message: "Login successfully",
      //   });
      // }

      return thunkAPI.fulfillWithValue(response.data?.items);
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
export const toggleCollapsed = createAsyncThunk(
  "application/toggleCollapsed",
  async (collapsed) => {
    return collapsed;
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
      .addCase(checkUserAuth.fulfilled, (state, { payload }) => {
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
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuthenticated = !!payload.token;
        state.profileData = payload.user;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      // company list
      .addCase(getCompanyList.pending, (state) => {
        state.isLoading = true;
        state.companyList = null;
      })
      .addCase(getCompanyList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.companyList = payload;
        console.log("payload =======", payload);
      })
      .addCase(getCompanyList.rejected, (state) => {
        state.isLoading = false;
        state.companyList = false;
      })
      // Logout User
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.profileData = null;
      })
      // Toggle collapsed
      .addCase(toggleCollapsed.fulfilled, (state, action) => {
        state.collapsed = action.payload;
      });
  },
});

export default authSlice.reducer;
