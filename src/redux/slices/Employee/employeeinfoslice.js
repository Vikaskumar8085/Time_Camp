import { createSlice } from "@reduxjs/toolkit";

const EmployeeSlice = createSlice({
  name: "employeeslice",
  initialState: {
    employeeprojects: [],
    employeeprofile: "",
  },
  reducers: {
    setEmployeeprojects: (state, action) => {
      state.employeeprojects = action.payload;
    },
    setEmployeeprofile: (state, action) => {
      state.employeeprofile = action.payload;
    },
  },
});

export const { setEmployeeprofile, setEmployeeprojects } =
  EmployeeSlice.actions;

export default EmployeeSlice.reducer;
