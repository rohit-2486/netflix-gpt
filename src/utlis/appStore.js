import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userSlice"
import moviesReducers from "./moviesSlice"
import gptReducers from "./gptSlice"
import configReducers from "./configSlice";
const appStore = configureStore({

    reducer:{
            user: userReducers,
            movies : moviesReducers,
            gpt : gptReducers,
            config : configReducers,
    }
})

export default appStore;