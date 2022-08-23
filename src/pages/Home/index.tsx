import React from 'react';
import Header from '../../components/Header';
import List from '../../components/List';
import Cart from '../../components/Cart';

type Props = Record<string, unknown>;

const Home = (props: Props) => (
	<>
		<Header></Header>
		<List></List>
		<Cart />
	</>
);

export default Home;
