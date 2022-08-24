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
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {fecharCarrinho} from '../../store/Stock.store';

const Cart = () => {
	const dispatch = useDispatch();
	const carrinho = useSelector((state: RootState) => state.carrinho);

	const cartClose = () => dispatch(fecharCarrinho());

	const getTotalValores = () => {
		if (carrinho.productsSelected.length > 0) {
			const totalArray = carrinho.productsSelected.map(obj => Number(obj.price) * Number(obj.quantity));
			const soma = totalArray.reduce((acc, curl) => acc + curl);
			return soma.toFixed(2);
		}

		return '0.00';
	};

	return (
		<div style={{display: carrinho.cartOpen}}>
			<CartStyleContainer>
				<Container>
					<CartHeader>
						<h1>Carrinho de compras</h1>
						<button
							onClick={() => cartClose()}
						>
							&#x02A2F;
						</button>
					</CartHeader>
					<CartList className='paddingLast'>
						{carrinho.productsSelected.map(({id, name, photo, quantity, price}, index) => (
							<ItemCart
								key={index}
								name={name}
								id={id}
								photo={photo}
								quantity={quantity}
								price={price}
							/>
						))}
					</CartList>
				</Container>
			</CartStyleContainer>
			<CartTotalPrice>
				<h1>Total:</h1>
				<h1>R${getTotalValores()}</h1>
			</CartTotalPrice>
			<CartFinality>
				<h1>Finalizar Compra</h1>
			</CartFinality>
		</div>
	);
};

export default Cart;
