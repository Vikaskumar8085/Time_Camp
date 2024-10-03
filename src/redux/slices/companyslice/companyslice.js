import {createSlice} from "@reduxjs/toolkit";

const companyslice = createSlice({
  name: "companyslice",
  initialState: {
    values: [],
    singlevalues: "",
  },
  reducers: {
    setcompany: (state, action) => {
      state.values = action.payload;
    },
    setSingleCompany: (state, action) => {
      state.singlevalues = action.payload;
    },
  },
});

export const {setcompany, setSingleCompany} = companyslice.actions;
export default companyslice.reducer;
