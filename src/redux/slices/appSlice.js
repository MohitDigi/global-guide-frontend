import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

// Default State
const initialState = {
  isReady: false,
}

// Redux Actions
const loadConfiguration = createAsyncThunk(
  'application/loadConfiguration',
  async (payload, thunkAPI) => {
    return thunkAPI.fulfillWithValue(true);
  }
);

const initializeApp = createAsyncThunk(
  'application/initializeApp',
  async (payload, thunkAPI) => {
    const isConfigLoaded = await thunkAPI.dispatch(loadConfiguration());
    if (!isConfigLoaded) {
      return thunkAPI.rejectWithValue('Unable to Load Config!!!');
    }

    return true;
  }
);


// Redux Slice
const appSlice = createSlice({
  name: 'application',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(initializeApp.pending, (state) => {
        state.isReady = false;
      })
  }
});

export default appSlice.reducer;
