import { useEffect, useState } from "react";

import { fetchProducts, IProduct } from "../../store/modules/Products";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { MainStyle, ProductsList } from "./style";
import ProductCard from "../ProductCard";

const Main = () => {
  const [hideSkeleton, setHideSkeleton] = useState<boolean>(true);

  const productsAction = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const quantitySkeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  const loaded = productsAction.loading;

  const products = productsAction.products;

  useEffect(() => {
    setTimeout(() => {
      setHideSkeleton(!hideSkeleton);
    }, 1000);
  }, [loaded]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <MainStyle>
      <ProductsList>
        {hideSkeleton ? (
          <>
            {quantitySkeleton.map((index) => (
              <ProductCard key={index}/>
            ))}
          </>
        ) : (
          <>
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
          </>
        )}
      </ProductsList>
    </MainStyle>
  );
};

export default Main;
