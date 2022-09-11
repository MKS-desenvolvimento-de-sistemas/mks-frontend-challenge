import type { AppProps } from 'next/app'

import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout'
import Providers from '../hooks'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  )
}

export default MyApp
