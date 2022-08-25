import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

describe('Testa Footer da Aplicação', () => {
  test('Testa se o footer tem o texto "MKS sistemas © Todos os direitos reservados"',() => {
    const {getByText} = render(<App/>)
    expect(getByText('MKS sistemas © Todos os direitos reservados')).toBeInTheDocument
  })
})