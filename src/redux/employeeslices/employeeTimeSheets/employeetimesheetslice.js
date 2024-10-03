import {createSlice} from "@reduxjs/toolkit";

const employeeTimesheetslice = createSlice({
  name: "employeeTimesheet",
  initialState: {
    values: [],
  },
  reducers: {
    setEmployeeTimesheet: (state, action) => {
      state.values = action.payload;
    },
  },
});

export const {setEmployeeTimesheet} = employeeTimesheetslice.actions;
export default employeeTimesheetslice.reducer;
