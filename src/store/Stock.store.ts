import {createSlice} from '@reduxjs/toolkit';

const carrinho = createSlice({
	name: 'carrinho',
	initialState: {
		counter: 0,
		cartOpen: 'none',
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
	},
});

export const {
	decrement,
	increment,
	abrirCarrinho,
	fecharCarrinho,
} = carrinho.actions;
export default carrinho.reducer;
