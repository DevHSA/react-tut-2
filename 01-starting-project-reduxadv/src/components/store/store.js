import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-reducer";
import cartSlice from "./cart-reducer";

const store = configureStore({
  reducer: { uiReducer: uiSlice.reducer, cartReducer: cartSlice.reducer },
});

export default store;