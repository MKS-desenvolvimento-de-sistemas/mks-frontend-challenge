export type Product = {
    products: Array<{
        id: string,
        name: string,
        brand: string,
        description: string,
        photo: string,
        price: number,
        createdAt: string,
        updatedAt: string,
        count: number
}>
}