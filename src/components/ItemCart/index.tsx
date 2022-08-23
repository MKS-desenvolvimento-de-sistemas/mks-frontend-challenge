import React from 'react';
import {ItemCartStyle, ItemCartButton, ItemCartPrice} from './style';

const ItemCart = () => (
	<ItemCartStyle>
		<img src='https://pngimg.com/uploads/iphone_11/iphone_11_PNG14.png' alt='' />
		<h1>Apple Watch Series 4 GPS</h1>
		<div>
			<span>Qtd:</span>
			<div>
				<button>-</button>
				<span>1</span>
				<button>+</button>
			</div>
		</div>
		<ItemCartPrice>R$399</ItemCartPrice>
		<ItemCartButton>&#x02A2F;</ItemCartButton>
	</ItemCartStyle>
);

export default ItemCart;
