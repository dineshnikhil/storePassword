import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login-slice";

const store = configureStore({
    reducer: loginSlice
});

export default store;