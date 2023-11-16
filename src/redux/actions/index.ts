import { Action } from "redux";
import Product from "../../interfaces";

export const REQUEST_API = "REQUEST_API";
export const REQUEST_SUCSSES = "REQUEST_SUCSSES";
export const REQUEST_ERROR = "REQUEST_ERROR";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const ONE_MORE = "ONE_MORE";
export const ONE_LESS = "ONE_LESS";
export const UPDATE_VALUE = "UPDATE_VALUE";
export const SHOW_CART = "SHOW_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const removeItem = (productId: string) => ({
  type: REMOVE_ITEM,
  productId,
});

export const showCart = () => ({
  type: SHOW_CART,
});

export const addProducts = (products: Product[]) => ({
  type: REQUEST_SUCSSES,
  products,
});

export const oneMoreProduct = (productId: string) => ({
  type: ONE_MORE,
  productId,
});

export const oneLessProduct = (productId: string) => ({
  type: ONE_LESS,
  productId,
});

export const updateTotalValue = (value: number) => ({
  type: UPDATE_VALUE,
  value,
});

const requestAPI = (loading: boolean) => ({
  type: REQUEST_API,
  loading,
});

const requestSuccess = (products: Product[], loading: boolean) => ({
  type: REQUEST_SUCSSES,
  products,
});

const requestError = (loading: boolean) => ({
  type: REQUEST_SUCSSES,
});

export const addProduct = (productId: number) => ({
  type: ADD_PRODUCT,
  productId,
});

export const getProducts =
  (endPoint: RequestInfo | URL) => async (dispatch: any) => {
    dispatch(requestAPI(true));
    try {
      const resolve = await fetch(endPoint);
      const data = await resolve.json();
      dispatch(requestSuccess(data.products, false));
    } catch (error) {
      dispatch(requestError(false));
    }
  };
