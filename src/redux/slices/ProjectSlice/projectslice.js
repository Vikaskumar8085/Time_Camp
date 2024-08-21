import { createSlice } from "@reduxjs/toolkit";

const Projectslice = createSlice({
  name: "Projectslice",
  initialState: {
    value: [],
    singleValue: null,
  },
  reducers: {
    setProjectValues: (state, action) => {
      state.value = action.payload;
    },
    setSingelProject: (state, action) => {
      state.singleValue = action.payload;
    },
  },
});

export const { setProjectValues, setSingelProject } = Projectslice.actions;
export default Projectslice.reducer;
