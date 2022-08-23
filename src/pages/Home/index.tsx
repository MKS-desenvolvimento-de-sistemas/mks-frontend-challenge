import React from 'react';
import Header from '../../components/Header';
import List from '../../components/List';
import Cart from '../../components/Cart';

type Props = Record<string, unknown>;

const Home = (props: Props) => (
	<>
		<Cart />
	</>
);

export default Home;
