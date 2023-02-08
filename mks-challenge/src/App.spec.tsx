import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react'
import Product from './componentes/Product/Product'
import { ButtonBuy } from './componentes/Product/ProductStyled';
import Header from './componentes/header/Header';
import { MyContext } from "./ProdutosContext";



jest.spyOn(React, 'useContext').mockImplementation(() => ({
    handleShopping: jest.fn()
  }));

 
  
  
 

jest.mock('./imgs/Cart.png', () => 'MockedCartImage');
jest.mock('./imgs/shopping-bag.png', () => 'MockedCartImage');

jest.mock('./services/ProductApi', () => {
    return {
      useProductsQuery: jest.fn(() => {
        return {
          data: {
            products: [
              { id: 1, name: 'Product 1', price: 10, description: 'Description 1', photo: '' },
              { id: 2, name: 'Product 2', price: 20, description: 'Description 2', photo: '' },
            ]
          },
          isLoading: false,
        }
      })
    }
  })

  
test('sum', () => {
    const {getAllByText} = render(<Product/>)

    expect(getAllByText('R$')).toBeTruthy
})
// describe('Product Component', () => {
   

//     it('should render list items', () =>{
//         const {getByText, debug} = render(<App/>)

//         expect(getByText('test')).toBeInTheDocument

//         debug()
//     })
// })
