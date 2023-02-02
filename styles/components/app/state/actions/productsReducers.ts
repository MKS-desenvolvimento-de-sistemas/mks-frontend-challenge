import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2';

    const initialState: any = {
        products: [],
        cart: [],
        loading: true
    }
  
  const productsReducer = createSlice({
    name: "products",
    initialState,
    reducers: { 
        productList(state, {payload}) {
            return {...state, products: payload}
        },        
        productCart(state, action) {
            state.cart.push(action.payload);
        },        
        moreProductCart(state, action) {
            const { quantity, id} = action.payload;            
            const existingProduct = state.cart.find((product: any) => product.id === id);
            if (existingProduct) {
                existingProduct.quantity = quantity + 1;
            }
          },
        lessProductCart(state, action) {
            const { quantity, id} = action.payload;            
            const existingProduct = state.cart.find((product: any) => product.id === id);
            if (existingProduct && quantity > 1) {
                existingProduct.quantity = quantity - 1;
            } else {
                Swal.fire({
                    title: 'Ação não permitida!',
                    text: `Você não pode ter número negativo de produto no carrinho`,
                    icon: 'error',
                    confirmButtonText: 'Entendido!'
                  }) 
            }
          },
    },
  });
  
  export const { productList, productCart, moreProductCart, lessProductCart } = productsReducer.actions;
  
  export default productsReducer.reducer;