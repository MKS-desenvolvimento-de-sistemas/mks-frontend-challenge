import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

describe('Testa Header da Aplicação', () => {
  test('Testa se o Header tem uma imagem com o alt "Logo MKS sistemas"',() => {
    const {getAllByAltText} = render(<App/>)
    expect(getAllByAltText('Logo MKS sistemas')).toBeInTheDocument
  })

  test('Testa se o Header tem um botão de carrinho',() => {
    const {getAllByTestId} = render(<App/>)
    expect(getAllByTestId('button-cart')).toBeInTheDocument
  })
})