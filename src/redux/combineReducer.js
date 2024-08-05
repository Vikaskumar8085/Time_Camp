import { combineReducers } from "@reduxjs/toolkit";
import loaderSlice from "./slices/loaderSlice";
import authslice from "./slices/authslices/authslice";
import adminSlice from "./slices/AdminSlice/adminSlice";

const rootReducer = combineReducers({
  loader: loaderSlice,
  admin: adminSlice,
  auth: authslice,
});

export default rootReducer;
