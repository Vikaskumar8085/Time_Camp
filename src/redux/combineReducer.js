import { combineReducers } from "@reduxjs/toolkit";
import loaderSlice from "./slices/loaderSlice";
import clientslice from "./slices/clientslice/clientslices";
import authslice from "./slices/authslices/authslice";
import adminSlice from "./slices/AdminSlice/adminSlice";
import contractorSlice from "./slices/ContractorSlice/contractorSlice";
import EmployeeSlice from "./slices/Employee/EmployeeSlice";
import TimesheetSlice from "./slices/Timesheet/TimesheetSlice";
import projectslice from "./slices/ProjectSlice/projectslice";
import employeeprojectslice from "./employeeslices/employeeprojectslice/employeeprojectslice";
import chartsSlice from "./slices/chartsSlice/chartsSlice";
import clientinfoslice from "./slices/clientslice/clientinfoslice";
import employeeinfoslice from "./slices/Employee/employeeinfoslice";
import contractorinfoSlice from "./slices/ContractorSlice/contractorinfoSlice";
import resourceslice from "./slices/authslices/resourceslice";
import employeetimesheetslice from "./employeeslices/employeeTimeSheets/employeetimesheetslice";
import employeeteamslice from "./employeeslices/employeeTeamslice/employeeteamslice";
import companyslice from "./slices/companyslice/companyslice";

const rootReducer = combineReducers({
  loader: loaderSlice,
  resource: resourceslice,
  company: companyslice,
  admin: adminSlice,
  client: clientslice,
  clientinfo: clientinfoslice,
  auth: authslice,
  contractor: contractorSlice,
  contractorinfo: contractorinfoSlice,
  employee: EmployeeSlice,
  employeeinfo: employeeinfoslice,
  charts: chartsSlice,
  project: projectslice,
  timesheet: TimesheetSlice,
  employeeproject: employeeprojectslice,
  employeetimesheet: employeetimesheetslice,
  employeeteam: employeeteamslice,
});

export default rootReducer;
