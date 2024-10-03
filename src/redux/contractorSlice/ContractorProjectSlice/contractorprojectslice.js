import {createSlice} from "@reduxjs/toolkit";

const contractorprojectslice = createSlice({
  name: "contractorproject",
  initialState: {
    values: [],
  },
  reducers: {
    setcontractorProejcts: (state, action) => {
      state.values = action.payload;
    },
  },
});

export const {setcontractorProejcts} = contractorprojectslice.actions;
export default contractorprojectslice.reducer;
