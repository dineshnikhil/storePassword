import { createSlice } from "@reduxjs/toolkit";

const msgSlice  = createSlice({
    name: "msgSlice",
    initialState: {
        isShow: false
    },
    reducers: {
        showMsg(state) {
            state.isShow = true;
        },
        hideMsg(state) {
            state.isShow = false;
        }
    }
});

export const msgSliceActions = msgSlice.actions;
export default msgSlice.reducer;