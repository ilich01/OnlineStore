import { configureStore } from "@reduxjs/toolkit";
import cartSclice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartSclice,
    user: userSlice,
  },
  devTools: true,
});
