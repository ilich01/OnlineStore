import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, { payload }) => {
      let newCart = [...state.items];
      const found = state.items.find(({ id }) => id === payload.id);
      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else newCart.push({ ...payload, quantity: 1 });
      state.items = newCart;
    },
    updateItemQuantity: (state, { payload }) => {
      const { id, quantity } = payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setCartItems: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const { addItem, updateItemQuantity, removeItem, setCartItems } =
  cartSlice.actions;
export default cartSlice.reducer;
