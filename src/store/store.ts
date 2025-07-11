import {configureStore} from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import {rootReducer} from "../slice/rootReducer.ts";

export  const  store = configureStore({
    reducer: rootReducer
});

export type  RootState = ReturnType<typeof store.getState>;


//globally access karanna
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();