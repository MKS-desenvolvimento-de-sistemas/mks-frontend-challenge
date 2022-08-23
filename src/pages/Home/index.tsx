import React from 'react';
import Header from '../../components/Header';
import List from '../../components/List';

type Props = Record<string, unknown>;

const Home = (props: Props) => (
	<>
		<Header />
		<List />
	</>
);

export default Home;
