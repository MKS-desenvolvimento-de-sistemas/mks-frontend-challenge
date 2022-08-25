import React from 'react';
import {ItemCartStyle, ItemCartButton, ItemCartPrice, QuantityCart, ContainerQuantity} from './style';
import ItemCartInterface from '../../interface/itemcart.interface';
import {RootState} from '../../store';
import {useSelector, useDispatch} from 'react-redux';
import ProductInterface from '../../interface/product.interface';
import {addMaisCarrinho, removerCarrinho} from '../../store/Stock.store';

const ItemCart = ({id, name, photo, quantity, price}: ItemCartInterface) => {
	const dispatch = useDispatch();
	const carrinho = useSelector((state: RootState) => state.carrinho);

	const addItem = () => {
		const allProductsSelected: ProductInterface[] = carrinho.productsSelected;
		const addExtra = allProductsSelected.map(obj => {
			if (obj.id === id) {
				const increment =	{...obj, quantity: Number(obj.quantity) + 1};
				return increment;
			}

			return obj;
		});
		return dispatch(addMaisCarrinho(addExtra));
	};

	const removeItem = () => {
		const allProductsSelected: ProductInterface[] = carrinho.productsSelected;
		const addExtra = allProductsSelected.map(obj => {
			if (obj.id === id && Number(obj.quantity) > 0) {
				const decrement =	{...obj, quantity: Number(obj.quantity) - 1};
				return decrement;
			}

			return obj;
		});
		return dispatch(removerCarrinho(addExtra));
	};

	const removeItemCart = () => {
		const allProductsSelected: ProductInterface[] = carrinho.productsSelected;
		const addExtra = allProductsSelected.filter(obj => obj.id !== id);
		return dispatch(removerCarrinho(addExtra));
	};

	return (
		<ItemCartStyle>
			<img src={photo} alt='' />
			<h1>{name}</h1>
			<ContainerQuantity>
				<QuantityCart>
					<span>Qtd:</span>
					<div>
						<button onClick={removeItem}>-</button>
						<span>{quantity}</span>
						<button onClick={addItem}>+</button>
					</div>
				</QuantityCart>
				<ItemCartPrice>R${price}</ItemCartPrice>
			</ContainerQuantity>
			<ItemCartButton onClick={removeItemCart}>&#x02A2F;</ItemCartButton>
		</ItemCartStyle>
	);
};

export default ItemCart;
