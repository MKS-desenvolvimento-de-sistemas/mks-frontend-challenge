import Product from "../../interfaces";
import { REQUEST_API, REQUEST_ERROR, REQUEST_SUCSSES } from "../actions";

const INITIAL_STATE = {
  products: [],
  loading: false,
};

const products = (
  store = INITIAL_STATE,
  action: { type: string; products: Product[] }
) => {
  switch (action.type) {
    case REQUEST_API:
      return { ...store, loading: true };
    case REQUEST_ERROR:
      return { ...store, loading: false };
    case REQUEST_SUCSSES:
      return {
        ...store,
        products: action.products,
        loading: false,
      };
    default:
      return store;
  }
};

export default products;
