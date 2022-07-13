import { ALL } from "dns";
import { ALL_PRODUCTS } from "./actionTypes";

export const reducerProducts = (state = [], action: { type: any }) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      const { products }: any = action;
      return [...state, products];

    default:
      return state;
  }
};
