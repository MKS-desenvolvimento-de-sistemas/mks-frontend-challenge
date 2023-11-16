import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from '@/styles/theme';


import GlobalStyle from '@/styles/global.style'

import { BoxMain } from '@/styles/Home.style'


import Header from '@/components/Header';
import Footer from '@/components/Footer';

const queryClient = new QueryClient();

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>

    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <BoxMain >

          <Component {...pageProps} />
        </BoxMain>
        <Footer />

      </ThemeProvider>
    </QueryClientProvider>

  </>
)

export default App;



