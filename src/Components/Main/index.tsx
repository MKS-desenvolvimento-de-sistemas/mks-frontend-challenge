import { useEffect } from "react";

import { fetchProducts, IProduct } from "../../store/modules/Products";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { MainStyle, ProductsList } from "./style";
import ProductCard from "../ProductCard";

const Main = () => {
  const productsAction = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const loaded = productsAction.loading;
  const products = productsAction.products;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <MainStyle>
      {loaded ? (
        <div>
          <h1>Carregando</h1>
        </div>
      ) : (
        <ProductsList>
          {products.map((item: IProduct) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              photo={item.photo}
              price={item.price}
            />
          ))}
        </ProductsList>
      )}
    </MainStyle>
  );
};

export default Main;
