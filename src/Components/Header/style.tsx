import styled from "styled-components";

export const Head = styled.header`
  height: 11.4vh;
  padding: 0 70px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  background-color: var(--color-primary);

  .cartButton {
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
  }

  .cout-cart {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 18px;
  }

  /*	height: 8.5vh; */
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  cursor: pointer;

  .first-name {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 2.5rem;

    color: var(--color-white);
    /* font-size: 2rem; */
  }

  .middle-name {
    font-family: "Montserrat";
    font-weight: 300;
    font-size: 1.25rem;

    margin: 0 0 5px 10px;

    color: var(--color-white);

    /* font-size: 1rem; */
  }
`;
