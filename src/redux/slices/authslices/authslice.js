import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        values: [],
    },
    reducers: {
        setLogin: (state, action) => {

        },

    }
})


export const { setLogin } = authSlice.actions;
export default authSlice.reducer;