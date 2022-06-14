import { configureStore } from '@reduxjs/toolkit'
import msgSlice from './msgSlice';
import userSlice from './userSlice';

const store = configureStore({
    reducer: {
        userSlice: userSlice,
        msgSlice: msgSlice
    }
})

export default store;