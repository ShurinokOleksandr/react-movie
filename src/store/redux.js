import {configureStore} from "@reduxjs/toolkit";
import loginSlice from "../features/loginSlice/loginSlice";


export  const store = configureStore({
    reducer: {
        login: loginSlice,
    }
})