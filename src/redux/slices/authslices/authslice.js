import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    values: [],
    isLogin: false,
  },
  reducers: {
    setLogin: (state, action) => {
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    setLoginStatus: (state, action) => {
      if (state.isLogin === false) {
        state.isLogin = action.payload;
      }
    },
    setGetUser: (state, action) => {
      state.values = action.payload;
    },
  },
});

export const { setLogin, setLoginStatus, setGetUser } = authSlice.actions;
export default authSlice.reducer;
