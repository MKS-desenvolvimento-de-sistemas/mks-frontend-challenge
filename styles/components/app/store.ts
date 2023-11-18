import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsReducer from './state/actions/productsReducers';

export const store = configureStore({
  reducer: {   
    products: productsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
