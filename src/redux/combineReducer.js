import { combineReducers } from "@reduxjs/toolkit";
import loaderSlice from "./slices/loaderSlice";
import authslice from "./slices/authslices/authslice";
import adminSlice from "./slices/AdminSlice/adminSlice";
import contractorSlice from "./slices/ContractorSlice/contractorSlice";
import EmployeeSlice from "./slices/Employee/EmployeeSlice";
import TimesheetSlice from "./slices/Timesheet/TimesheetSlice";
import projectslice from "./slices/ProjectSlice/projectslice";

const rootReducer = combineReducers({
  loader: loaderSlice,
  admin: adminSlice,
  auth: authslice,
  Contractor: contractorSlice,
  employee: EmployeeSlice,
  project: projectslice,
  timesheet: TimesheetSlice,
});

export default rootReducer;
