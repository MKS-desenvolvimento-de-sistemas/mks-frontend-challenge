import { connect } from "react-redux";
import React from "react";
import { addProduct, updateTotalValue } from "../redux/actions";
import shopping from '../images/shopping-bag.svg'
type Product = {
  img: string;
  title: string;
  description: string;
  price: string;
  id: number;
};

type ReduxProps = {
  addProduct: Function;
  updateValue: Function;
}



function ProductCard({
  img,
  title,
  description,
  price,
  id,
  ...props
}: Product ) {
  const addProductToCart = ({ target }: { target: any }): void => {
    
    const { addProduct, updateValue } = props as ReduxProps;
    addProduct(`${id}`)
    updateValue(Number(price.split(".")[0]));
  }

  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <div className="price-name">
        <p>{title}</p>
        <p className="price">R${price.split('.')[0]}</p>
      </div>
      <p className="description">{description}</p>
      <button
        className="comprar"
        id={`${id}`}
        onClick={addProductToCart}
        type="button"><img src={shopping} />Comprar</button>
    </div>
  );
}

// export default class ProductCard extends React.Component {
//   render() {
//     const {
//       img,
//       title,
//       description,
//       price,
//     } = this.props as Product
//     return (
//       <div>
//         <img src={img} alt={title} />
//         <div>
//           <p>{title}</p>
//           <p>R${price}</p>
//         </div>
//         <p>{description}</p>
//         <button
//           onClick={addProductToCart}
//           type="button">Comprar</button>
//       </div>
//     );
//   }
// }
const mapDispatchToProps = (dispatch: any) => ({
  addProduct: (id: number): void => dispatch(addProduct(id)),
  updateValue: (value: number) => dispatch(updateTotalValue(value)),
})

export default connect(null, mapDispatchToProps)(ProductCard);