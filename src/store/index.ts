import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import carrinhoReducer from './Stock.store';

const store = configureStore({
	reducer: {
		carrinho: carrinhoReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
