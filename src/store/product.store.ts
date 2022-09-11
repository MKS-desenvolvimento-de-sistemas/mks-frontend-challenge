import { createSlice } from '@reduxjs/toolkit'
import { ICartProduct } from '../interfaces/IProduct'

const initialState: ICartProduct[] = []

const product = createSlice({
  name: 'products',
  initialState,
  reducers: {
    hydrate() {
      const dataByStorage = localStorage.getItem('@mks:cart') || '[]'
      return JSON.parse(dataByStorage)
    },
    addProduct(state, context) {
      const productAlreadyAdded = state.find(p => p.id === context.payload.product.id)
      if (productAlreadyAdded) {
        productAlreadyAdded.amount += 1
      } else {
        state.push({
          ...context.payload.product,
          amount: 1,
        })
      }
      localStorage.setItem('@mks:cart', JSON.stringify(state))
      return state
    },
    updateProduct(state, context) {
      const filteredState = state.map((product) => {
        if (context.payload.product.id === product.id) {
          return context.payload.product
        }

        return product
      })
      
      localStorage.setItem('@mks:cart', JSON.stringify(filteredState))
      return [...filteredState]
    },
    incrementProductAmount(state, context) {
      const filteredState = state.map((product) => {
        if (context.payload.id === product.id) {
          return {
            ...product,
            amount: product.amount + 1
          }
        }

        return product
      })

      localStorage.setItem('@mks:cart', JSON.stringify(filteredState))
      return [...filteredState]
    },
    decrementProductAmount(state, context) {
      const filteredState = state.map((product) => {
        if (context.payload.id === product.id) {
          return {
            ...product,
            amount: product.amount - 1
          }
        }

        return product
      })

      localStorage.setItem('@mks:cart', JSON.stringify(filteredState))
      return [...filteredState]
    },
    removeProduct(state, context) {
      const filteredState = state.filter(product => product.id !== context.payload.id)

      localStorage.setItem('@mks:cart', JSON.stringify(filteredState))
      return [...filteredState]
    },
  }
})

export const {
  hydrate,
  addProduct,
  updateProduct,
  removeProduct,
  incrementProductAmount,
  decrementProductAmount,
} = product.actions
export default product.reducer
