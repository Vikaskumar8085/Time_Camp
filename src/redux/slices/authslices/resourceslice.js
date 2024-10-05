import { createSlice } from "@reduxjs/toolkit";

const resourceslice = createSlice({
  name: "resourceslice",
  initialState: {
    values: [],
  },
  reducers: {
    setfetchResource: (state, action) => {
      state.values = action.payload;
    },
  },
});
export const { setfetchResource } = resourceslice.actions;
export default resourceslice.reducer;
