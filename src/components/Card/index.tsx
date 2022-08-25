import React from 'react';
import {CardStyle, CardText, CardImage, CardBotao} from './style';
import Shopping from '../../img/shopping.png';
import CardInterface from '../../interface/card.interface';
import {useDispatch, useSelector} from 'react-redux';
import {adicionalCarrinho, addMaisCarrinho} from '../../store/Stock.store';
import {RootState} from '../../store';
import ProductInterface from '../../interface/product.interface';
import {toast} from 'react-toastify';

const Card = ({id, photo, price, name, description}: CardInterface) => {
	const dispatch = useDispatch();
	const carrinho = useSelector((state: RootState) => state.carrinho);

	const onClick = () => {
		toast.success('Adicionado ao Carrinho!', {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
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
					<img src={photo} alt='imagem de um produto' data-testid='img-card'/>
				</CardImage>
				<CardText>
					<div>
						<h1 data-testid='name-card'>{name}</h1>
						<span data-testid='price-card'>R${price}</span>
					</div>
					<p data-testid='description-card'>{description}</p>
				</CardText>
			</CardStyle>
			<CardBotao onClick={onClick} data-testid='button-card'>
				<img src={Shopping} alt='Pequena cesta' />
				<span>Comprar</span>
			</CardBotao>
		</div>
	);
};

export default Card;
