import React from 'react'
import {render, waitFor } from '@testing-library/react'
import App from '../App'

describe('Testa os Cards da Aplicação', () => {
  test('Testa se o Card tem uma imagem com o alt "imagem de um produto"', async () => {
    const {getAllByTestId} = render(<App/>)

    await waitFor(async()=> {
      expect(getAllByTestId('img-card')).toBeInTheDocument
    })
  })

  test('Testa se o Card tem o nome do produto', async () => {
    const {getAllByTestId} = render(<App/>)

    await waitFor(async()=> {
      expect(getAllByTestId('name-card')).toBeInTheDocument
    })
  })

  test('Testa se o Card tem o preço do produto', async () => {
    const {getAllByTestId} = render(<App/>)

    await waitFor(async()=> {
      expect(getAllByTestId('price-card')).toBeInTheDocument
    })
  })

  test('Testa se o Card tem a descrição do produto', async () => {
    const {getAllByTestId} = render(<App/>)

    await waitFor(async()=> {
      expect(getAllByTestId('description-card')).toBeInTheDocument
    })
  })

  test('Testa se o Card tem um button ṕara adicionar ao carrinho', async () => {
    const {getAllByTestId} = render(<App/>)

    await waitFor(async()=> {
      expect(getAllByTestId('button-card')).toBeInTheDocument
    })
  })
})