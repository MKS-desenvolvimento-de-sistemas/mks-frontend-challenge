export const addToCart = (product: any) => ({
    type: 'ADD_TO_CART',
    payload: product
});

export const removeFromCart = (productId: number) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId
});


export const toggleCart = () => ({
    type: 'TOGGLE_CART',
});

