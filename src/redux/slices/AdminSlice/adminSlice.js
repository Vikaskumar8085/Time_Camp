import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "adminSlice",
  initialState: {
    clientValue: [],
    ClinetSingleValue: null,
  },
  reducers: {
    setClients: (state, action) => {
      state.clientValue = action.payload;
    },
    SetSingleClientsFunc: (state, action) => {
      state.ClinetSingleValue = action.payload;
    },
  },
});

export const { setClients, SetSingleClientsFunc } = adminSlice.actions;
export default adminSlice.reducer;
