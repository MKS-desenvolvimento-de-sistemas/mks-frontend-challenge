import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex: 2;

  position: relative;

  background: var(--primary-color-100);
  border: 0.3px solid var(--primary-color-200);
  border-radius: 4px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 33%;
    height: 95%;

    border: 0.2px solid var(--primary-color-200);
    border-top: 0px;
    border-bottom: 0px;

    font-size: 20px;
    color: var(--secondary-color-300);
  }

  small {
    display: none;
  }

  @media (min-width: 1240px) {
    max-width: 50px;
    span {
      font-size: 10px;
    }

    small {
      display: block;
      position: absolute;
      top: -11px;
      left: 0px;
      width: 100%;
      font-size: 6px;

      color: var(--secondary-color-300);
    }
  }
`;

interface IButtonProps {
  blocked?: boolean;
}

export const Button = styled.button<IButtonProps>`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: ${(props) => (props.blocked ? "not-allowed" : "pointer")};

  width: 33%;

  font-size: 24px;
  color: var(--secondary-color-300);

  @media (min-width: 1240px) {
    font-size: 15px;
  }
`;
