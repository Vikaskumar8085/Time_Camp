import { combineReducers } from "@reduxjs/toolkit";
import loaderSlice from "./slices/loaderSlice";
import authslice from "./slices/authslices/authslice";

const rootReducer = combineReducers({
  loader: loaderSlice,
  auth: authslice,
});

export default rootReducer;
