import { combineReducers } from "@reduxjs/toolkit";
import loaderSlice from "./slices/loaderSlice";
import authslice from "./slices/authslices/authslice";
import adminSlice from "./slices/AdminSlice/adminSlice";
import DesignationSlice from "./slices/Designation/DesignationSlice";

const rootReducer = combineReducers({
  loader: loaderSlice,
  admin: adminSlice,
  auth: authslice,
  Designation: DesignationSlice,
});

export default rootReducer;
