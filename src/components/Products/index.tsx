import * as Styles from "./styles";
import { IProducts } from "../../types/api";
import ProductCard from "./Card";

const ProductsList = ({ products }: IProducts) => {
  return (
    <Styles.List>
      {products?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Styles.List>
  );
};

export default ProductsList;
