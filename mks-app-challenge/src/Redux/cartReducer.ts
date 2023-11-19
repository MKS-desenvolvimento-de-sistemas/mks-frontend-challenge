import { CartState, CartAction } from "@/@types/CartItem";


const initialState: CartState = {
    items: [],
    isOpen: false,
}

const cartReducer = (state: CartState = initialState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART':

            const existingItem = state.items.find(item => item.id === action.payload.id);

            return {
                ...state,
                items: existingItem
                    ? state.items.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                    : [...state.items, { ...action.payload, quantity: 1 }],
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };

        case 'TOGGLE_CART':
            return {
                ...state,
                isOpen: !state.isOpen,
            };

        case 'INCREASE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                ),
            }

        case 'DECREASE_QUANTITY':



            const newState = {

                ...state,
                items: state.items.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item),
            };

            return newState

        default:
            return state;
    }
};

export default cartReducer; 
