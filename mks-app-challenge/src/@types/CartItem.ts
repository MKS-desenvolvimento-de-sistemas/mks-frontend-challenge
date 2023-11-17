

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    isOpen: boolean;
}

export interface CartState {
    items: CartItem[]
    isOpen: boolean;
}

export interface CartAction {
    type: string;
    payload?: any;
}

export interface CartContextProps {
    state: CartState;
    dispatch: React.Dispatch<CartAction>
}





