import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        isAuth: false,
        username: "",
        id: "",
        apps: []
        
    },
    reducers: {
// this is the login method
        loginUser(state, action) {
            state.isAuth = true;
            state.username = action.payload.username;
            state.id = action.payload.id;
            state.apps = action.payload.apps;
        },
// this is the logout method
        logoutUser(state, action) {
            state.isAuth = false;
            state.username = action.payload.username;
            state.id = action.payload.id;
            state.apps = action.payload.apps;
        }
    }
})

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;