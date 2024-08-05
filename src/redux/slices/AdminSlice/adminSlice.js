import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "adminSlice",
  initialState: {
    clientValue: [],
  },
  reducers: {
    setClients: (state, action) => {
      state.clientValue = action.payload;
    },
  },
});

export const { setClients } = adminSlice.actions;
export default adminSlice.reducer;
