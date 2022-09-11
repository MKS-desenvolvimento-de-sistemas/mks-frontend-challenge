import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Home, { getServerSideProps } from "../../pages"

jest.mock('../../hooks/store', () => {
  return {
    useAppDispatch(callback: any) {
      return {}
    }
  }
})

const products = [
  {
    id: 1,
    photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp",
    name: 'Iphone XR',
    price: 1300.00,
    description: 'Lorem ipsum',
    createdAt: '10 de abril'
  }
]

describe('Home page', () => {
  beforeAll(() => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({
      products: products,
      count: products.length
    }),})) as jest.Mock;
  })

  it('should be able to render correctly', () => {
    render(<Home data={{ products, count: products.length }} />)

    expect(screen.getByAltText('Iphone XR')).toBeInTheDocument()
  })

  it('should be able to render all products', async () => {
    const response = await getServerSideProps()

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          data: {
            products: [
              {
                id: 1,
                photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp",
                name: 'Iphone XR',
                price: 1300.00,
                description: 'Lorem ipsum',
                createdAt: '10 de abril'
              }
            ],
            count: 1
          }
        }
      })
    )
  })
})
