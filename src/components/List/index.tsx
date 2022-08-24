import React, {useEffect} from 'react';
import Card from '../Card';
import {Container} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {asyncGetProducts} from '../../store/Stock.store';

const List = () => {
	const dispatch = useDispatch();
	const carrinho = useSelector((state: RootState) => state.carrinho);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		const getProduct = () => dispatch(asyncGetProducts());
		getProduct();
	}, []);

	return (
		<Container>
			{carrinho.products.map(({id, photo, name, price, description}, index) => (
				<Card
					key={id}
					id={id}
					photo={photo}
					name={name}
					price={price}
					description={description}
				/>
			))}
		</Container>
	);
};

export default List;
