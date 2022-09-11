import { render } from "@testing-library/react"
import '@testing-library/jest-dom'
import Footer from "../../components/Footer"

describe('Footer component', () => {
  it('should be able to render correctly', () => {
    const { getByText } = render(<Footer />)

    expect(getByText('MKS sistemas © Todos os direitos reservados')).toBeInTheDocument()
  })
})
