import { createSlice } from "@reduxjs/toolkit";

const LoaderSlice = createSlice({
  name: "loaderSlice",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoader: (state, action) => {
      console.log(action.payload);
      state.loading = action.payload;
    },
  },
});
export const { setLoader } = LoaderSlice.actions;
export default LoaderSlice.reducer;
