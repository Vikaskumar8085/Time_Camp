import {createSlice} from "@reduxjs/toolkit";

const contractorinfoslice = createSlice({
  name: "contractorinfoslice",
  initialState: {
    contractorprofile: "",
    contractorprojects: [],
  },
  reducers: {
    setContractorprofile: (state, action) => {
      state.contractorprofile = action.payload;
    },
    setContractorprojects: (state, action) => {
      state.contractorprojects = action.payload;
    },
  },
});

export const {setContractorprofile, setContractorprojects} =
  contractorinfoslice.actions;
export default contractorinfoslice.reducer;
