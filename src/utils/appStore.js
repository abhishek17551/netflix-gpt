import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../utils/slices/userSlice"
import moviesReducer from "./slices/moviesSlice";
import gptReducer from './slices/gptSlice'
import languageReducer from './slices/languageSlice'

const appStore = configureStore({
    reducer : {
        user : userReducer,
        movies : moviesReducer,
        gpt : gptReducer,
        language : languageReducer
    }
})

export default appStore