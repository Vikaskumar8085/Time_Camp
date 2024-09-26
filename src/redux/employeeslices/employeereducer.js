import {combineReducers} from "@reduxjs/toolkit";
import employeeprojectslice from "./employeeprojectslice/employeeprojectslice";

const employereducer = combineReducers({
  employeeproject: employeeprojectslice,
});

export default employereducer;
