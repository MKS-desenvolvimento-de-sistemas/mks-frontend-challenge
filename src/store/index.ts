import {configureStore} from '@reduxjs/toolkit';
import carrinhoReducer from './Stock.store';

const store = configureStore({
	reducer: {
		carrinho: carrinhoReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
