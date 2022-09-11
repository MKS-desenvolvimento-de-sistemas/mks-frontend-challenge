import { render, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom'
import SidebarCart from "../../components/SidebarCart"

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
    },
    useAppDispatch(callback: any) {
      return {}
    }
  }
})

describe('SidebarCart component', () => {
  it('should be able to calculate the subtotal correctly', () => {
    const { getByTestId } = render(<SidebarCart />)
    const subtotal = getByTestId('subtotal')

    expect(subtotal).toHaveTextContent('R$ 4.400,00')
  })
})
