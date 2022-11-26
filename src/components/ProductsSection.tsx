import React from "react";
import { connect } from "react-redux";
import Product from "../interfaces";
import store from "../redux";
import { getProducts } from "../redux/actions";
import ProductCard from "./ProductCard";
import { ProductSectionStyled } from "./productSectionStyled";

interface IStore {
  products: Product[];
  loading: boolean;
}

interface Props {}

class ProductsSection extends React.Component<Props> {
  componentDidMount(): void {
    const { getProducts } = this.props as { getProducts: Function };
    getProducts();
  }

  render() {
    const { loading, products } = this.props as IStore;
    return (
      <ProductSectionStyled className="product-section">
        {loading ? (
          <p>Carregando...</p>
        ) : (
          products.map((product: Product) => (
            <ProductCard
              id={product.id}
              img={product.photo}
              description={product.description}
              price={product.price}
              title={product.name}
              key={product.id}
            />
          ))
        )}
      </ProductSectionStyled>
    );
  }
}

const mapStateToProps = (store: {
  products: { products: Product[]; loading: boolean };
}) => ({
  products: store.products.products,
  loading: store.products.loading,
});

const mapDispatchToProps = (dispatch: any) => ({
  getProducts: () =>
    dispatch(
      getProducts(
        "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=ASC"
      )
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSection);
