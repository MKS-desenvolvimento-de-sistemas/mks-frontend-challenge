import React from 'react'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('Testa Home da Aplicação', () => {
  test('Testa se ao clicar no botão de comprar de um AirPods 2x ele adiciona ao carrinho e soma R$2400.00', async () => {
    const {getAllByText, getByText} = render(<App/>)
    await waitFor(async()=> {
      const buttonCard = getAllByText("Comprar")
      userEvent.click(buttonCard[1]);
      userEvent.click(buttonCard[1]);
      expect(getByText('R$2400.00')).toBeInTheDocument
    })
  })
})