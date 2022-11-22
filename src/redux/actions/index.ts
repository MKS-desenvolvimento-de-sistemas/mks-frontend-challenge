import { Action } from "redux";
import Product from "../../interfaces";

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_SUCSSES = 'REQUEST_SUCSSES';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProducts = (products: Product[]) => ({
  type: REQUEST_SUCSSES,
  products,
})

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
})

export const getProducts = (endPoint: RequestInfo | URL) => async (dispatch: any) => {
  dispatch(requestAPI(true));
  try {
    const resolve = await fetch(endPoint);
    const data = await resolve.json();
    dispatch(requestSuccess(data.products, false))
  } catch (error) {
    dispatch(requestError(false))
  }
}