import {combineReducers} from "@reduxjs/toolkit";
import loaderSlice from "./slices/loaderSlice";
import authslice from "./slices/authslices/authslice";
import adminSlice from "./slices/AdminSlice/adminSlice";
import contractorSlice from "./slices/ContractorSlice/contractorSlice";
import EmployeeSlice from "./slices/Employee/EmployeeSlice";
import TimesheetSlice from "./slices/Timesheet/TimesheetSlice";
import projectslice from "./slices/ProjectSlice/projectslice";
import employeeprojectslice from "./employeeslices/employeeprojectslice/employeeprojectslice";
import chartsSlice from "./slices/chartsSlice/chartsSlice";

const rootReducer = combineReducers({
  loader: loaderSlice,
  admin: adminSlice,
  auth: authslice,
  contractor: contractorSlice,
  employee: EmployeeSlice,
  charts: chartsSlice,
  project: projectslice,
  timesheet: TimesheetSlice,
  employeeproject: employeeprojectslice,
});

export default rootReducer;
