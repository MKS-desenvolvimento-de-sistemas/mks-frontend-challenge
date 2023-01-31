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
        case "updateCart":
            Object.defineProperties(action.payload, {
                counter: {
                  value: 1,              
                }
              }); 
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