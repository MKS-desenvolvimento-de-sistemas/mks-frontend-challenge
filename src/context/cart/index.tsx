import ProductProps from "@/components/product/type";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface ICartContext {
  isCartActive: boolean;
  setCartActive: Dispatch<SetStateAction<boolean>>;
  products: ProductProps[];
  setProducts: Dispatch<SetStateAction<ProductProps[]>>;
};

export const CartContext = createContext<ICartContext | undefined>(undefined);