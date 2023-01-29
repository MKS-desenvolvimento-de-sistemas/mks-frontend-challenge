import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	
	
	html, body, main, header, footer, div, section, ul, li, h1, h2, h3, h4, p, a, button, img {
		margin: 0;
		padding: 0;
		border: none;
		list-style: none;
		text-decoration: none;
		box-sizing: border-box;
	} 

	button{
		cursor: pointer;
	}
	
	body {
		background-color: var(--color-gray-0);
		
		#root{
			height: 100vh;
			
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: space-between;
		}
	}

	:root{
		--color-primary: #0F52BA;
		--color-primary-50: #396AB4;
		--color-gray-100: #373737;
		--color-gray-50: #BFBFBF;
		--color-gray-25: #EEEEEE;
		--color-gray-0: #F9F9F9;
		--color-white: #FFFFFF;
		--color-black: #000000;
	}
`;
