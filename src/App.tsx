import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { RequestAPI, ProductList } from './models/requestAPI';

const App: FC = () => {
  const { data, isError, isLoading } = useQuery<ProductList>({
    queryKey: ['product'],
    queryFn: RequestAPI.getProducts,
  });
  console.log(data);

  return (

    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Algo deu errado tente novamente</p>}
      {data && data.products.map((product) => (
        <div key={ product.id }>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>

  );
};

export default App;
