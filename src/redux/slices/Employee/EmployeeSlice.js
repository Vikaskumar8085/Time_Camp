import { createSlice } from "@reduxjs/toolkit";

const EmployeeSlice = createSlice({
  name: "EmployeeSlice",
  initialState: {
    EmployeeValues: [],
    activeemployee: [],
    inactiveemployee: [],
    EmployeeSingleValues: null,
  },
  reducers: {
    setEmployee: (state, action) => {
      state.EmployeeValues = action.payload;
    },
    setSingleEmployee: (state, action) => {
      state.EmployeeSingleValues = action.payload;
    },
    setactiveEmployee: (state, action) => {
      state.activeemployee = action.payload;
    },
    setinactiveEmployee: (state, action) => {
      state.inactiveemployee = action.payload;
    },
  },
});

export const { setEmployee, setSingleEmployee } = EmployeeSlice.actions;
export default EmployeeSlice.reducer;
