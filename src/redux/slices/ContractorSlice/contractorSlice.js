import {createSlice} from "@reduxjs/toolkit";

const contractorSlice = createSlice({
  name: "contractorSlice",
  initialState: {
    contractorValues: [],
    activecontractorvalues: [],
    inactivecontracotrvalues: [],
    singlecontractorvalues: null,
  },
  reducers: {
    setContractor: (state, action) => {
      state.contractorValues = action.payload;
    },
    getContractor: (state, action) => {
      state.singlecontractorvalues = action.payload;
    },
    setactivecontractor: (state, action) => {
      state.activecontractorvalues = action.payload;
    },
    setInactiveContractor: (state, action) => {
      state.inactivecontracotrvalues = action.payload;
    },
  },
});

export const {
  setContractor,
  getContractor,
  setactivecontractor,
  setInactiveContractor,
} = contractorSlice.actions;
export default contractorSlice.reducer;
