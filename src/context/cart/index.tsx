import { Dispatch, SetStateAction } from "react";

interface ICartContext {
  isCartActive: boolean;
  setCartActive: Dispatch<SetStateAction<boolean>>;
};