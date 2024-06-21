import { CartContext } from "@/context/cart";
import { useContext } from "react";

export const useCart = () => {
  const context = useContext(CartContext);

  if(!context){
    throw new Error('useCart must be used within a CartProvider');
  };

  return context;
};