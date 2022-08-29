import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductCart, IProduct } from "../../types/api";

const initialState: { products: IProductCart[] | [] } = {
  products: [],
};

const cart = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    add(state, action: PayloadAction<IProduct>) {
      const productAlreadyExists = state.products.find(
        (product) => product.id === action.payload.id
      );

      console.log(action.payload);

      if (productAlreadyExists) {
        productAlreadyExists.quantity++;
      } else {
        state.products = [
          ...state.products,
          { ...action.payload, quantity: 1 },
        ];
      }
    },
    removeOne(state, action: PayloadAction<IProduct["id"]>) {
      let filteredProducts: IProductCart[] | [] = [];
      for (let i = 0; i < state.products.length; i++) {
        let product: IProductCart = state.products[i];

        if (product.id === action.payload) {
          if (product.quantity > 1) {
            product.quantity--;
            filteredProducts = [...filteredProducts, product];
          } else {
            product.quantity = 0;
          }
        } else {
          filteredProducts = [...filteredProducts, product];
        }
      }

      state.products = filteredProducts;
    },
    removeAll(state, action: PayloadAction<IProduct["id"]>) {
      const filteredProducts = state.products.filter(
        (product) => product.id !== action.payload
      );

      state.products = filteredProducts;
    },
  },
});

export const { add, removeOne, removeAll } = cart.actions;
export default cart.reducer;
