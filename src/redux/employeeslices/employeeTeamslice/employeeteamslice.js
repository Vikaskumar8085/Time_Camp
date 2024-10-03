import {createSlice} from "@reduxjs/toolkit";

const employeeteamslice = createSlice({
  name: "employeeteam",
  initialState: {
    value: [],
  },
  reducers: {
    setEmployeeTeam: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setEmployeeTeam} = employeeteamslice.actions;
export default employeeteamslice.reducer;
