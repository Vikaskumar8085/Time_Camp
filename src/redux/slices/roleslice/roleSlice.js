import {createSlice} from "@reduxjs/toolkit";

const roleSlice = createSlice({
  name: "role",
  initialState: {
    roleValues: [],
  },
  reducers: {
    setRoles: (state, action) => {
      state.roleValues = action.payload;
    },
  },
});

export const {setRoles} = roleSlice.actions;
export default roleSlice.reducer;
