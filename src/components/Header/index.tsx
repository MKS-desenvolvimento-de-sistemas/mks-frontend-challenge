import React from 'react';
import {Container, HeaderHome} from './style';

type Props = Record<string, unknown>;

const Header = (props: Props) => (
	<HeaderHome>
		<Container>
			<div>LOGO</div>
			<div>
				<i></i>
				<span></span>
			</div>
		</Container>
	</HeaderHome>
);

export default Header;
