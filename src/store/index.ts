import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { ICartItem } from "../pages/Cart";
const initialState = { items: [] } as any;

const cartSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },

    addAdditional(state, action) {
      if (!state.items.some((item) => item.id === action.payload.id)) return;
      const item = state.items.find((item) => item.id === action.payload.id);

      state.items.push(item);
    },
    decreaseItem(state, action) {
      const remainingItems = state.items.filter(
        (item) => item.id === action.payload.id
      );

      if (remainingItems.length === 1) return;

      const itemIndex = state.items.findIndex(
        (el) => el.id === action.payload.id
      );

      state.items.splice(itemIndex, 1);
    },
    deleteItem(state, action) {
      const arr = state.items.filter((item) => item.id !== action.payload.id);
      state.items = arr;
      // do {
      //   const itemIndex = state.items.findIndex(
      //     (el) => el.id === action.payload.id
      //   );

      //   state.items.splice(itemIndex, 1);
      // } while (state.items.some((item) => item.id === action.payload.id));
    },
    deleteAllItems(state) {
      state.items = [];
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;

export default store;
