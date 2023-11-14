import type { AppProps } from 'next/app'

import GlobalStyle from '@/styles/global.style'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

export default App;



