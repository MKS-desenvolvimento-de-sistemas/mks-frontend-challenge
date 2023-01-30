import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";

import { addToCart, getTotalCart } from "../../store/modules/Cart";
import { BagIcon } from "../../Icons/BagIcon";
import { BuyButton, Card } from "./style";
import { RootState } from "../../store";

interface IProductCard {
  id?: number;
  name?: string;
  description?: string;
  photo?: string;
  price?: string;
}

const ProductCard = ({ id, name, description, photo, price }: IProductCard) => {
  const roundPrice = price ? price.split(".")[0] : "";
  const halfStr = Math.floor(roundPrice.length / 3);
  const formattedPrice =
    roundPrice.length > 3
      ? roundPrice.substr(0, halfStr) + "." + roundPrice.substr(halfStr)
      : roundPrice;
  const rewrittenPrice = `R$${formattedPrice}`;

  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(getTotalCart());
  }, [cart, dispatch]);

  return (
    <Card>
      {id ? (
        <>
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
        </>
      ) : (
        <>
          <Skeleton
            variant="rectangular"
            width={190}
            height={119}
            style={{ margin: "6px 0", borderRadius: "5px" }}
          />
          <section className="info">
            <Skeleton width={115} height={45} />
            <Skeleton width={64} height={45} sx={{ bgcolor: "#727272" }} />
          </section>
          <p className="description">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </p>
          <BuyButton
            style={{
              animation: "animation-c7515d 1.5s ease-in-out 0.5s infinite",
            }}
          ></BuyButton>
        </>
      )}
    </Card>
  );
};

export default ProductCard;
