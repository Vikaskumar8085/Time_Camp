import { createSlice } from "@reduxjs/toolkit";

const DesignationSlice = createSlice({
  name: "DesignationSlice",
  initialState: {
    DesignationValue: [],
    DesigValue: null,
  },
  reducers: {
    setDesignation: (state, action) => {
      state.DesignationValue = action.payload;
    },
    getDesignation: (state, action) => {
      state.DesigValue = action.payload;
    },
  },
});

export const { setDesignation, getDesignation } = DesignationSlice.actions;
export default DesignationSlice.reducer;
