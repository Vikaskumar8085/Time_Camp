import {createSlice} from "@reduxjs/toolkit";

const EmployeeSlice = createSlice({
  name: "EmployeeSlice",
  initialState: {
    EmployeeValues: [],
    EmployeeSingleValues: null,
  },
  reducers: {
    setEmployee: (state, action) => {
      state.EmployeeValues = action.payload;
    },
    setSingleEmployee: (state, action) => {
      state.EmployeeSingleValues = action.payload;
    },
  },
});

export const {setEmployee, setSingleEmployee} = EmployeeSlice.actions;
export default EmployeeSlice.reducer;
