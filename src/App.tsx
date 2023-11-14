import { useQuery } from '@tanstack/react-query';
import { FC, useContext, useEffect } from 'react';
import Header from './components/Header';
import Card from './components/Card';

import './App.css';
import { StyledCardResponsive, StyledFooter, StyledHome } from './styles/appStyles';
import { ProductList } from './interface/type';
import { RequestAPI } from './models/requestAPI';
import CartContext from './context/cartContext';

const App: FC = () => {
  const { data, isError, isLoading } = useQuery<ProductList>({
    queryKey: ['product'],
    queryFn: RequestAPI.getProducts,
  });
  const { cart } = useContext(CartContext);
  useEffect(() => {}, [cart]);
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
      <StyledFooter>
        <span>MKS sistemas © Todos os direitos reservados</span>
      </StyledFooter>
    </StyledHome>

  );
};

export default App;
