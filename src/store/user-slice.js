import { createSlice } from "@reduxjs/toolkit";

const userSlice  = createSlice({
    name: 'userSlice',
    // This is the initial state of the userSlice object.
    initialState: {
        isAuthenticated: false,
        username: "",
        id: "",
        apps: []
    },
    reducers: {
        // this login reducer
        loginUser(state, action) {
            state.isAuthenticated = true;
            state.username = action.payload.username;
            state.id = action.payload.id;
            state.apps = action.payload.apps;
        },

        // this is logout reducer
        logoutUser(state, action) {
            state.isAuthenticated = false;
            state.username = action.payload.username;
            state.id = action.payload.id;
            state.apps = action.payload.apps;
        },

        // updating the apps array reducer.
        updateApps(state, action) {
            state.apps = action.payload;
        }
    }
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;