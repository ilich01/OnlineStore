import { configureStore } from "@reduxjs/toolkit";
import cartSclice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSclice,
  },
});
