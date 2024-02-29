import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userSlice"
import moviesReducers from "./moviesSlice"
const appStore = configureStore({

    reducer:{
            user: userReducers,
            movies : moviesReducers,
    }
})

export default appStore;