import { connect } from "react-redux";
import React from "react";
import { addProduct } from "../redux/actions";

type Product = {
  img: string;
  title: string;
  description: string;
  price: string;
  id: number;
};

type ReduxProps = {
  addProduct: Function
}



function ProductCard({
  img,
  title,
  description,
  price,
  id,
  ...props
}: Product ) {
  const addProductToCart = ({ target }: {target: any}): void => {
    const { addProduct } = props as ReduxProps;
    
    addProduct(target.id)
  }

  return (
    <div>
      <img src={img} alt={title} />
      <div>
        <p>{title}</p>
        <p>R${price}</p>
      </div>
      <p>{description}</p>
      <button
        id={`${id}`}
        onClick={addProductToCart}
        type="button">Comprar</button>
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
  addProduct: (id: number): void => dispatch(addProduct(id))
})

export default connect(null, mapDispatchToProps)(ProductCard);