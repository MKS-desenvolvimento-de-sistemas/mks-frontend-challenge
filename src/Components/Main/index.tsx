import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProducts, IProduct } from "../../store/modules/Products";
import ProductCard from "../ProductCard";
import { MainStyle, ProductsList } from "./style";

const Main = () => {
  const productsAction = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const loaded = productsAction.loading;
  const products = productsAction.products;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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
