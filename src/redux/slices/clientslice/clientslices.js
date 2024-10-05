import { createSlice } from "@reduxjs/toolkit";

const clientslices = createSlice({
  name: "clients",
  initialState: {
    deadclient: [],
    activeclient: [],
    inactiveclient: [],
    clientvalues: [],
  },
  reducers: {
    setClients: (state, action) => {
      state.clientvalues = action.payload;
    },
    setactiveClient: (state, action) => {
      state.activeclient = action.payload;
    },
    setinactiveClient: (state, action) => {
      state.inactiveclient = action.payload;
    },
    setdeadClient: (state, action) => {
      state.clientvalues = action.payload;
    },
  },
});

export const { setClients, setactiveClient, setinactiveClient, setdeadClient } =
  clientslices.actions;
export default clientslices.reducer;
