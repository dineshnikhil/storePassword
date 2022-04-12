import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login-slice";
import msgCardShowSlice from "./msgCardShow-slice";

const store = configureStore({
    reducer: {
        loginSlice: loginSlice,
        msgCardShowSlice: msgCardShowSlice
    }
});

export default store;