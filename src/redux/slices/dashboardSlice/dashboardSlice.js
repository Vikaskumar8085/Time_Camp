import {createSlice} from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState: {values: []},
  reducers: {
    setDashboardCounter: (state, action) => {
      state.values = action.payload;
    },
  },
});

export const {setDashboardCounter} = dashboardSlice.actions;
export default dashboardSlice.reducer;
