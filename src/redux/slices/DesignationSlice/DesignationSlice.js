import {createSlice} from "@reduxjs/toolkit";

const DesignationSlice = createSlice({
  name: "Designation",
  initialState: {
    designationvalues: [],
  },
  reducers: {
    setDesignation: (state, action) => {
      state.designationvalues = action.payload;
    },
  },
});

export const {setDesignation} = DesignationSlice.actions;
export default DesignationSlice.reducer;
