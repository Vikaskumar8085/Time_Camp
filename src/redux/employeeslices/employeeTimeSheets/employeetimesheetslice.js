import {createSlice} from "@reduxjs/toolkit";

const employeeTimesheetslice = createSlice({
  name: "employeeTimesheet",
  initialState: {
    values: [],
    timesheetprojects: [],
    timesheetvalues: [],
  },
  reducers: {
    setEmployeeTimesheet: (state, action) => {
      state.values = action.payload;
    },
    setFetchemployeetimesheet: (state, action) => {
      state.timesheetvalues = action.payload;
    },

    setFilltimesheetprojects: (state, action) => {
      state.timesheetprojects = action.payload;
    },
  },
});

export const {
  setEmployeeTimesheet,
  setFilltimesheetprojects,
  setFetchemployeetimesheet,
} = employeeTimesheetslice.actions;
export default employeeTimesheetslice.reducer;
