import Product from "../../interfaces";
import {
  ADD_PRODUCT,
  REQUEST_API,
  REQUEST_ERROR,
  REQUEST_SUCSSES,
} from "../actions";

const INITIAL_STATE = {
  products: [],
};

const wallet = (store = INITIAL_STATE, action: { type: string, productId: number }) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...store, products: [...store.products, action.productId]}
    default:
      return store;
  }
};

export default wallet;
