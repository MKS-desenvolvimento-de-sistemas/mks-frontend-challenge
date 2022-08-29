import { configureStore } from "@reduxjs/toolkit";

// REDUCERS IMPORT'S
import themeReducer from "./Theme";
import cartReducer from "./Cart";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
