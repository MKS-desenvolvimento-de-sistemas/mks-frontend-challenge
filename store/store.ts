import { configureStore, PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/integrations/mks";

export type CountedProduct = Product & { quantity: number };

interface ShoppingCart {
  products: {
    [key: Product["id"]]: CountedProduct;
  };
}

const initialState: ShoppingCart = {
  products: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      if (item.id in state.products) {
        state.products[item.id].quantity += 1;
      } else {
        state.products[item.id] = { ...item, quantity: 1 };
      }
    },
    removeItem: (state, action: PayloadAction<Product>) => {
      delete state.products[action.payload.id];
    },
    reduceItem: (state, action: PayloadAction<Product>) => {
      const idToRemove = action.payload.id;
      if (idToRemove in state.products) {
        const product = state.products[idToRemove];
        if (product.quantity === 1) {
          delete state.products[idToRemove];
        } else {
          state.products[idToRemove].quantity--;
        }
      }
    },
  },
});

const cartReducer = cartSlice.reducer;

export const { addItem, removeItem, reduceItem } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectTotal = (state: RootState) =>
  selectProducts(state).reduce(
    (sum, product) => sum + +product.price * product.quantity,
    0
  );

export const selectProducts = (state: RootState): CountedProduct[] => {
  return Object.values(state.cart.products);
};

export const selectProductsCount = (state: RootState) =>
  selectProducts(state).reduce((sum, product) => sum + product.quantity, 0);

export default store;
