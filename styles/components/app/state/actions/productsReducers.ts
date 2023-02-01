const initialState: any = {
    products: [],
    cart: [],
    loading: true
}

const productsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "getProducts":
            return {
                ... state,
                products: action.payload,
                loading: false
            }  
        case "updateQuantity":
            return {
                ...state,
                products: {
                    ...state.products,

                    cart: {
                    ...state.cart,
                    counter: action.payload
                    }
                }
              }
           
        case "updateCart":
            Object.defineProperties(action.payload, {
                counter: {
                  value: 1,              
                }
              })  
            return {
                ...state,
                updatedData: action.payload,              
                cart: [...state.cart, action.payload],
                loading: false
            } 
        default: 
            return state    
    }
}

export default productsReducer;