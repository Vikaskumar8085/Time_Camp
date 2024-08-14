import { createSlice } from "@reduxjs/toolkit";

const TimesheetSlice = createSlice({
  name: "TimesheetSlice",
  initialState: { values: [], singleValue: null },
  reducers: {
    setTimesheetValue: (state, action) => {
      state.values = action.payload;
    },
    setSingleTimesheet: (state, action) => {
      state.singleValue = action.payload;
    },
  },
});

export const { setTimesheetValue, setSingleTimesheet } = TimesheetSlice.actions;
export default TimesheetSlice.reducer;
