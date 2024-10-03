import {createSlice} from "@reduxjs/toolkit";

const contractorTeamslice = createSlice({
  name: "contractorTeam",
  initialState: {
    values: [],
  },
  reducers: {
    setContractorTeam: (state, action) => {
      state.values = action.payload;
    },
  },
});

export const {setContractorTeam} = contractorTeamslice.actions;
export default contractorTeamslice.reducer;
