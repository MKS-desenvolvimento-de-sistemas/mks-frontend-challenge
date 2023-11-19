import { CartState, CartContextProps, CartAction } from "@/@types/CartItem";
import React, { createContext, useContext, useReducer, ReactNode } from "react";

const CartContext = createContext<CartContextProps | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART':

            const existingItem = state.items.find(item => item.id === action.payload.id);

            return {
                ...state,
                items: existingItem
                    ? state.items.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1, } : item
                    )
                    : [...state.items, { ...action.payload, quantity: 1, }],
            };

        case 'REMOVE_FROM_CART':

            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };

        case 'DECREASE_QUANTITY':

            const newState = {

                ...state,
                items: state.items.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item),
            };

            return newState

        case 'TOGGLE_CART':

            return {
                ...state,
                isOpen: !state.isOpen,
            };

        default:
            return state;
    }
};

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = (): CartContextProps => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart deve ser usado dentro de um CartProvider');
    }

    return context;
};

export { CartProvider, useCart };