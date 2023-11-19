import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from '@/styles/theme';


import GlobalStyle from '@/styles/global.style'

import { BoxMain } from '@/styles/Home.style'


import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartProducts from '@/components/Cart';
import { Provider } from 'react-redux';

import store from '@/Redux/store'
import { CartProvider } from '@/Context/CartContext';
const queryClient = new QueryClient();

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>

    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CartProvider>
            <CartProducts />
            <Header />
            <BoxMain >

              <Component {...pageProps} />
            </BoxMain>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>

  </>
)

export default App;



