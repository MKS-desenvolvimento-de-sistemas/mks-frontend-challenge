import { BagIcon } from "../../Icons/BagIcon";
import { Product } from "../../store/modules/Products";
import { BuyButton, Card } from "./style";

const ProductCard = ({ name, description, photo, price }: Product) => {
  const rewrittenPrice = `R$${price.split(".")[0]}`;

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

      <BuyButton>
        <BagIcon />
        Comprar
      </BuyButton>
    </Card>
  );
};

export default ProductCard;
