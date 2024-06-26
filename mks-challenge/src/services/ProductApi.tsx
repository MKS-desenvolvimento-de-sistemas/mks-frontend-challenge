import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Product} from '../models/products.model'
const JASON_API = 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=15&sortBy=id&orderBy=ASC'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: JASON_API}),
    endpoints: (builder) =>({
        products:builder.query<Product, void>({
            query:()=> ''
        })
    })
})

export const {useProductsQuery} = productApi