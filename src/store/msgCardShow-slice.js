import { createSlice } from "@reduxjs/toolkit";

const msgCardSlice = createSlice({
    name: 'msgCardSlice',
    initialState: {
        isShow: false
    },
    reducers: {
        showToggle(state){
            state.isShow = !state.isShow;
        }
    }
});

export const msgCardSliceActions = msgCardSlice.actions;
export default msgCardSlice.reducer;