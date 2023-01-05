import {configureStore} from "@reduxjs/toolkit";
import loginSlice from "../features/loginSlice/loginSlice";
import searchContentSlice from '../features/SearchSlice'

export  const store = configureStore({
    reducer: {
        login: loginSlice,
        searchContent:searchContentSlice,
    }
})