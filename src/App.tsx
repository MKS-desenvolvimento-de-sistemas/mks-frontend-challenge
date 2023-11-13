import { useQuery } from '@tanstack/react-query';
import { styled } from 'styled-components';
import { FC } from 'react';

import { RequestAPI, ProductList } from './models/requestAPI';
import Header from './components/Header';
import Card from './components/Card';

import './App.css';
import { StyledCardResponsive, StyledHome } from './styles/appStyles';

const App: FC = () => {
  const { data, isError, isLoading } = useQuery<ProductList>({
    queryKey: ['product'],
    queryFn: RequestAPI.getProducts,
  });
  console.log(data);

  return (
    <StyledHome>

      <Header />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Algo deu errado tente novamente</p>}
      <StyledCardResponsive>
        {data && data.products.map((product) => (
          <Card key={ product.id } product={ product } />))}
      </StyledCardResponsive>
    </StyledHome>

  );
};

export default App;
