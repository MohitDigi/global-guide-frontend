import { combineReducers } from '@reduxjs/toolkit';

import appReducer from './slices/appSlice';
import authReducer from './slices/authSlice.js';


export default combineReducers({
  appReducer,
  authReducer,
 
});
