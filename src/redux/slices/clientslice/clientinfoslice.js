import { createSlice } from "@reduxjs/toolkit";

const clientinfoslice = createSlice({
  name: "clientinfo",
  initialState: {
    clientprofile: "",
    clientprojects: [],
  },
  reducers: {
    setClientProjects: (state, action) => {
      state.clientprojects = action.payload;
    },
    setClientProfile: (state, action) => {
      state.clientprofile = action.payload;
    },
  },
});

export const { setClientProfile, setClientProjects } = clientinfoslice.actions;
export default clientinfoslice.reducer;
