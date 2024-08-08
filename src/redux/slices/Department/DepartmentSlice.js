import { createSlice } from "@reduxjs/toolkit";

const DepartmentSlice = createSlice({
  name: "DepartmentSlice",
  initialState: {
    DepartmentValue: [],
    Depvalue: null,
  },
  reducers: {
    setDepartment: (state, action) => {
      state.DepartmentValue = action.payload;
    },
    GetDepartmentFunc: (state, action) => {
      state.Depvalue = action.payload;
    },
  },
});

export const { setDepartment, GetDepartmentFunc } = DepartmentSlice.actions;
export default DepartmentSlice.reducer;
