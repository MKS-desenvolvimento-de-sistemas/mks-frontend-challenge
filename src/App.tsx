import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { styled } from 'styled-components';
import { RequestAPI, ProductList } from './models/requestAPI';
import Header from './components/Header';
import './App.css';
import Card from './components/Card';

const StyledHome = styled.div`
  width: 100%;
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
      <Card />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Algo deu errado tente novamente</p>}
      {data && data.products.map((product) => (
        <div key={ product.id }>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </StyledHome>

  );
};

export default App;
