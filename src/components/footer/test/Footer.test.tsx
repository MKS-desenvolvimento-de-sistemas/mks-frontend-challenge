import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"
import Footer from "../Footer"

describe("<Footer />", () => {
  it("should render correctly", () => {
    render(<Footer />)

    const footerText = screen.getByText("MKS sistemas © Todos os direitos reservados")

    expect(footerText).toBeInTheDocument()
  })
})