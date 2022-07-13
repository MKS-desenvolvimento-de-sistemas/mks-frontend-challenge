import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--color-primary);
  width: 100vw;
  height: fit-content;
  padding: 20px 0;

  .header_div-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 90%;
  }

  .header_div-logo {
    display: flex;
    align-items: baseline;
    color: white;
  }

  .header_div-logo h1 {
    font-weight: 600;
    font-size: var(--title);
  }

  .header_div-logo h3 {
    font-weight: 300;
    font-size: 1rem;
    margin-left: 10px;
  }

  @media screen and (min-width: 768px) {
    .header_div-logo h1 {
      font-size: 2.5rem;
    }

    .header_div-logo h3 {
      font-size: 1.25rem;
    }
  }
`;
