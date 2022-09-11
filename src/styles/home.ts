import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  max-width: calc(218px * 4 + 3 * 22px + 2 * 65px);
  min-height: 100%;
  padding: 0 65px;

  overflow-y: hidden;
  
  margin: 116px auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 22px;

  @media (max-width: 1066px) {
    max-width: calc(218px * 3 + 2 * 22px + 2 * 65px);
  }

  @media (max-width: 826px) {
    max-width: calc(218px * 2 + 1 * 22px + 2 * 65px);
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    margin: 40px auto;
    max-width: calc(250.5px * 2 + 1 * 22px + 2 * 20px);
  }

  @media (max-width: 600px) {
    padding: 0 20px;
    margin: 40px auto;
    max-width: 250.5px;
  }
`
