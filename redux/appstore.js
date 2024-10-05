import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice"

export const appStore = configureStore({
    reducer:{
        user:useReducer
    }
})