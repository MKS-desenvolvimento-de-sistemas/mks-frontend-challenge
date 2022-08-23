import {createSlice} from '@reduxjs/toolkit';

const carrinho = createSlice({
	name: 'carrinho',
	initialState: {
		counter: 0,
	},
	reducers: {
		increment(state) {
			state.counter += 1;
		},
		decrement(state) {
			state.counter -= 1;
		},
	},
});

export const {decrement, increment} = carrinho.actions;
export default carrinho.reducer;
