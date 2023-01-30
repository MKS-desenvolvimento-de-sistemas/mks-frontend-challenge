import styled from "styled-components";

export const Head = styled.header`
  height: 11.4vh;
  width: 100%;
  padding: 0 70px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  background-color: var(--color-primary);

  .cart-button {
    border-radius: 8px;
    height: 45px;
    width: 90px;
    left: 1262px;
    top: 29px;

    background: #ffffff;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;

    :hover {
      filter: brightness(0.9);
    }

    :focus-visible {
      outline: none;
    }
  }

  .count-cart {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 1.125rem;
  }

  @media (max-width: 950px) {
    position: fixed;
  }
	
  @media (max-width: 720px) {
    height: 48px;
    padding: 0 30px;

    .cart-button {
      width: 52px;
      height: 26px;
    }
    .count-cart {
      front-size: 0.75rem;
    }

    svg {
      width: 0.75rem;
    }
  }

  @media (max-width: 350px) {
    padding: 0 15px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  .first-name {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 2.5rem;

    color: var(--color-white);
  }

  .middle-name {
    font-family: "Montserrat";
    font-weight: 300;
    font-size: 1.25rem;

    margin: 0 0 5px 10px;

    color: var(--color-white);

    @media (max-width: 490px) {
      .first-name {
        font-size: 2rem;
      }
      .middle-name {
        font-size: 1rem;
      }
    }
  }
`;
