import { useDispatch, useSelector } from 'react-redux';
import { useCart as useCartContext } from '@/Context/CartContext';
import { addToCart, removeFromCart, toggleCart } from '@/Redux/cartActions';
import { RootState } from '@/Redux/store';
import { CartItem } from '@/@types/CartItem';

const useCombinedCart = () => {
    const { state: contextState, dispatch: contextDispatch } = useCartContext();
    const reduxDispatch = useDispatch();
    const reduxState = useSelector((state: RootState) => state.cart);

    const addToCartCombined = (product: CartItem) => {
        contextDispatch({ type: 'ADD_TO_CART', payload: product });
        reduxDispatch(addToCart(product));
    };

    const removeFromCartCombined = (productId: number) => {
        contextDispatch({ type: 'REMOVE_FROM_CART', payload: productId });
        reduxDispatch(removeFromCart(productId));
    };

    const toggleCartCombined = () => {
        contextDispatch({ type: 'TOGGLE_CART' });
        reduxDispatch(toggleCart());
    };

    return {
        contextState,
        reduxState,
        addToCartCombined,
        removeFromCartCombined,
        toggleCartCombined,
    };
};

export default useCombinedCart;
