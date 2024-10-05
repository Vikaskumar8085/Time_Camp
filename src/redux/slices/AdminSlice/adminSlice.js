import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "adminSlice",
  initialState: {
    clientValue: [],
    ClinetSingleValue: null,
  },
  reducers: {
    SetSingleClientsFunc: (state, action) => {
      state.ClinetSingleValue = action.payload;
    },
  },
});

export const { SetSingleClientsFunc } = adminSlice.actions;
export default adminSlice.reducer;
