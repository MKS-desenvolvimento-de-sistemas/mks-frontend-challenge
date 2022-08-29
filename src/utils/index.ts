import { IProductCart } from "../types/api";

export const getQuantityInCart = (cart: IProductCart[]) => {
  if (cart.length === 0) return 0;
  const quantities = cart.map((product) => product.quantity);
  const quantityTotal = quantities.reduce(
    (acc, currentValue) => acc + currentValue
  );

  return quantityTotal;
};

export const getPriceInCart = (cart: IProductCart[]) => {
  if (cart.length === 0) return 0;
  const prices = cart.map(
    (product) => Number(product.price) * product.quantity
  );
  const priceTotal = prices.reduce((acc, currentValue) => acc + currentValue);

  return priceTotal;
};
