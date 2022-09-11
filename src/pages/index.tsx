import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import If from '../components/If';

import ProductCard from '../components/ProductCard';
import ProductListSkeleton from '../components/Skeletons/ProductListSkeleton';
import { IProduct } from '../interfaces/IProduct';
import { GlobalStyle } from '../styles/global'
import { Main } from '../styles/home';

type DataProps = {
  products: IProduct[];
  count: number;
}

type Props = {
  data: DataProps;
}

const Home: NextPage<Props> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (data?.products) setIsLoading(false)
  }, [data])

  return (
    <div>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="Compre produtos com Frete Grátis no mesmo dia na MKS. Encontre milhares de marcas e produtos a preços incríveis." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyle />
      <Main>
        <If condition={isLoading}>
          <ProductListSkeleton />
        </If>
        {
          data?.products.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </Main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC`)
  const data: DataProps = await res.json()

  return { props: { data } }
}

export default Home
