import { combineReducers } from "@reduxjs/toolkit";
import loaderSlice from "./slices/loaderSlice";
import authslice from "./slices/authslices/authslice";
import adminSlice from "./slices/AdminSlice/adminSlice";
import DesignationSlice from "./slices/Designation/DesignationSlice";
import DepartmentSlice from "./slices/Department/DepartmentSlice";
import contractorSlice from "./slices/ContractorSlice/contractorSlice";
import EmployeeSlice from "./slices/Employee/EmployeeSlice";
import TimesheetSlice from "./slices/Timesheet/TimesheetSlice";

const rootReducer = combineReducers({
  loader: loaderSlice,
  admin: adminSlice,
  auth: authslice,
  Designation: DesignationSlice,
  Department: DepartmentSlice,
  Contractor: contractorSlice,
  employee: EmployeeSlice,
  timesheet: TimesheetSlice,
});

export default rootReducer;
