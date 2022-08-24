import React from 'react';
import Head from 'next/head';

import * as C from './styles';
import { GetServerSideProps, NextPage } from 'next';
import fetch from 'node-fetch';
import Header from '../components/Header';
import Footer from '../components/Footer';

import shoppingBag from '../assets/images/shopping-bag.png';

type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
}

type Data = {
  products: Product[],
  count: number
}

const Home: NextPage<{data: Data}> = props => {
  return (
    <C.MainWrapper>
      <Head>
        <title>MKS Frontend Challenge</title>
      </Head>

      <Header/>
      <C.WrapperCard>
        {props.data.products.map(item => (
          <C.ProductCard key={Math.random()}>
            <C.ProductDescription>
            <C.Image>
                <img src={item.photo} height='130'/>
              </C.Image>
              <C.ProductTitle>
                <C.ProductName>{item.name}</C.ProductName>
                <C.ProductPrice>R${Math.trunc(item.price).toLocaleString('pt-BR')}</C.ProductPrice>
              </C.ProductTitle>
              <C.ProductDesc>{item.description}</C.ProductDesc>
            </C.ProductDescription>
            <C.ButtonBuy>
              <img src={shoppingBag.src} />
              <C.ButtonProduct>COMPRAR</C.ButtonProduct>
            </C.ButtonBuy>
          </C.ProductCard>
          ))}
      </C.WrapperCard>
      <Footer />
    </C.MainWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {

  const result = await fetch(
    `https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=name&orderBy=ASC`
  );

  const data: Data = await result.json();

  return {
    props: { data }
  }
};

export default Home;
