import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import API from "../../../Services/API";

export interface IProduct {
  id?: number;
  name: string;
  brand?: string;
  description?: string;
  photo: string;
  price: string;
  createdAt?: string;
  updatedAt?: string;
	quantity?: any;
}

interface IinitialState  {
  loading: boolean;
  products: IProduct[];
  error: string;
};

const initialState: IinitialState = {
  loading: false,
  products: [],
  error: "",
};

export const fetchProducts = createAsyncThunk("products/getProducts", () => {
  return API.get("products?page=1&rows=8&sortBy=name&orderBy=ASC").then(
    (res) => res.data.products
  );
});

const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<IProduct[]>) => {
        state.loading = false;
        state.products = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message || "Error when loading products";
    });
  },
});

export default productsSlice.reducer;
