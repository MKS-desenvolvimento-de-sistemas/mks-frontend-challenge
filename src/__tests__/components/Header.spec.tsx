import { render } from "@testing-library/react"
import '@testing-library/jest-dom'
import Header from "../../components/Header"

jest.mock('../../hooks/store', () => {
  return {
    useAppSelector(state: any) {
      return [
        {
          amount: 3,
          price: 1200.00
        },
        {
          amount: 1,
          price: 800.00
        }
      ]
    }
  }
})

describe('Home component', () => {
  it('should be able to render correctly', () => {
    const { getByText } = render(<Header />)
    
    expect(getByText('Sistemas')).toBeInTheDocument()
  })

  it('should able to correctly show the amount of products in the cart', () => {
    const { getByTestId } = render(<Header />)
    const amountCartCounter = getByTestId('cart-size')

    expect(amountCartCounter).toHaveTextContent('4')
  })
})
