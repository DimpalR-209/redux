import { createSlice } from "@reduxjs/toolkit";
export interface ThemeState{
    darkMode:boolean
}
const initialState :ThemeState={
    darkMode:localStorage.getItem("darkMode")
    ?JSON.parse(localStorage.getItem("darkMode")!)
    :false
}

const themeSlice=createSlice({
    name:"theme",
    initialState,
    reducers:{
        toggleDarkMode:(state)=>{
            state.darkMode =!state.darkMode;
            localStorage.setItem("darkMode",JSON.stringify(state.darkMode))
        }
    }
})

export const {toggleDarkMode} =themeSlice.actions;
export default themeSlice.reducer