import {createSlice} from "@reduxjs/toolkit";

const Projectslice = createSlice({
  name: "Projectslice",
  initialState: {
    value: [],
    singleValue: null,
    resources: [],
    activeprojectsvalue: [],
    inactiveprojectvalue: [],
  },
  reducers: {
    setProjectValues: (state, action) => {
      state.value = action.payload;
    },
    setSingelProject: (state, action) => {
      state.singleValue = action.payload;
    },
    setResources: (state, action) => {
      state.resources = action.payload;
    },

    setactiveprojects: (state, action) => {
      state.activeprojectsvalue = action.payload;
    },
    setinactiveprojectvalue: (state, action) => {
      state.inactiveprojectvalue = action.payload;
    },
  },
});

export const {
  setProjectValues,
  setSingelProject,
  setResources,
  setactiveprojects,
  setinactiveprojectvalue,
} = Projectslice.actions;
export default Projectslice.reducer;
