import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { hydrate } from "../store/product.store";
import { useAppDispatch } from "./store";

type CartContextProps = {
  cartIsOpen: boolean;
  toggleSidebarCart: () => void;
}

type CartProviderProps = {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextProps)

export const CartProvider = ({
  children
}: CartProviderProps) => {
  const dispatch = useAppDispatch()
  const [cartIsOpen, setCartIsOpen] = useState(false)

  function toggleSidebarCart() {
    setCartIsOpen(state => !state)
  }

  useEffect(() => {
    dispatch(hydrate())
  }, [])

  return (
    <CartContext.Provider
      value={{
        cartIsOpen,
        toggleSidebarCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('to use useCart need CartProvider')
  return context
}
