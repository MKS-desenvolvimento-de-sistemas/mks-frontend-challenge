import { connect } from "react-redux";
import {
  oneLessProduct,
  oneMoreProduct,
  updateTotalValue,
} from "../redux/actions";

type Product = {
  img: string;
  title: string;
  price: string;
  count: number;
  id: string;
  addProduct: Function;
  removeProduct: Function;
  updateValue: Function;
};

function ProductCardCart({
  img,
  title,
  price,
  count,
  id,
  addProduct,
  removeProduct,
  updateValue,
}: Product) {
  const oneLess = () => {
    removeProduct(id);
    updateValue(-(Number(price.split(".")[0])));
  };

  const oneMore = () => {
    addProduct(id);
    updateValue(Number(price.split(".")[0]));
  };

  return (
    <div className="product-card-cart">
      <img src={img} alt={title} />
      <p className="title">{title}</p>
      <div className="counter">
        qtd
        <div>
          <button onClick={oneLess}>-</button>
          <p>{count}</p>
          <button onClick={oneMore}>+</button>
        </div>
      </div>
      <p className="price">{`R$${
        (price.split(".")[0] as unknown as number) * count
      }`}</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  addProduct: (id: string) => dispatch(oneMoreProduct(id)),
  removeProduct: (id: string) => dispatch(oneLessProduct(id)),
  updateValue: (value: number) => dispatch(updateTotalValue(value)),
});

export default connect(null, mapDispatchToProps)(ProductCardCart);
