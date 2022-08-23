import React from 'react';
import {CardStyle, CardText, CardImage, CardBotao} from './style';
import Shopping from '../../img/shopping.png';

const Card = () => (
	<div>
		<CardStyle>
			<CardImage>
				<img src='https://pngimg.com/uploads/iphone_11/iphone_11_PNG14.png' alt='' />
			</CardImage>
			<CardText>
				<div>
					<h1>Apple Watch Series 4 GPS</h1>
					<span>R$399</span>
				</div>
				<p>Redesigned from scratch and completely revised.</p>
			</CardText>
		</CardStyle>
		<CardBotao>
			<img src={Shopping} alt='Pequena cesta' />
			<span>Comprar</span>
		</CardBotao>
	</div>
);

export default Card;
