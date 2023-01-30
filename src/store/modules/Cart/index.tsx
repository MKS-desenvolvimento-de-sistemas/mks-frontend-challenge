import { createSlice } from "@reduxjs/toolkit";

import { IProduct } from "../Products";

interface IinitialState {
  cart: IProduct[];
  cartTotal: string;
  itemsInCart: number;
}

const initialState: IinitialState = {
  cart: [],
  cartTotal: "0",
  itemsInCart: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart(state, action) {
      const productCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (productCart) {
        productCart.quantity++;
      } else {
        const product = JSON.parse(JSON.stringify(action.payload));
        product["quantity"] = 1;

        state.cart.push({ ...product });
      }
      state.itemsInCart++;
    },

    removeFromCart(state, action) {
      const productIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.itemsInCart -= state.cart[productIndex].quantity;
      state.cart.splice(productIndex, 1);
    },

    getTotalCart(state) {
      const total = state.cart.reduce((acc, item) => {
        const { price, quantity } = item;
        const totalPerProduct = parseInt(price) * quantity;

        return acc + totalPerProduct;
      }, 0);
      const strNum = String(total);
      const halfStr =
        total >= 10000
          ? Math.floor(strNum.length / 2)
          : Math.floor(strNum.length / 3);
      const formattedPrice =
        strNum.length > 3
          ? strNum.substr(0, halfStr) + "." + strNum.substr(halfStr)
          : strNum;
      const rewrittenPrice = `R$${formattedPrice}`;

      state.cartTotal = rewrittenPrice;
    },

    decrease(state, action) {
      const getProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      const productIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (getProduct) {
        state.itemsInCart--;
        if (getProduct.quantity > 1) {
          getProduct.quantity--;
        } else {
          state.cart.splice(productIndex, 1);
        }
      }
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, getTotalCart, decrease } =
  cartSlice.actions;
