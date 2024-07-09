import { combineReducers } from "@reduxjs/toolkit";
import loaderSlice from "./slices/loaderSlice";

const rootReducer = combineReducers({
    loader: loaderSlice

})


export default rootReducer;