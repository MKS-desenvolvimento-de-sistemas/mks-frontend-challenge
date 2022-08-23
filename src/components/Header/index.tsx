import React from 'react';
import {Container, HeaderHome, CartButton} from './style';
import Logo from '../../img/logo.svg';
import Cart from '../../img/cart.png';

const Header = () => (
	<HeaderHome>
		<Container>
			<div>
				<img src={Logo} alt='Logo MKS sistemas' />
			</div>
			<CartButton>
				<img src={Cart} alt='Carrinho de compra' />
				<span>0</span>
			</CartButton>
		</Container>
	</HeaderHome>
);

export default Header;
