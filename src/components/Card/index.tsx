import React from 'react';
import {CardStyle, CardText, CardImage, CardBotao} from './style';
import Shopping from '../../img/shopping.png';
import CardInterface from '../../interface/card.interface';
import {useDispatch, useSelector} from 'react-redux';
import {adicionalCarrinho, addMaisCarrinho} from '../../store/Stock.store';
import {RootState} from '../../store';
import ProductInterface from '../../interface/product.interface';

const Card = ({id, photo, price, name, description}: CardInterface) => {
	const dispatch = useDispatch();
	const carrinho = useSelector((state: RootState) => state.carrinho);

	const onClick = () => {
		const allProducts: ProductInterface[] = carrinho.products;
		const allProductsSelected: ProductInterface[] = carrinho.productsSelected;
		const filterProduct = allProducts.find(obj => obj.id === id);
		if (!filterProduct) {
			return [];
		}

		const objFinal = {...filterProduct, quantity: 1};

		const verifyIfExist = allProductsSelected.find(obj => obj.id === filterProduct.id);
		if (!verifyIfExist) {
			return dispatch(adicionalCarrinho(objFinal));
		}

		const addExtra = allProductsSelected.map(obj => {
			if (obj.id === verifyIfExist.id) {
				const increment =	{...verifyIfExist, quantity: Number(verifyIfExist.quantity) + 1};
				return increment;
			}

			return obj;
		});
		return dispatch(addMaisCarrinho(addExtra));
	};

	return (
		<div>
			<CardStyle>
				<CardImage>
					<img src={photo} alt='' />
				</CardImage>
				<CardText>
					<div>
						<h1>{name}</h1>
						<span>R${price}</span>
					</div>
					<p>{description}</p>
				</CardText>
			</CardStyle>
			<CardBotao onClick={onClick}>
				<img src={Shopping} alt='Pequena cesta' />
				<span>Comprar</span>
			</CardBotao>
		</div>
	);
};

export default Card;
