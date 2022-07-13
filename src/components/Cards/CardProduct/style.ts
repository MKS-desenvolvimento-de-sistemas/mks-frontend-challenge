import styled from "styled-components";

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 18px 0 38px;

  .card_container {
    display: flex;
    flex-direction: column;
    width: 250.5px;
    height: 328px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: var(--border-radius);
    margin-bottom: 18px;
  }

  .card_container figure {
    height: 195px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card_container img {
    max-height: 160px;
  }

  .card_container figcaption {
    display: none;
  }

  .card_container-info {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
  }

  .card_container-info small {
    font-weight: 300;
    font-size: 10px;
    color: var(--grey-1);
    margin: 0 auto 13.8px;
    width: 90%;
  }

  .card_container-info button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary);
    color: white;
    border: none;
    border-radius: 0 0 8px 8px;
    padding: 10px 0;
  }

  .card_container-info button p {
    margin-left: 10px;
  }

  .card_container-info-title {
    display: flex;
    align-items: center;
    margin: 9.5px auto;
    width: 90%;
  }

  .card_container-info-title h3 {
    font-weight: 400;
    font-size: 16px;
    color: var(--grey-1);
    width: 142.7px;
  }

  .card_container-info-title div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    background-color: var(--grey-2);
    width: 73.7px;
    height: 30px;
  }

  .card_container-info-title p {
    font-weight: 700;
    font-size: 15px;
    color: white;
  }

  @media screen and (min-width: 768px) {
    width: 75%;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 100px auto 115px;

    .card_container {
      width: 217.5px;
      height: 285px;
      margin: 0 0 31px 22.4px;
    }
  }
`;
