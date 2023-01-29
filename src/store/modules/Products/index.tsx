import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import API from "../../../Services/API";

export interface Product {
  id?: number;
  name: string;
  brand?: string;
  description?: string;
  photo: string;
  price: string;
  createdAt?: string;
  updatedAt?: string;
}

interface InitialState  {
  loading: boolean;
  products: Product[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  products: [],
  error: "",
};

export const fetchProducts = createAsyncThunk("products/getProducts", () => {
  return API.get("products?page=1&rows=8&sortBy=name&orderBy=ASC").then(
    (res) => res.data.products
  );
});

const products = createSlice({
  name: "products",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
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

export default products.reducer;
