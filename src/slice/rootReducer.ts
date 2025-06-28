import {combineReducers} from "redux";
import productReducer from "./productSlice.ts";
import cartReducer from "./cartSlice.ts";

 export const rootReducer = combineReducers({
      products:productReducer,
      cart: cartReducer,
  });

export type RootState = ReturnType<typeof rootReducer>