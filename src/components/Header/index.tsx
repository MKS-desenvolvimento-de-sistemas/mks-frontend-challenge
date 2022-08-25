import React from 'react';
import {Container, HeaderHome, CartButton} from './style';
import Logo from '../../img/logo.svg';
import Cart from '../../img/cart.png';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {abrirCarrinho} from '../../store/Stock.store';

const Header = () => {
	const dispatch = useDispatch();
	const carrinho = useSelector((state: RootState) => state.carrinho);

	const cartOpen = () => dispatch(abrirCarrinho());

	return (
		<HeaderHome>
			<Container>
				<div className='containerImg'>
					<img src={Logo} alt='Logo MKS sistemas' />
				</div>
				<CartButton
					style={{display: carrinho.cartOpen === 'flex' ? 'none' : 'flex'}}
					onClick={() => cartOpen()}
					data-testid='button-cart'
				>
					<img src={Cart} alt='Carrinho de compra' />
					<span>{carrinho.productsSelected.length}</span>
				</CartButton>
			</Container>
		</HeaderHome>
	);
};

export default Header;
