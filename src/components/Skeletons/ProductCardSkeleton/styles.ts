import styled from 'styled-components'

export const Container = styled.div`
  width: 218px;
  height: 285px;

  position: relative;

  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > div.content-wrapper {
    width: 100%;
    height: 100%;
    padding: 20px;

    display: flex;
    flex-direction: column;
  }
`
