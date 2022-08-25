import React from 'react';
import Home from './pages/Home';
import {Provider} from 'react-redux';
import store from './store';
import GlobalStyle from './styles/global';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
	return (
		<Provider store={ store }>
			<GlobalStyle />
			<Home />
			<ToastContainer
				position='top-right'
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover={false}
			/>
		</Provider>
	);
}

export default App;
