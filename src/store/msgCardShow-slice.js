import { createSlice } from "@reduxjs/toolkit";

const msgCardSlice = createSlice({
    name: 'msgCardSlice',
    initialState: {
        isShow: false
    },
    reducers: {
        // showToggle(state){
        //     state.isShow = !state.isShow;
        // },
        showMsgCard(state) {
            state.isShow = true;
        },
        closeMsgCard(state) {
            state.isShow = false;
        }
    }
});

export const msgCardSliceActions = msgCardSlice.actions;
export default msgCardSlice.reducer;