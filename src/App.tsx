import { useQuery } from '@tanstack/react-query';
import { styled } from 'styled-components';
import { FC } from 'react';

import { RequestAPI, ProductList } from './models/requestAPI';
import Header from './components/Header';
import Card from './components/Card';

import './App.css';

const StyledHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

`;

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
      {data && <Card products={ data.products } />}
    </StyledHome>

  );
};

export default App;
