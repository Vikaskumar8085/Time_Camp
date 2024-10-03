import {createSlice} from "@reduxjs/toolkit";

const contractorTimesheetslice = createSlice({
  name: "contractorTimesheet",
  initialState: {
    value: [],
  },
  reducers: {
    setContractortimesheet: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setContractortimesheet} = contractorTimesheetslice.actions;
export default contractorTimesheetslice.reducer;
