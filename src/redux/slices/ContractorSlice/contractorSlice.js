import { createSlice } from "@reduxjs/toolkit";

const contractorSlice = createSlice({
  name: "contractorSlice",
  initialState: {
    contractorValues: [],
    singlecontractorvalues: null,
  },
  reducers: {
    setContractor: (state, action) => {
      state.contractorValues = action.payload;
    },
    getContractor: (state, action) => {
      state.singlecontractorvalues = action.payload;
    },
  },
});

export const { setContractor, getContractor } = contractorSlice.actions;
export default contractorSlice.reducer;
