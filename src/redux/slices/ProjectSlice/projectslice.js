import {createSlice} from "@reduxjs/toolkit";

const Projectslice = createSlice({
  name: "Projectslice",
  initialState: {
    value: [],
    singleValue: null,
    resources: [],
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
  },
});

export const {setProjectValues, setSingelProject, setResources} =
  Projectslice.actions;
export default Projectslice.reducer;
