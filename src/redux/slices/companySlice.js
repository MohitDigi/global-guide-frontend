import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";

import { adminHttp } from "../../libs/http";

// Default State
const initialState = {
  isLoading: false,
  data: null,
  singleCompanyData: {},
  createCompanyData: {},
  updateCompanyData: {},
};

// Redux Actions
export const getCompanyList = createAsyncThunk(
  "application/getCompanyList",
  async (payload, thunkAPI) => {
    try {
      const response = await adminHttp.get(`/company`);
      console.log(response.data,"jsds''''");
      return thunkAPI.fulfillWithValue(response.data?.items);
    } catch (error) {
      notification.error({
        message: error.message,
      });

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOneCompany = createAsyncThunk(
  "application/getOneCompany",
  async (id, thunkAPI) => {
    try {
      const response = await adminHttp.get(`/company/${id}`);

      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      notification.error({
        message: error.message,
      });

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createCompany = createAsyncThunk(
  "application/createCompany",
  async (payload, thunkAPI) => {
    try {
      const response = await adminHttp.post("/company", payload);
      if (!response.data.success)
        return thunkAPI.rejectWithValue(response.data.msg);

      notification.success({
        message: "company created successfully",
      });
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      notification.error({
        message: error.response.data.message,
      });

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateCompany = createAsyncThunk(
  "application/updateCompany",
  async (requestData, thunkAPI) => {
    const { id, data } = requestData;
    try {
      const response = await adminHttp.put(`/company/${id}`, data);

      if (!response.data.success)
        return thunkAPI.rejectWithValue(response.data.msg);

      notification.success({
        message: "company updated successfully",
      });
      return thunkAPI.fulfillWithValue(response.data?.data);
    } catch (error) {
      notification.error({
        message: error.message,
      });

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteCompany = createAsyncThunk(
  "application/deleteCompany",
  async (id, thunkAPI) => {
    try {
      const response = await adminHttp.delete(`/company/${id}`);
      if (!response.data.success)
        return thunkAPI.rejectWithValue(response.data.msg);

      notification.success({
        message: "company deleted successfully",
      });
      return thunkAPI.fulfillWithValue(response.data?.data);
    } catch (error) {
      notification.error({
        message: error.message,
      });

      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Redux Slice
const companySlice = createSlice({
  name: "company",
  initialState,
  extraReducers: (builder) => {
    builder
      // get company list
      .addCase(getCompanyList.pending, (state) => {
        state.isLoading = true;
        state.data = null;
      })
      .addCase(getCompanyList.fulfilled, (state, payload) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(getCompanyList.rejected, (state) => {
        state.isLoading = false;
        state.data = null;
      })
      // get single company details
      .addCase(getOneCompany.pending, (state) => {
        state.isLoading = true;
        state.singleCompanyData = {};
      })
      .addCase(getOneCompany.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleCompanyData = action.payload;
      })
      .addCase(getOneCompany.rejected, (state) => {
        state.isLoading = false;
        state.singleCompanyData = {};
      })
      // create company
      .addCase(createCompany.pending, (state) => {
        state.isLoading = true;
        state.createCompanyData = {};
      })
      .addCase(createCompany.fulfilled, (state, action) => {
        state.isLoading = false;
        state.createCompanyData = action.payload;
      })
      .addCase(createCompany.rejected, (state) => {
        state.isLoading = false;
        state.createCompanyData = {};
      })
      // update company
      .addCase(updateCompany.pending, (state) => {
        state.isLoading = true;
        state.updateCompanyData = {};
      })
      .addCase(updateCompany.fulfilled, (state, action) => {
        state.isLoading = false;
        state.updateCompanyData = action.payload;
      })
      .addCase(updateCompany.rejected, (state) => {
        state.isLoading = false;
        state.updateCompanyData = {};
      })
      // delete company
      .addCase(deleteCompany.pending, (state) => {
        state.isLoading = true;
        state.deleteCompanyData = {};
      })
      .addCase(deleteCompany.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deleteCompanyData = action.payload;
      })
      .addCase(deleteCompany.rejected, (state) => {
        state.isLoading = false;
        state.deleteCompanyData = {};
      });
  },
});

export default companySlice.reducer;
