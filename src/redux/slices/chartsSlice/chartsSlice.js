import {createSlice} from "@reduxjs/toolkit";

const chartsSlice = createSlice({
  name: "chartsSlice",
  initialState: {
    totalprojectscharts: [],
  },
  reducers: {
    settotalProjectcharts: (state, action) => {
      state.totalprojectscharts = action.payload;
    },
  },
});

export const {settotalProjectcharts} = chartsSlice.actions;
export default chartsSlice.reducer;
