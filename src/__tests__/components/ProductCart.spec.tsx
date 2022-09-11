import { render, fireEvent, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom'
import ProductCart from "../../components/ProductCart"

const product =  {
  id: 1,
  photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp",
  name: 'Iphone XR',
  price: 1300.00,
  description: 'Lorem ipsum',
  createdAt: '10 de abril',
  amount: 2,
}

jest.mock('../../hooks/store', () => {
  return {
    useAppSelector(state: any) {
      return [
        product
      ]
    },
    useAppDispatch(callback: any) {
      return () => {}
    }
  }
})

describe('ProductCart', () => {
  it('should be able to increment a product in the cart', async () => {
    const { getByTestId,  } = render(<ProductCart product={product} />)
    const incrementProductBtn = getByTestId('increment-product')
    
    fireEvent.click(incrementProductBtn)
    
    await waitFor(() => getByTestId('product-amount'), {
      timeout: 3000
    });

    const productAmountCounter = getByTestId('product-amount')

    expect(productAmountCounter).toHaveTextContent('3')
  })

  it('should be able to decrement a product in the cart', async () => {
    const { getByTestId } = render(<ProductCart product={product} />)
    const decrementProductBtn = getByTestId('decrement-product')

    fireEvent.click(decrementProductBtn)
    
    await waitFor(() => getByTestId('product-amount'), {
      timeout: 3000
    });

    const productAmountCounter = getByTestId('product-amount')


    expect(productAmountCounter).toHaveTextContent('1')
  })
})
