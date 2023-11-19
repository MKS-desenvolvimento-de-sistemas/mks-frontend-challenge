import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: 90dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GridOfProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 31px 22px;
  padding: 3rem 0;
`
