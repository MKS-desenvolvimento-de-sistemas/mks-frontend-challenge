export const getProductsData = (ProductListData: any) => {
    return {
        type: "getProducts",
        payload: ProductListData
    }
}

export const updateCartData = (updatedData: any) => {
    return {
        type: "updateCart",
        payload: updatedData
    }
}

export const updateQuantity = (updatedData: any) => {
    return {
        type: "updateQuantity",
        payload: updatedData
    }
}