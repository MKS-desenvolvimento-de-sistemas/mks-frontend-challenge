import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('Testa Cart da Aplicação', () => {
  test('Testa se ao clicar no botão de carrinho se ele abre',() => {
    const {getByTestId, getByText} = render(<App/>)
    const buttonCart = getByTestId('button-cart')

    userEvent.click(buttonCart);
    
    expect(getByText('Carrinho de compras')).toBeInTheDocument
  })
})