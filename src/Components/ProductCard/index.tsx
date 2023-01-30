import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { addToCart, getTotalCart } from "../../store/modules/Cart";
import { IProduct } from "../../store/modules/Products";
import { BagIcon } from "../../Icons/BagIcon";
import { BuyButton, Card } from "./style";
import { RootState } from "../../store";

const ProductCard = ({ id, name, description, photo, price }: IProduct) => {
	const roundPrice = price.split(".")[0]
  const halfStr = Math.floor(roundPrice.length / 3);	
	const formattedPrice = roundPrice.length > 3 ? roundPrice.substr(0, halfStr) + "." + roundPrice.substr(halfStr) : roundPrice
  const rewrittenPrice = `R$${formattedPrice}`;

  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(getTotalCart());
  }, [cart, dispatch]);

  return (
    <Card>
      <img src={photo} alt={`img ${name}`} />
      <section className="info">
        <p className="name">{name}</p>
        <div className="price">
          <p>{rewrittenPrice}</p>
        </div>
      </section>
      <p className="description">{description}</p>

      <BuyButton
        onClick={() => dispatch(addToCart({ id, name, photo, price }))}
      >
        <BagIcon />
        Comprar
      </BuyButton>
    </Card>
  );
};

export default ProductCard;
