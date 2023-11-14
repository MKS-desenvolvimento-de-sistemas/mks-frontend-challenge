import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

import GlobalStyle from '@/styles/global.style'

import { BoxCard } from '@/styles/Home.style'


import Header from '@/components/Header';
import Footer from '@/components/Footer';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <BoxCard >

        <Component {...pageProps} />
      </BoxCard>
      <Footer />

    </ThemeProvider>
  </>
)

export default App;



