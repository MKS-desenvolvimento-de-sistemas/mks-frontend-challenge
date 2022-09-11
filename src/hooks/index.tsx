import { ReactNode } from "react"

import { CartProvider } from "./cart";
import { Provider } from 'react-redux'

import store from '../store'

type Props = {
  children: ReactNode;
}

const Providers = ({
  children
}: Props) => {
  return (
    <Provider store={store}>
      <CartProvider>
        {children}
      </CartProvider>
    </Provider>
  )
}

export default Providers
