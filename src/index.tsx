import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
import GlobalStyle from './styles/global';

const root = ReactDOM.createRoot(
	document.getElementById('root')!,
);
root.render(
	<React.StrictMode>
		<Provider store={ store }>
			<GlobalStyle />
			<App />
		</Provider>
	</React.StrictMode>,
);
