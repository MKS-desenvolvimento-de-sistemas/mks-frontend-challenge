import {AppDispatch} from './index';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import ProductInterface from '../interface/product.interface';

const carrinho = createSlice({
	name: 'carrinho',
	initialState: {
		counter: 0,
		cartOpen: 'none',
		products: [],
		productsSelected: [] as ProductInterface[],
	},
	reducers: {
		increment(state) {
			state.counter += 1;
		},
		decrement(state) {
			state.counter -= 1;
		},
		abrirCarrinho(state) {
			state.cartOpen = 'flex';
		},
		fecharCarrinho(state) {
			state.cartOpen = 'none';
		},
		getProducts(state, action: PayloadAction<never[]>) {
			state.products = action.payload;
		},
		adicionalCarrinho(state, action: PayloadAction<ProductInterface>) {
			state.productsSelected = [...state.productsSelected, action.payload];
		},
		addMaisCarrinho(state, action: PayloadAction<ProductInterface[]>) {
			state.productsSelected = action.payload;
		},
		removerCarrinho(state, action: PayloadAction<ProductInterface[]>) {
			state.productsSelected = action.payload;
		},
	},
});

export const {
	decrement,
	increment,
	abrirCarrinho,
	fecharCarrinho,
	getProducts,
	adicionalCarrinho,
	removerCarrinho,
	addMaisCarrinho,
} = carrinho.actions;

export default carrinho.reducer;

export function asyncGetProducts(): any {
	return async function (dispatch: AppDispatch) {
		const response = await fetch('https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const data = await response.json();
		dispatch(getProducts(data.products));
	};
}
