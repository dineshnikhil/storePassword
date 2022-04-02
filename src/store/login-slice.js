import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        username: '',
        isLoggedIn: false
    },
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.username = '';
        },
        setUserName(state, action) {
            state.username = action.payload;
        }
    }
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;