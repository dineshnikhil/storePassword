import { createSlice } from "@reduxjs/toolkit";

const userSlice  = createSlice({
    name: 'userSlice',
    initialState: {
        isAuthenticated: false,
        username: "",
        id: "",
        apps: []
    },
    reducers: {
        loginUser(state, action) {
            state.isAuthenticated = true;
            state.username = action.payload.username;
            state.id = action.payload.id;
            state.apps = action.payload.apps;
        },

        logoutUser(state, action) {
            state.isAuthenticated = false;
            state.username = action.payload.username;
            state.id = action.payload.id;
            state.apps = action.payload.apps;
        }
    }
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;