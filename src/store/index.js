import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login-slice";
import msgCardShowSlice from "./msgCardShow-slice";
import userSlice from "./user-slice";

const store = configureStore({
    reducer: {
        loginSlice: loginSlice,
        msgCardShowSlice: msgCardShowSlice,
        userSlice: userSlice
    }
});

export default store;