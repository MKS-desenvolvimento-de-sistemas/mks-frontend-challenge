import Head from 'next/head';
// import styles from '../styles/Home.module.css';
// import {Counter} from './app/counter/Counter';
import { Navbar } from '../styles/components/app/navbar/Navbar';
import ProductsList from '../styles/components/app/products/Products';
import {Main, Footer} from '../styles/styles';
import { Cart } from '../styles/components/app/cart/Cart';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MKS Frontend Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cart />
      <nav>
        <Navbar />
      </nav>
     
      <Main>
        {/* <Counter /> */}
        <ProductsList />
      </Main>

      

      <Footer>
        <p>
          MKS sistemas © Todos os direitos reservados
        </p>      
      </Footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
