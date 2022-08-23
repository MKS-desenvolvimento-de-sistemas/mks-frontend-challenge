import React from 'react';
import ItemCart from '../ItemCart';
import {
	CartStyleContainer,
	Container,
	CartHeader,
	CartList,
	CartTotalPrice,
	CartFinality,
} from './style';

const Cart = () => (
	<div>
		<CartStyleContainer>
			<Container>
				<CartHeader>
					<h1>Carrinho de compras</h1>
					<button>&#x02A2F;</button>
				</CartHeader>
				<CartList className='paddingLast'>
					<ItemCart />
					<ItemCart />
					<ItemCart />
					<ItemCart />
					<ItemCart />
				</CartList>
			</Container>
		</CartStyleContainer>
		<CartTotalPrice>
			<h1>Total:</h1>
			<h1>R$798</h1>
		</CartTotalPrice>
		<CartFinality>
			<h1>Finalizar Compra</h1>
		</CartFinality>
	</div>
);

export default Cart;
