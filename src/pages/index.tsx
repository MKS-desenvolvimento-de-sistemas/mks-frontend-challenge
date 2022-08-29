// NEXT IMPORT'S
import { GetStaticProps } from "next";
import type { NextPage } from "next";
import Head from "next/head";

// REACT IMPORT'S
import { useState } from "react";

// COMPONENTS IMPORT'S
import { Cart, Footer, Header, ProductsList } from "../components";

//REDUX IMPORT'S
import { useSelector } from "react-redux";
import { RootState } from "../redux";

import { IProducts } from "../types/api";
import { getProducts } from "../services";

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
};

const Home: NextPage<IProducts> = ({ products }) => {
  const cart = useSelector((state: RootState) => state.cart.products);

  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
        <meta
          name="description"
          content="Teste técnico promovido pela MKS Sistemas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header openCart={() => setCartIsOpen(true)} />
      {cartIsOpen && (
        <Cart cart={cart} closeCart={() => setCartIsOpen(false)} />
      )}
      <main>
        <ProductsList products={products} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
