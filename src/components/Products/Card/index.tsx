import * as Styles from "./styles";

import { IProduct } from "../../../types/api";
import { Price } from "../../";
import BuyButton from "../BuyButton";

const ProductCard = (props: IProduct) => {
  const { id, name, description, price, photo } = props;
  const formatterDescription =
    description.length > 63 ? description.slice(0, 64) + "..." : description;

  return (
    <Styles.Card>
      <Styles.CardDetails>
        <Styles.CardImage imageUrl={photo}></Styles.CardImage>

        <Styles.CardInfo>
          <h4>{name}</h4>
          <Price price={Number(price)} type="product" />
          <p>{formatterDescription}</p>
        </Styles.CardInfo>
      </Styles.CardDetails>

      <BuyButton product={props} />
    </Styles.Card>
  );
};

export default ProductCard;
