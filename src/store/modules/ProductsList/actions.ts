import { ALL_PRODUCTS } from "./actionTypes";

export const allProd = (products: any) => ({
  type: ALL_PRODUCTS,
  products,
});
