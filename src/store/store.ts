
import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./habit-slice"
import themeReducer from "./themeSlice"

const store= configureStore({
    reducer:{
        habits:habitReducer,
        theme:themeReducer,
    }
})

export type RootState=ReturnType< typeof store.getState>
export type AppDispatch=typeof store.dispatch

export default store 