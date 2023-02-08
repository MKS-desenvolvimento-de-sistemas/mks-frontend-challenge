import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ProviderC } from './ProdutosContext';
import {store} from './store';

import Child from './componentes/Button/Child';
import App from './App';
import './index.css';
import GlobalStyle from './GlobalStyle';

const container = document.getElementById('root')!;
const root = createRoot(container);
 
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <ProviderC>
      <Provider store={store}>
        <App />
      </Provider>
    </ProviderC>
    
      
    
  </React.StrictMode>
);


