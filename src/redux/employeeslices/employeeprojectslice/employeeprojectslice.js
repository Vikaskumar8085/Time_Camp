import {createSlice} from "@reduxjs/toolkit";

const employeeprojectslice = createSlice({
  name: "employeeprojects",
  initialState: {
    values: [],
    ActiveProjects: [],
    InActiveprojects: [],
  },
  reducers: {
    setEmployee: (state, action) => {
      console.log("action.payload", action.payload);
      state.values = action.payload;
    },
    setActiveEmpProjects: (state, action) => {
      state.ActiveProjects = action.payload;
    },
    setInActiveEmpProjects: (state, action) => {
      state.InActiveprojects = action.payload;
    },
  },
});

export const {setEmployee, setActiveEmpProjects, setInActiveEmpProjects} =
  employeeprojectslice.actions;
export default employeeprojectslice.reducer;
