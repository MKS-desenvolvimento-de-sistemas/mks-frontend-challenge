import Head from 'next/head';
// import styles from '../styles/Home.module.css';
// import {Counter} from './app/counter/Counter';
import React, { useEffect, useState } from 'react';
import { Navbar } from '../styles/components/app/navbar/Navbar';
import ProductsList from '../styles/components/app/products/Products';
import {Main, Footer} from '../styles/styles';
import { Cart } from '../styles/components/app/cart/Cart';
import { useRouter } from "next/router";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  const router = useRouter();

  useEffect(() => {
    const closeMenu = () => isOpen && setOpen(false);
    router.events.on("routeChangeStart", closeMenu);
    return () => {
      router.events.off("routeChangeStart", closeMenu);
    };
  }, [isOpen, router]);

  return (
    <div>
      <Head>
        <title>MKS Frontend Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cart isOpen={isOpen} toggleMenu={toggleMenu} />
      <nav>
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
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
