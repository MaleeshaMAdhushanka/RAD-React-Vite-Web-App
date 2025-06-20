import {configureStore} from "@reduxjs/toolkit";
import productReducer from '../slice/productSlice'

export  const  store = configureStore({
    reducer: {
        products:productReducer
    }
});

export type  RootState = ReturnType<typeof store.getState>;


//globally access karanna
export type AppDispatch = typeof store.dispatch;